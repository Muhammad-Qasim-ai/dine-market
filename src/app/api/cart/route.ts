import { NextRequest, NextResponse } from "next/server"
import {db, cartTable} from '@/lib/drizzle'
import { v4 as uuid } from 'uuid'
import { cookies } from "next/dist/client/components/headers"

export const OPTIONS = {
    // Set the allowed origin to 'http://localhost:3000' or your frontend origin
    cors: {
      origin: "https://dine-market-api-qasimrafiq2019-gmailcom.vercel.app/api/cart",
    },
  };


export const  GET = async (request: NextRequest) => {
    const res = await db.select().from(cartTable)
    // console.log(res)

    
    const cookieStore = cookies()
    const user_id:any = cookieStore.getAll()
    // console.log(user_id);   
    
    

    const filteredOrders = res.filter((order: any) => order.user_id === user_id)
    // console.log(filteredOrders)



    try {
        return NextResponse.json({ res })
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'something went wrong'})
    }
}
export const  POST = async (request: NextRequest) => {
    const req = await request.json()

    const uid = uuid()
    const setCookies = cookies()
    
    const  user_id = cookies().get('user_id')
    console.log(user_id);
    

    if(!user_id){
        setCookies.set('user_id', uid)
    }

    try {
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity: 1,
            user_id: cookies().get('user_id')?.value  as string
        }).returning();
        return NextResponse.json({ res })
    } catch (error) {
        
    }
}