const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
    try {
        console.log('🚀 Starting PDF generation...');
        
        // Launch browser
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // Read the HTML file
        const htmlPath = path.join(__dirname, 'Zardron_Pesquera_Resume.html');
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        
        // Set content and wait for fonts to load
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
        
        // Wait a bit more for any remaining resources
        await page.waitForTimeout(2000);
        
        // Generate PDF
        const pdfPath = path.join(__dirname, 'Zardron_Pesquera_Resume.pdf');
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            margin: {
                top: '0.5in',
                right: '0.5in',
                bottom: '0.5in',
                left: '0.5in'
            },
            printBackground: true,
            preferCSSPageSize: true
        });
        
        console.log('✅ PDF generated successfully!');
        console.log(`📄 File saved as: ${pdfPath}`);
        
        await browser.close();
        
    } catch (error) {
        console.error('❌ Error generating PDF:', error);
        process.exit(1);
    }
}

// Check if Puppeteer is installed
try {
    require.resolve('puppeteer');
    generatePDF();
} catch (e) {
    console.log('📦 Puppeteer not found. Installing...');
    console.log('💡 Run: npm install puppeteer');
    console.log('💡 Then run: node generate-pdf.js');
}
