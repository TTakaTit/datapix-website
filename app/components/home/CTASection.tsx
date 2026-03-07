'use client';

export function CTASection() {
    return (
        <section className="w-full">
            <div className="bg-[#e5e7eb]/30 rounded-[32px] sm:rounded-[40px] py-24 overflow-hidden border border-gray-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="bg-gray-200/50 rounded-[3rem] p-4 lg:p-6 overflow-hidden border border-gray-100">
                        <div className="bg-[#f0f1f3] rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24">

                            <div className="lg:w-1/2 flex justify-center items-center">
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#101828] leading-tight tracking-tight">
                                    Let&apos;s Build<br />
                                    Something<br />
                                    Great
                                </h2>
                            </div>

                            <div className="lg:w-1/2 bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
                                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Ihr voller Name"
                                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">E-Mail</label>
                                        <input
                                            type="email"
                                            placeholder="name@unternehmen.de"
                                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Nachricht</label>
                                        <textarea
                                            placeholder="Wie können wir Ihnen helfen?"
                                            rows={4}
                                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors resize-none"
                                        />
                                    </div>

                                    <button className="w-full bg-[#101828] text-white font-bold rounded-xl py-4 mt-2 hover:bg-gray-800 transition-colors">
                                        Projekt anfragen
                                    </button>

                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
