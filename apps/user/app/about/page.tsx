import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/ui/card';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="min-h-screen py-20">
      <section className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About SilverSpoon
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Crafting unforgettable dining experiences with a perfect blend of
            taste, tradition, and innovation.
          </p>
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <Image
            height={600}
            width={800}
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="SilverSpoon dining"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className=" font-semibold text-neutral-950/50 leading-relaxed">
              SilverSpoon was founded with one simple belief: food is not just
              about eating, it’s about creating memories. From humble
              beginnings, we’ve grown into a place where people come together to
              celebrate flavors, cultures, and togetherness.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card className="p-6 bg-[#F1F1F1] rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To deliver exceptional food experiences that bring joy and
                connect people.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 bg-[#F1F1F1] rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">
                Our Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Passion for quality, respect for tradition, and a constant drive
                for innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 bg-[#F1F1F1] rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">
                Our Promise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Every dish we serve is crafted with care, freshness, and the
                SilverSpoon touch.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
