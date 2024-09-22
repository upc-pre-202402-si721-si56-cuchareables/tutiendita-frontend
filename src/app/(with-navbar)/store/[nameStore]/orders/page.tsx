import OrderCard from "@/components/OrderCard";

const OrdersPage = () => {
    return (
        <>
            <h1>Lista de ordenes:</h1>
            <section className="flex justify-between">
                <OrderCard
                    userId="Juan Perez"
                    listProduct={["product1", "product2"]}
                    totalPrice={1234.56}
                    status="En proceso"
                    date="2022-12-15"
                />
                <OrderCard
                    userId="Ana Garcia"
                    listProduct={["product1", "product2"]}
                    totalPrice={789.01}
                    status="Enviado"
                    date="2022-12-14"
                />
                <OrderCard
                    userId="Pedro Lopez"
                    listProduct={["product1", "product2"]}
                    totalPrice={456.78}
                    status="Cancelado"
                    date="2022-12-13"
                />
                <OrderCard
                    userId="Maria Martinez"
                    listProduct={["product1", "product2"]}
                    totalPrice={321.90}
                    status="Entregado"
                    date="2022-12-12"
                />
                <OrderCard
                    userId="Ana Garcia"
                    listProduct={["product1", "product2"]}
                    totalPrice={789.01}
                    status="Enviado"
                    date="2022-12-14"
                />
            </section>
        </>
    );
};

export default OrdersPage;