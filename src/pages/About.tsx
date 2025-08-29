
import Layout from '@/components/Layout';
import { Sparkles, Target, Users, Zap, Award, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Generation',
      description: 'Advanced AI algorithms create unique, memorable business names tailored to your industry and style.'
    },
    {
      icon: Target,
      title: 'Industry-Specific',
      description: 'Get names that perfectly match your business sector with our comprehensive industry database.'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Generate dozens of creative names in seconds, saving you hours of brainstorming time.'
    },
    {
      icon: Users,
      title: 'Entrepreneur-Friendly',
      description: 'Built specifically for startups, small businesses, and entrepreneurs looking for the perfect brand name.'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Names Generated' },
    { number: '1K+', label: 'Happy Users' },
    { number: '25+', label: 'Industries Covered' },
    { number: '24/7', label: 'Available' }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">SmartName AI</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to help entrepreneurs and businesses find the perfect name 
            that captures their vision and resonates with their audience.
          </p>
        </div>

        {/* Trademark Disclaimer */}
        <div className="card-glass p-6 mb-12 border-l-4 border-yellow-400">
          <h3 className="text-lg font-bold text-white mb-3 flex items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            Important Legal Notice
          </h3>
          <p className="text-white/80 leading-relaxed">
            <strong>Trademark Disclaimer:</strong> SmartName AI generates name suggestions 
            based on your input but does not conduct trademark searches. You are solely 
            responsible for verifying the legal availability of any names before commercial use.
          </p>
        </div>

        {/* Mission */}
        <div className="card-gradient p-8 mb-12">
          <div className="text-center mb-8">
            <Award className="w-12 h-12 text-brand-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Finding the right business name shouldn't be a barrier to starting your dream company. 
              SmartName AI democratizes the creative process by making professional-quality name 
              generation accessible to everyone, regardless of budget or experience.
            </p>
            <p className="text-white/70 leading-relaxed">
              Our AI-powered platform combines creativity with market intelligence to suggest 
              names that are not just unique, but strategically positioned for success in your industry.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose SmartName AI?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card-glass p-6 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-10 h-10 text-brand-primary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="card-gradient p-8 mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Trusted by Entrepreneurs Worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology */}
        <div className="card-glass p-8 text-center">
          <Globe className="w-12 h-12 text-brand-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Powered by Advanced AI</h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
            SmartName AI leverages cutting-edge language models and machine learning algorithms 
            to understand your business context and generate names that are not only creative 
            but also strategically sound for your market positioning.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
