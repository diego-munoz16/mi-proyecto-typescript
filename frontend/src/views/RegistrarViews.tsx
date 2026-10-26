import { Link } from 'react-router-dom'
export default function RegisterView() {
    return (
        <>
            <div>RegisterViews</div>

            <nav>
                <Link to="/auth/register">
                ¿No tienes cuenta? Crea una aquí
                </Link>
            </nav>

        </>
    )
}