import Link from "next/link";

import BackButton from "@/components/BackButton";

const Login = () => {
    return (
        <section className="flex items-center w-1/4 h-screen m-auto px-16">
            <section className="w-full">
                <BackButton />
                <h1 className="mt-8 text-4xl text-center font-extrabold tracking-tighter">INICIAR SESIÓN</h1>
                <section className="flex flex-col mx-auto my-4">
                    <input type="text" placeholder="Ingresar usuario" className="c-input__input" />
                    <input type="password" placeholder="Ingresar contraseña" className="c-input__input mt-2" />
                    <button className="c-button mt-2 py-4 font-semibold">Ingresar</button>
                </section>
                <span>¿No tienes cuenta? <Link href="/sign-up"><u>Crear cuenta</u></Link> </span>
            </section>
        </section>
    );
}

export default Login;