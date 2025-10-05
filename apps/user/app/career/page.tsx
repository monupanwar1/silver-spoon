export default function Page() {
  const jobs = [
    {
      title: 'Frontend Developer',
      location: 'Remote / New Delhi',
      type: 'Full-Time',
      description:
        'We are looking for a skilled React.js developer who can build scalable, user-friendly web applications with modern UI/UX best practices.',
    },
    {
      title: 'Backend Developer',
      location: 'Remote / Bangalore',
      type: 'Full-Time',
      description:
        'Join our engineering team to design and build robust backend services using Node.js, Express, and databases like MongoDB or PostgreSQL.',
    },
    {
      title: 'Marketing Intern',
      location: 'Remote',
      type: 'Internship',
      description:
        'Assist our marketing team with social media campaigns, content creation, and customer engagement strategies.',
    },
  ];

  return (
    <main className="min-h-screen py-20">
      <section className="container px-4 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-8">Careers at SilverSpoon</h1>

        <p className="mb-10 text-lg text-gray-600">
          At <strong>SilverSpoon</strong>, we believe in building not just
          amazing food experiences but also a passionate team that drives
          innovation, creativity, and excellence. If you’re looking for a place
          where your ideas matter and your skills make a real impact, you’ve
          come to the right place.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>

        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-gray-500 mb-2">
                {job.location} • {job.type}
              </p>
              <p className="mb-4">{job.description}</p>
              <a
                href="mailto:careers@silverspoon.com"
                className="inline-block bg-[#3a643b] text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-16 mb-4">Why Work With Us?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Collaborative and inclusive culture</li>
          <li>Opportunities for growth and learning</li>
          <li>Flexible work environment</li>
          <li>Passionate team focused on innovation</li>
        </ul>

        <p className="mt-10 text-lg">
          Didn’t find a role that matches your skills? Send us your resume at{' '}
          <a
            href="mailto:careers@silverspoon.com"
            className="text-[#3a643b] font-semibold"
          >
            careers@silverspoon.com
          </a>{' '}
          and we’ll get in touch when a suitable opportunity opens up.
        </p>
      </section>
    </main>
  );
}
