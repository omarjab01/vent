import prisma from "@/prisma/prisma"

export const GET = async (req: Request) => {

    const users = await prisma.user.findMany({})

    return new Response(JSON.stringify(users))
}