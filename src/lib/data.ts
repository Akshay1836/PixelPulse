import type { Service, DigitalProduct, Order, Lead, Testimonial } from '@/lib/types';
import { PlaceHolderImages } from './placeholder-images';
import { Camera, Clapperboard, Code, Palette, ShoppingCart, UserSquare } from 'lucide-react';

function findImage(id: string) {
  return PlaceHolderImages.find((img) => img.id === id)?.imageUrl || '';
}

export const services: Service[] = [
  {
    slug: 'photography',
    title: 'Photography',
    description: 'Capturing moments, creating art. Our lens, your story.',
    longDescription:
      'We specialize in high-end portrait, product, and event photography, focusing on a cinematic and fine-art style. Our process is collaborative, ensuring the final images perfectly align with your vision. From initial concept to final retouching, we handle every detail with precision and care.',
    image: findImage('service-photography'),
    heroImage: findImage('service-hero-photography'),
    icon: Camera,
    process: [
      {
        step: 1,
        title: 'Consultation & Concept',
        description:
          'We start with a deep dive into your vision, goals, and aesthetic preferences to build a solid creative foundation.',
      },
      {
        step: 2,
        title: 'Photoshoot',
        description:
          'Our team directs a professional shoot, focusing on lighting, composition, and capturing authentic moments.',
      },
      {
        step: 3,
        title: 'Curation & Editing',
        description:
          'We meticulously select the best images and apply our signature color grading and retouching for a polished, cinematic look.',
      },
      {
        step: 4,
        title: 'Delivery',
        description:
          'You receive a stunning gallery of high-resolution images, ready for print, web, and social media.',
      },
    ],
    gallery: [
      'gallery-1',
      'gallery-2',
      'gallery-3',
      'gallery-4',
      'gallery-5',
      'gallery-6',
      'gallery-7',
      'gallery-8',
    ],
  },
  {
    slug: 'videography',
    title: 'Videography',
    description: 'Cinematic storytelling that moves and inspires.',
    longDescription:
      'From brand films to wedding highlights, we produce compelling video content with a strong narrative and breathtaking visuals. Our full-service production includes storyboarding, filming, sound design, and post-production, all tailored to meet your objectives.',
    image: findImage('service-videography'),
    heroImage: findImage('service-hero-videography'),
    icon: Clapperboard,
    process: [
      {
        step: 1,
        title: 'Pre-Production',
        description:
          'We script, storyboard, and plan every shot to ensure a smooth production process and a cohesive final film.',
      },
      {
        step: 2,
        title: 'Filming',
        description:
          'Using state-of-the-art equipment, we capture stunning 4K footage, focusing on cinematic composition and storytelling.',
      },
      {
        step: 3,
        title: 'Post-Production',
        description:
          'Our editors craft the story, color grade the footage with our signature cinematic LUTs, and mix the audio for a powerful impact.',
      },
      {
        step: 4,
        title: 'Final Delivery',
        description:
          'You receive a professionally produced film, optimized for your desired platforms, from social media to the big screen.',
      },
    ],
    gallery: [
      'gallery-8',
      'gallery-7',
      'gallery-6',
      'gallery-5',
      'gallery-4',
      'gallery-3',
      'gallery-2',
      'gallery-1',
    ],
  },
  {
    slug: 'design',
    title: 'Design',
    description: 'Creating visual identities that captivate and convert.',
    longDescription:
      'Our design services cover everything from brand identity and logos to web design and marketing materials. We blend strategy with artistry to create designs that are not only beautiful but also effective in communicating your brand message.',
    image: findImage('service-design'),
    heroImage: findImage('service-hero-design'),
    icon: Palette,
    process: [
      {
        step: 1,
        title: 'Discovery & Strategy',
        description:
          "We research your market, audience, and goals to develop a design strategy that sets you apart from the competition.",
      },
      {
        step: 2,
        title: 'Concept & Creation',
        description:
          'Our designers develop initial concepts and mockups, working with your feedback to refine the visual direction.',
      },
      {
        step: 3,
        title: 'Refinement & Asset Creation',
        description:
          'We finalize the chosen design and create a comprehensive set of assets for all your branding needs.',
      },
      {
        step: 4,
        title: 'Brand Guidelines & Handoff',
        description:
          'You receive all final files along with a brand guideline document to ensure consistency across all future materials.',
      },
    ],
    gallery: [
      'gallery-4',
      'gallery-2',
      'gallery-5',
      'gallery-1',
      'gallery-8',
      'gallery-3',
      'gallery-6',
      'gallery-7',
    ],
  },
  {
    slug: 'custom-websites',
    title: 'Custom Websites',
    description: 'Bespoke websites that are as unique as your brand.',
    longDescription:
      'We develop high-performance websites and web applications using modern technologies like Next.js. Our focus is on creating fast, responsive, and visually stunning sites that provide an exceptional user experience and drive results.',
    image: findImage('service-web-dev'),
    heroImage: findImage('service-hero-web-dev'),
    icon: Code,
    process: [
      {
        step: 1,
        title: 'Planning & Architecture',
        description:
          'We map out the site structure, user flows, and technical requirements to ensure a robust and scalable solution.',
      },
      {
        step: 2,
        title: 'UI/UX Design',
        description:
          'Our designers create an intuitive and beautiful interface that aligns with your brand and engages your users.',
      },
      {
        step: 3,
        title: 'Development & Integration',
        description:
          'Our developers bring the designs to life with clean, efficient code and integrate any necessary third-party services.',
      },
      {
        step: 4,
        title: 'Testing & Launch',
        description:
          'We rigorously test for performance, responsiveness, and bugs before deploying the site and handing over the keys.',
      },
    ],
    gallery: [
      'gallery-1',
      'gallery-3',
      'gallery-5',
      'gallery-7',
      'gallery-2',
      'gallery-4',
      'gallery-6',
      'gallery-8',
    ],
  },
  {
    slug: 'portfolio-websites',
    title: 'Portfolio Websites',
    description: 'Stunning online portfolios for creatives to showcase their work.',
    longDescription:
      'For artists, photographers, and creatives, your portfolio is your most important asset. We build visually-driven portfolio websites that are elegant, easy to update, and perfectly frame your work, letting your talent shine.',
    image: findImage('service-portfolios'),
    heroImage: findImage('service-hero-portfolios'),
    icon: UserSquare,
    process: [
      {
        step: 1,
        title: 'Showcase Strategy',
        description:
          'We work with you to understand your body of work and devise the best way to categorize and present it online.',
      },
      {
        step: 2,
        title: 'Visual Design',
        description:
          'A minimalist and elegant design is crafted to ensure your work is the star of the show, without distracting elements.',
      },
      {
        step: 3,
        title: 'Gallery Development',
        description:
          'We build beautiful, responsive galleries and an easy-to-use backend for you to manage your projects and images.',
      },
      {
        step: 4,
        title: 'Launch & Training',
        description:
          'Your new portfolio is launched, and we provide you with training on how to add new work and keep it fresh.',
      },
    ],
    gallery: [
      'gallery-1',
      'gallery-5',
      'gallery-7',
      'gallery-2',
      'gallery-4',
      'gallery-6',
    ],
  },
  {
    slug: 'ecommerce-stores',
    title: 'E-commerce Stores',
    description: 'Powerful, scalable e-commerce solutions to sell your products online.',
    longDescription:
      'Ready to sell online? We build robust, scalable, and beautiful e-commerce stores that drive sales and provide a seamless shopping experience for your customers. From product catalogs to secure checkouts, we handle it all.',
    image: findImage('service-ecommerce'),
    heroImage: findImage('service-hero-ecommerce'),
    icon: ShoppingCart,
    process: [
      {
        step: 1,
        title: 'E-commerce Strategy',
        description:
          'We analyze your product catalog, target audience, and business goals to design a high-converting online store.',
      },
      {
        step: 2,
        title: 'Store Design & Setup',
        description:
          'We design a user-friendly and on-brand storefront, set up product categories, and configure shipping and tax rules.',
      },
      {
        step: 3,
        title: 'Payment Integration',
        description:
          'Securely integrate with major payment gateways like Stripe and PayPal to offer your customers a smooth checkout process.',
      },
      {
        step: 4,
        title: 'Launch & Optimization',
        description:
          'We launch your store and monitor its performance, providing insights and optimizations to maximize your sales.',
      },
    ],
    gallery: [
      'gallery-2',
      'gallery-4',
      'gallery-6',
      'gallery-8',
      'gallery-1',
      'gallery-3',
    ],
  },
];

