import { Sparkles, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import bannerImage from '@/assets/banner/fokus 1.png';

export function HeroSection() {
    return (
        <section className="w-full">
            <div className="relative w-full min-h-[95vh] rounded-[32px] sm:rounded-[40px] flex flex-col items-center justify-center overflow-hidden pt-10 pb-20 bg-[#f8f9fa] shadow-sm border border-gray-200/50">
                {/* Background Image & Overlays */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={bannerImage}
                        alt="Hero Background"
                        fill
                        className="object-cover object-center opacity-[0.85] grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-[#f8f9fa]" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-24 lg:pt-32">

                    {/* Top Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-white shadow-sm border border-gray-100 text-[13px] font-semibold mb-10 text-gray-700">
                        <Sparkles className="w-4 h-4 text-red-500 fill-red-500" />
                        <span className="text-red-500 font-bold whitespace-nowrap">Digitale Lösungen zwischen Strategie & KI</span>
                    </div>

                    {/* Heading Area with Floating Icons */}
                    <div className="relative mb-6 z-20">

                        {/* Floating Red Blur Background Pattern behind icons */}
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 md:translate-x-24 w-[280px] h-[100px] bg-red-600/60 blur-3xl rounded-full mix-blend-multiply opacity-80 pointer-events-none hidden md:block" />
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 md:translate-x-24 w-[200px] h-[80px] bg-red-500/80 blur-2xl rounded-full mix-blend-multiply opacity-90 pointer-events-none hidden md:block" />

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-[#101828] leading-[1.1] relative z-20">
                            Websites & KI-Systeme,<br />
                            die skalieren.
                        </h1>

                        {/* Floating Icons Group */}
                        <div className="absolute right-[-20%] top-[-10%] md:right-[-10%] lg:right-[-5%] w-64 h-64 pointer-events-none hidden sm:block z-30">

                            {/* WordPress Icon */}
                            <div className="absolute top-4 left-10 transform -rotate-12 bg-white rounded-xl shadow-lg p-2.5 w-14 h-14 flex items-center justify-center border border-gray-100">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/20/WordPress_logo.svg"
                                    alt="WordPress"
                                    width={32} height={32}
                                />
                            </div>

                            {/* Node.js Icon */}
                            <div className="absolute top-16 right-4 transform rotate-6 bg-white rounded-xl shadow-lg p-3 w-16 h-16 flex items-center justify-center border border-gray-100">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                                    alt="Node.js"
                                    width={40} height={40}
                                />
                            </div>

                            {/* React/Science Icon */}
                            <div className="absolute bottom-12 left-6 transform rotate-[15deg] bg-white rounded-xl shadow-lg p-3 w-14 h-14 flex items-center justify-center border border-gray-100">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                    alt="React"
                                    width={32} height={32}
                                    className="text-cyan-400"
                                />
                            </div>

                            {/* AI Text Icon */}
                            <div className="absolute bottom-0 right-14 transform -rotate-6 bg-white rounded-xl shadow-lg p-3 w-14 h-14 flex items-center justify-center border border-gray-100 text-[#101828] font-black text-xl tracking-tighter">
                                <span>AI</span>
                            </div>

                        </div>
                    </div>

                    {/* Paragraph */}
                    <p className="text-sm sm:text-base md:text-[15px] text-[#101828] max-w-xl mx-auto mb-10 font-semibold leading-relaxed relative z-20">
                        Wir bauen performante Websites, automatisieren Prozesse <br className="hidden sm:block" />
                        und integrieren KI so, dass sie wirklich Arbeit abnimmt.
                    </p>

                    {/* Initial CTA */}
                    <a href="#Lösungen" className="inline-flex items-center justify-center gap-2 bg-[#101828] text-white px-8 h-12 rounded-full text-[15px] font-semibold hover:bg-black transition-colors shadow-xl shadow-black/10 relative z-20 mb-8">
                        Lösungen entdecken
                    </a>
                </div>

                {/* Bottom Pill (Scroll / View Results) with inverted rounded corners */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end z-20">
                    <div className="w-8 h-8 bg-transparent" style={{ borderBottomRightRadius: '24px', boxShadow: '12px 12px 0 12px #101828' }}></div>
                    <div className="bg-[#101828] h-16 px-6 rounded-t-[32px] flex items-center justify-center relative z-10">
                        <a href="#Ergebnisse" className="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-full shadow-sm border border-gray-100 text-[13px] font-semibold text-[#101828] hover:shadow-md transition-shadow group">
                            Ergebnisse ansehen
                            <div className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                                <ArrowDown className="w-3 h-3 text-gray-500" />
                            </div>
                        </a>
                    </div>
                    <div className="w-8 h-8 bg-transparent" style={{ borderBottomLeftRadius: '24px', boxShadow: '-12px 12px 0 12px #101828' }}></div>
                </div>

            </div>
        </section>
    );
}
