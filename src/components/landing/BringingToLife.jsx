import React from "react";

export default function BringingToLife() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8 text-center">
          Bringing Your Business to Life
        </h2>
        <p className="text-lg sm:text-xl text-white/70 leading-relaxed text-center max-w-2xl mx-auto mb-16">
          We don't just create marketing—we build systems that generate qualified leads, automate follow-ups, and fill your calendar while you focus on what you do best.
        </p>

        {/* Work Showcase Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden" style={{ paddingTop: '100%' }}>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
              <wistia-player 
                media-id="9qg1xl14ce" 
                aspect="1"
                autoplay
                muted
                className="absolute left-0 w-full rounded-2xl"
                style={{ height: '200%', transform: 'translateY(-25%)' }}
              ></wistia-player>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden" style={{ paddingTop: '100%' }}>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
              <wistia-player 
                media-id="2ucaviy334" 
                aspect="1"
                autoplay
                muted
                className="absolute left-0 w-full rounded-2xl"
                style={{ height: '200%', transform: 'translateY(-25%)' }}
              ></wistia-player>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        wistia-player[media-id='aoangn3r46']:not(:defined) { 
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/aoangn3r46/swatch'); 
          display: block; 
          filter: blur(5px); 
          padding-top: 100%; 
        }
        wistia-player[media-id='9qg1xl14ce']:not(:defined) { 
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/9qg1xl14ce/swatch'); 
          display: block; 
          filter: blur(5px); 
          padding-top: 100%; 
        }
        wistia-player[media-id='2ucaviy334']:not(:defined) { 
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/2ucaviy334/swatch'); 
          display: block; 
          filter: blur(5px); 
          padding-top: 100%; 
        }
        wistia-player[media-id='aoangn3r46'],
        wistia-player[media-id='9qg1xl14ce'],
        wistia-player[media-id='2ucaviy334'] {
          object-fit: cover;
          object-position: center;
        }
      `}</style>
    </section>
  );
}

