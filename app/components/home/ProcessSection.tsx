export function ProcessSection() {
    const steps = [
        {
            num: '01',
            title: 'Analyse & Strategie',
            desc: 'Wir analysieren Ihre Anforderungen, Zielgruppe und Wettbewerb, um eine maßgeschneiderte Strategie zu entwickeln.'
        },
        {
            num: '02',
            title: 'Konzept & Design',
            desc: 'Aufbauend auf der Strategie entwerfen wir ein intuitives UI/UX Design und eine zukunftssichere Systemarchitektur.'
        },
        {
            num: '03',
            title: 'Entwicklung & QA',
            desc: 'Agile Umsetzung mit modernsten Technologien und fortlaufendem Testing für höchste Softwarequalität.'
        },
        {
            num: '04',
            title: 'Go-Live & Support',
            desc: 'Reibungsloses Deployment, Monitoring und fortlaufende Optimierung für Ihren langfristigen Erfolg.'
        }
    ];

    return (
        <section className="w-full">
            <div className="bg-[#f8f9fa] rounded-[32px] sm:rounded-[40px] py-24 overflow-hidden border border-gray-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#101828] mb-6">
                            Von der Idee<br />
                            zur Lösung
                        </h2>
                        {/* Progress / scroll indicator placeholder based on the design */}
                        <div className="h-1 bg-gray-200 rounded-full w-full overflow-hidden mt-8">
                            <div className="h-full bg-[#101828] w-1/4 rounded-full" />
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {steps.map((step) => (
                            <div key={step.num} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="text-5xl font-black text-gray-100 absolute -bottom-4 right-4 pointer-events-none group-hover:text-gray-200 transition-colors">
                                    {step.num}
                                </div>
                                <h3 className="text-xl font-bold text-[#101828] mb-4 relative z-10">{step.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed relative z-10">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            </div>
        </section>
    );
}
