type ProductClientCardProps = {
    title: string,
    nameStore: string,
    description: string,
    image: string,
    price: number,
    stock: number,
}

const ProductClientCard = (props: ProductClientCardProps) => {
    return (
        <section className="w-1/5 m-4 px-8 py-4 border rounded-xl">
            <section className="w-full h-48 bg-gray-200 rounded-md overflow-hidden">
                <img src={props.image} />
            </section>
            <section className="flex flex-col mt-4">
                <span className="text-2xl font-bold tracking-tighter">{props.title}</span>
                <span className="u-blue-text text-2xl font-bold tracking-tighter">Tienda: {props.nameStore}</span>
                <p className="my-2 tracking-tighter">{props.description}</p>
                <span className="font-semibold tracking-tighter">Precio: ${props.price}</span>
                <span className="font-semibold tracking-tighter">Stock: {props.stock}</span>
            </section>
            <button className="c-button mt-4 py-2 px-4 font-semibold">Ver más info</button>
        </section>
    );
};

export default ProductClientCard;