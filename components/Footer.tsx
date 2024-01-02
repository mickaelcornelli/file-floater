import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="text-black-100  mt-5 items-center">
    <div className="flex justify-between sm:px-16 px-6 py-10">
      {footerLinks.map((item) => (
        <div key={item.title}>
          <h3 className="font-bold pb-5">{item.title}</h3>
          <div className="flex flex-col gap-5">
            {item.links.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className="text-gray-500 hover:scale-110 transition"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={90}
            height={90}
            className="object-contain rounded-sm"
          />
        </Link>
        <p className="text-base text-gray-700">
          File Floater 2023 <br />
          Tous droits réservés &copy;
        </p>
      </div>

      <div className="footer__copyrights-link flex flex-col gap-2">
        <Link href="/" className="text-gray-500 hover:scale-110 transition">
          Politique de confidentialité
        </Link>
        <Link href="/" className="text-gray-500 hover:scale-110 transition">
          Conditions générales
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
