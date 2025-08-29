
// AI Name Generator Service using Hugging Face API
export interface GenerateNamesParams {
  description: string;
  industry?: string;
  style?: string;
  keywords?: string[];
}

export interface GeneratedName {
  name: string;
  score?: number;
}

class NameGeneratorService {
  private apiKey = "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";
  private baseUrl = "https://api-inference.huggingface.co/models";

  async generateNames(params: GenerateNamesParams): Promise<GeneratedName[]> {
    try {
      // Create a comprehensive prompt for name generation
      const prompt = this.createPrompt(params);
      
      // Use a text generation model for creative naming
      const response = await fetch(`${this.baseUrl}/gpt2`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 200,
            temperature: 0.8,
            do_sample: true,
            num_return_sequences: 1,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Extract and clean up the generated names
      const generatedText = data[0]?.generated_text || "";
      const names = this.extractNames(generatedText, params);
      
      return names.slice(0, 12); // Return up to 12 names
    } catch (error) {
      console.error("Error generating names:", error);
      
      // Fallback: return some creative names based on the input
      return this.getFallbackNames(params);
    }
  }

  private createPrompt(params: GenerateNamesParams): string {
    const { description, industry, style, keywords } = params;
    
    let prompt = `Generate creative business names for: ${description}`;
    
    if (industry) {
      prompt += `\nIndustry: ${industry}`;
    }
    
    if (style) {
      prompt += `\nStyle: ${style}`;
    }
    
    if (keywords && keywords.length > 0) {
      prompt += `\nKeywords: ${keywords.join(", ")}`;
    }
    
    prompt += "\n\nCreative business names:\n1.";
    
    return prompt;
  }

  private extractNames(text: string, params: GenerateNamesParams): GeneratedName[] {
    // Try to extract names from the generated text
    const lines = text.split('\n');
    const names: GeneratedName[] = [];
    
    for (const line of lines) {
      const cleaned = line.replace(/^\d+\.?\s*/, '').trim();
      if (cleaned && cleaned.length > 2 && cleaned.length < 50) {
        // Clean up the name (remove extra punctuation, etc.)
        const name = cleaned.replace(/[^\w\s&.-]/g, '').trim();
        if (name && !names.some(n => n.name.toLowerCase() === name.toLowerCase())) {
          names.push({ name, score: Math.random() });
        }
      }
    }
    
    // If we didn't get enough names, add some fallback names
    if (names.length < 6) {
      const fallbackNames = this.getFallbackNames(params);
      names.push(...fallbackNames.slice(0, 12 - names.length));
    }
    
    return names;
  }

  private getFallbackNames(params: GenerateNamesParams): GeneratedName[] {
    const { description, industry, keywords } = params;
    
    // Generate creative combinations based on input
    const prefixes = ["Smart", "Pro", "Next", "Elite", "Prime", "Nova", "Apex", "Spark", "Flux", "Zen"];
    const suffixes = ["Hub", "Lab", "Works", "Pro", "Studio", "Solutions", "Tech", "Dynamics", "Systems", "Group"];
    const connectors = ["", ".", "&", "-", " "];
    
    const names: GeneratedName[] = [];
    
    // Use keywords if available
    const baseWords = keywords && keywords.length > 0 
      ? keywords 
      : description.split(' ').filter(word => word.length > 3);
    
    // Generate combinations
    for (let i = 0; i < Math.min(6, prefixes.length); i++) {
      const prefix = prefixes[i];
      const suffix = suffixes[i % suffixes.length];
      const connector = connectors[i % connectors.length];
      
      if (baseWords.length > 0) {
        const baseWord = baseWords[i % baseWords.length];
        const capitalizedBase = baseWord.charAt(0).toUpperCase() + baseWord.slice(1).toLowerCase();
        names.push({ 
          name: `${prefix}${connector}${capitalizedBase}`, 
          score: Math.random() 
        });
        names.push({ 
          name: `${capitalizedBase}${connector}${suffix}`, 
          score: Math.random() 
        });
      } else {
        names.push({ 
          name: `${prefix}${connector}${suffix}`, 
          score: Math.random() 
        });
      }
    }
    
    // Add some industry-specific names if industry is provided
    if (industry) {
      const industryWords = industry.split(' ');
      industryWords.forEach((word, index) => {
        if (word.length > 3 && index < 3) {
          const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          names.push({ 
            name: `${prefixes[index % prefixes.length]} ${capitalizedWord}`, 
            score: Math.random() 
          });
        }
      });
    }
    
    return names.slice(0, 12);
  }
}

export const nameGeneratorService = new NameGeneratorService();