export const digitalProducts: DigitalProduct[] = [
  {
    id: '1',
    slug: 'moody-cinematic-presets',
    name: 'Moody Cinematic Presets',
    category: 'Presets',
    price: 49.99,
    description:
      'Transform your photos with a single click. This pack of 10 presets is designed to give your images a deep, moody, and cinematic feel, perfect for portraits, landscapes, and street photography.',
    styleAndMood:
      'Emphasizes deep shadows, muted highlights, and rich, desaturated colors to create a dramatic and atmospheric look. Inspired by modern cinema.',
    compatibility: 'Adobe Lightroom (Desktop & Mobile), Photoshop (ACR)',
    installation:
      'Includes a PDF guide for easy installation on Lightroom Desktop, Mobile (DNG), and Photoshop.',
    coverImage: findImage('product-preset-1'),
    beforeImage: findImage('before-image-1'),
    afterImage: findImage('after-image-1'),
  },
  {
    id: '2',
    slug: 'true-black-presets',
    name: 'True Black Presets',
    category: 'Presets',
    price: 39.99,
    description:
      'Achieve the perfect high-contrast black and white look. This collection of 8 presets offers a range of monochrome styles, from grainy film to clean and modern, all centered around rich, true blacks.',
    styleAndMood:
      'Focuses on deep blacks, crisp whites, and dramatic tonal range. Ideal for creating timeless, artistic, and powerful black and white images.',
    compatibility: 'Adobe Lightroom (Desktop & Mobile), Photoshop (ACR)',
    installation:
      'Comes with a step-by-step PDF guide for installing on all supported platforms.',
    coverImage: findImage('product-preset-2'),
    beforeImage: findImage('before-image-1'),
    afterImage: findImage('after-image-1'),
  },
  {
    id: '3',
    slug: 'aether-cinematic-luts',
    name: 'Aether Cinematic LUTs',
    category: 'LUTs',
    price: 79.99,
    description:
      'Instantly apply our signature color grade to your video footage. This pack includes 12 professional LUTs (.cube files) designed for a high-end, cinematic aesthetic, compatible with all major editing software.',
    styleAndMood:
      'Features grades with teal and orange palettes, filmic contrast, and desaturated tones to give your footage a polished, cinematic quality.',
    compatibility:
      'DaVinci Resolve, Adobe Premiere Pro, Final Cut Pro X, and any software that supports .cube files.',
    installation:
      'An easy-to-follow video tutorial is included to guide you through the installation process for various software.',
    coverImage: findImage('product-lut-1'),
    beforeImage: findImage('before-image-1'),
    afterImage: findImage('after-image-1'),
  },
  {
    id: '4',
    slug: 'minimalist-canva-templates',
    name: 'Minimalist Canva Templates',
    category: 'Templates',
    price: 29.99,
    description:
      'Elevate your social media presence with this pack of 50 fully-customizable Canva templates. Designed with a clean, minimalist, and luxury aesthetic, perfect for brands, creators, and small businesses.',
    styleAndMood:
      'Clean lines, elegant typography, and a neutral color palette create a sophisticated and professional look for your Instagram posts and stories.',
    compatibility: 'Canva (Free & Pro versions)',
    installation:
      'A link to the templates is provided upon purchase. Simply open in Canva and start customizing.',
    coverImage: findImage('product-template-1'),
    mockupImages: [
      findImage('template-mockup-1'),
      findImage('template-mockup-2'),
    ],
  },
];

