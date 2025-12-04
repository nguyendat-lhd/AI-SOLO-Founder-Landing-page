import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input, Textarea } from '../components/ui/Input';
import { FileUpload } from '../components/ui/FileUpload';

export const LandingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    cv: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.");
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Trở thành <span className="text-primary inline-block relative">
              AI Solo Founder
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span> trong 8 tuần
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Đăng ký sớm khóa học <span className="text-white font-bold">IMPROVE</span> để có cơ hội nhận 
            <span className="text-white font-bold"> 1 trong 10 suất học miễn phí</span>. 
            Xây dựng sản phẩm AI của riêng bạn từ Zero.
          </p>
          
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://picsum.photos/40/40?random=${i}`} className="w-10 h-10 rounded-full border-2 border-background" alt="Student" />
               ))}
             </div>
             <p className="text-sm text-gray-500">Hơn 500+ học viên đã tham gia</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-md bg-[#1C2127] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-6 md:p-8 relative overflow-hidden group">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
            <Input 
              id="fullName" 
              label="Họ và Tên" 
              placeholder="Nhập họ và tên của bạn" 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
            />
            
            <Input 
              id="email" 
              type="email" 
              label="Email" 
              placeholder="Nhập địa chỉ email" 
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              required
            />
            
            <Input 
              id="phone" 
              type="tel" 
              label="Số Điện Thoại" 
              placeholder="Nhập số điện thoại của bạn" 
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />

            <FileUpload 
              id="cv" 
              label="Upload CV" 
              accept=".pdf,.doc,.docx"
              onChange={file => setFormData({...formData, cv: file})}
            />

            <Textarea 
              id="reason" 
              label="Tại sao bạn muốn tham gia chương trình?" 
              placeholder="Mô tả kinh nghiệm, mục tiêu của bạn..." 
              value={formData.reason}
              onChange={e => setFormData({...formData, reason: e.target.value})}
            />

            <div className="pt-4 space-y-3 text-center">
              <Button type="submit" className="w-full font-bold text-base shadow-lg shadow-primary/20">
                Đăng Ký Giữ Chỗ Miễn Phí
              </Button>
              <p className="text-xs text-gray-500">Chỉ còn 3/10 suất miễn phí!</p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};