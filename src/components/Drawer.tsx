"use client"

import Image from "next/image";
import { Drawer, DrawerBody, DrawerHeader, DrawerFooter, DrawerOverlay, DrawerContent, DrawerCloseButton, Divider, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import Link from "next/link";

import menuIcon from "@/assets/icons/menu-1.svg";

type DrawerDashboardProps = {
    typeUser: string,
    name: string
}

const DrawerDashborad = (props: DrawerDashboardProps) => {
    const { isOpen, onToggle } = useDisclosure()
    const btnRef = useRef<HTMLImageElement | null>(null);

    return (
        <>
            <div className="flex items-end">
                <Image
                    src={menuIcon}
                    alt="Menu"
                    className="ml-16 mt-12 mb-1"
                    ref={btnRef}
                    onClick={onToggle}
                />
                <span className="ml-4 text-2xl font-bold tracking-tighter">​​🧺​​ TuTiendita - {props.typeUser}: {decodeURI(props.name)}</span>
            </div>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onToggle}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <h2 className="mt-8 text-xl text-center font-bold tracking-tighter">📋​ Panel de opciones</h2>
                    </DrawerHeader>
                    <DrawerBody>
                        { props.typeUser === "store"
                            ? (
                                <ul className="flex flex-col">
                                    <Divider />
                                    <li className="my-4">
                                        <Link href={`/${props.typeUser}/${props.name}/home`} onClick={onToggle}>Lista de otras productos</Link>
                                    </li>
                                    <Divider />
                                    <li className="my-4">
                                        <Link href={`/${props.typeUser}/${props.name}/stores`}  onClick={onToggle}>Lista de otras tiendas</Link>
                                    </li>
                                    <Divider />
                                    <li className="my-4">
                                        <Link href={`/${props.typeUser}/${props.name}/orders`}  onClick={onToggle}>Lista de ordenes</Link>
                                    </li>
                                    <Divider />
                                </ul>
                            )
                            : (
                                <ul className="flex flex-col">
                                    <Divider />
                                    <li className="my-4">
                                        <Link href={`/${props.typeUser}/${props.name}/home`}  onClick={onToggle}>Lista de otras productos</Link>
                                    </li>
                                    <Divider />
                                    <li className="my-4">
                                        <Link href={`/${props.typeUser}/${props.name}/stores`}  onClick={onToggle}>Lista de otras tiendas</Link>
                                    </li>
                                    <Divider />
                                    <li className="my-4">
                                        <Link href={`/${props.typeUser}/${props.name}/orders`}  onClick={onToggle}>Lista de ordenes</Link>
                                    </li>
                                    <Divider />
                                </ul>
                            )
                        }
                    </DrawerBody>
                    <DrawerFooter>
                        <section className="flex justify-self-start w-full my-6">
                            <Link href="/login" onClick={onToggle}>​💨 Cerrar sesión</Link>
                        </section>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default DrawerDashborad;