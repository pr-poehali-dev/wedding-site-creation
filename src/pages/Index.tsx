import { useState, useEffect } from 'react';
import BackgroundDecorations from '@/components/wedding/BackgroundDecorations';
import HeroSection from '@/components/wedding/HeroSection';
import PhotoSection from '@/components/wedding/PhotoSection';
import ProgramSection from '@/components/wedding/ProgramSection';
import GallerySection from '@/components/wedding/GallerySection';
import DressCodeSection from '@/components/wedding/DressCodeSection';
import GiftsSection from '@/components/wedding/GiftsSection';
import ContactsSection from '@/components/wedding/ContactsSection';
import Footer from '@/components/wedding/Footer';
import RsvpSection from '@/components/wedding/RsvpSection';
import MusicSurvey from '@/components/wedding/MusicSurvey';
import GuestCounter from '@/components/wedding/GuestCounter';
import QrCode from '@/components/wedding/QrCode';
import FallingPetals from '@/components/wedding/FallingPetals';

const WeddingDate = new Date('2026-08-07T14:15:00');

const galleryImages = [
  'https://cdn.poehali.dev/files/47cd4b2c-f766-4e49-b728-fa316ae689a3.jpg',
  'https://cdn.poehali.dev/files/6d18faf1-cd85-4673-bc1e-395995960630.jpg',
  'https://cdn.poehali.dev/files/2edd5cd6-2798-4a87-a1b6-e257f810df65.jpg'
];

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [confetti, setConfetti] = useState<Array<{id: number, x: number, y: number, rotation: number, color: string, delay: number}>>([]);



  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = WeddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale, .scroll-reveal-left, .scroll-reveal-right');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const colors = ['#FFD700', '#FFC107', '#2D5016', '#3D6B2A', '#F4E4C1'];
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -20 - Math.random() * 50,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 relative overflow-hidden vintage-texture">
      <FallingPetals />
      <BackgroundDecorations confetti={confetti} />
      
      <div className="container max-w-4xl mx-auto px-4 py-12 space-y-16 relative z-10">
        <HeroSection timeLeft={timeLeft} />
        <GuestCounter />
        <PhotoSection />
        <ProgramSection />
        <GallerySection galleryImages={galleryImages} />
        <DressCodeSection />
        <RsvpSection />
        <MusicSurvey />
        <GiftsSection />
        <QrCode />
        <ContactsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;