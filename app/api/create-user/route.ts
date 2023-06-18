import prisma from "@/prisma/prisma"
import { NextResponse } from "next/server"
import * as bcrypt from 'bcrypt'

interface newUser {
    name: string,
    email: string,
    password: string,
}


export async function POST(req: Request){
    /* const {name, email, password} = await req.json()

    const user = await userExists(email)
    if(!user){
        const newUser = await createUser({name, email, password})
        return new Response(JSON.stringify(newUser))
    }
    return new Response(JSON.stringify(user)) */

    const body:newUser = await req.json();

    const user = await prisma.user.findUnique({
        where: {
            email : body.email
        }
    })

    /* if(!user){
        const newUser = await prisma.user.create({
            data: {
                email: body.email,
                name: body.name,
                password: await bcrypt.hash(body.password, 10)
            }
        })

        if(newUser) return new Response(JSON.stringify(newUser))
        else return new Response(JSON.stringify(null))
    }else return new Response(JSON.stringify({
        error: 'Account already registered'
    })) */
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
            password: await bcrypt.hash(obj.password, 10),
            profilePicture: 'finto'
        }
    })

    return user;
}