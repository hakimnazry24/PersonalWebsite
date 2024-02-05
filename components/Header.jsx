import Link from "next/link"

export default function Header() {
    return (
        <>
            <nav className="flex justify-center p-4 bg-gray-900">
                <Link href='/' className="rounded-xl p-2 hover:text-gray-400 active:bg-gray-600">Home</Link>
                <Link href='/portfolios' className="rounded-xl p-2 hover:text-gray-400 active:bg-gray-600">Portfolios</Link>
                <Link href='/blogposts' className="rounded-xl p-2 hover:text-gray-400 active:bg-gray-600">Blogposts</Link>
                <Link href='/contact' className="rounded-xl p-2 hover:text-gray-400 active:bg-gray-600">Contact</Link>
                
            </nav>
        </>
    )
}