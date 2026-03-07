'use client';

import { Mail, Phone } from 'lucide-react';

export function CTASection() {
    return (
        <section id="Kontakt" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-center lg:items-stretch">
                {/* Left: Headline + contact buttons */}
                <div className="lg:w-1/2 flex flex-col justify-between">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-[#101828] leading-[1.1] tracking-[-0.02em]">
                        Let&apos;s Build<br />
                        Something Great
                    </h2>
                    <div className="mt-6 flex flex-col gap-3">
                        <button
                            type="button"
                            className="w-full sm:w-auto inline-flex items-center gap-2 bg-[#F9FAFB] border border-[#E4E7EC] rounded-full px-4 py-2.5 text-sm font-semibold text-[#101828] hover:border-[#101828] hover:bg-white transition-all"
                        >
                            <Mail className="w-4 h-4 shrink-0" />
                            <span>E-mail address</span>
                        </button>
                        <button
                            type="button"
                            className="w-full sm:w-auto inline-flex items-center gap-2 bg-[#F9FAFB] border border-[#E4E7EC] rounded-full px-4 py-2.5 text-sm font-semibold text-[#101828] hover:border-[#101828] hover:bg-white transition-all"
                        >
                            <Phone className="w-4 h-4 shrink-0" />
                            <span>Phone number</span>
                        </button>
                    </div>
                </div>

                {/* Right: Contact Form Card */}
                <div className="lg:w-1/2 w-full max-w-[480px] lg:max-w-none">
                    <div
                        className="bg-white rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 lg:p-12 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]"
                    >
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="cta-name" className="block text-sm font-bold text-[#101828] mb-2">
                                    Name
                                </label>
                                <input
                                    id="cta-name"
                                    type="text"
                                    placeholder="Ihr voller Name"
                                    className="w-full bg-[#F9FAFB] border border-[#E4E7EC] rounded-xl px-4 py-3.5 text-[#101828] placeholder:text-[#98A2B3] outline-none focus:border-[#101828] focus:ring-1 focus:ring-[#101828]/20 transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="cta-email" className="block text-sm font-bold text-[#101828] mb-2">
                                    E-Mail
                                </label>
                                <input
                                    id="cta-email"
                                    type="email"
                                    placeholder="name@unternehmen.de"
                                    className="w-full bg-[#F9FAFB] border border-[#E4E7EC] rounded-xl px-4 py-3.5 text-[#101828] placeholder:text-[#98A2B3] outline-none focus:border-[#101828] focus:ring-1 focus:ring-[#101828]/20 transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="cta-message" className="block text-sm font-bold text-[#101828] mb-2">
                                    Nachricht
                                </label>
                                <textarea
                                    id="cta-message"
                                    placeholder="Wie können wir Ihnen helfen?"
                                    rows={4}
                                    className="w-full bg-[#F9FAFB] border border-[#E4E7EC] rounded-xl px-4 py-3.5 text-[#101828] placeholder:text-[#98A2B3] outline-none focus:border-[#101828] focus:ring-1 focus:ring-[#101828]/20 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#101828] text-white font-bold rounded-xl py-4 text-[15px] hover:bg-[#0D1421] active:scale-[0.99] transition-all mt-2"
                                style={{
                                    boxShadow: '0px -3px 0px 0px #080808 inset, 0px 1px 0px 0px rgba(255,255,255,0.3) inset, 0px 2.77px 2.21px 0px rgba(0,0,0,0.12), 0px 6.65px 5.32px 0px rgba(0,0,0,0.14), 0px 12.52px 10.02px 0px rgba(0,0,0,0.15)',
                                }}
                            >
                                Projekt anfragen
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
