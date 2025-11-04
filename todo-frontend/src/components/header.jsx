
export default function Header() {

    return(
        <header className="w-full h-[12vh] bg-blue-700 flex flex-row items-center justify-between px-18">
            <h1 className="text-white font-bold text-3xl">ToDo</h1>
            <nav>
                <ul className="flex flex-row items-center gap-16 text-white font-bold">
                    <li>
                        <a href="/">Home</a>
                    </li>
                     <li>
                        <a href="/all-todos">All ToDo's</a>
                    </li>
                     <li>
                        <a href="/create-todo">Create ToDo</a>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center gap-16">
                <a href="/login">Login</a>
                <a href="/singup">Sign Up</a>
            </div>
        </header>
    )
}