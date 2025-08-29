
import Layout from '@/components/Layout';
import { FileText, Scale, AlertTriangle, CheckCircle, Users, Globe } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      icon: Users,
      title: 'Acceptance of Terms',
      content: 'By accessing and using SmartName AI, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      icon: CheckCircle,
      title: 'Use License',
      content: 'Permission is granted to temporarily use SmartName AI for personal and commercial name generation purposes. This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.'
    },
    {
      icon: AlertTriangle,
      title: 'Prohibited Uses',
      content: 'You may not use SmartName AI to generate names for illegal activities, hate speech, harmful content, or to infringe on existing trademarks. We reserve the right to refuse service for any prohibited use.'
    },
    {
      icon: Globe,
      title: 'Intellectual Property',
      content: 'Generated names are provided as suggestions only. You are responsible for conducting trademark searches and ensuring legal availability. SmartName AI does not guarantee the legal availability of any generated names.'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Scale className="w-16 h-16 text-brand-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Terms of Service</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using SmartName AI.
          </p>
        </div>

        {/* Last Updated */}
        <div className="card-glass p-4 mb-8 text-center">
          <p className="text-white/60">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <div className="card-gradient p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
            <FileText className="w-6 h-6 text-brand-primary" />
            <span>Agreement Overview</span>
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            These Terms of Service ("Terms") govern your use of SmartName AI ("Service") 
            operated by SmartName AI ("us", "we", or "our"). By using our Service, 
            you agree to these terms.
          </p>
          <p className="text-white/70 leading-relaxed">
            We reserve the right to update these terms at any time. Changes will be 
            effective immediately upon posting. Your continued use of the Service 
            constitutes acceptance of any changes.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6 mb-8">
          {sections.map((section, index) => (
            <div key={index} className="card-glass p-6">
              <div className="flex items-center space-x-3 mb-4">
                <section.icon className="w-6 h-6 text-brand-primary" />
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              <p className="text-white/70 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Service Availability */}
        <div className="card-gradient p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
          <div className="space-y-4 text-white/80">
            <p className="leading-relaxed">
              We strive to maintain 99.9% uptime, but we do not guarantee uninterrupted access 
              to our services. Scheduled maintenance will be announced in advance when possible.
            </p>
            <p className="leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any aspect of the service 
              at any time, with or without notice.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="card-glass p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <span>Important Disclaimer</span>
          </h2>
          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4">
            <p className="text-white/80 leading-relaxed">
              <strong>Trademark Responsibility:</strong> SmartName AI generates name suggestions 
              based on your input. We do not conduct trademark searches or guarantee the legal 
              availability of any names. You are solely responsible for conducting proper 
              trademark research before using any generated names commercially.
            </p>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="card-gradient p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            In no event shall SmartName AI be liable for any indirect, incidental, special, 
            consequential, or punitive damages, including without limitation, loss of profits, 
            data, use, goodwill, or other intangible losses.
          </p>
          <p className="text-white/70 leading-relaxed">
            Our liability is limited to the amount you paid for the service in the 12 months 
            preceding the claim, or $100, whichever is less.
          </p>
        </div>

        {/* Governing Law */}
        <div className="card-glass p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Governing Law</h2>
          <p className="text-white/70 leading-relaxed">
            These Terms shall be interpreted and governed by the laws of the jurisdiction 
            in which SmartName AI operates, without regard to its conflict of law provisions.
          </p>
        </div>

        {/* Contact */}
        <div className="card-gradient p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            If you have any questions about these Terms of Service, please contact us.
          </p>
          <div className="space-y-2 text-white/70">
            <p><strong>Email:</strong> legal@smartnameai.com</p>
            <p><strong>Response Time:</strong> Within 48 hours</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
