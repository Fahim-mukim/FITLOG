import Image from "next/image";
import Link from "next/link";
import NavbarCounters from "./NavbarCounters";
import logo from "@/assets/logo.png";

const Navbar = () => {
    return (
        <nav className="border-b border-[#25282d] bg-[#0b0c0e]">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2"
                >
                    <Image
                        src={logo}
                        alt="FitLog Logo"
                        className="h-8 w-8 rounded-full object-cover"
                    />

                    <h2 className="font-oswald text-lg font-bold tracking-wide">
                        FITLOG
                    </h2>
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/"
                        className="rounded-full px-4 py-2 font-inter text-sm text-gray-400 transition hover:bg-[#151817] hover:text-white"
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className="rounded-full px-4 py-2 font-inter text-sm text-gray-400 transition hover:bg-[#151817] hover:text-white"
                    >
                        My Plan
                    </Link>
                </div>

                {/* Client Component */}
                <NavbarCounters />

            </div>
        </nav>
    );
};

export default Navbar;