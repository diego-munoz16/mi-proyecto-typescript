import { Link } from 'react-router-dom'

export default function LoginView() {
    return (
        <>
            <nav>
                <Link to="/auth/login">
                ¿No tienes cuenta? Crea una aquí
                </Link>
            </nav>
        </>
    )
}