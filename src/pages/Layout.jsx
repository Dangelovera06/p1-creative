import React from "react";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen w-full overflow-x-hidden">
            {/* Header with Logo - Seamless */}
            <header className="absolute top-0 left-0 right-0 z-50 w-full">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center py-3 sm:py-4">
                        <img 
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/737c3d1dd_P1CreativeBlackonWhiteWords.png"
                            alt="P1 Creative Logo"
                            className="h-6 sm:h-8 md:h-10 w-auto max-w-[200px] sm:max-w-[250px]"
                        />
                    </div>
                </div>
            </header>
            
            {/* Main Content */}
            <main className="w-full overflow-x-hidden">
                {children}
            </main>
        </div>
    )
}
