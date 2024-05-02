import Image from "next/image";
import hoddiogeg from "@/assets/hoddiogeg.jpg";
import Link from "next/link";

export const Header = () => {
    return (
        <div className="header">
            <div className="header-link">
                <Link href="/" className="header-a">Home</Link>
            </div>
            <div className="header-link">
                <Link href="./search" className="header-a">Search</Link>
            </div>
            <div className="header-link">
                <Link href="./about" className="header-a">About Us</Link>
            </div>
            <div className="header-image">
                <Image placeholder="blur" src={hoddiogeg} alt="logo" height={55} width={60} style={{borderRadius: "1rem"}}/>
            </div>
        </div>
    );
};
