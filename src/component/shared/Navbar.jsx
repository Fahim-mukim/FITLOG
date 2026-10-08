import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="border-b border-[#25282d]">
            <div className="container mx-auto flex h-14 items-center justify-between px-4">

                <div className="flex items-center gap-4">
                    <Image
                        src={logo}
                        alt="Logo"
                        className="h-8 w-8 rounded-full object-cover"
                    />
                    <h2 className="font-Oswald font-bold">
                        FITLOG
                    </h2>
                </div>


                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="rounded-2xl bg-[#ccff00] px-5 py-1 text-sm text-black"
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className="text-sm text-gray-500 hover:text-white"
                    >
                        My Plan
                    </Link>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-[#ccff00] px-2.5 py-1 text-black">
                        Plan
                    </span>

                    <span className="rounded-full border border-gray-600 px-2.5 py-1 text-gray-300">
                        Saved
                    </span>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;