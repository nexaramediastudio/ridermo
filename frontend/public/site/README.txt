PUT YOUR PAGE IMAGES HERE
=========================

Add these JPG files (recommended 1200px wide or larger):

  hero.jpg           → Home page full-screen background
  about-banner.jpg   → About page top wide banner
  about-preview.jpg  → Home page "Our Showroom" section

After adding or replacing any image:
1. Bump NEXT_PUBLIC_IMAGE_VERSION in .env.local (e.g. 1 → 2)
2. Run: npm run dev:fresh
3. Hard refresh browser (Cmd+Shift+R)

Bike photos go in: public/bikes/  (see lib/data/bikes.ts for filenames)
