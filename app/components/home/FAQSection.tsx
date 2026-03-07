'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'Wie viel kostet eine neue Website?',
        answer: 'Die Kosten richten sich nach dem Umfang, den gewünschten Funktionen und dem individuellen Design. Nach einem kostenfreien Erstgespräch erstellen wir Ihnen gerne ein transparentes und verbindliches Angebot.'
    },
    {
        question: 'Wie lange dauert die Umsetzung?',
        answer: 'Für eine klassische Unternehmenswebsite planen wir in der Regel 4 bis 8 Wochen ein. Bei komplexeren Web-Applikationen oder E-Commerce Plattformen kann die Entwicklung je nach Anforderung länger dauern.'
    },
    {
        question: 'Was passiert nach dem Launch?',
        answer: 'Wir lassen Sie nicht allein. Nach dem Launch bieten wir umfassenden Support, regelmäßige Wartung und kümmern uns um die kontinuierliche Optimierung und Sicherheit Ihrer Systeme.'
    },
    {
        question: 'Sind alle Systeme DSGVO-konform?',
        answer: 'Ja, absoluter Datenschutz und IT-Sicherheit sind elementare Bestandteile unserer Entwicklung. Alle von uns erstellten Lösungen entsprechen zu 100% den aktuellen Anforderungen der DSGVO.'
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="FAQ" className="w-full">
            <div className="bg-[#f8f9fa] rounded-[32px] sm:rounded-[40px] py-24 overflow-hidden border border-gray-200/50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">

                <h2 className="text-4xl font-bold text-[#101828] mb-12">FAQ</h2>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`border bg-white rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-gray-200 shadow-sm' : 'border-gray-100'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full px-6 py-5 flex justify-between items-center text-left"
                                >
                                    <span className="font-bold text-[#101828] text-lg">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="text-gray-500 font-medium text-left">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                </div>
            </div>
        </section>
    );
}
