import { Sparkles, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import bannerImage from '@/assets/banner/fokus 1.png';

export function HeroSection() {
    return (
        <section className="w-full">
                {/* Background Image & Overlays */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={bannerImage}
                        alt="Hero Background"
                        fill
                        className="object-cover object-center opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/30 mix-blend-overlay" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full flex flex-col items-center mt-[120px] lg:mt-[180px]">

                    {/* Top Badge */}
                    <div className="inline-flex flex-row items-center gap-2 px-4 h-9 rounded-lg bg-[#F5F5F5] shadow-[0px_3px_3px_rgba(0,0,0,0.14),inset_0px_-3px_0px_#e9e9e9,inset_0px_1px_0px_rgba(255,255,255,0.7)] text-[16px] font-semibold mb-6">
                        <div className="w-5 h-5 flex items-center justify-center rounded bg-gradient-to-b from-[#EA2B16] to-[#FD3B26]">
                            <Sparkles className="w-3 h-3 text-white fill-white" />
                        </div>
                        <span className="text-[#FD3A25] font-semibold text-[16px] font-Urbanist">Digitale Lösungen zwischen Strategie & KI</span>
                    </div>

                    {/* Heading Area */}
                    <div className="flex flex-col items-center gap-3 mb-6 relative z-20">
                        <h1 className="text-4xl sm:text-6xl md:text-[72px] lg:text-[96px] font-semibold text-[#101828] leading-[1.1] md:leading-none tracking-[-0.03em] font-Urbanist text-center">
                            Websites & KI-Systeme,
                        </h1>
                        <div className="flex flex-col xl:flex-row items-center justify-center gap-5 xl:h-[80px]">
                            <h1 className="text-4xl sm:text-6xl md:text-[72px] lg:text-[96px] font-semibold text-[#101828] leading-[1.1] md:leading-none tracking-[-0.03em] font-Urbanist text-center">
                                die skalieren.
                            </h1>

                            {/* Icons Group */}
                            <div className="relative w-[255px] h-[160px] xl:h-[80px] shrink-0 mt-8 xl:mt-0 pointer-events-none hidden sm:block">
                                {/* Red Pill Shadow/Glow (3) */}
                                <div className="absolute top-0 left-0 w-[255px] h-[80px] rounded-full bg-gradient-to-b from-[rgba(179,26,65,0.7)] to-[rgba(179,26,65,0.8)] shadow-[0px_3.44px_5.57px_0px_#B31A4114,0px_22.91px_37.08px_0px_#B31A4129,0px_76px_123px_0px_#B31A410D,0px_5.05px_8.18px_0px_#B31A411A,0px_16.98px_27.47px_0px_#B31A4180,0px_56px_83px_0px_#B31A4180,0px_14px_34px_0px_#B31A4180,0px_1px_2px_0px_#B31A4180]"></div>

                                {/* WordPress Icon (2) - Changed to Blue Logo */}
                                <div className="absolute left-[60px] top-[15px] w-[72px] h-[72px] bg-white rounded-lg shadow-[-6px_10px_20px_rgba(0,0,0,0.1)] flex items-center justify-center z-10 transform rotate-[30deg]">
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg"
                                        alt="WordPress"
                                        width={54} height={41}
                                    />
                                </div>

                                {/* Node.js Icon (1) */}
                                <div className="absolute left-[140px] top-[76px] w-[64px] h-[64px] bg-white rounded-lg shadow-[3px_13px_20px_rgba(0,0,0,0.1)] flex items-center justify-center z-20 transform rotate-[-15deg]">
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                                        alt="Node.js"
                                        width={49} height={46}
                                    />
                                </div>

                                {/* React Icon - Added */}
                                <div className="absolute left-[60px] top-[130px] w-[56px] h-[56px] bg-white rounded-lg shadow-[3px_13px_20px_rgba(0,0,0,0.1)] flex items-center justify-center z-15 transform rotate-[10deg]">
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                        alt="React"
                                        width={45} height={45}
                                    />
                                </div>

                                {/* AI Text Icon (4) */}
                                <div className="absolute left-[134px] top-[170px] w-[56px] h-[56px] bg-white rounded-lg shadow-[3px_13px_20px_rgba(0,0,0,0.1)] flex items-center justify-center z-30 transform rotate-[-30deg]">
                                    <span className="font-Urbanist text-[29px] font-semibold text-[#101828]">AI</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paragraph */}
                    <p className="text-[16px] text-[#101828] font-Urbanist mt-8 mb-8 max-w-[482px] text-center leading-relaxed font-normal sm:pt-10 xl:pt-20">
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
                    <div className="w-8 h-8 bg-transparent" style={{ borderBottomRightRadius: '24px', boxShadow: '12px 12px 0 12px #E5E5E5' }}></div>
                    <div className="bg-[#E5E5E5] h-16 px-12 rounded-t-[32px] flex items-center justify-center relative z-10">
                        <a href="#Ergebnisse" className="inline-flex items-center gap-3 px-5 py-2 text-[13px] font-semibold text-[#101828]">
                            Ergebnisse ansehen
                            <div className="w-5 h-5 flex items-center justify-center">
                                <ArrowDown className="w-3 h-3 text-gray-500" />
                            </div>
                        </a>
                    </div>
                    <div className="w-8 h-8 bg-transparent" style={{ borderBottomLeftRadius: '24px', boxShadow: '-12px 12px 0 12px #E5E5E5' }}></div>
            </div>

        </section>
    );
}
