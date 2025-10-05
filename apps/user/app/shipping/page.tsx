export default function Page() {
  return (
    <main className="min-h-screen py-20">
      <section className="container px-4 max-w-3xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-8">Shipping Policy</h1>

        <p className="mb-6">
          At <strong>SilverSpoon</strong>, we strive to deliver your orders
          quickly and efficiently. Please read our shipping policy below to
          understand how we process and deliver your purchases.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Shipping Coverage
        </h2>
        <p className="mb-6">
          We currently ship across major cities in India. If your location is
          not serviceable, our team will notify you before processing your
          order.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Processing Time</h2>
        <p className="mb-6">
          Orders are typically processed within{' '}
          <strong>1-2 business days</strong>. During sales or holidays,
          processing may take slightly longer. You will receive an email
          confirmation once your order is shipped.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Delivery Time</h2>
        <p className="mb-6">
          Standard delivery usually takes <strong>3-7 business days</strong>,
          depending on your location. Remote areas may take additional time. We
          will provide tracking details once your order has been dispatched.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Shipping Charges
        </h2>
        <p className="mb-6">
          Shipping charges are calculated at checkout based on your delivery
          location and order value. Orders above a certain value may qualify for
          free shipping (if applicable).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Order Tracking</h2>
        <p className="mb-6">
          Once your order has been shipped, we will share a tracking number via
          email or SMS. You can use this to track your order in real time.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Delays</h2>
        <p className="mb-6">
          While we aim to deliver orders within the estimated time frame,
          unforeseen delays may occur due to weather, logistics, or other
          external factors. We appreciate your patience in such cases.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
        <p className="mb-6">
          For any questions regarding shipping or order status, please contact
          us:
        </p>
        <p className="font-semibold">
          SilverSpoon Support
          <br />
          Email: support@silverspoon.com
          <br />
          Phone: +91-XXXXXXXXXX
        </p>
      </section>
    </main>
  );
}
