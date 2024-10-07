"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function Footer (){
const router = useRouter();

    return <>
    <h1 className="text-5xl text-lime-400"> Link </h1>
    <h1 className="text-7xl text-lime-400"> Footer </h1>
    <Link href='/'>Home</Link>
    <Link href='/about'>About</Link>
    <Link href='/navbar'>Navbar</Link>
    <Link href='/contact'>Contact</Link>

    <h1 className="text-5xl text-lime-400">Use Router</h1>


<button className="text-xl flex flex-col" onClick={() => router.push("/")} >Home</button>
<button className="text-xl flex flex-col" onClick={() => router.push("/about")} >About</button>
<button className="text-xl flex flex-col" onClick={() => router.push("/contact")} >Contact</button>
<button className="text-xl flex flex-col" onClick={() => router.push("/navbar")} >Navbar</button>

<div className="text-5xl font-bold rounded-xl text-center p-5 text-white bg-zinc-950">
    Footer
</div>
    </>
}