import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-indigo-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-indigo-200 max-w-xl mx-auto">Choose the plan that fits your business stage. No hidden fees. Change plans anytime.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Starter */}
                    <div className="bg-indigo-800/50 p-8 rounded-2xl border border-indigo-700 backdrop-blur-sm hover:transform hover:scale-105 transition duration-300">
                        <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-bold">$29</span>
                            <span className="text-indigo-300 ml-2">/month</span>
                        </div>
                        <p className="text-indigo-200 mb-6 text-sm">Perfect for solopreneurs getting started with SMS marketing.</p>
                        <button className="w-full py-3 bg-indigo-700 hover:bg-indigo-600 rounded-lg font-semibold transition mb-8">Get Started</button>
                        <ul className="space-y-3 text-sm text-indigo-100">
                            <li className="flex gap-3"><Check size={18} className="text-green-400" /> 1,000 SMS Credits</li>
                            <li className="flex gap-3"><Check size={18} className="text-green-400" /> 1 Phone Number</li>
                            <li className="flex gap-3"><Check size={18} className="text-green-400" /> Basic CRM</li>
                            <li className="flex gap-3"><Check size={18} className="text-green-400" /> Email Support</li>
                        </ul>
                    </div>

                    {/* Pro - Highlighted */}
                    <div className="bg-white p-8 rounded-2xl border-4 border-indigo-500 relative transform md:-translate-y-4 shadow-xl hover:scale-105 transition duration-300 z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">MOST POPULAR</div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Growth</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-bold text-slate-900">$79</span>
                            <span className="text-slate-500 ml-2">/month</span>
                        </div>
                        <p className="text-slate-600 mb-6 text-sm">For growing teams needing automation and calling features.</p>
                        <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition mb-8 shadow-lg shadow-indigo-200">Start Free Trial</button>
                        <ul className="space-y-3 text-sm text-slate-700">
                            <li className="flex gap-3"><Check size={18} className="text-green-500" /> 5,000 SMS Credits</li>
                            <li className="flex gap-3"><Check size={18} className="text-green-500" /> 3 Phone Numbers</li>
                            <li className="flex gap-3"><Check size={18} className="text-green-500" /> Advanced Automations</li>
                            <li className="flex gap-3"><Check size={18} className="text-green-500" /> Power Dialer</li>
                            <li className="flex gap-3"><Check size={18} className="text-green-500" /> Priority Support</li>
                        </ul>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-indigo-800/50 p-8 rounded-2xl border border-indigo-700 backdrop-blur-sm hover:transform hover:scale-105 transition duration-300">
                        <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-bold">Custom</span>
                        </div>
                        <p className="text-indigo-200 mb-6 text-sm">For large organizations requiring scale and custom integrations.</p>
                        <button className="w-full py-3 bg-indigo-700 hover:bg-indigo-600 rounded-lg font-semibold transition mb-8">Contact Sales</button>
                        <ul className="space-y-3 text-sm text-indigo-100">
                            <li className="flex gap-3"><Check size={18} className="text-green-400" /> Unlimited Contacts</li>
                            <li className="flex gap-3"><Check size={18} className="text-green-400" /> Dedicated Account Manager</li>
                            <li className="flex gap-3"><Check size={18} className="text-green-400" /> Custom API Access</li>
                            <li className="flex gap-3"><Check size={18} className="text-green-400" /> White Label Options</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
