import React from 'react';
import { Button } from '../components/ui/Button';

export const RoadmapPage: React.FC = () => {
  const phases = [
    {
      id: "01",
      title: "Giai đoạn 1: Nền tảng & Tư duy (Tuần 1-2)",
      description: "Tập trung vào việc thiết lập các công cụ, tư duy đúng đắn và xác thực một ý tưởng sản phẩm AI.",
      icon: "lightbulb",
      topics: ["Thiết lập Môi trường", "Lên ý tưởng & Xác thực", "Tư duy Nhà sáng lập Solo", "Các khái niệm AI cốt lõi"],
      outcomes: ["Môi trường phát triển hoàn chỉnh", "Ý tưởng sản phẩm AI được xác thực", "Tư duy sản phẩm"]
    },
    {
      id: "02",
      title: "Giai đoạn 2: Xây dựng (Tuần 3-5)",
      description: "Giai đoạn phát triển cốt lõi, từ logic backend đến giao diện người dùng hoàn chỉnh.",
      icon: "settings",
      topics: ["Thiết kế Cơ sở dữ liệu", "Logic AI/LLM cốt lõi", "Phát triển Backend", "Thiết kế UI/UX & Frontend"],
      outcomes: ["Xây dựng xong backend và API", "Tích hợp thành công logic AI", "Hoàn thiện UI/UX"]
    },
    {
      id: "03",
      title: "Giai đoạn 3: Ra mắt & Phát triển (Tuần 6-8)",
      description: "Chuẩn bị ra mắt, tích hợp các công cụ kinh doanh cần thiết và bắt đầu tiếp thị sản phẩm.",
      icon: "rocket_launch",
      topics: ["Tích hợp Thanh toán", "Đảm bảo chất lượng & Kiểm thử", "Triển khai", "Tiếp thị & Growth Hacking"],
      outcomes: ["Sản phẩm được triển khai", "Hệ thống thanh toán hoạt động", "Có khách hàng đầu tiên"]
    }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Tổng quan Chương trình: <span className="text-primary">Hành trình 8 tuần</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
             Một chương trình đột phá được thiết kế để đưa bạn từ con số không trở thành một nhà sáng lập AI solo.
          </p>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute left-[40px] top-10 bottom-10 w-[2px] bg-white/10 z-0"></div>

            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 relative z-10">
                  {/* Icon Column */}
                  <div className="hidden lg:flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-[#1C2127] border border-white/10 flex items-center justify-center text-primary shadow-xl">
                      <span className="material-symbols-outlined text-4xl">{phase.icon}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-[#1C2127] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                    {/* Mobile Icon */}
                    <div className="lg:hidden w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 border border-primary/20">
                      <span className="material-symbols-outlined text-2xl">{phase.icon}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-2">{phase.title}</h2>
                    <p className="text-gray-400 mb-8">{phase.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div>
                          <h3 className="font-bold text-white mb-4 border-b border-white/10 pb-2">Chủ đề chính</h3>
                          <ul className="space-y-3">
                             {phase.topics.map((t, idx) => (
                               <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                                  <span className="material-symbols-outlined text-primary text-base pt-0.5">check_circle</span>
                                  {t}
                               </li>
                             ))}
                          </ul>
                       </div>
                       <div>
                          <h3 className="font-bold text-white mb-4 border-b border-white/10 pb-2">Kết quả đạt được</h3>
                          <ul className="space-y-3">
                             {phase.outcomes.map((o, idx) => (
                               <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                                  <span className="material-symbols-outlined text-primary text-base pt-0.5">verified</span>
                                  {o}
                               </li>
                             ))}
                          </ul>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        <div className="mt-20 bg-[#1C2127] border border-white/10 rounded-3xl p-10 text-center">
             <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Sẵn sàng xây dựng Đế chế AI của bạn?</h2>
             <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Tham gia IMPROVE Bootcamp và biến tầm nhìn của bạn thành hiện thực.</p>
             <Button size="lg" className="rounded-full px-12">Đăng ký ngay</Button>
        </div>

      </div>
    </div>
  );
};