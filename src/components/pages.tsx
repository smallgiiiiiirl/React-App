import { Link, Outlet, useParams } from "react-router-dom"
import { useState } from "react"

export const NotFound = () => (
    <div>
        <h1>Not Found</h1>
    </div>
)

export const TaskById = () => {
    const { id } = useParams()

    return (
        <div>
            <h1>Task {id}</h1>
        </div>
    )
}
export const AuthPage = () => {
    return (
        <div>
            <h1>Hello! It's your own page!</h1>
        </div>
    );
}

export const Header = () => {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <ul >
            <li><Link to="/secret">Profile</Link></li>
            <li><Link to="/">Main</Link></li>
            {isAuth ? (
                <button onClick={() => setIsAuth(false)}>LogOut</button>
            ) : (
                <button onClick={() => setIsAuth(true)}>Auth</button>
            )}

        </ul>
    )
}