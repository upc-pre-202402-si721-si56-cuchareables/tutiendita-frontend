type OrderCardProps = {
    userId: string,
    listProduct: string[],
    totalPrice: number,
    status: string,
    date: string,
}

const OrderCard = (props: OrderCardProps) => {
    return (
        <section className="w-1/5 m-4 px-8 py-4 border rounded-xl">
            <section className="flex flex-col mt-4">
                <span className="text-2xl font-bold tracking-tighter">User id: {props.userId}</span>
                <p className="my-2 tracking-tighter">List products: {props.listProduct}</p>
                <span className="font-semibold tracking-tighter">Total price: ${props.totalPrice}</span>
                <span className="font-semibold tracking-tighter">Status: {props.status}</span>
                <span className="font-semibold tracking-tighter">date: {props.date}</span>
            </section>
            <button className="c-button mt-4 py-2 px-4 font-semibold">Visitar tiendas</button>
        </section>
    );
};

export default OrderCard;