import React from 'react';
import { formatCurrency } from '../lib/utils';
import { Button } from '../components/ui/Button';

export const SuccessStories: React.FC = () => {
  const stories = [
    {
      name: "Jane Doe",
      role: "Nhà sáng lập AI Insights",
      image: "https://picsum.photos/100/100?random=101",
      quote: "Cộng đồng này thật vô giá. Tôi đã tìm thấy 10 khách hàng đầu tiên của mình ở đây và nhận được phản hồi quan trọng cho việc ra mắt.",
      mrr: 5200,
      time: "6 tháng",
      videoThumb: "https://picsum.photos/600/350?random=201"
    },
    {
      name: "John Smith",
      role: "Nhà sáng lập CodeBot",
      image: "https://picsum.photos/100/100?random=102",
      quote: "Tôi đã đạt 1.200 USD MRR chỉ trong 3 tháng. Hướng dẫn từng bước về xác thực và định giá là một yếu tố thay đổi cuộc chơi tuyệt đối.",
      mrr: 1200,
      time: "3 tháng",
      videoThumb: "https://picsum.photos/600/350?random=202"
    },
    {
      name: "Alex Ray",
      role: "Nhà sáng lập DesignFlow",
      image: "https://picsum.photos/100/100?random=103",
      quote: "Phương pháp IMPROVE đã cho tôi một lộ trình rõ ràng, có thể hành động. Tôi đã đi từ một ý tưởng mơ hồ đến một sản phẩm có trả phí trong vài tuần.",
      mrr: 15000,
      time: "12 tháng",
      videoThumb: "https://picsum.photos/600/350?random=203"
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="text-primary drop-shadow-[0_0_15px_rgba(255,199,0,0.5)]">Câu chuyện Thành công</span> <br />
            của Nhà sáng lập Độc lập
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Khám phá cách các nhà sáng lập đầy tham vọng đã biến ý tưởng thành các startup AI có lợi nhuận.
          </p>
        </div>

        <div className="space-y-24">
          {stories.map((story, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Side - Alternate order */}
              <div className={`space-y-8 ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="flex items-center gap-4">
                  <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full border-2 border-primary object-cover" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.name}</h3>
                    <p className="text-gray-400">{story.role}</p>
                  </div>
                </div>

                <blockquote className="border-l-4 border-primary pl-6 py-1">
                  <p className="text-xl md:text-2xl font-medium text-gray-200 leading-relaxed">
                    "{story.quote}"
                  </p>
                </blockquote>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-sm text-gray-400 mb-1">Doanh thu (MRR)</p>
                    <p className="text-2xl md:text-3xl font-bold text-white">{formatCurrency(story.mrr)}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-sm text-gray-400 mb-1">Thời gian đạt được</p>
                    <p className="text-2xl md:text-3xl font-bold text-white">{story.time}</p>
                  </div>
                </div>
              </div>

              {/* Video Side */}
              <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                 <img src={story.videoThumb} alt="Video thumbnail" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/30">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 transition-transform group-hover:scale-110">
                       <span className="material-symbols-outlined text-white text-5xl">play_arrow</span>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-white/5 border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Sẵn sàng để viết Câu chuyện Thành công của riêng bạn?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
             Chương trình 8 tuần chuyên sâu của chúng tôi sẽ cung cấp cho bạn lộ trình, công cụ và sự hỗ trợ cần thiết.
          </p>
          <Button size="lg" className="shadow-[0_0_20px_rgba(255,199,0,0.4)]">Tham gia Bootcamp</Button>
        </div>
      </div>
    </div>
  );
};