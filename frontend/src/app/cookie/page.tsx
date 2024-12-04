import React from 'react';
import PageHeader from '@/components/sections/PageHeader';

export default function CookiePage() {
  return (
    <main>
      <PageHeader
        title="Cookie Preferences"
        description="Manage your cookie settings and preferences"
        backgroundImage="/assets/icons/new-placeholder.svg"
      />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2>Cookie Policy</h2>
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h3>What are Cookies?</h3>
          <p>
            Cookies are small text files that are placed on your device when you visit our website.
            They help us provide you with a better experience by remembering your preferences and
            understanding how you use our site.
          </p>

          <h3>Types of Cookies We Use</h3>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> These cookies are necessary for the website to
              function properly. They enable core functionality such as security, network
              management, and accessibility.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> These help us understand how visitors interact
              with our website by collecting and reporting information anonymously.
            </li>
            <li>
              <strong>Functional Cookies:</strong> These cookies enable enhanced functionality
              and personalization, such as remembering your preferences.
            </li>
          </ul>

          <h3>Managing Your Cookie Preferences</h3>
          <p>
            You can manage your cookie preferences through your browser settings. Please note
            that disabling certain cookies may affect the functionality of our website.
          </p>
        </div>
      </section>
    </main>
  );
}
