import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/dist/client/components/headers";
import { and, eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
  const res = await db.select().from(cartTable);

  const cookieStore = cookies();
  const user_id: any = cookieStore.getAll();

  const filteredOrders = res.filter((order: any) => order.user_id === user_id);

  try {
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "something went wrong" });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();

  const uid = uuid();
  const setCookies = cookies();

  const user_id = cookies().get("user_id");
  console.log(user_id);

  if (!user_id) {
    setCookies.set("user_id", uid);
  }

  try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: req.quantity,
        user_id: cookies().get("user_id")?.value as string,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {}
};
export const PUT = async (request: NextRequest) => {
  const req = await request.json();
  const user_id = cookies().get("user_id")?.value;

  try {
    const res = await db
      .update(cartTable)
      .set({
        quantity: req.quantity + 1,
      })
      .where(
        eq(cartTable.product_id, `${req.product_id}`) ||
          eq(cartTable.user_id, `${user_id}`)
      );

    return NextResponse.json({ res });
  } catch (error) {}
};

export const DELETE = async (request: NextRequest) => {
  const req = await request.json();
  try {
    const res = await db
      .delete(cartTable)
      .where(
        and(
          eq(cartTable.product_id, req.product_id),
          eq(cartTable.user_id, req.user_id)
        )
      );

    return NextResponse.json({ res });
  } catch (error) {}
};
