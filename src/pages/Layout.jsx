import React from "react";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen w-full overflow-x-hidden">
            {/* Header with Logo */}
            <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center py-4">
                        <img 
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/737c3d1dd_P1CreativeBlackonWhiteWords.png"
                            alt="P1 Creative Logo"
                            className="h-8 sm:h-10 md:h-12 w-auto max-w-full"
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
