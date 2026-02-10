import React from 'react';
import { MessageSquare, Users, Phone, Zap, Layers, BarChart3, Mail, Globe } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <MessageSquare className="w-6 h-6 text-indigo-600" />,
            title: "SMS Campaigns",
            description: "Launch bulk or personalized individual SMS campaigns with high deliverability rates."
        },
        {
            icon: <Users className="w-6 h-6 text-indigo-600" />,
            title: "Lead Management CRM",
            description: "Track every interaction, tag leads, and move them through your custom sales pipeline."
        },
        {
            icon: <Phone className="w-6 h-6 text-indigo-600" />,
            title: "Integrated Calling",
            description: "Make and receive calls directly from your browser with call recording and logging."
        },
        {
            icon: <Zap className="w-6 h-6 text-indigo-600" />,
            title: "Automated Workflows",
            description: "Set up drip campaigns and auto-responses to nurture leads while you sleep."
        },
        {
            icon: <Layers className="w-6 h-6 text-indigo-600" />,
            title: "Unified Inbox",
            description: "Manage SMS, Email, and Chat conversations in one single, clutter-free stream."
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-indigo-600" />,
            title: "Analytics Dashboard",
            description: "Visual reports on campaign performance, response rates, and team productivity."
        },
        {
            icon: <Mail className="w-6 h-6 text-indigo-600" />,
            title: "Email Marketing",
            description: "Design beautiful emails and sync them perfectly with your SMS strategies."
        },
        {
            icon: <Globe className="w-6 h-6 text-indigo-600" />,
            title: "Website Widget",
            description: "Capture leads directly from your site and start conversations instantly."
        }
    ];

    return (
        <section id="features" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Powerful Features</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Everything you need to close more deals</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-slate-100 group hover:-translate-y-1">
                            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                {React.cloneElement(feature.icon, { className: "w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" })}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
