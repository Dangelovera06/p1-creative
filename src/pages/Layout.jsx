import React from "react";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen w-full overflow-x-hidden">
            {/* Floating Header */}
            <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-3 sm:py-4">
                        {/* Logo - White on Left */}
                        <div className="flex items-center">
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/737c3d1dd_P1CreativeBlackonWhiteWords.png"
                                alt="P1 Creative Logo"
                                className="h-6 sm:h-8 md:h-10 w-auto max-w-[200px] sm:max-w-[250px] brightness-0 invert"
                            />
                        </div>
                        
                        {/* Apply Now Button - Right */}
                        <button
                            onClick={() => {
                                if (window.fbq) {
                                    window.fbq('track', 'Lead', {
                                        content_name: 'Floating Header Apply Now',
                                        content_category: 'CTA Button'
                                    });
                                }
                                window.open('https://forms.fillout.com/t/6HP2aE8grBus', '_blank');
                            }}
                            className="bg-white text-black hover:bg-white/90 font-bold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </header>
            
            {/* Main Content */}
            <main className="w-full overflow-x-hidden pt-16 sm:pt-20">
                {children}
            </main>
        </div>
    )
}