export const mockOrders: Order[] = [
    { id: 'ORD001', customerName: 'Leo', customerEmail: 'leo@example.com', productName: 'Moody Cinematic Presets', price: 49.99, date: '2024-07-20', status: 'Paid' },
    { id: 'ORD002', customerName: 'Chloe', customerEmail: 'chloe@example.com', productName: 'Aether Cinematic LUTs', price: 79.99, date: '2024-07-19', status: 'Paid' },
    { id: 'ORD003', customerName: 'Marcus', customerEmail: 'marcus@example.com', productName: 'Minimalist Canva Templates', price: 29.99, date: '2024-07-19', status: 'Paid' },
    { id: 'ORD004', customerName: 'David', customerEmail: 'david@example.com', productName: 'True Black Presets', price: 39.99, date: '2024-07-18', status: 'Paid' },
];

export const mockLeads: Lead[] = [
    { id: 'LEAD001', name: 'Sarah & David', email: 'sarah.david@example.com', service: 'Wedding Specials', date: '2024-07-21', status: 'New' },
    { id: 'LEAD002', name: 'Marcus', email: 'marcus.brand@example.com', service: 'Brand Identity Kit', date: '2024-07-20', status: 'Contacted' },
    { id: 'LEAD003', name: 'Aspiring Biz', email: 'biz@example.com', service: 'Photography', date: '2024-07-18', status: 'Closed' },
];

export const testimonials: Testimonial[] = [
  {
    quote: "PixelPulse transformed our brand's visual identity. Their attention to detail and cinematic quality is unmatched. The results were beyond our wildest expectations.",
    name: 'Alex Johnson',
    title: 'CEO, Startup Inc.',
    avatar: findImage('testimonial-1'),
  },
  {
    quote: "The wedding video they created was a masterpiece. They captured the day so perfectly, it felt like reliving every moment. I can't recommend them enough.",
    name: 'Samantha & Leo',
    title: 'Newlyweds',
    avatar: findImage('testimonial-2'),
  },
  {
    quote: 'As a photographer, their digital presets have become an essential part of my workflow. They save me hours of editing and give my photos a professional edge.',
    name: 'Emily Carter',
    title: 'Freelance Photographer',
    avatar: findImage('testimonial-3'),
  },
];
