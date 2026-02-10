import React from 'react';
import { Users, Zap, Shield, Check } from 'lucide-react';

const UseCases = () => {
    return (
        <section id="use-cases" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Built for your entire team</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 transition bg-slate-50 hover:shadow-lg duration-300">
                        <div className="mb-4 text-indigo-600"><Users size={32} /></div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">For Sales Teams</h3>
                        <p className="text-slate-600 mb-4">Never miss a lead. Get instant notifications, click-to-dial, and automated follow-up sequences that double your connection rate.</p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex gap-2"><Check size={16} className="text-green-500" /> Power Dialer</li>
                            <li className="flex gap-2"><Check size={16} className="text-green-500" /> Pipeline Management</li>
                        </ul>
                    </div>
                    <div className="p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 transition bg-slate-50 hover:shadow-lg duration-300">
                        <div className="mb-4 text-purple-600"><Zap size={32} /></div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">For Marketers</h3>
                        <p className="text-slate-600 mb-4">Launch high-converting SMS and email campaigns. Segment your audience based on behavior and track ROI in real-time.</p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex gap-2"><Check size={16} className="text-green-500" /> Bulk SMS Broadcasting</li>
                            <li className="flex gap-2"><Check size={16} className="text-green-500" /> Visual Automations</li>
                        </ul>
                    </div>
                    <div className="p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 transition bg-slate-50 hover:shadow-lg duration-300">
                        <div className="mb-4 text-blue-600"><Shield size={32} /></div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">For Business Owners</h3>
                        <p className="text-slate-600 mb-4">Gain full visibility into your business. Monitor team performance, call quality, and revenue growth from one dashboard.</p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex gap-2"><Check size={16} className="text-green-500" /> Staff Activity Reports</li>
                            <li className="flex gap-2"><Check size={16} className="text-green-500" /> Centralized Billing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseCases;
