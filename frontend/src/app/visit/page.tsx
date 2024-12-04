import React from 'react';
import PageHeader from '@/components/sections/PageHeader';

export default function VisitPage() {
  return (
    <main>
      <PageHeader
        title="Visit Us"
        description="Join us for worship and fellowship"
        backgroundImage="/assets/icons/new-placeholder.svg"
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto" >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Service Times</h2>
              <p className="text-gray-600 mb-6">
                Sunday Service: 1:00 PM
              </p>
              <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Warm and welcoming community</li>
                <li>Contemporary worship</li>
                <li>Biblical teaching</li>
                <li>Children's ministry available</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Location</h2>
              <p className="text-gray-600 mb-6">
                [Your Church Address]<br />
                [City, State ZIP]
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">First Time?</h3>
                <p className="text-gray-600 mb-4">
                  We'd love to meet you! Stop by our welcome desk when you arrive.
                </p>
                <a 
                  href="/get-involved"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition duration-300"
                >
                  Connect With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
