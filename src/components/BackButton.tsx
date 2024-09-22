import Link from "next/link";
import Image from "next/image";
import arrowLeftIcon from "@/assets/icons/arrow-left-2.svg";

const BackButton = () => {
    return (
        <Link href="/" className="flex">
            <Image src={arrowLeftIcon} alt="arrow icon" className="mr-2" />
            <span>Volver al home</span>
        </Link>
    );
};

export default BackButton;