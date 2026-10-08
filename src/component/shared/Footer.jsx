import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
   return (
    <footer className="border-t border-[#25282d] py-6">
      <div className="container mx-auto flex items-center justify-between px-4">
        
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

        <p className="font-inter text-xs text-gray-500">
          © 2026 FitLog. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;