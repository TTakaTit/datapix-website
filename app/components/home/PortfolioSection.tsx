import { ArrowUpRight } from 'lucide-react';

const cases = [
    {
        id: 1,
        category: 'Corporate Website',
        title: 'Modernisierung für den Mittelstand',
        bg: 'bg-emerald-50'
    },
    {
        id: 2,
        category: 'E-Commerce',
        title: 'Skalierbare Plattform Architektur',
        bg: 'bg-blue-50'
    },
    {
        id: 3,
        category: 'Brand Experience',
        title: 'Immersive digitale Erlebniswelten',
        bg: 'bg-amber-50'
    }
];

export function PortfolioSection() {
    return (
        <section id="Referenzen" className="w-full">
            <div className="bg-white rounded-[32px] sm:rounded-[40px] py-24 overflow-hidden border border-gray-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Cases */}
                    <div className="flex flex-col gap-12">
                        {cases.map((item) => (
                            <div key={item.id} className="group relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm block hover:shadow-xl transition-shadow cursor-pointer">

                                {/* Image Container (Placeholder) */}
                                <div className={`w-full h-[400px] md:h-[600px] ${item.bg} relative flex items-center justify-center overflow-hidden`}>
                                    <div className="text-gray-400 font-bold text-3xl">Projekt Screenshot {item.id}</div>
                                    {/* Decorative mock UI parts based on the design */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 max-w-4xl bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-white/40 opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out" />
                                </div>

                                {/* Card Footer / Details */}
                                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-3xl flex justify-between items-center shadow-lg border border-white">
                                    <div>
                                        <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-[#101828] text-xs font-bold uppercase tracking-wider mb-3">
                                            {item.category}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-[#101828]">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="w-14 h-14 bg-[#101828] rounded-full flex items-center justify-center shrink-0 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
                                        <ArrowUpRight className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
