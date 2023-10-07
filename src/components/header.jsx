import Link from 'next/link'

export default function Header(){
    return(
        <header className="bg-base-300 text-base-content">
            <nav className='navbar mb-2 shadow-lg flex justify-center'>
                <Link href="/" className='text-2xl font-light'>
                    Prompt <span className="font-bold">Manager</span><sup>&reg;</sup>
                </Link>
            </nav>
        </header>
    )
}