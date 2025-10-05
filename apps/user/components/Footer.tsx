import Link from 'next/link';
import { CiForkAndKnife } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="bg-[#FFF9EA] container px-4 mx-auto flex flex-col items-center justify-center text-center border-t">
      <div className="grid grid-cols-1 md:grid-cols-4 px-4 py-10 w-full gap-4">
        <div className="flex items-center justify-center gap-4 flex-col">
          <h1 className="flex items-center text-2xl md:text-3xl font-bold">
            SilverSpon{' '}
            <span>
              <CiForkAndKnife className="text-orange-500 font-bold text-2xl" />
            </span>
          </h1>
          <p className=" font-semibold text-neutral-950/50">
            Jalan Semangka Raya, Telaga Murni{' '}
          </p>
          <p className="text-2xl flex gap-3 mb-2">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </p>
        </div>

        <div className="flex flex-col  ">
          <h1 className="font-bold text-2xl">Company</h1>

          <Link href="/about" className="font-semibold text-neutral-950/50 ">
            About us
          </Link>
          <Link href="/career" className=" font-semibold text-neutral-950/50 ">
            Career
          </Link>
          <Link
            href="#how-it-works"
            className="font-semibold text-neutral-950/50  "
          >
            How it Work
          </Link>
        </div>
        <div className="flex flex-col  ">
          <h1 className="font-bold text-2xl">Policy</h1>

          <Link href="/faq" className="font-semibold text-neutral-950/50 ">
            FAQ
          </Link>
          <Link href="/privacy" className=" font-semibold text-neutral-950/50 ">
            Privacy
          </Link>
          <Link
            href="/shipping"
            className="font-semibold text-neutral-950/50  "
          >
            Shipping
          </Link>
        </div>
        <div className="flex flex-col  ">
          <h1 className="font-bold text-2xl">Get In Touch</h1>

          <Link href="/#" className="font-semibold text-neutral-950/50 ">
            +91123456789
          </Link>
          <p className=" font-semibold text-neutral-950/50 ">
            silverspoon@gmail.com
          </p>
        </div>
      </div>

      <p className="text-md font-semibold text-neutral-900/50 m-4">
        {new Date().getFullYear()} Let&apos;sFood. ALL RIGHT RESERVED
      </p>
    </section>
  );
};

export default Footer;
