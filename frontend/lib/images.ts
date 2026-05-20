/**
 * LOCAL IMAGES — put files in public/ folders, bump version when you replace them.
 *
 * public/bikes/     → bike photos (see lib/data/bikes.ts for filenames)
 * public/site/      → hero, about, and other page images (see SITE_IMAGES below)
 *
 * After replacing any image:
 * 1. Save file to the correct folder (same filename to replace)
 * 2. Bump NEXT_PUBLIC_IMAGE_VERSION in .env.local (1 → 2 → 3…)
 * 3. Run: npm run dev:fresh
 * 4. Hard refresh browser (Cmd+Shift+R)
 */

export const USE_LOCAL_IMAGES = true;

export const IMAGE_CACHE_VERSION =
  process.env.NEXT_PUBLIC_IMAGE_VERSION ?? "1";

/** Any file served from /public (bikes, site, etc.) */
export function isLocalImage(src: string): boolean {
  const path = src.split("?")[0];
  return (
    path.startsWith("/bikes/") ||
    path.startsWith("/site/") ||
    path.startsWith("/images/")
  );
}

export function withImageCacheBust(path: string): string {
  const base = path.split("?")[0];
  if (!isLocalImage(base)) return path;
  const separator = path.includes("?") ? "&" : "?";
  return `${base}${separator}v=${IMAGE_CACHE_VERSION}`;
}

type SiteImageDef = { file: string; fallback: string };

const SITE: Record<string, SiteImageDef> = {
  hero: {
    file: "/site/hero.jpg",
    fallback:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1920&q=85",
  },
  aboutBanner: {
    file: "/site/about-banner.jpg",
    fallback:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a70?w=1400&q=80",
  },
  aboutPreview: {
    file: "/site/about-preview.jpg",
    fallback:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a70?w=900&q=85",
  },
};

export type SiteImageKey = keyof typeof SITE;

/** Page images (hero, about, etc.) — drop files in public/site/ */
export function siteImage(key: SiteImageKey): string {
  const { file, fallback } = SITE[key];
  return USE_LOCAL_IMAGES ? withImageCacheBust(file) : fallback;
}

/** Bike photos — drop files in public/bikes/{slug}.jpg */
export function bikePhoto(slug: string, fallback: string): string {
  if (!USE_LOCAL_IMAGES) return fallback;
  return withImageCacheBust(`/bikes/${slug}.jpg`);
}

/** Extra bike gallery shot: public/bikes/{slug}-2.jpg, -3.jpg, etc. */
export function bikePhotoExtra(slug: string, index: number): string {
  return withImageCacheBust(`/bikes/${slug}-${index}.jpg`);
}

/** List of site image files you can add under public/site/ */
export const SITE_IMAGE_FILES: { key: SiteImageKey; filename: string; usedOn: string }[] =
  [
    { key: "hero", filename: "hero.jpg", usedOn: "Home page hero background" },
    {
      key: "aboutBanner",
      filename: "about-banner.jpg",
      usedOn: "About page top banner",
    },
    {
      key: "aboutPreview",
      filename: "about-preview.jpg",
      usedOn: "Home page “Our Showroom” section",
    },
  ];
