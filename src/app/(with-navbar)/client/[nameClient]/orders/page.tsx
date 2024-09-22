import YourOrderCard from "@/components/YourOrderCard";

const OrdersPage = () => {
    return (
        <>
            <h1>Lista de tus ordenes:</h1>
            <section className="flex justify-between">
                <YourOrderCard
                    userId="Juan Perez"
                    listProduct={["product1", "product2"]}
                    totalPrice={1234.56}
                    status="En proceso"
                    date="2022-12-15"
                />
                <YourOrderCard
                    userId="Ana Garcia"
                    listProduct={["product1", "product2"]}
                    totalPrice={789.01}
                    status="Enviado"
                    date="2022-12-14"
                />
                <YourOrderCard
                    userId="Pedro Lopez"
                    listProduct={["product1", "product2"]}
                    totalPrice={456.78}
                    status="Cancelado"
                    date="2022-12-13"
                />
                <YourOrderCard
                    userId="Maria Martinez"
                    listProduct={["product1", "product2"]}
                    totalPrice={321.90}
                    status="Entregado"
                    date="2022-12-12"
                />
                <YourOrderCard
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