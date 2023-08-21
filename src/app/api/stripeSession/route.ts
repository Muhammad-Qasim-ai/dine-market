import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";


const key = process.env.STRIPE_SECRET_KEY || ''

const stripe = new Stripe(key, {
    apiVersion: "2023-08-16",
})

export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body);

    try {
        if(body.length > 0 ) {

            const session = await stripe.checkout.sessions.create({
              submit_type: 'pay',
              mode: 'payment',
              payment_method_types: ['card'],
              billing_address_collection: 'auto',
              shipping_options: [
                {shipping_rate: 'shr_1Ngt77Gn2npDXF1rPIy1BFqL'},
               {shipping_rate: 'shr_1Ngt6gGn2npDXF1rdOmGCFUU'}
            ],
            line_items: body.map((item: any)=> {
                return {
                    price_data:{
                        currency:'usd',
                        product_data: {
                            name: item.title
                        },
                        unit_amount: item.price * 100,
                    },
                    quantity: item.quantity,
                }
            }),
              success_url: `${request.headers.get('origin')}/?success=true`,
              cancel_url: `${request.headers.get('origin')}/?canceled=true`,
            });
            return NextResponse.json({session})
        } else {
            return NextResponse.json({message: 'No Products Found'})
        }
      
      
    } catch (err: any) {
        console.log(err)
      return NextResponse.json(err.message)
    }

}
