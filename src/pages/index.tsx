import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title} Docs
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/how-it-works">
            Get Started
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            style={{marginLeft: '1rem'}}
            to="/docs/api/warrantyflow-v-3-api">
            API Reference
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, link}: {title: string; description: string; link: string}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md padding-vert--lg">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--primary" to={link}>
          Read more
        </Link>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Documentation for PartnerFlow — service management for manufacturers, service providers, and customers.">
      <HomepageHeader />
      <main>
        <section style={{padding: '3rem 0'}}>
          <div className="container">
            <div className="row">
              <FeatureCard
                title="Getting Started"
                description="New to PartnerFlow? Learn how the platform works and set up your company, users, and first service."
                link="/docs/getting-started/how-it-works"
              />
              <FeatureCard
                title="User Guides"
                description="In-depth guides for administrators, service providers, and partners — covering every feature of the platform."
                link="/docs/user-guides/admin/creating-a-service"
              />
              <FeatureCard
                title="API Reference"
                description="Complete REST API documentation for all platform domains — generated directly from the OpenAPI spec."
                link="/docs/api/warrantyflow-v-3-api"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
