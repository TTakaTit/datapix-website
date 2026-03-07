import { Shield, Zap, TrendingUp, Code2, Users, FileCheck } from 'lucide-react';

export function BenefitsSection() {
    const benefits = [
        {
            id: 1,
            icon: <Zap className="w-8 h-8 text-blue-500" />,
            title: 'Höchste Performance',
            desc: 'Wir nutzen moderne Technologien wie Next.js, um extrem schnelle Ladezeiten zu erzielen.'
        },
        {
            id: 2,
            icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
            title: 'Hohe Konversionsrate',
            desc: 'Durchdachtes UI/UX Design, das Besucher gezielt in zahlende Kunden verwandelt.'
        },
        {
            id: 3,
            icon: <FileCheck className="w-8 h-8 text-indigo-500" />,
            title: '100% DSGVO-konform',
            desc: 'Alle Systeme werden nach deutschen Datenschutzstandards DSGVO-konform entwickelt.'
        },
        {
            id: 4,
            icon: <Code2 className="w-8 h-8 text-purple-500" />,
            title: 'Modernster Tech-Stack',
            desc: 'Zukunftssichere Architekturen, die mit den Anforderungen Ihres Unternehmens mitwachsen.'
        },
        {
            id: 5,
            icon: <Shield className="w-8 h-8 text-red-500" />,
            title: 'IT-Sicherheit',
            desc: 'Höchste Sicherheitsstandards, um Ihre Unternehmensdaten zuverlässig zu schützen.'
        },
        {
            id: 6,
            icon: <Users className="w-8 h-8 text-orange-500" />,
            title: 'Echter Partner',
            desc: 'Wir arbeiten auf Augenhöhe und sehen uns als strategischer Partner, nicht nur als Dienstleister.'
        }
    ];

    return (
        <section className="w-full">
            <div className="bg-white rounded-[32px] sm:rounded-[40px] py-24 overflow-hidden border border-gray-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <h2 className="text-4xl md:text-5xl font-bold text-[#101828] mb-16 max-w-2xl mx-auto">
                    Darum entscheiden sich Kunden für Datapix
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((item) => (
                        <div key={item.id} className="bg-[#f8f9fa] border border-gray-100 p-8 rounded-3xl text-left hover:shadow-xl transition-shadow cursor-pointer group">
                            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#101828] mb-3">{item.title}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                </div>
            </div>
        </section>
    );
}
