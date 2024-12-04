import React from 'react';
import PageHeader from '@/components/sections/PageHeader';

export default function MinistriesPage() {
  return (
    <main>
      <PageHeader
        title="Our Ministries"
        description="Discover how you can get involved in our church ministries"
        backgroundImage="/assets/icons/new-placeholder.svg"
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Youth Ministry */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Youth Ministry</h3>
                <p className="text-gray-600 mb-4">
                  Empowering the next generation through fellowship, worship, and Biblical teaching.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Weekly youth gatherings</li>
                  <li>• Bible study groups</li>
                  <li>• Youth events and camps</li>
                </ul>
              </div>
            </div>

            {/* Outreach Ministry */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Outreach Ministry</h3>
                <p className="text-gray-600 mb-4">
                  Serving our community and spreading God&apos;s love through practical actions.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Community service projects</li>
                  <li>• Food bank support</li>
                  <li>• Mission trips</li>
                </ul>
              </div>
            </div>

            {/* Small Groups */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Small Groups</h3>
                <p className="text-gray-600 mb-4">
                  Connect with others in meaningful fellowship and Bible study.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Home groups</li>
                  <li>• Bible study</li>
                  <li>• Prayer meetings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
