
import Layout from '@/components/Layout';
import { Shield, Lock, Eye, Database, UserCheck, Globe } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Business descriptions and naming preferences you provide',
        'Usage analytics to improve our name generation algorithms', 
        'Device and browser information for security and optimization',
        'General location data for analytics purposes only'
      ]
    },
    {
      icon: Lock,
      title: 'How We Protect Your Data',
      content: [
        'Industry-standard encryption for all data transmission',
        'Secure cloud storage with regular backups',
        'Regular security audits and vulnerability assessments',
        'Limited access to data by authorized personnel only'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Generate personalized business name suggestions',
        'Improve our AI algorithms and user experience',
        'Provide customer support when requested',
        'Send service updates (with your consent only)'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Privacy Rights',
      content: [
        'Access and download your personal data',
        'Request deletion of your account and data',
        'Control communication preferences',
        'Update or correct your information anytime'
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
            Your privacy matters to us. Learn how we collect, use, and protect your information.
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
            <span>Our Privacy Commitment</span>
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            SmartName AI is committed to protecting your privacy. This Privacy Policy explains 
            how we collect, use, and safeguard your information when you use our business name 
            generation service.
          </p>
          <p className="text-white/70 leading-relaxed">
            By using SmartName AI, you agree to the collection and use of information as 
            described in this policy. We only collect information necessary to provide 
            our services effectively.
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
          <h2 className="text-2xl font-bold text-white mb-4">Data Retention Policy</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            We retain your personal information only as long as necessary to provide our services. 
            When you delete your account, we remove your personal data within 30 days of your request.
          </p>
          <p className="text-white/70 leading-relaxed">
            Some anonymous usage data may be retained for service improvement and legal compliance 
            as required by applicable laws.
          </p>
        </div>

        {/* Contact */}
        <div className="card-gradient p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            If you have questions about this Privacy Policy or how we handle your data, 
            please contact our privacy team.
          </p>
          <div className="space-y-2 text-white/70">
            <p><strong>Email:</strong> privacy@smartnameai.app</p>
            <p><strong>Response Time:</strong> Within 24-48 hours</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
