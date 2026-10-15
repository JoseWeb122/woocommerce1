import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // 1. Essential Heavyweight Stand Collar Jacket
  {
    id: 'fm-outerwear-01',
    slug: 'essential-heavyweight-stand-collar-jacket',
    name: 'Essential Heavyweight Stand Collar Jacket',
    subtitle: 'Dual-Zip Heavyweight Fleece Outerwear',
    price: 65.94,
    category: 'outerwear',
    categoryName: 'Jackets & Outerwear',
    description: 'This structured jacket features a modern stand collar design and innovative dual-zip closure with elastic ribbed trim for a secure fit. The heavyweight cotton-polyester blend provides substantial warmth without bulk. A versatile outerwear piece for essential collections, offering both style and functionality.',
    fabric: '65.39% cotton, 34.61% polyester',
    fabricWeight: '445 GSM (13.1 oz)',
    fit: 'Oversized drop-shoulder silhouette',
    careInstructions: [
      'Machine wash cold at 30°C (gentle cycle)',
      'Do not bleach',
      'Tumble dry low',
      'Iron at low temperature (avoid print/hardware)',
      'Do not dry clean'
    ],
    features: [
      'Effects: Dual Zipper / Patchwork styling',
      'Fit: Oversized silhouette with ribbed trim',
      'Neckline: Structured stand collar',
      'Sleeve Style: Drop Shoulder',
      'Season: Fall / Winter'
    ],
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/9ad529fd7a6149408542cd87743ed5e0.jpg',
      'https://images.pexels.com/photos/19556416/pexels-photo-19556416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/9ad529fd7a6149408542cd87743ed5e0-300x300.jpg'
    ],
    colors: [
      { name: 'Washed Charcoal', hex: '#333333' },
      { name: 'Jet Black', hex: '#111111' },
      { name: 'Bone White', hex: '#EAE8E3' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    sizeChart: [
      { size: 'S', lengthInches: 25.98, lengthCm: 66, shoulderInches: 24.41, shoulderCm: 62, chestInches: 25.20, chestCm: 64 },
      { size: 'M', lengthInches: 26.77, lengthCm: 68, shoulderInches: 25.20, shoulderCm: 64, chestInches: 25.98, chestCm: 66 },
      { size: 'L', lengthInches: 27.56, lengthCm: 70, shoulderInches: 25.98, shoulderCm: 66, chestInches: 26.77, chestCm: 68 },
      { size: 'XL', lengthInches: 28.35, lengthCm: 72, shoulderInches: 26.77, shoulderCm: 68, chestInches: 27.56, chestCm: 70 },
      { size: '2XL', lengthInches: 29.13, lengthCm: 74, shoulderInches: 27.56, shoulderCm: 70, chestInches: 28.35, chestCm: 72 }
    ],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    source: 'Tapstitch'
  },

  // 2. Men's Boxy Vintage Wash Hooded Denim Jacket
  {
    id: 'fm-outerwear-02',
    slug: 'mens-boxy-vintage-wash-hooded-denim-jacket',
    name: "Men's Boxy Vintage Wash Hooded Denim Jacket",
    subtitle: 'Layered Hooded Heavyweight Denim',
    price: 70.96,
    category: 'outerwear',
    categoryName: 'Jackets & Outerwear',
    description: 'Heavyweight vintage-washed denim paired with an integrated fleece hood construction. Custom metal hardware, drop-shoulder seams, and relaxed boxy cut tailored for effortless streetwear layering.',
    fabric: '100% Cotton Denim shell with 80% Cotton / 20% Poly hood',
    fabricWeight: '13.5 oz Rigid Denim',
    fit: 'Boxy streetwear fit',
    careInstructions: [
      'Machine wash cold inside out',
      'Wash with similar dark colors',
      'Do not bleach',
      'Hang dry recommended'
    ],
    features: [
      'Integrated contrast fleece hood',
      'Antiqued gunmetal shank buttons',
      'Dual chest flap pockets & welt side pockets',
      'Vintage enzyme wash finish'
    ],
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/65aa1fc807414b6ba9a1a652ad609a3a.jpg',
      'https://images.pexels.com/photos/16166526/pexels-photo-16166526.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/65aa1fc807414b6ba9a1a652ad609a3a-300x300.jpg'
    ],
    colors: [
      { name: 'Vintage Acid Wash', hex: '#586b7c' },
      { name: 'Washed Black Denim', hex: '#262626' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    source: 'Tapstitch'
  },

  // 3. Essential Heavyweight Hoodie
  {
    id: 'fm-hoodie-01',
    slug: 'essential-heavyweight-hoodie',
    name: 'Essential Heavyweight Hoodie',
    subtitle: 'Signature 450 GSM Brushed Fleece Pullover',
    price: 55.94,
    category: 'hoodies-sweatshirts',
    categoryName: 'Hoodies & Sweatshirts',
    description: 'Our cornerstone heavyweight pullover. Crafted with high-density loopback fleece brushed on the interior for supreme comfort and thermal retention. Features a seamless double-layered hood without drawstrings for an ultra-clean minimalist profile.',
    fabric: '70% Combed Cotton, 30% Polyester Fleece',
    fabricWeight: '450 GSM Heavyweight',
    fit: 'Relaxed boxy silhouette with dropped shoulders',
    careInstructions: [
      'Machine wash gentle in cold water',
      'Tumble dry low or air dry flat',
      'Iron inside out'
    ],
    features: [
      'Seamless double-ply structured hood',
      'Double-needle flatlock stitching throughout',
      'Deep kangaroo pocket with reinforced bartacks',
      'Dense 2x2 ribbed cuffs and hem'
    ],
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/02020d0f724648e6b0f634705417f1e6.jpg',
      'https://images.pexels.com/photos/4118956/pexels-photo-4118956.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/02020d0f724648e6b0f634705417f1e6-300x300.jpg'
    ],
    colors: [
      { name: 'Off-White Milk', hex: '#F5F3EC' },
      { name: 'Jet Black', hex: '#111111' },
      { name: 'Heather Taupe', hex: '#8F867B' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    source: 'Tapstitch'
  },

  // 4. Drop-Shoulder Zip Up Hoodie
  {
    id: 'fm-hoodie-02',
    slug: 'drop-shoulder-zip-up-hoodie',
    name: 'Drop-Shoulder Zip Up Hoodie',
    subtitle: 'Relaxed Full-Zip Fleece Hoodie',
    price: 50.94,
    category: 'hoodies-sweatshirts',
    categoryName: 'Hoodies & Sweatshirts',
    description: 'A contemporary take on the staple zip hoodie with exaggerated dropped shoulders and wide boxy chest proportion. Features a custom metal zipper with silver pull and clean clean-cut welt pockets.',
    fabric: '68% Cotton, 32% Poly French Terry',
    fabricWeight: '380 GSM',
    fit: 'Loose oversized fit',
    careInstructions: ['Machine wash cold', 'Line dry recommended'],
    features: [
      'Full-length antique silver YKK zipper',
      'Drop shoulder armholes for drape',
      'Ribbed side panel inserts'
    ],
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/6292c778100b4c26b838bc7404ad2f57.jpg',
      'https://images.pexels.com/photos/19225018/pexels-photo-19225018.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/6292c778100b4c26b838bc7404ad2f57-300x300.jpg'
    ],
    colors: [
      { name: 'Washed Slate', hex: '#4A5056' },
      { name: 'Carbon Black', hex: '#1C1B1B' },
      { name: 'Ecru Chalk', hex: '#ECE8DF' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: true,
    inStock: true,
    source: 'Tapstitch'
  },

  // 5. Essential Cropped Zip-Up Hoodie
  {
    id: 'fm-hoodie-03',
    slug: 'essential-cropped-zip-up-hoodie',
    name: 'Essential Cropped Zip-Up Hoodie',
    subtitle: 'Cropped Silhouette French Terry',
    price: 40.94,
    category: 'hoodies-sweatshirts',
    categoryName: 'Hoodies & Sweatshirts',
    description: 'Tailored with an intentional cropped hemline that sits right at the natural waistline, pairing seamlessly with high-rise denim or barrel-leg sweatpants. Soft-washed for an authentic lived-in feel.',
    fabric: '80% Ring-Spun Cotton, 20% Polyester',
    fabricWeight: '360 GSM',
    fit: 'Cropped boxy cut',
    careInstructions: ['Machine wash cold', 'Low tumble dry'],
    features: [
      'Custom silver zipper pull',
      'Double-ply hood',
      'Flattering cropped length'
    ],
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/2053bf5c22f54724a4721632d0573117.jpg',
      'https://images.pexels.com/photos/27411295/pexels-photo-27411295.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/2053bf5c22f54724a4721632d0573117-300x300.jpg'
    ],
    colors: [
      { name: 'Warm Sand', hex: '#C2B8A3' },
      { name: 'Deep Onyx', hex: '#171717' },
      { name: 'Dusty Sage', hex: '#7A8478' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: false,
    inStock: true,
    source: 'Tapstitch'
  },

  // 6. Snow Wash Fleece Oversize Hoodie
  {
    id: 'fm-hoodie-04',
    slug: 'snow-wash-fleece-oversize-hoodie',
    name: 'Snow Wash Fleece Oversize Hoodie',
    subtitle: 'Artisanal Snow Acid Wash Heavyweight Pullover',
    price: 65.90,
    category: 'hoodies-sweatshirts',
    categoryName: 'Hoodies & Sweatshirts',
    description: 'Each piece undergoes a specialized snow wash wash treatment, resulting in unique high-and-low tonal fading across seamlines. Built with durable heavyweight fleece for lasting structure.',
    fabric: '70% Combed Cotton, 30% Poly Fleece',
    fabricWeight: '430 GSM',
    fit: 'True oversized drape',
    careInstructions: ['Wash cold separately to preserve unique wash treatment'],
    features: ['Unique artisanal snow-fade finish', 'Heavyweight thermal fleece'],
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/7e1881d9cbc44b3eb599b3c162744473.jpg',
      'https://images.pexels.com/photos/3933967/pexels-photo-3933967.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/7e1881d9cbc44b3eb599b3c162744473-300x300.jpg'
    ],
    colors: [
      { name: 'Snow Wash Charcoal', hex: '#3B3D40' },
      { name: 'Acid Mineral Moss', hex: '#4F5349' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    source: 'Tapstitch'
  },

  // 7. Sunfade Two-way Zipper Boxy Fleece Hoodie
  {
    id: 'fm-hoodie-05',
    slug: 'sunfade-two-way-zipper-boxy-fleece-hoodie',
    name: 'Sunfade Two-way Zipper Boxy Fleece Hoodie',
    subtitle: 'Dual-Zip Sun-Kissed Washed Fleece',
    price: 60.96,
    category: 'hoodies-sweatshirts',
    categoryName: 'Hoodies & Sweatshirts',
    description: 'Constructed with dual two-way zipper tracks allowing customizable styling from top and bottom. Subtle sun-fade discoloration along shoulders and arms evokes sun-drenched vintage wear.',
    fabric: '75% Cotton, 25% Polyester',
    fabricWeight: '400 GSM',
    fit: 'Boxy streetwear cut',
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/c0eff02b6d7b4a0da2c88a0dabc18f33.jpg',
      'https://images.pexels.com/photos/33562235/pexels-photo-33562235.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/c0eff02b6d7b4a0da2c88a0dabc18f33-300x300.jpg'
    ],
    colors: [
      { name: 'Sunfade Faded Black', hex: '#2A2928' },
      { name: 'Sunfade Umber', hex: '#5A4A3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    source: 'Tapstitch'
  },

  // 8. Fleeced Sweatshirt
  {
    id: 'fm-hoodie-06',
    slug: 'fleeced-sweatshirt',
    name: 'Fleeced Sweatshirt',
    subtitle: 'Minimalist Crewneck Fleece',
    price: 40.10,
    category: 'hoodies-sweatshirts',
    categoryName: 'Hoodies & Sweatshirts',
    description: 'Clean crewneck neckline with ribbed collar, wide chest, and subtle drop shoulder. The ultimate modular daily sweater for clean layer combinations.',
    fabric: '80% Cotton, 20% Polyester',
    fabricWeight: '380 GSM',
    fit: 'Relaxed standard fit',
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/97833ed53c41442fb1a3ee53a507c4c7.jpg',
      'https://images.pexels.com/photos/19225018/pexels-photo-19225018.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/97833ed53c41442fb1a3ee53a507c4c7-300x300.jpg'
    ],
    colors: [
      { name: 'Oatmeal Melange', hex: '#D8D4CA' },
      { name: 'Washed Black', hex: '#1F1F1F' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    source: 'Tapstitch'
  },

  // 9. Boxy Oversized T-Shirt
  {
    id: 'fm-tee-01',
    slug: 'boxy-oversized-t-shirt',
    name: 'Boxy Oversized T-Shirt',
    subtitle: 'Heavy Combed Cotton Boxy Cut',
    price: 50.90,
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    description: 'The definitive Fashion Martinez silhouette. High-density combed cotton with substantial handfeel and structural drape that maintains its crisp silhouette throughout all-day wear.',
    fabric: '100% Combed Heavy Cotton',
    fabricWeight: '280 GSM (8.3 oz)',
    fit: 'Wide boxy body with dropped sleeves',
    careInstructions: ['Wash cold inside out', 'Hang dry or low tumble dry', 'Warm iron'],
    features: [
      '1.25" thick ribbed collar that resists stretching',
      'Drop shoulder design',
      'Preshrunk combed cotton'
    ],
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/2273ba8666d44830bb0265294f02946a.jpg',
      'https://images.pexels.com/photos/19273260/pexels-photo-19273260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/2273ba8666d44830bb0265294f02946a-300x300.jpg'
    ],
    colors: [
      { name: 'Crisp White', hex: '#FFFFFF' },
      { name: 'Jet Black', hex: '#111111' },
      { name: 'Washed Ash', hex: '#636567' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    source: 'Tapstitch'
  },

  // 10. Baby Tee Seamless T-Shirt - 200 GSM
  {
    id: 'fm-tee-02',
    slug: 'baby-tee-seamless-t-shirt-200-gsm',
    name: 'Baby Tee Seamless T-Shirt – 200 GSM',
    subtitle: 'Seamless High-Stretch Ribbed Baby Tee',
    price: 25.94,
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    description: 'A fitted 90s-inspired silhouette constructed using circular seamless knitting technology for smooth zero-friction side seams and a flattering contoured silhouette.',
    fabric: '95% Compact Cotton, 5% Elastane',
    fabricWeight: '200 GSM',
    fit: 'Fitted cropped silhouette',
    careInstructions: ['Machine wash gentle cold', 'Do not tumble dry'],
    features: [
      'Seamless body tube construction',
      'High rib stretch recovery',
      'Clean binded crew neckline'
    ],
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/de65a3ec82ff4e36969e2ac651f7f509.jpg',
      'https://images.pexels.com/photos/5661244/pexels-photo-5661244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/de65a3ec82ff4e36969e2ac651f7f509-300x300.jpg'
    ],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Pitch Black', hex: '#111111' },
      { name: 'Soft Muted Bone', hex: '#EAE6DD' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    source: 'Tapstitch'
  },

  // 11. Classic Loose Boxy Tee
  {
    id: 'fm-tee-03',
    slug: 'classic-loose-boxy-tee',
    name: 'Classic Loose Boxy Tee',
    subtitle: 'Everyday Medium-Weight Boxy Tee',
    price: 30.94,
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    description: 'An effortless daily staple designed with balanced proportions. Midweight breathable jersey that flows smoothly while holding its structure.',
    fabric: '100% Ring-Spun Cotton',
    fabricWeight: '240 GSM',
    fit: 'Loose relaxed fit',
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/3895bde256a44972b98613ff21587b6c.jpg',
      'https://images.pexels.com/photos/29132581/pexels-photo-29132581.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/3895bde256a44972b98613ff21587b6c-300x300.jpg'
    ],
    colors: [
      { name: 'Chalk White', hex: '#F7F6F2' },
      { name: 'Slate Gray', hex: '#5E6165' },
      { name: 'Olive Khaki', hex: '#585C4F' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: false,
    inStock: true,
    source: 'Tapstitch'
  },

  // 12. Enzyme Washed T-Shirt
  {
    id: 'fm-tee-04',
    slug: 'enzyme-washed-t-shirt',
    name: 'Enzyme Washed T-Shirt',
    subtitle: 'Soft-Hand Vintage Enzyme Wash Cotton',
    price: 30.36,
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    description: 'Treated with bio-enzyme wash baths to break down surface fuzz, leaving an ultra-smooth velvety touch and a relaxed broken-in silhouette.',
    fabric: '100% Combed Cotton',
    fabricWeight: '220 GSM',
    fit: 'Standard streetwear silhouette',
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/7718aa0a3df54a0a948597d6e46e5331.jpg',
      'https://images.pexels.com/photos/29117498/pexels-photo-29117498.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/7718aa0a3df54a0a948597d6e46e5331-300x300.jpg'
    ],
    colors: [
      { name: 'Washed Graphite', hex: '#373A3E' },
      { name: 'Faded Khaki', hex: '#736F62' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    source: 'Tapstitch'
  },

  // 13. Mineral Wash Boxy Cotton T-Shirt
  {
    id: 'fm-tee-05',
    slug: 'mineral-wash-boxy-cotton-t-shirt',
    name: 'Mineral Wash Boxy Cotton T-Shirt',
    subtitle: 'Textured Mineral Pigment Wash Tee',
    price: 40.90,
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    description: 'Crafted with custom mineral dye baths that yield authentic organic crystal patterns throughout the fabric. No two pieces are completely identical.',
    fabric: '100% Open-End Heavy Cotton',
    fabricWeight: '260 GSM',
    fit: 'Boxy streetwear silhouette',
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/f4dd69cbaaa84cfaa4fcdf8a594a7dc3.jpg',
      'https://images.pexels.com/photos/30193381/pexels-photo-30193381.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/f4dd69cbaaa84cfaa4fcdf8a594a7dc3-300x300.jpg'
    ],
    colors: [
      { name: 'Mineral Stone Grey', hex: '#686B6E' },
      { name: 'Charcoal Storm', hex: '#2C2E30' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: true,
    inStock: true,
    source: 'Tapstitch'
  },

  // 14. Unisex Heavyweight Boxy Raw Edge T-Shirt
  {
    id: 'fm-tee-06',
    slug: 'unisex-heavyweight-boxy-raw-edge-t-shirt',
    name: 'Unisex Heavyweight Boxy Raw Edge T-Shirt',
    subtitle: 'Deconstructed Raw Seam Finishing',
    price: 40.94,
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    description: 'Features exposed raw-edge rolled hems on sleeves and waist with reinforcement bar tacking to avoid excessive unraveling. Substantial 300 GSM build.',
    fabric: '100% Heavy Combed Cotton',
    fabricWeight: '300 GSM (9 oz)',
    fit: 'Oversized boxy profile',
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/ef07f58668de4d60b3c33e7542f2ad7e.jpg',
      'https://images.pexels.com/photos/19273260/pexels-photo-19273260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/ef07f58668de4d60b3c33e7542f2ad7e-300x300.jpg'
    ],
    colors: [
      { name: 'Raw Bone', hex: '#EBE7DD' },
      { name: 'Carbon Black', hex: '#161616' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    source: 'Tapstitch'
  },

  // 15. Unisex Heavyweight Barrel Leg Sweatpants
  {
    id: 'fm-bottoms-01',
    slug: 'unisex-heavyweight-barrel-leg-sweatpants',
    name: 'Unisex Heavyweight Barrel Leg Sweatpants',
    subtitle: 'Architectural Barrel Curved Leg Sweatpants',
    price: 45.92,
    category: 'bottoms',
    categoryName: 'Pants & Joggers',
    description: 'Engineered with a contemporary barrel-leg silhouette that tapers subtly at the ankle while maintaining dramatic architectural volume through the knee. Features a thick elasticated waistband with concealed flat drawcords and deep slash side pockets.',
    fabric: '75% Cotton, 25% Polyester Dense Fleece',
    fabricWeight: '420 GSM',
    fit: 'Curved barrel leg with roomy thigh volume',
    careInstructions: [
      'Machine wash cold with like colors',
      'Tumble dry low',
      'Do not bleach'
    ],
    features: [
      'Engineered curved outer knee darts',
      'Concealed interior drawstring',
      'Deep jersey-lined pockets',
      'Clean gathered ankle cuff'
    ],
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/ee900b0604724fedad6473f1610902a0.jpg',
      'https://images.pexels.com/photos/17198649/pexels-photo-17198649.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/ee900b0604724fedad6473f1610902a0-300x300.jpg'
    ],
    colors: [
      { name: 'Heather Gray', hex: '#AEB0B2' },
      { name: 'Washed Charcoal', hex: '#2F3133' },
      { name: 'Sand Taupe', hex: '#B8AF9F' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    sizeChart: [
      { size: 'S', lengthInches: 40.5, waistInches: 28 },
      { size: 'M', lengthInches: 41.5, waistInches: 30 },
      { size: 'L', lengthInches: 42.5, waistInches: 32 },
      { size: 'XL', lengthInches: 43.5, waistInches: 34 },
      { size: '2XL', lengthInches: 44.0, waistInches: 36 }
    ],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    source: 'Tapstitch'
  },

  // 16. Men's Vintage Wash Wide Leg Denim Jeans
  {
    id: 'fm-bottoms-02',
    slug: 'mens-vintage-wash-wide-leg-denim-jeans',
    name: "Men's Vintage Wash Wide Leg Denim Jeans",
    subtitle: 'Relaxed Wide-Leg 13.5 oz Raw Denim',
    price: 60.94,
    category: 'bottoms',
    categoryName: 'Pants & Joggers',
    description: 'Full-cut wide leg denim with natural pooling over sneakers. Cut from rigid 13.5 oz cotton denim with subtle hand-sanded whiskering and authentic vintage stone washing.',
    fabric: '100% Rigid Cotton Denim',
    fabricWeight: '13.5 oz',
    fit: 'Wide leg relaxed fit from hip to hem',
    careInstructions: ['Wash inside out in cold water', 'Line dry to retain shape'],
    features: [
      'Five-pocket styling with reinforced rivets',
      'Heavy-duty YKK brass zip fly',
      'Custom embossed leather back patch'
    ],
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/32b53f73bada423294e943dafdcf2325-1.jpg',
      'https://images.pexels.com/photos/31390369/pexels-photo-31390369.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/32b53f73bada423294e943dafdcf2325-1-300x300.jpg'
    ],
    colors: [
      { name: 'Vintage Washed Indigo', hex: '#445D78' },
      { name: 'Faded Black Wash', hex: '#252627' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    isNewArrival: false,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    source: 'Tapstitch'
  },

  // 17. Men's Snake Print Barrel Leg Pants
  {
    id: 'fm-bottoms-03',
    slug: 'mens-snake-print-barrel-leg-pants',
    name: "Men's Snake Print Barrel Leg Pants",
    subtitle: 'Statement Patterned Barrel Trousers',
    price: 70.92,
    category: 'bottoms',
    categoryName: 'Pants & Joggers',
    description: 'Subtle tonal snakeskin texture printed onto structural twill fabric. Designed in the signature Fashion Martinez barrel silhouette with relaxed knee room and tapered hem.',
    fabric: '98% Cotton Twill, 2% Spandex',
    fabricWeight: '320 GSM',
    fit: 'Curved barrel silhouette',
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/61b2730b029343d2a49e86c21796b38b.jpg',
      'https://images.pexels.com/photos/16455696/pexels-photo-16455696.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/61b2730b029343d2a49e86c21796b38b-300x300.jpg'
    ],
    colors: [
      { name: 'Tonal Taupe Snake', hex: '#6D655A' },
      { name: 'Charcoal Snake', hex: '#313233' }
    ],
    sizes: ['30', '32', '34', '36'],
    isNewArrival: true,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    source: 'Tapstitch'
  },

  // 18. Taped Cooling Performance Short Skirt
  {
    id: 'fm-bottoms-04',
    slug: 'taped-cooling-performance-short-skirt',
    name: 'Taped Cooling Performance Short Skirt',
    subtitle: 'Technical Streetwear Active Skirt',
    price: 30.94,
    category: 'bottoms',
    categoryName: 'Pants & Joggers',
    description: 'Lightweight technical stretch skirt featuring bonded side tape details and an integrated soft liner short for comfort and unrestricted movement.',
    fabric: '86% Nylon, 14% Spandex Quick-Dry Tech',
    fabricWeight: '180 GSM',
    fit: 'A-line athletic street fit',
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/fb2b1e02c7254b4e8ccc969070fa05e5.jpg',
      'https://images.pexels.com/photos/10120671/pexels-photo-10120671.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/fb2b1e02c7254b4e8ccc969070fa05e5-300x300.jpg'
    ],
    colors: [
      { name: 'Jet Black', hex: '#111111' },
      { name: 'Chalk White', hex: '#EDEDEB' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    source: 'Tapstitch'
  },

  // 19. Unisex Distressed Full Zip Sweater
  {
    id: 'fm-outerwear-03',
    slug: 'unisex-distressed-full-zip-sweater',
    name: 'Unisex Distressed Full Zip Sweater',
    subtitle: 'Hand-Distressed Knit Full-Zip Cardigan',
    price: 70.94,
    category: 'outerwear',
    categoryName: 'Jackets & Outerwear',
    description: 'Chunky gauge cotton knit with subtle distressing around collar and cuffs. High two-way zip styling with dropped shoulders creates a dramatic street silhouette.',
    fabric: '100% Combed Cotton Knit',
    fabricWeight: 'Heavyweight Gauge 5',
    fit: 'Relaxed oversized drape',
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/fa6bd95e8d6d4bd09cfbc4ca59be3b04.jpg',
      'https://images.pexels.com/photos/19225018/pexels-photo-19225018.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/fa6bd95e8d6d4bd09cfbc4ca59be3b04-300x300.jpg'
    ],
    colors: [
      { name: 'Distressed Black', hex: '#1E1E1E' },
      { name: 'Distressed Taupe', hex: '#877B6D' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    isNewArrival: true,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    source: 'Tapstitch'
  },

  // 20. Unisex Color Block Short Sleeve Shirt
  {
    id: 'fm-tee-07',
    slug: 'unisex-color-block-short-sleeve-shirt',
    name: 'Unisex Color Block Short Sleeve Shirt',
    subtitle: 'Modern Paneled Camp Collar Shirt',
    price: 40.96,
    category: 't-shirts',
    categoryName: 'T-Shirts & Tops',
    description: 'Camp collar button-up crafted with contrasting color blocks in structured cotton poplin. Perfect relaxed tailoring for warm weather.',
    fabric: '100% Crisp Cotton Poplin',
    fabricWeight: '160 GSM',
    fit: 'Camp collar relaxed fit',
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/8c321daa24ed4bea8d66a0b11b6b306b.jpg',
      'https://images.pexels.com/photos/30415877/pexels-photo-30415877.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/8c321daa24ed4bea8d66a0b11b6b306b-300x300.jpg'
    ],
    colors: [
      { name: 'Black & Bone Colorblock', hex: '#2C2B29' },
      { name: 'Olive & Sand', hex: '#636553' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    isNewArrival: false,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    source: 'Tapstitch'
  },

  // ----------------------------------------------------
  // FLAG FOR STORE OWNER REVIEW (WooCommerce Default Demo Items)
  // Detected in the live store database, preserved per instruction:
  // "Do not remove merchandise simply because it does not fit the first design concept. Flag potentially unrelated merchandise for review instead."
  // ----------------------------------------------------
  {
    id: 'fm-review-01',
    slug: 'advanced-hydroponic-system',
    name: 'Advanced Hydroponic System',
    subtitle: 'WooCommerce Sample Product (Flagged for Review)',
    price: 149.99,
    category: 'unrelated-review',
    categoryName: 'Store Audit / Flagged Items',
    description: 'This product was detected on the live fashionmartinez.com WooCommerce store. It appears to be sample demo data from the initial store template installation rather than a Tapstitch apparel item. Retained for client review prior to store launch.',
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/ext-2-300x300.jpeg',
      'https://fashionmartinez.com/wp-content/uploads/2026/10/ext-2.jpeg'
    ],
    colors: [{ name: 'Default', hex: '#777777' }],
    sizes: ['Standard'],
    inStock: true,
    source: 'WooCommerce Sample',
    flaggedForReview: true,
    flagReason: 'Default template data detected in live WooCommerce database. Review with Joshua for deletion in WordPress admin.'
  },
  {
    id: 'fm-review-02',
    slug: 'eco-friendly-plant-pots',
    name: 'Eco-Friendly Plant Pots',
    subtitle: 'WooCommerce Sample Product (Flagged for Review)',
    price: 19.99,
    category: 'unrelated-review',
    categoryName: 'Store Audit / Flagged Items',
    description: 'Sample template item detected in live store database. Kept intact for client audit.',
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/ext-1-300x300.jpeg'
    ],
    colors: [{ name: 'Default', hex: '#777777' }],
    sizes: ['Pack of 3'],
    inStock: true,
    source: 'WooCommerce Sample',
    flaggedForReview: true,
    flagReason: 'Default template data detected in live WooCommerce database.'
  },
  {
    id: 'fm-review-03',
    slug: 'compost-bin',
    name: 'Compost Bin',
    subtitle: 'WooCommerce Sample Product (Flagged for Review)',
    price: 49.99,
    category: 'unrelated-review',
    categoryName: 'Store Audit / Flagged Items',
    description: 'Sample template item detected in live store database. Kept intact for client audit.',
    images: [
      'https://fashionmartinez.com/wp-content/uploads/2026/10/ext-7-300x300.jpeg'
    ],
    colors: [{ name: 'Default', hex: '#777777' }],
    sizes: ['Standard'],
    inStock: true,
    source: 'WooCommerce Sample',
    flaggedForReview: true,
    flagReason: 'Default template data detected in live WooCommerce database.'
  }
];

export const CATEGORIES_META = [
  {
    id: 't-shirts',
    name: 'T-Shirts & Tops',
    slug: '/category/t-shirts',
    count: 7,
    headline: 'Heavyweight Cuts & Essential Tees',
    description: '200 to 300 GSM combed cotton silhouettes engineered with drop shoulders and structured necklines.',
    image: 'https://images.pexels.com/photos/19273260/pexels-photo-19273260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800'
  },
  {
    id: 'hoodies-sweatshirts',
    name: 'Hoodies & Sweatshirts',
    slug: '/category/hoodies-sweatshirts',
    count: 6,
    headline: 'Dense Fleece & Vintage Wash Pullovers',
    description: 'Heavyweight 450 GSM fleece, snow-wash fades, and double-layered hoods crafted for everyday layering.',
    image: 'https://images.pexels.com/photos/4118956/pexels-photo-4118956.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800'
  },
  {
    id: 'bottoms',
    name: 'Pants & Joggers',
    slug: '/category/bottoms',
    count: 4,
    headline: 'Barrel Leg Silhouettes & Rigid Denim',
    description: 'Modern curved barrel sweatpants, 13.5 oz wide-leg denim, and tonal pattern trousers built for modern proportions.',
    image: 'https://images.pexels.com/photos/17198649/pexels-photo-17198649.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800'
  },
  {
    id: 'outerwear',
    name: 'Jackets & Outerwear',
    slug: '/category/outerwear',
    count: 3,
    headline: 'Stand Collars, Dual Zips & Denim Jackets',
    description: 'Substantial 445 GSM outerwear and vintage washed hooded denim made to anchor any wardrobe.',
    image: 'https://images.pexels.com/photos/19556416/pexels-photo-19556416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800'
  }
];

export const EDITORIAL_LOOKS = [
  {
    id: 'look-01',
    title: 'The Monochromatic Volume Edit',
    subtitle: 'Stand Collar Jacket + Heavyweight Barrel Sweatpants',
    image: 'https://images.pexels.com/photos/33401555/pexels-photo-33401555.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
    description: 'Balancing structured 445 GSM outerwear with curved barrel-leg fleece for an effortless street drape.',
    primaryProductSlug: 'essential-heavyweight-stand-collar-jacket',
    secondaryProductSlug: 'unisex-heavyweight-barrel-leg-sweatpants'
  },
  {
    id: 'look-02',
    title: 'Vintage Acid Texture',
    subtitle: 'Hooded Denim Jacket + Boxy Oversized Tee',
    image: 'https://images.pexels.com/photos/16166526/pexels-photo-16166526.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
    description: 'Layering washed denim over clean 280 GSM combed cotton. Timeless streetwear fundamentals.',
    primaryProductSlug: 'mens-boxy-vintage-wash-hooded-denim-jacket',
    secondaryProductSlug: 'boxy-oversized-t-shirt'
  },
  {
    id: 'look-03',
    title: 'Clean Minimalist Everyday',
    subtitle: 'Signature 450 GSM Hoodie + Wide Leg Denim',
    image: 'https://images.pexels.com/photos/30193381/pexels-photo-30193381.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800',
    description: 'Off-white fleece with wide-cut vintage wash denim pooling effortlessly over classic sneakers.',
    primaryProductSlug: 'essential-heavyweight-hoodie',
    secondaryProductSlug: 'mens-vintage-wash-wide-leg-denim-jeans'
  }
];
