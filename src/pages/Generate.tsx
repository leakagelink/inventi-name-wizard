import { useState } from 'react';
import { Sparkles, Wand2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/Layout';
import NameCard from '@/components/NameCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { nameGeneratorService, GeneratedName } from '@/services/nameGenerator';
import { useFavorites } from '@/hooks/useFavorites';
import { toast } from '@/hooks/use-toast';

const Generate = () => {
  const [description, setDescription] = useState('');
  const [industry, setIndustry] = useState('');
  const [style, setStyle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [generatedNames, setGeneratedNames] = useState<GeneratedName[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education',
    'Food & Beverage', 'Fashion', 'Real Estate', 'Consulting', 'Marketing',
    'Entertainment', 'Sports', 'Travel', 'Automotive', 'Beauty & Wellness'
  ];

  const styles = [
    'Modern', 'Professional', 'Creative', 'Minimalist', 'Playful',
    'Corporate', 'Trendy', 'Classic', 'Tech-savvy', 'Elegant'
  ];

  const handleGenerate = async () => {
    if (!description.trim()) {
      toast({
        title: "Description required",
        description: "Please provide a description of your business.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const keywordArray = keywords.split(',').map(k => k.trim()).filter(k => k);
      
      const names = await nameGeneratorService.generateNames({
        description: description.trim(),
        industry: industry || undefined,
        style: style || undefined,
        keywords: keywordArray.length > 0 ? keywordArray : undefined,
      });

      setGeneratedNames(names);
      
      toast({
        title: "Names generated!",
        description: `Generated ${names.length} unique business names for you.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate names. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Generate Business Names</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Describe your business and get AI-powered name suggestions instantly
          </p>
        </div>

        {/* Trademark Disclaimer */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="card-glass p-4 border-l-4 border-yellow-400">
            <p className="text-white/80 text-sm">
              <strong>⚠️ Important:</strong> Generated names are suggestions only. Please verify trademark availability before commercial use.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="card-gradient p-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-white/80 font-medium mb-2">
                  Business Description *
                </label>
                <Textarea
                  placeholder="Describe your business in detail... (e.g., A modern fitness app for yoga enthusiasts)"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder-white/50 min-h-[100px]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 font-medium mb-2">
                    Industry
                  </label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select industry (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((ind) => (
                        <SelectItem key={ind} value={ind}>
                          {ind}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-white/80 font-medium mb-2">
                    Style
                  </label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select style (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {styles.map((st) => (
                        <SelectItem key={st} value={st}>
                          {st}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-white/80 font-medium mb-2">
                  Keywords
                </label>
                <Input
                  placeholder="Enter keywords separated by commas (e.g., smart, tech, solutions)"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder-white/50"
                />
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !description.trim()}
              className="btn-hero w-full"
            >
              <Search className="w-5 h-5 mr-2" />
              {isGenerating ? 'Generating Names...' : 'Generate Names'}
            </Button>
          </div>
        </div>

        {isGenerating && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="card-glass">
              <LoadingSpinner text="Creating amazing names for your business..." />
            </div>
          </div>
        )}

        {generatedNames.length > 0 && !isGenerating && (
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-brand-primary" />
                <span>Generated Names ({generatedNames.length})</span>
              </h3>
              <Button
                onClick={handleGenerate}
                variant="outline"
                className="btn-ghost"
                disabled={isGenerating}
              >
                Generate More
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
              {generatedNames.map((nameObj, index) => (
                <div key={`${nameObj.name}-${index}`} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <NameCard
                    name={nameObj.name}
                    onToggleFavorite={toggleFavorite}
                    isFavorite={isFavorite(nameObj.name)}
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                onClick={handleGenerate}
                className="btn-hero"
                disabled={isGenerating}
              >
                <Wand2 className="w-5 h-5 mr-2" />
                Generate More Names
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Generate;
