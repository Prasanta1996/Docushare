import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Finspring Documentation"
      description="Finspring Documentation Portal"
    >
      <main>

        {/* Hero Section */}
        <section
          style={{
            background: '#1B78BE',
            color: '#ffffff',
            padding: '90px 20px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            <h1
              style={{
                color: '#ffffff',
                fontSize: '48px',
                fontWeight: '700',
                marginBottom: '20px',
              }}
            >
              Finspring Documentation
            </h1>

            <p
              style={{
                color: '#ffffff',
                fontSize: '21px',
                marginBottom: '35px',
              }}
            >
              Everything you need to get started with Finspring.
            </p>

            <Link
              className="button button--lg"
              to="/docs/intro"
              style={{
                background: '#ffffff',
                color: '#1B78BE',
                border: 'none',
                fontWeight: '600',
                borderRadius: '6px',
                padding: '12px 28px',
              }}
            >
              View Documentation
            </Link>
          </div>
        </section>

        {/* Introduction Section */}
        <section
          style={{
            padding: '70px 20px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            <h2
              style={{
                color: '#1B78BE',
                fontSize: '32px',
                marginBottom: '18px',
              }}
            >
              Welcome to Finspring
            </h2>

            <p
              style={{
                fontSize: '18px',
                lineHeight: '1.7',
                margin: '0 auto',
              }}
            >
              Access guides, integration documentation, technical
              references, and helpful resources from Finspring.
            </p>
          </div>
        </section>

        {/* Documentation Cards */}
        <section
          style={{
            background: '#f7f9fb',
            padding: '60px 20px 80px',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '25px',
            }}
          >

            <div
              style={{
                background: '#ffffff',
                padding: '30px',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid #e5e7eb',
              }}
            >
              <h3 style={{ color: '#1B78BE' }}>
                Getting Started
              </h3>

              <p>
                Start here to learn the basics and understand how
                Finspring works.
              </p>

              <Link
                className="button button--primary"
                to="/docs/intro"
              >
                Get Started
              </Link>
            </div>

            <div
              style={{
                background: '#ffffff',
                padding: '30px',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid #e5e7eb',
              }}
            >
              <h3 style={{ color: '#1B78BE' }}>
                Integration Guides
              </h3>

              <p>
                Follow step-by-step guides for integrations and
                technical implementation.
              </p>

              <Link
                className="button button--primary"
                to="/docs/intro"
              >
                View Guides
              </Link>
            </div>

            <div
              style={{
                background: '#ffffff',
                padding: '30px',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid #e5e7eb',
              }}
            >
              <h3 style={{ color: '#1B78BE' }}>
                Technical Reference
              </h3>

              <p>
                Find technical information, references, and
                documentation in one place.
              </p>

              <Link
                className="button button--primary"
                to="/docs/intro"
              >
                Explore Docs
              </Link>
            </div>

          </div>
        </section>

      </main>
    </Layout>
  );
}
