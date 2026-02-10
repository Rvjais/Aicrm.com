import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

    const faqs = [
        {
            question: "Can I use my existing business phone number?",
            answer: "Yes! You can port your existing number to AICRM or choose new local/toll-free numbers directly from our dashboard. We support multiple numbers for different team members."
        },
        {
            question: "Is there a limit to how many contacts I can upload?",
            answer: "Our plans scale with you. The Starter plan includes up to 2,000 contacts, while Growth and Enterprise plans offer unlimited contact storage."
        },
        {
            question: "How does the free trial work?",
            answer: "You get full access to the Growth plan for 14 days. No credit card is required to start. You can test SMS campaigns, calling, and automations risk-free."
        },
        {
            question: "Does AICRM integrate with other tools?",
            answer: "Absolutely. We offer native integrations with Zapier, allowing you to connect AICRM to over 3,000+ apps like Shopify, WordPress, and Slack."
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="font-semibold text-slate-900">{faq.question}</span>
                                {activeFaq === index ? <ChevronUp className="text-indigo-600" /> : <ChevronDown className="text-slate-400" />}
                            </button>
                            {activeFaq === index && (
                                <div className="px-6 pb-4 text-slate-600 border-t border-slate-100 pt-2 animate-in slide-in-from-top-2">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
