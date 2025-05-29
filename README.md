# Bahía Store - Sustainable Fashion E-commerce

A complete e-commerce front-end built with Next.js 14 App Router, featuring sustainable fashion products with a focus on ethical manufacturing and environmental responsibility.

## 🌿 Features

- **Modern Design System**: Custom color palette with cream, sage green, and clean typography
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Toggle between light and dark themes
- **Product Catalog**: Filterable product grid with categories, sizes, colors, and price ranges
- **Product Details**: Image galleries, size guides, and detailed product information
- **Shopping Cart**: Persistent cart with quantity management
- **Checkout Integration**: Mercado Pago payment processing (visual demo)
- **Animations**: Smooth transitions and scroll animations with Framer Motion
- **SEO Optimized**: Meta tags, Open Graph images, and semantic HTML

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Payment Processing**: Mercado Pago (visual integration)
- **Image Generation**: @vercel/og for dynamic Open Graph images
- **TypeScript**: Full type safety throughout the application

## 📁 Project Structure

\`\`\`
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── checkout/      # Stripe checkout
│   │   ├── subscribe/     # Newsletter subscription
│   │   └── og/           # Open Graph image generation
│   ├── webhooks/          # Webhook handlers
│   ├── shop/             # Product listing page
│   ├── product/[slug]/   # Product detail pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   └── layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── ProductCard.tsx   # Product display card
│   ├── CartDrawer.tsx    # Shopping cart sidebar
│   └── ...               # Other components
├── contexts/             # React Context providers
│   ├── CartContext.tsx   # Shopping cart state
│   └── ThemeContext.tsx  # Dark mode state
├── mocks/                # Mock data
│   └── products.json     # Sample product data
└── styles/               # Global styles
    └── globals.css       # Tailwind and custom CSS
\`\`\`

## 🛠️ Installation & Setup

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd bahia-store
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Fill in your environment variables:
   \`\`\`
   # Mercado Pago (Visual Integration)
   NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY=your_public_key
   MERCADOPAGO_ACCESS_TOKEN=your_access_token
   \`\`\`
   - WhatsApp number for contact
   - Newsletter API keys

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to \`http://localhost:3000\`

## 🔄 Integrating with Tiendanube

This project is designed to easily integrate with Tiendanube's API. Here's how to swap the mock data for real Tiendanube data:

### 1. Product Data Integration

Replace the mock data in \`src/mocks/products.json\` with Tiendanube API calls:

\`\`\`typescript
// Create src/lib/tiendanube.ts
export async function getProducts() {
  const response = await fetch(\`https://api.tiendanube.com/v1/\${STORE_ID}/products\`, {
    headers: {
      'Authentication': \`bearer \${ACCESS_TOKEN}\`,
      'Content-Type': 'application/json',
    },
  })
  return response.json()
}
\`\`\`

### 2. Update Product Pages

Modify \`src/app/shop/page.tsx\` and \`src/app/product/[slug]/page.tsx\` to use the Tiendanube API:

\`\`\`typescript
// Replace static imports with API calls
import { getProducts, getProduct } from '@/lib/tiendanube'
\`\`\`

### 3. Webhook Integration

The webhook handler at \`src/app/webhooks/tiendanube/route.ts\` is already set up to receive Tiendanube webhooks. Configure your Tiendanube store to send webhooks to:

\`\`\`
https://your-domain.com/webhooks/tiendanube
\`\`\`

### 4. Environment Variables

Add your Tiendanube credentials to \`.env.local\`:

\`\`\`
TIENDANUBE_ACCESS_TOKEN=your_access_token
TIENDANUBE_STORE_ID=your_store_id
\`\`\`

## 🎨 Design System

### Colors
- **Cream**: \`#F9F7F4\` - Background color
- **Primary**: \`#111111\` - Text color
- **Sage**: \`#7EA89A\` - Accent color for CTAs and links
- **Card**: \`#FFFFFF\` - Card backgrounds

### Typography
- **UI Text**: Inter (variable font)
- **Headings**: Playfair Display (for headings ≥ xl)

### Components
- Consistent spacing using Tailwind's spacing scale
- Rounded corners with \`rounded-lg\` and \`rounded-md\`
- Hover states with smooth transitions
- Focus states for accessibility

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in the Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy your app

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Features Overview

### Home Page
- Hero section with call-to-action
- Category cards for easy navigation
- Bestseller product grid
- Customer testimonials carousel
- Instagram feed integration

### Shop Page
- Responsive product grid (1-4 columns based on screen size)
- Advanced filtering by category, size, color, and price
- Real-time filter updates
- Mobile-friendly filter drawer

### Product Detail Page
- Image gallery with thumbnail navigation
- Size and color selection
- Quantity picker
- Add to cart functionality
- Size guide modal
- Accordion sections for details
- Related products (can be implemented)

### Shopping Cart
- Slide-over cart drawer
- Quantity management
- Remove items
- Persistent cart state
- Stripe checkout integration

### Additional Pages
- About page with brand story and values
- Contact page with WhatsApp integration and FAQ
- Responsive design across all pages

## 🔧 Customization

### Adding New Products
1. Add product data to \`src/mocks/products.json\` or integrate with your API
2. Ensure images are optimized and properly sized
3. Update categories and filters as needed

### Styling Changes
1. Modify \`tailwind.config.js\` for color and spacing changes
2. Update \`src/app/globals.css\` for custom CSS
3. Component styles can be modified in individual component files

### Adding New Features
1. Create new components in \`src/components/\`
2. Add new pages in \`src/app/\`
3. Extend context providers for global state management

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: hello@bahiastore.com
- WhatsApp: [Contact via WhatsApp]
- GitHub Issues: [Create an issue]
