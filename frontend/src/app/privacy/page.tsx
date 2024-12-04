import React from 'react';
import PageHeader from '@/components/sections/PageHeader';

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHeader
        title="Privacy Policy"
        description="How we protect your information"
        backgroundImage="/assets/icons/new-placeholder.svg"
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2>Privacy Policy</h2>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h3>Information We Collect</h3>
          <p>
            We collect information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Fill out forms on our website</li>
            <li>Sign up for our newsletter</li>
            <li>Register for events</li>
            <li>Make donations</li>
          </ul>

          <h3>How We Use Your Information</h3>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Communicate with you about church events and activities</li>
            <li>Process your donations</li>
            <li>Send you newsletters and updates</li>
            <li>Improve our website and services</li>
          </ul>

          <h3>Information Security</h3>
          <p>
            We implement appropriate security measures to protect your personal information.
            However, no method of transmission over the internet is 100% secure.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have any questions about our privacy policy, please contact us.
          </p>
        </div>
      </section>
    </main>
  );
}
