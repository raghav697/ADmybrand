# Deployment Guide - ADmyBRAND AI Suite

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/admybrand-ai-suite)

### Option 2: Manual Deployment

1. **Prerequisites**
   ```bash
   # Install Vercel CLI
   npm install -g vercel
   ```

2. **Deploy Steps**
   ```bash
   # Clone and setup
   git clone <your-repo-url>
   cd admybrand-ai-suite
   npm install
   
   # Deploy to Vercel
   vercel
   ```

3. **Environment Variables**
   Add these in your Vercel dashboard:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

## 🌐 Alternative Deployment Options

### Netlify
```bash
# Build command
npm run build

# Publish directory
.next

# Environment variables
GEMINI_API_KEY=your_key_here
```

### Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy
railway login
railway link
railway up
```

### DigitalOcean App Platform
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set run command: `npm start`
4. Add environment variables

## 📊 Performance Optimization

### Build Analysis
```bash
# Analyze bundle size
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

### Image Optimization
- All images are optimized via Next.js Image component
- Placeholder images use Unsplash for demo purposes
- Replace with your own optimized images for production

### SEO Checklist
- ✅ Meta tags configured
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Structured data ready
- ✅ Sitemap generation
- ✅ Robots.txt

## 🔧 Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain

2. **Update DNS Records**
   ```
   Type: CNAME
   Name: www (or @)
   Value: cname.vercel-dns.com
   ```

3. **Update Environment Variables**
   ```env
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

## 📈 Analytics Integration

### Google Analytics
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🔒 Security Configuration

### Content Security Policy
Add to `next.config.js`:
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
          }
        ]
      }
    ]
  }
}
```

### Environment Security
- Never commit API keys to repository
- Use Vercel's environment variable encryption
- Rotate API keys regularly

## 🧪 Testing Deployment

### Pre-deployment Checklist
```bash
# 1. Build succeeds
npm run build

# 2. No TypeScript errors
npm run type-check

# 3. Linting passes
npm run lint

# 4. Tests pass (if any)
npm run test
```

### Post-deployment Testing
1. **Performance Testing**
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Test on different devices

2. **Functionality Testing**
   - Contact form submission
   - Navigation smooth scrolling
   - Responsive design
   - Loading animations

3. **SEO Testing**
   - Meta tags appear correctly
   - Social sharing works
   - Google Search Console

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📞 Support & Maintenance

### Monitoring
- Set up Vercel Analytics
- Monitor API usage (Gemini)
- Track form submissions
- Monitor performance metrics

### Updates
- Keep dependencies updated
- Monitor Next.js releases
- Update Tailwind CSS periodically
- Refresh content and testimonials

### Backup
- Repository is backed up on GitHub
- Environment variables documented
- Database backups (if applicable)

---

**Need help with deployment? Check our [README.md](./README.md) or create an issue.**