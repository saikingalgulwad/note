import mongoose from "mongoose";
import connectMongoDB from "@/app/libs/connectdb";
import Notes from "@/app/models/note";
import { NextResponse } from "next/server";

export async function GET(req) {
    const ides = req.nextUrl.searchParams.get("search");
    if(ides){
 await connectMongoDB();
   const data = await Notes.findById(ides);
    return NextResponse.json(data);
    }else{
       await connectMongoDB();
   const data = await Notes.find();
    return NextResponse.json(data);
    }
   
}
export async function POST(req) {
    const{title,note}= await req.json();

  await  connectMongoDB();
  const res=  await Notes.create({title:title,note:note});
  return NextResponse.json({Message:"create data"},{status:201});

}
export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Notes.findByIdAndDelete(id);
  return NextResponse.json({message:"topic deleted"},{status:200});
}