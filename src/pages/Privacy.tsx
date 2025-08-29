
import Layout from '@/components/Layout';
import { Shield, Lock, Eye, Database, UserCheck, Globe } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Business descriptions and naming preferences you provide',
        'Usage analytics to improve our AI models',
        'Device and browser information for security purposes',
        'IP address for fraud prevention and analytics'
      ]
    },
    {
      icon: Lock,
      title: 'How We Protect Your Data',
      content: [
        'End-to-end encryption for all data transmission',
        'Secure cloud storage with industry-standard protocols',
        'Regular security audits and vulnerability assessments',
        'Limited access to personal data by authorized personnel only'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Information',
      content: [
        'Generate personalized business name suggestions',
        'Improve our AI algorithms and user experience',
        'Provide customer support when needed',
        'Send important updates about our service (opt-in only)'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        'Access and download your personal data',
        'Request deletion of your account and data',
        'Opt-out of non-essential communications',
        'Update or correct your information at any time'
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-brand-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Your privacy is our priority. Learn how we collect, use, and protect your information.
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
            <Globe className="w-6 h-6 text-brand-primary" />
            <span>Our Commitment to Privacy</span>
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            At SmartName AI, we believe that privacy is a fundamental right. This Privacy Policy 
            explains how we collect, use, disclose, and safeguard your information when you use 
            our business name generation service.
          </p>
          <p className="text-white/70 leading-relaxed">
            By using SmartName AI, you agree to the collection and use of information in accordance 
            with this policy. We will not use or share your information except as described in this policy.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-6 mb-8">
          {sections.map((section, index) => (
            <div key={index} className="card-glass p-6">
              <div className="flex items-center space-x-3 mb-4">
                <section.icon className="w-6 h-6 text-brand-primary" />
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-white/70 leading-relaxed flex items-start space-x-2">
                    <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Data Retention */}
        <div className="card-gradient p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            We retain your personal information only for as long as necessary to provide our services 
            and fulfill the purposes outlined in this privacy policy. When you delete your account, 
            we will delete your personal data within 30 days.
          </p>
          <p className="text-white/70 leading-relaxed">
            Some information may be retained for legal compliance, fraud prevention, or legitimate 
            business purposes as required by law.
          </p>
        </div>

        {/* International Users */}
        <div className="card-glass p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">International Users</h2>
          <p className="text-white/70 leading-relaxed">
            SmartName AI operates globally and complies with international privacy regulations 
            including GDPR, CCPA, and other applicable privacy laws. Your data may be processed 
            in countries other than your own, but always with the same level of protection.
          </p>
        </div>

        {/* Contact */}
        <div className="card-gradient p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            If you have any questions about this Privacy Policy or how we handle your data, 
            please don't hesitate to contact us.
          </p>
          <div className="space-y-2 text-white/70">
            <p><strong>Email:</strong> privacy@smartnameai.com</p>
            <p><strong>Response Time:</strong> Within 48 hours</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
