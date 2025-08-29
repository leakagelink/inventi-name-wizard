
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
    console.log("Generating names with params:", params);
    
    try {
      // Create a comprehensive prompt for name generation
      const prompt = this.createPrompt(params);
      console.log("Generated prompt:", prompt);
      
      // Try multiple models for better results
      const models = [
        "microsoft/DialoGPT-medium",
        "gpt2",
        "distilgpt2"
      ];
      
      let response;
      let modelUsed = "";
      
      for (const model of models) {
        try {
          modelUsed = model;
          response = await fetch(`${this.baseUrl}/${model}`, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${this.apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              inputs: prompt,
              parameters: {
                max_new_tokens: 150,
                temperature: 0.9,
                do_sample: true,
                num_return_sequences: 1,
                pad_token_id: 50256,
              },
            }),
          });
          
          console.log(`Trying model ${model}, response status:`, response.status);
          
          if (response.ok) {
            break;
          } else {
            const errorText = await response.text();
            console.log(`Model ${model} failed:`, errorText);
          }
        } catch (error) {
          console.log(`Model ${model} error:`, error);
          continue;
        }
      }

      if (!response || !response.ok) {
        console.log("All models failed, using fallback names");
        return this.getFallbackNames(params);
      }

      const data = await response.json();
      console.log("API response:", data);
      
      // Extract and clean up the generated names
      const generatedText = data[0]?.generated_text || "";
      console.log("Generated text:", generatedText);
      
      const names = this.extractNames(generatedText, params);
      console.log("Extracted names:", names);
      
      return names.length > 0 ? names.slice(0, 12) : this.getFallbackNames(params);
    } catch (error) {
      console.error("Error generating names:", error);
      return this.getFallbackNames(params);
    }
  }

  private createPrompt(params: GenerateNamesParams): string {
    const { description, industry, style, keywords } = params;
    
    // Create a multilingual-friendly prompt
    let prompt = `Create unique business names for: ${description}`;
    
    if (industry) {
      prompt += `\nIndustry: ${industry}`;
    }
    
    if (style) {
      prompt += `\nStyle: ${style}`;
    }
    
    if (keywords && keywords.length > 0) {
      prompt += `\nKeywords: ${keywords.join(", ")}`;
    }
    
    prompt += "\n\nBusiness name suggestions:\n1.";
    
    return prompt;
  }

  private extractNames(text: string, params: GenerateNamesParams): GeneratedName[] {
    console.log("Extracting names from text:", text);
    
    // Try to extract names from the generated text
    const lines = text.split('\n');
    const names: GeneratedName[] = [];
    
    for (const line of lines) {
      // Clean up the line and extract potential names
      let cleaned = line.replace(/^\d+[\.\)\-\:]\s*/, '').trim();
      cleaned = cleaned.replace(/^[\-\*\•]\s*/, '').trim();
      
      if (cleaned && cleaned.length > 2 && cleaned.length < 60) {
        // Clean up the name (remove extra punctuation, etc.)
        const name = cleaned.replace(/[^\w\s&.\-']/g, '').trim();
        if (name && name.length > 1 && !names.some(n => n.name.toLowerCase() === name.toLowerCase())) {
          names.push({ name, score: Math.random() });
          if (names.length >= 12) break;
        }
      }
    }
    
    console.log("Extracted names count:", names.length);
    return names;
  }

  private getFallbackNames(params: GenerateNamesParams): GeneratedName[] {
    const { description, industry, keywords } = params;
    console.log("Generating fallback names for:", params);
    
    // Enhanced fallback names with multilingual support
    const prefixes = ["Smart", "Pro", "Elite", "Prime", "Nova", "Apex", "Spark", "Quick", "Best", "Top", "Super", "Max"];
    const suffixes = ["Hub", "Zone", "Pro", "Studio", "Works", "Lab", "Point", "Center", "Solutions", "Services", "Group", "Co"];
    const connectors = ["", " ", "-", "&"];
    
    const names: GeneratedName[] = [];
    
    // Extract key words from description for multilingual support
    const descWords = description.split(/\s+/).filter(word => 
      word.length > 2 && !['the', 'and', 'for', 'with', 'मेरे', 'के', 'लिए', 'है', 'में'].includes(word.toLowerCase())
    );
    
    // Use keywords if available, otherwise use description words
    const baseWords = keywords && keywords.length > 0 ? keywords : descWords.slice(0, 3);
    
    // Generate creative combinations
    for (let i = 0; i < Math.min(8, prefixes.length); i++) {
      const prefix = prefixes[i];
      const suffix = suffixes[i % suffixes.length];
      const connector = connectors[i % connectors.length];
      
      if (baseWords.length > 0) {
        const baseWord = baseWords[i % baseWords.length];
        const capitalizedBase = this.capitalizeWord(baseWord);
        
        names.push({ 
          name: `${prefix}${connector}${capitalizedBase}`, 
          score: Math.random() 
        });
        
        if (names.length < 12) {
          names.push({ 
            name: `${capitalizedBase}${connector}${suffix}`, 
            score: Math.random() 
          });
        }
      }
      
      if (names.length < 12) {
        names.push({ 
          name: `${prefix}${connector}${suffix}`, 
          score: Math.random() 
        });
      }
    }
    
    // Add some industry-specific names
    if (industry && names.length < 12) {
      const industryWords = industry.split(' ').filter(word => word.length > 3);
      industryWords.forEach((word, index) => {
        if (names.length < 12) {
          const capitalizedWord = this.capitalizeWord(word);
          names.push({ 
            name: `${prefixes[index % prefixes.length]} ${capitalizedWord}`, 
            score: Math.random() 
          });
        }
      });
    }
    
    console.log("Generated fallback names:", names);
    return names.slice(0, 12);
  }
  
  private capitalizeWord(word: string): string {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}

export const nameGeneratorService = new NameGeneratorService();
