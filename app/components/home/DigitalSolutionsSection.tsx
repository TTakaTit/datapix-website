import { ArrowUpRight, Check } from 'lucide-react';
import Image from 'next/image';
import AvatarMax from '@/assets/avatar/max 1.png';
import star from '@/assets/icon/star.svg';

export function DigitalSolutionsSection() {
    return (
        <section className="w-full">
            <div className="bg-white rounded-[32px] sm:rounded-[40px] py-16 sm:py-24 overflow-hidden border border-gray-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header Section */}
                    <div className="relative font-semibold text-[40px] sm:text-[60px] md:text-[80px] leading-[1] tracking-[-3%] bg-gradient-to-b from-[#292C2E] to-[#292C2E00] bg-clip-text text-transparent">
                        Digitale Lösungen mit
                        <br />
                        Fokus auf Umsetzung
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                        {/* Left Dark Card */}
                        <div className="bg-datapix-main text-white rounded-[32px] p-8 sm:p-12 flex flex-col min-h-[520px] relative overflow-hidden shadow-dark-softglow">
                            <h3 className="text-2xl sm:text-3xl font-semibold mb-10 mx-auto">
                                Was macht Datapix aus?
                            </h3>

                            <ul className="space-y-5 mb-12">
                                {[
                                    "Websites mit klarer Conversion-Logik",
                                    "Saubere technische Umsetzung (kein Baukasten-Chaos)",
                                    "Automatisierung von internen Abläufen",
                                    "Individuelle Lösungen statt Agentur-Templates",
                                    "Direkter Kontakt, kurze Wege, schnelle Umsetzung",
                                    "Keine fertigen Templates"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0">
                                            <Check className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <span className="text-[15px] sm:text-[16px] text-gray-300 font-medium leading-tight">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto mx-auto">
                                <button
                                    className={`
                                        inline-flex items-center gap-2 
                                        bg-datapix-main text-white 
                                        px-8 py-3.5 
                                        rounded-full 
                                        hover:bg-[#252B3D] 
                                        transition-all 
                                        border border-white/5 
                                        font-semibold text-[15px]
                                        shadow-[inset_0px_-3px_0px_0px_#080808,inset_0px_1px_0px_0px_#FFFFFF4D,0px_2.77px_2.21px_0px_#0000001F,0px_6.65px_5.32px_0px_#00000021,0px_12.52px_10.02px_0px_#00000022,0px_22.34px_17.87px_0px_#00000024,0px_41.78px_33.42px_0px_#00000026,0px_100px_80px_0px_#00000026,0px_3px_3px_0px_#00000024,0px_2.77px_2.21px_0px_#0000001F]
                                    `}
                                >
                                    Start a Project
                                </button>
                            </div>
                        </div>

                        {/* Right Side Grid */}
                        <div className="flex flex-col gap-6">

                            {/* Top Metric Card */}
                            <div className="bg-[#F4F4F5] rounded-[32px] p-8 sm:p-10 flex flex-col justify-between border border-gray-100 min-h-[250px] relative overflow-hidden group shadow-light-softglow">
                                <div className="absolute right-0 bottom-0 text-[180px] font-bold text-neutral-200 leading-none pointer-events-none select-none z-0">
                                    30+
                                </div>
                                <div className="relative z-10 h-full flex flex-col">
                                    <p className="text-[16px] sm:text-[18px] text-datapix-main font-semibold leading-relaxed max-w-[420px] mb-24">
                                        30+ Kunden in über 6 Branchen - Conversionstarke Websites, saubere Technik und individuelle Lösungen - ohne Agentur-Templates.
                                    </p>
                                    <div className="mt-auto flex items-center gap-1.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Image src={star} alt="star" key={i} className="p-1 w-7 h-7 bg-datapix-main" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Testimonial Card */}
                            <div className="bg-[#F4F4F5] rounded-[32px] p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8 border border-gray-100 min-h-[250px] shadow-light-softglow">
                                <div className="relative w-[18vh] h-full rounded-[24px] overflow-hidden bg-datapix-main flex-shrink-0 shadow-[0px_2.77px_2.21px_0px_#0000001F,0px_6.65px_5.32px_0px_#00000021,0px_12.52px_10.02px_0px_#00000022,0px_22.34px_17.87px_0px_#00000024,0px_41.78px_33.42px_0px_#00000026,0px_100px_80px_0px_#00000026]">
                                    <Image
                                        src={AvatarMax}
                                        alt="Max Maurischat"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative">
                                    {/* Quote Icon */}
                                    <div className="text-[64px] font-serif text-neutral-200 leading-[0] mt-12 select-none">
                                        &ldquo;
                                    </div>
                                    <p className="text-datapix-main text-[16px] sm:text-[18px] leading-relaxed font-semibold mb-5 relative z-10 pr-8">
                                        Datapix betreut uns zuverlässig - von der Website bis zu individuellen Systemlösungen. Technisch stark und pragmatisch in der Umsetzung."
                                    </p>
                                    <div>
                                        <span className="text-[14px] font-semibold text-datapix-main">Max Maurischat</span>
                                        <span className="text-datapix-main text-[14px] font-regular tracking-wider"> | </span>
                                        <span className="text-datapix-main text-[14px] font-regular tracking-wider">SQUAREVEST AG</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

