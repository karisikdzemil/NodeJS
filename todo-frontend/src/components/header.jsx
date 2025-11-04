
export default function Header() {

    return(
        <header>
            <h1>ToDo</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                     <li>
                        <a href="/all-todo">All ToDo's</a>
                    </li>
                     <li>
                        <a href="/create-todo">Create ToDo</a>
                    </li>
                </ul>
            </nav>
            <div>
                <a href="/singup">SignIn</a>
                <a href="/singup">SignUp</a>
            </div>
        </header>
    )
}