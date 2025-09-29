# BorderWorx Logistics Website

A modern, responsive business card website for a logistics company built with Next.js and Tailwind CSS.

## Features

- **Modern Design**: Clean and professional design with white, orange, and black color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Business Card Style**: Focused on presenting company information and services
- **Contact Integration**: Contact form and company information display
- **Performance Optimized**: Built with Next.js for optimal performance

## Sections

1. **Hero Section**: Eye-catching landing area with company introduction
2. **Services**: Comprehensive logistics services showcase
3. **About**: Company information and key statistics
4. **Contact**: Contact form and company details
5. **Footer**: Additional company information and links

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd borderworx-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Customization

### Colors
The color palette is defined in `tailwind.config.ts`:
- Primary: `#ED5A28` (Orange)
- Secondary: `#000000` (Black)
- Accent: `#FFFFFF` (White)

### Content
Update company information in the following files:
- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - Company information
- `src/components/Contact.tsx` - Contact details
- `src/components/Footer.tsx` - Footer information

### Contact Form
The contact form in `src/components/Contact.tsx` currently logs form data to console. Integrate with your preferred form handling service (e.g., Formspree, Netlify Forms, or a custom API endpoint).

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repository for automatic deployments
- **Custom Server**: Use `npm run build` and serve the `out` directory

## SEO Optimization

The website includes:
- Meta tags for SEO
- Semantic HTML structure
- Performance optimizations
- Mobile-responsive design

## Support

For questions or support, please contact the development team.

## License

This project is proprietary and confidential.
