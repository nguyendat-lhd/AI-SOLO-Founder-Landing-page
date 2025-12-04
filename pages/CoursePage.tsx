import React from 'react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

export const CoursePage: React.FC = () => {
  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/b/b9/TechCrunch_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/15/Forbes_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Wired_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/Tech_Republic_Logo_2020.svg",
  ];

  return (
    <div className="space-y-20 py-10">
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
          <span className="material-symbols-outlined text-[18px]">school</span>
          <span>Từ Zero đến AI Solo Founder</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
          Xây dựng Doanh nghiệp AI, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
            Ngay cả khi chưa có kinh nghiệm
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Khóa học chuyên sâu 8 tuần cung cấp lộ trình hoàn chỉnh để đi từ ý tưởng đến sản phẩm AI tạo ra doanh thu. Không yêu cầu nền tảng lập trình sâu.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg">Tham gia Khóa học</Button>
          <Button size="lg" variant="outline">Xem Lộ trình</Button>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-primary/30 bg-black shadow-[0_0_50px_rgba(255,199,0,0.1)] group cursor-pointer">
          <img 
            src="https://picsum.photos/1200/675?grayscale" 
            alt="Course Thumbnail" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-white text-5xl ml-1">play_arrow</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="container mx-auto px-4 text-center">
        <h4 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-8">Đối tác chiến lược</h4>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((url, index) => (
             <div key={index} className="h-8 md:h-10 flex items-center justify-center bg-white px-2 rounded">
                 <img src={url} alt="Partner" className="h-full w-auto object-contain" />
             </div>
          ))}
        </div>
      </section>

      {/* 3 Steps */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hành trình Chuyển đổi trong 8 Tuần</h2>
          <p className="text-gray-400">Hướng dẫn bạn từng bước từ con số không đến 1 founder.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "lightbulb",
              title: "Tuần 1-2: Ý tưởng & Xác thực",
              desc: "Khám phá và xác thực ý tưởng kinh doanh AI tiềm năng. Tìm ra thị trường ngách phù hợp."
            },
            {
              icon: "construction",
              title: "Tuần 3-6: Xây dựng & MVP",
              desc: "Sử dụng các công cụ no-code và API AI (Gemini, OpenAI) để xây dựng phiên bản sản phẩm tối thiểu.",
              highlight: true
            },
            {
              icon: "rocket_launch",
              title: "Tuần 7-8: Ra mắt & Growth",
              desc: "Ra mắt sản phẩm của bạn, thu hút những người dùng đầu tiên và xây dựng kế hoạch kinh doanh."
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className={cn(
                "p-8 rounded-2xl border bg-white/[0.02] flex flex-col items-center text-center transition-transform hover:-translate-y-2",
                item.highlight ? "border-primary/50 shadow-[0_0_30px_rgba(255,199,0,0.1)]" : "border-white/10"
              )}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 border border-primary/20">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
       {/* CTA Banner */}
      <section className="container mx-auto px-4 max-w-4xl">
         <div className="bg-primary rounded-3xl p-10 md:p-14 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 text-black">
            <div className="max-w-lg">
                <h2 className="text-3xl font-black mb-3">Sẵn sàng trở thành Founder?</h2>
                <p className="font-medium text-black/80 text-lg">Hành trình 8 tuần thay đổi sự nghiệp của bạn bắt đầu ngay hôm nay.</p>
            </div>
            <button className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                Bắt đầu Hành trình
            </button>
         </div>
      </section>
    </div>
  );
};