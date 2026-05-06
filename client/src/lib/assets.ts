/**
 * Asset URLs for the portfolio
 * All images are stored in webdev storage and referenced by their paths
 */

export const ASSETS = {
  profile: "/manus-storage/profile_386864cd.webp",
  
  // Featured Works
  works: [
    {
      id: 1,
      title: "Design Project 1",
      image: "/manus-storage/1_20251225_010442_0000_869400d1.png",
      category: "Branding",
    },
    {
      id: 2,
      title: "Design Project 2",
      image: "/manus-storage/1_20251226_162408_0000_a411b280.png",
      category: "Graphic Design",
    },
    {
      id: 3,
      title: "Design Project 3",
      image: "/manus-storage/2_20251226_162408_0001_58c0771e.png",
      category: "UI/UX",
    },
    {
      id: 4,
      title: "Design Project 4",
      image: "/manus-storage/2_20260503_193515_0001_a688c181.png",
      category: "Illustration",
    },
    {
      id: 5,
      title: "Design Project 5",
      image: "/manus-storage/3_20260503_193515_0002_2ad848c0.png",
      category: "Branding",
    },
    {
      id: 6,
      title: "Design Project 6",
      image: "/manus-storage/4_20260503_193515_0003_cecfcb51.png",
      category: "Packaging",
    },
    {
      id: 7,
      title: "ASICS Campaign",
      image: "/manus-storage/ASICS_20260503_195138_0000_cd30b4ab.png",
      category: "Campaign",
    },
    {
      id: 8,
      title: "Book Design 1",
      image: "/manus-storage/Book_20260126_110632_0000_abd5b138.png",
      category: "Publication",
    },
    {
      id: 9,
      title: "Book Design 2",
      image: "/manus-storage/Book_20260204_162849_0000_6e986d8f.png",
      category: "Publication",
    },
    {
      id: 10,
      title: "Cargo Service Design",
      image: "/manus-storage/Cargo Service ကို ရွေးချယ်ရင် အရည်‌အ သွေးကို ရွေးချယ်ပါမိတ်ဆွေ_20260125_214311_0000_f6b5d687.png",
      category: "Web Design",
    },
    {
      id: 11,
      title: "Logo Design",
      image: "/manus-storage/Logo တစ်ခုရှိရုံနဲ့_20260504_151243_0000_6c09bf63.png",
      category: "Logo",
    },
    {
      id: 12,
      title: "Premium Design",
      image: "/manus-storage/PREMIUM_20251228_144341_0000_5c7cb0fb.png",
      category: "Branding",
    },
    {
      id: 13,
      title: "TZO Design",
      image: "/manus-storage/TZO_20260127_170453_0000_1df13a5b.png",
      category: "Branding",
    },
    {
      id: 14,
      title: "Promotional Design",
      image: "/manus-storage/UP TO 20%25 PROMOTIONS_20260407_172840_0000_1ba3a5d4.png",
      category: "Marketing",
    },
  ],
};

export type Work = (typeof ASSETS.works)[number];
