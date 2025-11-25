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
        
        {/* Video Showcase */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
            <wistia-player 
              media-id="aoangn3r46" 
              aspect="0.5625"
              className="absolute top-0 left-0 w-full h-full"
            ></wistia-player>
          </div>
          <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
            <wistia-player 
              media-id="9qg1xl14ce" 
              aspect="0.5625"
              className="absolute top-0 left-0 w-full h-full"
            ></wistia-player>
          </div>
          <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
            <wistia-player 
              media-id="2ucaviy334" 
              aspect="0.5625"
              className="absolute top-0 left-0 w-full h-full"
            ></wistia-player>
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
          padding-top: 177.78%; 
        }
        wistia-player[media-id='9qg1xl14ce']:not(:defined) { 
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/9qg1xl14ce/swatch'); 
          display: block; 
          filter: blur(5px); 
          padding-top: 177.78%; 
        }
        wistia-player[media-id='2ucaviy334']:not(:defined) { 
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/2ucaviy334/swatch'); 
          display: block; 
          filter: blur(5px); 
          padding-top: 177.78%; 
        }
      `}</style>
    </section>
  );
}

