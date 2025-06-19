import Link from 'next/link'
import { auth, signIn, signOut } from '@/auth'
import { HomeIcon } from '@heroicons/react/24/solid'


const Navbar = async () => {
    const session = await auth()

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/" aria-label="Página inicial">
                    {/* <Image src="/globe.svg" width={40} height={40} alt="Logo" className='cursor-pointer' /> */}
                    <HomeIcon className="w-10 h-10 text-blue-600 cursor-pointer" />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <form action={async () => {
                                "use server";
                                await signOut({ redirectTo: '/' })
                            }}>

                                <button type='submit'>Logout</button>
                            </form>

                            <Link href={`/user/${session.user.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server";

                            await signIn('github')

                        }}>
                            <button type="submit">
                                Login
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
