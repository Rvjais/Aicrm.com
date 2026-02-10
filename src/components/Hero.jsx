import React, { useEffect, useRef } from 'react';
import { ArrowRight, Smartphone } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const buttonsRef = useRef(null);
    const dashboardRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 0.2 }
        )
            .fromTo(textRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1 },
                "-=0.6"
            )
            .fromTo(buttonsRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8 },
                "-=0.6"
            )
            .fromTo(dashboardRef.current,
                { opacity: 0, y: 100, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'back.out(1.7)' },
                "-=0.4"
            );
    }, []);

    return (
        <section ref={heroRef} className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-100 animate-fade-in-up">
                    <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
                    New: AI-Powered Response Suggestions
                </div>
                <h1 ref={titleRef} className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                    Unified Customer Communication <br className="hidden md:block" /> & Relationship Management
                </h1>
                <p ref={textRef} className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10">
                    Stop juggling five different apps. Manage leads, send SMS campaigns, make calls, and automate workflows from one powerful, easy-to-use dashboard.
                </p>
                <div ref={buttonsRef} className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 group">
                        Start Free Trial <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition flex items-center justify-center gap-2">
                        <Smartphone size={20} /> Book a Demo
                    </button>
                </div>

                {/* Dashboard Mockup */}
                <div ref={dashboardRef} className="relative mx-auto max-w-5xl">
                    <div className="bg-slate-900 rounded-2xl shadow-2xl p-2 sm:p-4 border border-slate-800 transform transition-transform hover:scale-[1.01] duration-500">
                        <div className="bg-slate-800 rounded-xl overflow-hidden aspect-[16/9] relative">
                            {/* Abstract UI representation */}
                            <div className="absolute inset-0 bg-slate-50 flex">
                                {/* Sidebar */}
                                <div className="w-16 md:w-64 bg-white border-r border-slate-200 hidden sm:flex flex-col p-4 gap-4">
                                    <div className="h-8 w-32 bg-slate-100 rounded mb-4"></div>
                                    <div className="space-y-3">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className="h-8 w-full bg-slate-50 rounded flex items-center gap-3 px-2">
                                                <div className="w-4 h-4 rounded-full bg-slate-200"></div>
                                                <div className="h-2 w-20 bg-slate-200 rounded"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Main Content */}
                                <div className="flex-1 p-6 bg-slate-50">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                        <div className="bg-white p-4 rounded-lg shadow-sm h-32 border border-slate-100 flex flex-col justify-between">
                                            <div className="h-4 w-24 bg-indigo-100 rounded mb-2"></div>
                                            <div className="h-10 w-16 bg-indigo-600 rounded opacity-20 self-end"></div>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-sm h-32 border border-slate-100 flex flex-col justify-between">
                                            <div className="h-4 w-24 bg-green-100 rounded mb-2"></div>
                                            <div className="h-10 w-16 bg-green-600 rounded opacity-20 self-end"></div>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-sm h-32 border border-slate-100 flex flex-col justify-between">
                                            <div className="h-4 w-24 bg-orange-100 rounded mb-2"></div>
                                            <div className="h-10 w-16 bg-orange-600 rounded opacity-20 self-end"></div>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-sm h-64 border border-slate-100 p-4">
                                        <div className="flex justify-between mb-4">
                                            <div className="h-6 w-32 bg-slate-100 rounded"></div>
                                            <div className="h-8 w-24 bg-indigo-600 rounded text-white text-xs flex items-center justify-center">New Campaign</div>
                                        </div>
                                        <div className="space-y-3">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="flex items-center justify-between p-3 border-b border-slate-50 last:border-0">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                                                        <div>
                                                            <div className="h-3 w-24 bg-slate-200 rounded mb-1"></div>
                                                            <div className="h-2 w-16 bg-slate-100 rounded"></div>
                                                        </div>
                                                    </div>
                                                    <div className="h-6 w-16 bg-green-100 rounded-full"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Decorative blobs */}
                    <div className="absolute top-1/2 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-1/2 -right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
