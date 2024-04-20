import Image from "next/image";
import hoddiogeg from "@/assets/hoddiogeg.jpg";

export const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header-link">
                <a href="/">Home</a>
            </div>
            <div className="header-link">
                <a href="./search">Search</a>
            </div>
            <div className="header-link">
                <a href="./about">About Us</a>
            </div>
            <div className="header-image">
                <Image priority src={hoddiogeg} alt="logo" height={55} width={60} style={{borderRadius: "1rem"}}/>
            </div>
        </div>
    );
};
