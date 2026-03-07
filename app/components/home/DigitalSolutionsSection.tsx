import { ArrowUpRight } from 'lucide-react';

export function DigitalSolutionsSection() {
    return (
        <section className="w-full">
            <div className=" py-24 overflow-hidden border border-gray-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* Left Dark Card */}
                        <div className="bg-[#101828] text-white rounded-3xl p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden h-[500px]">
                            {/* Subtle background glow/noise could go here */}
                            <div className="relative z-10 h-full flex flex-col">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    Digitale Lösungen mit Fokus auf Umsatz und Wachstum
                                </h2>
                                <p className="text-gray-400 text-lg mb-8 max-w-md font-medium">
                                    Wir verstehen, dass Technologie nur ein Mittel zum Zweck ist. Unser Ziel ist es, Lösungen zu bauen,
                                    die echten geschäftlichen Wert schaffen.
                                </p>

                                <div className="mt-auto">
                                    <button className="inline-flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                                        Mehr erfahren
                                        <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Grid */}
                        <div className="flex flex-col gap-6 h-[500px]">

                            {/* Top Stat Card */}
                            <div className="bg-[#f8f9fa] rounded-3xl p-8 flex-1 flex flex-col justify-center border border-gray-100">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-[#101828]">Erfolgreich umgesetzte Projekte<br /> für unsere Kunden</h3>
                                    <div className="bg-white p-2 text-2xl mb-12 rounded-xl shadow-sm border border-gray-100">
                                        🚀
                                    </div>
                                </div>
                                <div className="text-7xl font-bold text-[#101828] tracking-tighter">
                                    30<span className="text-gray-300">+</span>
                                </div>
                            </div>

                            {/* Bottom Founder Card */}
                            <div className="bg-white rounded-3xl p-6 flex items-center gap-6 shadow-sm border border-gray-100 flex-1">
                                <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-gray-200 shrink-0">
                                    {/* Placeholder for Founder Image */}
                                    <div className="absolute inset-0 bg-blue-100 flex items-center justify-center text-blue-500 font-bold text-2xl">
                                        TG
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#101828] mb-1">Hi, ich bin Tim</h4>
                                    <p className="text-gray-500 font-medium text-sm mb-3">Gründer von Datapix</p>
                                    <p className="text-[#101828] text-sm leading-relaxed font-semibold">
                                        &quot;Unser Anspruch ist es, die komplexesten Herausforderungen
                                        unserer Kunden mit eleganter, skalierbarer Technologie zu lösen.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
