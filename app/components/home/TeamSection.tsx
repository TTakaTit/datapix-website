export function TeamSection() {
    return (
        <section id="Team" className="w-full">
            <div className="bg-[#101828] text-white rounded-[32px] sm:rounded-[40px] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative border border-[#1a2538] flex justify-center">
                <div className="w-full max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Spezialisiertes Team<br />
                            für Ihr Wachstum
                        </h2>
                        <p className="text-gray-400 font-medium text-lg max-w-md mb-12">
                            Ein multidisziplinäres Team aus Entwicklern, Designern und Strategen,
                            das gemeinsam an Ihrem digitalen Erfolg arbeitet.
                        </p>

                        <div className="flex gap-4">
                            {/* Team Avatars Placeholder */}
                            <div className="flex items-center gap-4 border border-white/20 p-2 pr-6 rounded-full bg-white/5 backdrop-blur-sm">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-600">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center font-bold text-xl">TG</div>
                                </div>
                                <div>
                                    <p className="font-bold text-white text-sm">Tim G.</p>
                                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Founder / CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-end justify-center">
                        <div className="text-center lg:text-right">
                            <div className="text-8xl md:text-[10rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                                8+
                            </div>
                            <p className="text-gray-400 font-bold text-xl tracking-widest uppercase mt-4">
                                Experten
                            </p>
                        </div>
                    </div>

                </div>

                {/* Decorative elements representing code/infrastructure lines */}
                <div className="absolute top-0 right-0 w-2/3 h-full overflow-hidden opacity-20 pointer-events-none">
                    <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" className="animate-pulse" />
                        <path d="M0,70 Q25,40 50,70 T100,70" fill="none" stroke="white" strokeWidth="0.2" className="animate-pulse" style={{ animationDelay: '1s' }} />
                    </svg>
                </div>
            </div>
        </section>
    );
}
