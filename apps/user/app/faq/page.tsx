export default function Page() {
  const faqs = [
    {
      question: 'What is SilverSpoon?',
      answer:
        'SilverSpoon is an online platform where you can explore and order high-quality meals, delivered straight to your doorstep.',
    },
    {
      question: 'How do I place an order?',
      answer:
        'You can place an order directly through our website by selecting your desired items, adding them to your cart, and completing the checkout process.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept major credit/debit cards, UPI, net banking, and wallet payments. All transactions are secured with trusted payment gateways.',
    },
    {
      question: 'How long does delivery take?',
      answer:
        'Delivery usually takes 30–60 minutes within the city, depending on your location and restaurant availability.',
    },
    {
      question: 'Can I track my order?',
      answer:
        'Yes! Once your order is confirmed, you will receive a tracking link to monitor the status in real time.',
    },
    {
      question: 'Do you charge for delivery?',
      answer:
        'Delivery charges may apply depending on your location and order value. Orders above a certain amount may qualify for free delivery.',
    },
    {
      question: 'How can I contact customer support?',
      answer:
        'You can reach us at support@silverspoon.com or call us at +91-XXXXXXXXXX for any queries or assistance.',
    },
  ];

  return (
    <main className="min-h-screen py-20">
      <section className="container px-4 max-w-3xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-10">Frequently Asked Questions</h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
