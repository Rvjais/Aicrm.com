import React from 'react';

const SocialProof = () => {
    return (
        <section className="py-10 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Trusted by forward-thinking companies</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-60">
                    {/* Logo Placeholders */}
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><div className="w-6 h-6 bg-slate-800 rounded"></div>Acme Corp</div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><div className="w-6 h-6 bg-slate-800 rounded-full"></div>GlobalTech</div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><div className="w-6 h-6 bg-slate-800 rotate-45"></div>Nebula</div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><div className="w-6 h-6 border-4 border-slate-800 rounded-full"></div>CircleInc</div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><div className="w-6 h-6 bg-slate-800 rounded-tl-lg rounded-br-lg"></div>SquareUp</div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
