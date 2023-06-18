import prisma from "@/prisma/prisma"
import { NextResponse } from "next/server"
import * as bcrypt from 'bcrypt'

interface newUser {
    name: string,
    email: string,
    password: string,
}


export async function POST(req: Request){
    const body:newUser = await req.json();
    const user = await userExists(body.email)
    if(!user){
        const newUser = await createUser(body)
        if(newUser) return new Response(JSON.stringify({res: 'Account Successfuly Registered'}))
        else return new Response(JSON.stringify({res: 'Error'}))
    }else return new Response(JSON.stringify({res: 'Error'}))
}



const userExists = async (email: string) => {
    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })
    return user;
}


const createUser = async (obj: newUser) => {
    const user = await prisma.user.create({
        data: {
            name: obj.name,
            email: obj.email,
            password: await bcrypt.hash(obj.password, 10)
        }
    })
    return user;
}