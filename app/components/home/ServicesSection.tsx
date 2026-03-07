'use client';
import { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';

const services = [
    {
        id: 'web',
        title: 'Individuelle Webentwicklung',
        desc: 'Maßgeschneiderte Webanwendungen, Corporate Websites und Plattformen mit höchster Performance und modernstem Tech-Stack. Entwickelt für Skalierbarkeit und optimale Nutzererfahrung.'
    },
    {
        id: 'app',
        title: 'APP / Mobile Appwicklung',
        desc: 'Native und Cross-Platform Apps für iOS und Android, die begeistern und konvertieren.'
    },
    {
        id: 'marketing',
        title: 'Performance Marketing',
        desc: 'Datengetriebene Kampagnen, die messbare Ergebnisse liefern und Ihren ROI maximieren.'
    }
];

export function ServicesSection() {
    const [activeId, setActiveId] = useState('web');

    return (
        <section id="Leistungen" className="w-full">
            <div className="bg-[#f8f9fa] rounded-[32px] sm:rounded-[40px] py-24 overflow-hidden border border-gray-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Title Area */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#101828] mb-4">Unsere Leistungen</h2>
                        <p className="text-gray-500 font-medium">Was wir für Sie tun können</p>
                    </div>

                    {/* Service List */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        {services.map((service) => {
                            const isActive = activeId === service.id;

                            return (
                                <div
                                    key={service.id}
                                    onClick={() => setActiveId(service.id)}
                                    className={`
                    w-full rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer border
                    ${isActive
                                            ? 'bg-[#101828] text-white border-[#101828] p-8 md:p-12 shadow-xl'
                                            : 'bg-white text-[#101828] border-gray-100 p-8 md:p-10 hover:shadow-md'
                                        }
                  `}
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="max-w-xl">
                                            <h3 className={`text-2xl font-bold transition-colors ${isActive ? 'text-white' : 'text-[#101828]'}`}>
                                                {service.title}
                                            </h3>
                                            <div
                                                className={`transition-all duration-300 overflow-hidden ${isActive ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                                                    }`}
                                            >
                                                <p className="text-gray-300 text-lg leading-relaxed">
                                                    {service.desc}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            {isActive ? (
                                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                                    <ArrowUpRight className="w-6 h-6 text-white" />
                                                </div>
                                            ) : (
                                                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50 shrink-0">
                                                    <Plus className="w-6 h-6 text-gray-400" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
            </div>
        </section>
    );
}
