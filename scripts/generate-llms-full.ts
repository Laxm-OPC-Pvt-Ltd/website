import { writeFileSync } from 'fs';
import { join } from 'path';
import { getDynamicLLMsFull } from '../src/lib/generateLLMsFull';

/**
 * Build script to generate static llms-full.txt
 * This can be run during build process for static generation
 */
async function generateStaticLLMsFull() {
  try {
    console.log('🔄 Generating dynamic llms-full.txt...');
    
    const { content, lastUpdated } = await getDynamicLLMsFull();
    
    // Write to public directory
    const publicPath = join(process.cwd(), 'public', 'llms-full.txt');
    writeFileSync(publicPath, content, 'utf8');
    
    console.log('✅ llms-full.txt generated successfully!');
    console.log(`📅 Last updated: ${lastUpdated}`);
    console.log(`📍 Path: ${publicPath}`);
    
    // Log content length for verification
    console.log(`📊 Content length: ${content.length} characters`);
    
  } catch (error) {
    console.error('❌ Error generating llms-full.txt:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  generateStaticLLMsFull();
}

export { generateStaticLLMsFull };
