import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";

export const config = {
    pages:{
        signIn:"/sign-in",
        error: "/sign-in",
    },
    session:{
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    adapter: PrismaAdapter(prisma),
    providers:[
        CredentialsProvider({
            credentials:{
                email:{type:'email'},
                password:{type:'password'},
            },
            async authorize(credentials){
                if(credentials == null) return null;

                const findUser = await prisma.user.findUnique({
                    where:{
                        email: credentials.email as string,
                    }
                })

                 console.log("DB user:", findUser);

               if(findUser && findUser.password){
                    const isPasswordValid = await bcrypt.compare(credentials.password as string, findUser.password);

                    if(isPasswordValid){
                        return {
                            id: findUser.id,
                            name: findUser.name,
                            email: findUser.email,
                            role: findUser.role,
                            profilePictureUrl: findUser.profilePictureUrl,
                        };
                    }
               }
               return null;
            }
        })
    ],
    callbacks:{
        async session({session, user, trigger, token}:any){

            session.user.id = token.sub;
            session.user.role = token.role;
            session.user.name = token.name;
            session.user.profilePictureUrl = token.profilePictureUrl;

            // console.log(token);
            console.log("Session:", session);
           
            if(trigger === "update"){
               session.user = user.name; 
            }


            return session;
        },
        async jwt({token, user,trigger,session}:any){
            if(user){
                token.role = user.role;
                token.profilePictureUrl = user.profilePictureUrl;
            }
            return token;
        }
    }
} satisfies NextAuthConfig;

export const {handlers, signIn, signOut, auth} = NextAuth(config);