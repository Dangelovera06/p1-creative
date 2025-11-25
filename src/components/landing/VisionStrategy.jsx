import React from "react";

export default function VisionStrategy() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8">
            Your Vision, Our Strategy
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            You have the vision for your business. We have the strategy and systems to bring it to life. Together, we build a lead generation machine that works around the clock.
          </p>
        </div>

        {/* Image Showcase */}
        <div className="mb-12 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-lg overflow-hidden">
            <img 
              src="/stluciedentist-68.jpg" 
              alt="Dentist" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-lg overflow-hidden">
            <img 
              src="/botox.jpg" 
              alt="Botox" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Video Showcase */}
        <div className="mb-12 max-w-5xl mx-auto">
          <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden" style={{ paddingTop: '100%' }}>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
              <wistia-player 
                media-id="aoangn3r46" 
                aspect="1"
                autoplay
                muted
                className="absolute left-0 w-full rounded-2xl"
                style={{ height: '200%', transform: 'translateY(-25%)' }}
              ></wistia-player>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              if (window.fbq) {
                window.fbq('track', 'Lead', {
                  content_name: 'VisionStrategy CTA Click',
                  content_category: 'CTA Button'
                });
              }
              window.open('https://forms.fillout.com/t/6HP2aE8grBus', '_blank');
            }}
            className="px-8 py-4 bg-white text-black font-medium text-sm uppercase tracking-wider hover:bg-white/90 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
      
      <style>{`
        wistia-player[media-id='aoangn3r46']:not(:defined) { 
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/aoangn3r46/swatch'); 
          display: block; 
          filter: blur(5px); 
          padding-top: 100%; 
        }
        wistia-player[media-id='aoangn3r46'] {
          object-fit: cover;
          object-position: center;
        }
      `}</style>
    </section>
  );
}

