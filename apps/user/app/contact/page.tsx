import { Button } from "@repo/ui/components/ui/button";

export default function Page() {
  return (
    <main className="min-h-screen py-20">
      <section className="container mx-auto px-4 min-h-screen">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p  className="font-semibold text-neutral-900/70 max-w-2xl mx-auto">
            Have questions, feedback, or just want to say hello? We apos;d love to
            hear from you!
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10 px-4">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                Reach out to us through the form or using the contact details
                below.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                📍 <span className="font-medium">Address:</span> 123 SilverSpoon
                Street, Food City
              </p>
              <p>
                📞 <span className="font-medium">Phone:</span> +91 98765 43210
              </p>
              <p>
                📧 <span className="font-medium">Email:</span>{' '}
                contact@silverspoon.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-6 rounded-2xl shadow-md space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
               
                placeholder="Write your message..."
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
