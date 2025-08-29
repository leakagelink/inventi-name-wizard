
import { Settings as SettingsIcon, Info, Shield, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Settings = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Settings</span>
          </h1>
          <p className="text-white/70">
            App information and settings
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          <Link to="/about" className="block">
            <div className="card-glass p-6 hover:border-white/20 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <Info className="w-6 h-6 text-brand-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-white">About</h3>
                  <p className="text-white/60">Learn more about SmartName AI</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/privacy" className="block">
            <div className="card-glass p-6 hover:border-white/20 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <Shield className="w-6 h-6 text-brand-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Privacy Policy</h3>
                  <p className="text-white/60">How we protect your data</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/terms" className="block">
            <div className="card-glass p-6 hover:border-white/20 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <FileText className="w-6 h-6 text-brand-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Terms of Service</h3>
                  <p className="text-white/60">Terms and conditions</p>
                </div>
              </div>
            </div>
          </Link>

          <div className="card-glass p-6 mt-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">SmartName AI</h3>
              <p className="text-white/60 text-sm">Version 1.0.0</p>
              <p className="text-white/60 text-sm mt-2">
                AI-Powered Business Name Generator
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
