const Login = () => {
    return (
        <section className="flex items-center w-1/4 m-auto h-screen">
            <section className="w-full">
                <h1 className="text-5xl text-center font-bold tracking-tighter">LOGIN</h1>
                <section className="flex flex-col mx-auto mt-4 px-20">
                    <input type="text" placeholder="Ingresar usuario" className="c-input__input" />
                    <input type="password" placeholder="Ingresar contraseña" className="c-input__input mt-2" />
                    <button className="c-button mt-2 font-semibold">Ingresar</button>
                </section>
            </section>
        </section>
    );
}

export default Login;