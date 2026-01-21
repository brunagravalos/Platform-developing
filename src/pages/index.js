import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '../components/HeroSection';
import ModelsSection from '../components/ModelsSection';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  // src/pages/index.js
useEffect(() => {
  document.body.classList.add('home-page');
  const handleScroll = () => {
    if (window.scrollY > 10) document.body.classList.add('has-scrolled');
    else document.body.classList.remove('has-scrolled');
  };
  window.addEventListener('scroll', handleScroll);
  return () => {
    document.body.classList.remove('home-page');
    document.body.classList.remove('has-scrolled');
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="EXPECT Platform">
      <main>
        <HeroSection />
        <ModelsSection />
      </main>
    </Layout>
  );
}