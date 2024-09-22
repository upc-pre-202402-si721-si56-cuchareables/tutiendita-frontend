import CardStore from "@/components/CardStore";

const StorePage = () => {
    return (
        <>
            <h1>Lista de otras tiendas:</h1>
            <section className="flex justify-between">
                <CardStore
                    name="Apple electronics"
                    description="Tienda de productos tecnológicos apple en Lima, Perú."
                    category="Technology"
                    direction="Lima, Perú"
                    phone="+51 993014205"
                />
            </section>
        </>
    );
};

export default StorePage;