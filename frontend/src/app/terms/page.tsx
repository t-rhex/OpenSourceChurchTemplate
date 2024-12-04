import React from 'react';
import PageHeader from '@/components/sections/PageHeader';

export default function TermsPage() {
  return (
    <main>
      <PageHeader
        title="Terms of Service"
        description="Our website terms and conditions"
        backgroundImage="/assets/icons/new-placeholder.svg"
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2>Terms of Service</h2>
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms
            and provision of this agreement.
          </p>

          <h3>2. Website Use</h3>
          <p>
            This website is provided for informational and community purposes. You agree to use
            this website in a manner consistent with all applicable laws and regulations.
          </p>

          <h3>3. Intellectual Property</h3>
          <p>
            The content on this website, including but not limited to text, graphics, logos,
            and images, is the property of our church and is protected by copyright laws.
          </p>

          <h3>4. Online Donations</h3>
          <p>
            Online donations are processed securely through our payment providers. All donations
            are final and non-refundable unless otherwise required by law.
          </p>

          <h3>5. Contact Information</h3>
          <p>
            If you have any questions about these terms, please contact us.
          </p>
        </div>
      </section>
    </main>
  );
}
