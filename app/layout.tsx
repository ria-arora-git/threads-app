import { ClerkProvider } from "@clerk/nextjs"
 
import { Inter } from "next/font/google"
// import "../globals.css";

export const metadata ={
    tittle: 'Threads',
    description:'A Next.js 13 MEta Threads Application'
}  

// const inter = Inter ({subsets:['latin']})


// export default function RootLayout({children} : {children : React.ReactNode}){
//     return  ( <ClerkProvider>
//         <html lang="en">
//             <body className= {`${inter.className}  bg-black`}>
//               {children}
//             </body>
//         </html>
//     </ClerkProvider>)
// }