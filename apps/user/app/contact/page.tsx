"use client"
import { Button } from "@repo/ui/components/ui/button";
import H1 from "@repo/ui/components/ui/H1";
import P from "@repo/ui/components/ui/P";

export default function Page() {
  return (
    <main className="min-h-screen py-20">
      <section className="container mx-auto px-4 min-h-screen">
        {/* Header */}
        <div className="text-center mb-12">
          <H1>Contact Us</H1>
          <P>
            Have questions, feedback, or just want to say hello? We'd love to
            hear from you!
          </P>
        </div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10 px-4 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Get in Touch
              </h2>
              <P>
                Reach out to us through the form or using the contact details
                below.
              </P>
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
                📧 <span className="font-medium">Email:</span>{" "}
                contact@silverspoon.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="p-6 rounded-2xl shadow-lg border-2 space-y-4">
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
            <Button className="hidden md:flex w-full items-center px-6 py-2 bg-[#FF6B35] hover:bg-[#e85b29] text-white text-md rounded-md shadow-[2px_2px_0px_#2D1E2F] hover:shadow-[3px_3px_0px_#2D1E2F] transition-all duration-300">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
