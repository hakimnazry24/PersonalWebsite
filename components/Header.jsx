"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [clickedLink, setClickedLink] = useState(0);
    return (
        <>
            <nav className="flex justify-center p-4 bg-gray-900">
                <Link href='/' className={"rounded-xl p-2 hover:text-gray-400 " + (clickedLink === 0 ? "bg-gray-600" : "")} onClick={() => setClickedLink(0)}>Home</Link>
                <Link href='/portfolios' className={"rounded-xl p-2 hover:text-gray-400 " + (clickedLink === 1 ? "bg-gray-600" : "")} onClick={() => setClickedLink(1)}>Portfolios</Link>
                <Link href='/blogposts' className={"rounded-xl p-2 hover:text-gray-400 " + (clickedLink === 2 ? "bg-gray-600" : "")} onClick={() => setClickedLink(2)}>Blogposts</Link>
                <Link href='/contact' className={"rounded-xl p-2 hover:text-gray-400 " + (clickedLink === 3 ? "bg-gray-600" : "")} onClick={() => setClickedLink(3)}>Contact</Link>
                
            </nav>
        </>
    )
}