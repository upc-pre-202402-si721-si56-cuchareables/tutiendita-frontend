import ProductStoreCard from "@/components/ProductStoreCard";

const HomePage = () => {
    return (
        <>
            <h1>Lista de productos ofrecidos por esta tienda:</h1>
            <section className="flex justify-between">
                <ProductStoreCard
                    title="Celular Apple Iphone 13 128GB Negro"
                    description="Celular Apple Iphone 13 128GB 6.6 4GB 256GB 50MP+2MP."
                    image="https://realplaza.vtexassets.com/arquivos/ids/35914780-1200-auto?v=638621132489870000&width=1200&height=auto&aspect=true"
                    price={260.25}
                    stock={250}
                />
                <ProductStoreCard
                    title="Celular Apple Iphone 13 128GB Rosado"
                    description="Celular Apple Iphone 13 128GB 6.6 4GB 256GB 50MP+2MP."
                    image="https://realplaza.vtexassets.com/arquivos/ids/34538794-1200-auto?v=638337834902800000&width=1200&height=auto&aspect=true"
                    price={260.25}
                    stock={250}
                />
                <ProductStoreCard
                    title="Celular Apple Iphone 13 128GB Blanco"
                    description="Celular Apple Iphone 13 128GB 6.6 4GB 256GB 50MP+2MP."
                    image="https://realplaza.vtexassets.com/arquivos/ids/35319444-1200-auto?v=638471544249970000&width=1200&height=auto&aspect=true"
                    price={260.25}
                    stock={250}
                />
                <ProductStoreCard
                    title="Celular Apple Iphone 13 128GB Green"
                    description="Celular Apple Iphone 13 128GB 6.6 4GB 256GB 50MP+2MP."
                    image="https://realplaza.vtexassets.com/arquivos/ids/34782753-1200-auto?v=638380946843630000&width=1200&height=auto&aspect=true"
                    price={260.25}
                    stock={250}
                />
                <ProductStoreCard
                    title="Celular Apple Iphone 13 128GB Skyblue"
                    description="Celular Apple Iphone 13 128GB 6.6 4GB 256GB 50MP+2MP."
                    image="https://realplaza.vtexassets.com/arquivos/ids/34816450-1200-auto?v=638387988643270000&width=1200&height=auto&aspect=true"
                    price={260.25}
                    stock={250}
                />
            </section>
        </>
    );
};

export default HomePage;