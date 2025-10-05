import Image from 'next/image';

export default function Offer() {
  return (
    <section className="container px-4 mx-auto max-w-7xl flex flex-col items-center justify-center text-center">
      <div className="relative rounded-md h-80 flex items-center justify-center w-full mb-20 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hamburger.jpg"
          alt="discount"
          fill
          className="object-cover"
        />

        {/* Black filter overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <p className="text-white font-bold text-2xl">
            Join our membership and get <br /> discount up to 50%
          </p>
        </div>
      </div>
    </section>
  );
}
