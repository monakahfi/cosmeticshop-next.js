
import { NextRequest, NextResponse } from "next/server";


export function middleware ( request:NextRequest  ){
    
    const token = request.cookies.get("token")?.value //میتونی دسترسی داشته باشی 

    if(token){
       return NextResponse.next()
    }

    const url = new URL(request.url) // اگر توکنی وجود نداشت ریدایرکت میکنه به لاگین 
    url.pathname = "/login"

    return NextResponse.redirect(url.toString())
}

 export const config ={
    matcher: ["/dashboard/:path*"]
 } 