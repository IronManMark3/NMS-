import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import AboutSection from './AboutSection';
import CampusSection from './CampusSection';
import BoardingSection from './BoardingSection';
import PartnersSection from './PartnersSection';
import AcademicsSection from './AcademicsSection';
import SportsSection from './SportsSection';
import LeadershipSection from './LeadershipSection';
import CommunitySection from './CommunitySection';
import NewsSection from './NewsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mt-[154px]">
        <section data-aos="fade-in" data-aos-duration="1200"><HeroSection /></section>
        <section data-aos="fade-up" data-aos-delay="100"><AboutSection /></section>
        <section data-aos="zoom-in" data-aos-delay="200"><CampusSection /></section>
        <section data-aos="fade-right" data-aos-delay="200"><BoardingSection /></section>
        <section data-aos="fade-left" data-aos-delay="100"><PartnersSection /></section>
        <section data-aos="zoom-in-up" data-aos-delay="100"><AcademicsSection /></section>
        <section data-aos="fade-up" data-aos-delay="100"><SportsSection /></section>
        <section data-aos="fade-up" data-aos-delay="150"><LeadershipSection /></section>
        <section data-aos="zoom-in" data-aos-delay="200"><CommunitySection /></section>
        <section data-aos="fade-up" data-aos-delay="100"><NewsSection /></section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
