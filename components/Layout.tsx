import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Đăng ký', path: '/' },
    { name: 'Khóa học', path: '/course' },
    { name: 'Lộ trình', path: '/roadmap' },
    { name: 'Thành công', path: '/stories' },
  ];

  // The official TrangVang.ai logo SVG
  const Logo = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
    </svg>
  );

  return (
    <div className="flex min-h-screen w-full flex-col font-sans selection:bg-primary selection:text-black">
      {/* Navbar */}
      <header 
        className={cn(
          "fixed top-0 z-50 w-full border-b border-transparent transition-all duration-300",
          scrolled ? "bg-background/80 backdrop-blur-md border-white/10 py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="text-primary">
                 <Logo />
              </div>
              <h2 className="text-white text-xl font-bold tracking-tight">trangvang.ai</h2>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-gray-300"
                  )}
                >
                  {link.name}
                </NavLink>
              ))}
              <Button size="sm" className="ml-4">Tham gia ngay</Button>
            </div>

            {/* Mobile Nav Button (Visual only) */}
            <button className="md:hidden text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/10 bg-[#080808] py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <div className="text-primary">
                   <Logo />
                </div>
                <span className="font-bold text-lg">trangvang.ai</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Nền tảng AI toàn diện cho doanh nghiệp Việt Nam. Giấy chứng nhận ĐKKD số 0107869632.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Công cụ</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary">Viết quảng cáo</a></li>
                <li><a href="#" className="hover:text-primary">Trợ lý ảo</a></li>
                <li><a href="#" className="hover:text-primary">Soạn Email</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Công ty</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-primary">Bảng giá</a></li>
                <li><a href="#" className="hover:text-primary">Liên hệ</a></li>
              </ul>
            </div>

             <div>
              <h3 className="font-bold text-white mb-4">Mạng xã hội</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/trangvangai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.86-.95-6.43-2.88-1.57-1.92-2.24-4.59-1.9-7.18.34-2.58 1.92-4.88 4.03-6.23 2.2-1.42 4.84-1.65 7.32-1.09.02-1.5-.04-2.99-.02-4.48z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-600">
            © 2024 trangvang.ai - A product of DigiVision. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};