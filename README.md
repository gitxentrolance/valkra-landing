# Valkra Landing Page

Comprehensive marketing website for Valkra - AI-powered smart contract security analysis platform.

## Overview

Modern, production-ready landing page showcasing:
- 8-step validation pipeline
- Multi-LLM ensemble validation (patent-pending)
- Quantum-resistant security architecture
- 35+ blockchain coverage
- Technical capabilities and features
- Pricing tiers and use cases

## Tech Stack

- **Framework**: Next.js 15.5.3 with Turbopack
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Forms**: Formspree integration

## Features

✅ Sticky navigation  
✅ Responsive design  
✅ Interactive tabs (blockchain/language/framework showcase)  
✅ FAQ with expandable sections  
✅ Multiple CTAs and email capture  
✅ Modern dark theme with gradients  
✅ Optimized performance (15.7 kB page size)  

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Structure

```
src/
  pages/
    index.tsx         # Main landing page (comprehensive)
    _app.tsx          # App wrapper
    _document.tsx     # Document template
    api/
      hello.ts        # Example API route
  styles/
    globals.css       # Global styles
```

## Sections

1. **Hero** - Main value proposition with email capture
2. **Trust Bar** - Key metrics ($7B lost, 70% reduction in false positives)
3. **8-Step Pipeline** - Detailed analysis workflow
4. **Multi-LLM Ensemble** - Patent-pending AI validation
5. **Security** - Quantum-resistant architecture
6. **Coverage** - 35+ chains, 27+ languages, 45 frameworks
7. **Technology** - Rust backend, distributed workers
8. **Use Cases** - Developers, DeFi, Audit firms
9. **Pricing** - Free, Professional, Enterprise tiers
10. **FAQ** - Common questions
11. **Final CTA** - Email capture with benefits
12. **Footer** - Links and copyright

## Forms

Two Formspree-integrated forms:
- Waitlist: `https://formspree.io/f/mzzanvel`
- Contact: `https://formspree.io/f/xldwqlba`

Submissions go to: `support@xentrolance.com`

## Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
vercel

# Or via GitHub integration
# Push to main → Auto-deploy
```

### Docker

```bash
# Build image
docker build -t valkra-landing .

# Run container
docker run -p 3000:3000 valkra-landing
```

### Other Platforms

The app is a static Next.js site that can deploy to:
- Netlify
- Cloudflare Pages
- AWS Amplify
- GitHub Pages (with adapter)

## Environment Variables

None required for current version. Forms use Formspree directly.

## Performance

| Metric | Value |
|--------|-------|
| Build Time | ~1.5s (Turbopack) |
| Page Size | 15.7 kB |
| First Load JS | 112 kB |
| Static Pages | 3 |

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS/Android)

## Updates

See `LANDING_PAGE_UPDATE.md` for detailed changelog.

## License

© 2025 Xentrolance Technologies LLC (DBA: Xentrolance)  
Patent Pending (U.S. Provisional No. 63/895,904)
