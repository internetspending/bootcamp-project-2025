import ContactForm from '../../src/components/contactForm';

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg text-gray-600 mb-8">
        Let's connect! I'm always interested in new opportunities and collaborations.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">Email</h3>
              <p className="text-gray-600">jeron.perey@calpoly.edu</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">LinkedIn</h3>
              <p className="text-gray-600">linkedin.com/in/jeronperey</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">GitHub</h3>
              <p className="text-gray-600">github.com/jeronperey</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Location</h3>
              <p className="text-gray-600">San Luis Obispo, CA</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
