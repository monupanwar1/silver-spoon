import { Tabs, TabsContent, TabsList, TabsTrigger } from '@repo/ui/components/ui/tabs';
import Image from 'next/image';

export default function Page() {
  const menuItems = [
    {
      category: 'Starters',
      items: [
        {
          name: 'Crispy Spring Rolls',
          price: '₹150',
          image:
            'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // placeholder
        },
        {
          name: 'Paneer Tikka',
          price: '₹220',
          image:
            'https://images.unsplash.com/photo-1608133169275-42e5ecc6e345?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // placeholder
        },
        {
          name: 'Veg Soup',
          price: '₹120',
          image:
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // placeholder
        },
      ],
    },
    {
      category: 'Main Course',
      items: [
        {
          name: 'Butter Paneer Masala',
          price: '₹280',
          image:
            'https://images.unsplash.com/photo-1599102056266-24186bb97b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // placeholder
        },
        {
          name: 'Dal Makhani',
          price: '₹200',
          image:
            'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // placeholder
        },
        {
          name: 'Veg Biryani',
          price: '₹250',
          image:
            'https://images.unsplash.com/photo-1546069901-eacef0df6022?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // placeholder
        },
      ],
    },
    {
      category: 'Desserts',
      items: [
        {
          name: 'Gulab Jamun',
          price: '₹100',
          image:
            'https://images.unsplash.com/photo-1613365145745-c311e729c0da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // placeholder
        },
        {
          name: 'Rasgulla',
          price: '₹120',
          image:
            'https://images.unsplash.com/photo-1605475122177-790f9a07d722?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // placeholder
        },
        {
          name: 'Chocolate Brownie',
          price: '₹180',
          image:
            'https://images.unsplash.com/photo-1600185360942-8d1b9883a374?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // placeholder
        },
      ],
    },
    {
      category: 'Beverages',
      items: [
        {
          name: 'Cold Coffee',
          price: '₹150',
          image:
            'https://images.unsplash.com/photo-1583433367791-cf9f2914b1ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // placeholder
        },
        {
          name: 'Fresh Lime Soda',
          price: '₹90',
          image:
            'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // placeholder
        },
        {
          name: 'Masala Chai',
          price: '₹60',
          image:
            'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // placeholder
        },
      ],
    },
  ];
  
  

  return (
    <main className=" flex flex-col py-20 items-center justify-center">
      {/* Header with Logo */}
      <header className="flex justify-center items-center mb-12 space-x-3">
        {/* <Image
          src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
          alt="Logo"
          width={50}
          height={50}
        /> */}
        <h1 className="text-3xl font-bold text-gray-800">SilverSpoon</h1>
      </header>

      {/* Tabs for Categories */}
      <section className="container mx-auto px-4 min-h-screen  ">
        <Tabs className='flex items-center justify-center'>
          <TabsList className="flex justify-center mb-8 flex-wrap gap-2">
            {menuItems.map((section, index) => (
              <TabsTrigger key={index} value={section.category}>
                {section.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuItems.map((section, index) => (
            <TabsContent key={index} value={section.category}>
              <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl shadow-md overflow-hidden"
                    >
                      <Image
                        width={600}
                        height={400}
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4 flex justify-between items-center">
                        <span className="text-gray-700 font-medium">
                          {item.name}
                        </span>
                        <span className="text-gray-900 font-semibold">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </main>
  );
}
