type CardStoreProps = {
    name: string,
    description: string,
    category: string,
    direction: string,
    phone: string
}

const CardStore = (props: CardStoreProps) => {
    return (
        <section className="w-1/5 m-4 px-8 py-4 border rounded-xl">
            <section className="flex flex-col mt-4">
                <span className="text-2xl font-bold tracking-tighter">{props.name}</span>
                <p className="my-2 tracking-tighter">{props.description}</p>
                <span className="font-semibold tracking-tighter">Categoria: {props.category}</span>
                <span className="font-semibold tracking-tighter">Locación: {props.direction}</span>
                <span className="font-semibold tracking-tighter">Número de la empresa: {props.phone}</span>
            </section>
            <button className="c-button mt-4 py-2 px-4 font-semibold">Visitar tiendas</button>
        </section>
    );
};

export default CardStore;