import Image from 'next/image';
import { HeartIcon } from 'lucide-react';
import { Button } from '@repo/ui/components/ui/button';
import { Card, CardDescription, CardFooter, CardTitle } from '@repo/ui/components/ui/card';

type Dish = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const dishes: Dish[] = [
  {
    name: 'Classic Beef Burger',
    description:
      'Grilled veg patty with cheddar,tomato, and special sauce on a toasted bun.',
    price: '$8.99',
    image: '/burger.jpg',
  },
  {
    name: 'Crispy French Fries',
    description:
      'Golden and crispy potato fries served with a side of ketchup.',
    price: '$3.49',
    image: '/french-fries.jpg',
  },
  {
    name: 'Margherita Pizza',
    description:
      'Stone-baked pizza topped with fresh mozzarella a drizzle of olive oil.',
    price: '$11.50',
    image: '/pizza.jpg',
  },
];

export default function MenuSection() {
  return (
    <section className=" flex flex-col items-center justify-center min-h-screen text-center">
      <h4 className="text-xl font-semibold text-orange-400 ">our Menu</h4>
      <h1 className="font-bold text-xl md:text-2xl">Our Popular Menu</h1>
      <p className="text-center font-semibold text-muted-foreground">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
        perferendis!
      </p>
      <div className="grid md:grid-cols-3 gap-6 ">
        {dishes.map((dish) => (
          <Card
            key={dish.name}
            className="h-[450px] w-80 bg-[#F1F1F1] mt-10 border-none flex flex-col px-4"
          >
            <div className="relative h-60 w-full rounded-md p-2">
              <Image
                src={dish.image}
                alt={dish.name}
                height={600}
                width={1200}
              
                className="rounded-2xl  object-cover h-full "
              />
            </div>

            <div className="p-4 flex flex-col items-center text-center gap-2">
              <CardTitle>{dish.name}</CardTitle>
              <CardDescription className="font-semibold w-80 text-neutral-900/70">
                {dish.description}
              </CardDescription>
            </div>
            <div className="w-full h-1 border-b"></div>
            <CardFooter className="flex justify-between py-4">
              <p>{dish.price}</p>
              <HeartIcon />
            </CardFooter>
          </Card>
        ))}
      </div>
      <Button className="rounded-md mb-10 mt-10 bg-orange-400 ">More Menu</Button>
    </section>
  );
}
