import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src="/logo.png" alt="AICrmz" className="h-10 w-auto" />
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#features" className="text-slate-600 hover:text-indigo-600 font-medium transition">Features</a>
                        <a href="#use-cases" className="text-slate-600 hover:text-indigo-600 font-medium transition">Use Cases</a>
                        <a href="#pricing" className="text-slate-600 hover:text-indigo-600 font-medium transition">Pricing</a>
                        <a href="https://app.aicrmz.com/" className="text-indigo-600 font-semibold hover:bg-indigo-50 px-4 py-2 rounded-lg transition">Log In</a>
                        <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">Start Free Trial</button>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-slate-600 hover:text-slate-900 p-2">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute w-full bg-white border-b border-slate-100 shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <a href="#features" className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded-md" onClick={toggleMenu}>Features</a>
                        <a href="#use-cases" className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded-md" onClick={toggleMenu}>Use Cases</a>
                        <a href="#pricing" className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded-md" onClick={toggleMenu}>Pricing</a>
                        <div className="pt-4 border-t border-slate-100 mt-2 flex flex-col gap-3">
                            <a href="https://app.aicrmz.com/" className="w-full text-center text-indigo-600 font-semibold py-2">Log In</a>
                            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium shadow-md">Start Free Trial</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
