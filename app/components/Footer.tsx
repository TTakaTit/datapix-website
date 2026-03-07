export function Footer() {
    return (
        <footer className="w-full px-2 sm:px-3 pb-3">
            <div className="bg-[#f8f9fa] border border-gray-200 rounded-[32px] sm:rounded-[40px] py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">

                    <div className="text-3xl font-black tracking-tighter text-[#101828]">
                        Datapix<span className="text-blue-500">.</span>
                    </div>

                    <div className="flex gap-4">
                        {/* Small social / link pills */}
                        <a href="#" className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-bold hover:shadow-sm transition-shadow">
                            LinkedIn
                        </a>
                        <a href="#" className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-bold hover:shadow-sm transition-shadow">
                            Instagram
                        </a>
                        <a href="#" className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-bold hover:shadow-sm transition-shadow">
                            GitHub
                        </a>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium pt-8 border-t border-gray-200">
                    <p>© {new Date().getFullYear()} Datapix Tech Company. Alle Rechte vorbehalten.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-900 transition-colors">Impressum</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Datenschutz</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">AGB</a>
                    </div>
                </div>

                </div>
            </div>
        </footer>
    );
}
