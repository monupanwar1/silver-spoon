import { Card, CardDescription, CardTitle } from '@repo/ui/components/ui/card';
import Image from 'next/image';

type Service = {
  heading: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    heading: 'Easy To Order',
    description: 'You only order through the app',
    image: '/order-delivery.png',
  },
  {
    heading: 'Fastest Delivery',
    description: 'Delivery will be on time',
    image: '/delivery-bike.png',
  },
  {
    heading: 'Best Quality',
    description: 'The best Quality of food for you',
    image: '/food-delivery.png',
  },
];

export default function HowItWork() {
  return (
    <section
      id="how-it-works"
      className="container px-4 flex flex-col items-center justify-center min-h-screen"
    >
      <h4 className="text-xl font-semibold text-orange-400 ">How it works</h4>
      <h1 className="font-bold text-xl md:text-2xl">What we serve</h1>
      <p className="text-center font-semibold text-muted-foreground">
        Product Quality Is Our Priority,And Always Guarntees <br />
        Untill Is In Your Hand
      </p>
      <div className="grid md:grid-cols-3 gap-6 ">
        {services.map((service) => (
          <Card
            key={service.heading}
            className="h-80 w-80 mt-10 bg-transparent border-0 flex flex-col gap-4 items-center justify-center shadow-none"
          >
            <Image
              src={service.image}
              height={40}
              width={200}
              alt={service.heading}
            />
            <CardTitle>{service.heading}</CardTitle>
            <CardDescription className="font-semibold text-neutral-900/70">
              {service.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}
