"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function Navbar (){
const router = useRouter();

    return  <>
    <div className="bg-slate-300 p-5 flex gap-5">
        <h1><Link href="/">Home</Link></h1>
        <h1><Link href="/contact">Contact</Link></h1>
        <h1><Link href="/about">About</Link></h1>
        <h1><Link href="/navbar">Navbar</Link></h1>
        <h1><Link href="/footer">Footer</Link></h1>
    </div>
    <h1 className="text-5xl text-lime-400"> Links </h1>
    <h1 className="text-7xl text-lime-400"> Navbar </h1>
    <Link href='/'>Home</Link>
    <Link href='/about'>About</Link>
    <Link href='/footer'>Footer</Link>
    <Link href='/contact'>Contact</Link>

    <h1 className="text-5xl text-lime-400">Use Router</h1>


<button className="text-xl flex flex-col" onClick={() => router.push("/")} >Home</button>
<button className="text-xl flex flex-col" onClick={() => router.push("/about")} >About</button>
<button className="text-xl flex flex-col" onClick={() => router.push("/contact")} >Contact</button>
<button className="text-xl flex flex-col" onClick={() => router.push("/footer")} >Footer</button>
    </>
}
