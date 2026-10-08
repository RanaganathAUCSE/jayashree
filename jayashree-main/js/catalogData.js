/**
 * Full product catalog configuration with exact catalogue numbers (1-141) and real image folders.
 */

export const BRIDAL_CATEGORIES = {
  "accessories": {
    label: "Bridal Accessories",
    items: [
      { name: "Bridal Belts", price: "₹399", num: 1, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1594736797933-d040eba03634?w=900&q=85", sizes: ["Free Size"] },
      { name: "Dupattas", price: "₹699", num: 2, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=85", sizes: ["Free Size"] },
      { name: "Matching Accessories", price: "₹499", num: 3, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1594736797933-d040eba03634?w=900&q=85", sizes: ["Free Size"] },
      { name: "Veils", price: "₹999", num: 4, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1610030006670-d1e4ba6662c7?w=900&q=85", sizes: ["Free Size"] }
    ]
  },
  "bridal-blouses": {
    label: "Bridal Blouses",
    items: [
      { name: "Customized Blouses", price: "₹999–₹4999", num: 5, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=85" },
      { name: "Designer Blouses", price: "₹1999–₹9999", num: 6, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=85" },
      { name: "Embellished Blouses", price: "₹2999–₹8999", num: 7, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=85" },
      { name: "Traditional Blouses", price: "₹1599–₹6999", num: 8, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=85" }
    ]
  },
  "bridal-gowns": {
    label: "Bridal Gowns",
    items: [
      { name: "Designer Gowns", price: "₹5999–₹9999", num: 9, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1610030006670-d1e4ba6662c7?w=900&q=85" },
      { name: "Embellished Gowns", price: "₹3999–₹8999", num: 10, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1610030006670-d1e4ba6662c7?w=900&q=85" },
      { name: "Reception Gowns", price: "₹6999–₹9999", num: 11, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1610030006670-d1e4ba6662c7?w=900&q=85" },
      { name: "Wedding Gowns", price: "₹9999–₹29999", num: 12, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1610030006670-d1e4ba6662c7?w=900&q=85" }
    ]
  },
  "bridal-lehengas": {
    label: "Bridal Lehengas",
    items: [
      { name: "Designer Lehengas", price: "₹9999–₹59999", num: 13, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1594736797933-d040eba03634?w=900&q=85" },
      { name: "Embroidered Lehengas", price: "₹9999–₹29999", num: 14, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=85" },
      { name: "Reception Lehengas", price: "₹9999–₹39999", num: 15, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1594736797933-d040eba03634?w=900&q=85" },
      { name: "Traditional Bridal Lehengas", price: "₹9999–₹69999", num: 16, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1594736797933-d040eba03634?w=900&q=85" }
    ]
  },
  "bridesmaid": {
    label: "Bridesmaid Wear",
    items: [
      { name: "Bridesmaid Dresses", price: "₹9999", num: 17, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=85" },
      { name: "Bridesmaid Lehengas", price: "₹8999", num: 18, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=85" },
      { name: "Coordinated Outfits", price: "₹9999", num: 19, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=85" }
    ]
  },
  "engagement": {
    label: "Engagement Wear",
    items: [
      { name: "Designer Outfits", price: "₹9999–₹29999", num: 20, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=85" },
      { name: "Engagement Dresses", price: "₹9999–₹39999", num: 21, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=85" },
      { name: "Engagement Lehengas", price: "₹9999–₹49999", num: 22, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=85" }
    ]
  },
  "reception": {
    label: "Reception Wear",
    items: [
      { name: "Designer Lehengas", price: "₹9999–₹29999", num: 23, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=85" },
      { name: "Indo-Western Outfits", price: "₹9999–₹19999", num: 24, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=85" },
      { name: "Reception Gowns", price: "₹9999–₹29999", num: 25, folder: "Bridal Wear", fallback: "https://images.unsplash.com/photo-1610030006670-d1e4ba6662c7?w=900&q=85" }
    ]
  }
};

export const ETHNIC_CATEGORIES = {
  "anarkalis": {
    label: "Anarkalis",
    items: [
      { name: "Designer Anarkalis", price: "₹999", num: 26, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=85" },
      { name: "Floor-Length Anarkalis", price: "₹1499", num: 27, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=85" },
      { name: "Party Wear Anarkalis", price: "₹2999", num: 28, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=85" },
      { name: "Traditional Anarkalis", price: "₹2999", num: 29, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=85" }
    ]
  },
  "kurta-sets": {
    label: "Kurta Sets",
    items: [
      { name: "Designer Kurta Sets", price: "₹999", num: 30, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1617627191906-60cb1ecd4226?w=800&q=85" },
      { name: "Festive Kurta Sets", price: "₹999", num: 31, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1617627191906-60cb1ecd4226?w=800&q=85" },
      { name: "Kurta & Palazzo Sets", price: "₹1299", num: 32, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1617627191906-60cb1ecd4226?w=800&q=85" },
      { name: "Kurta & Pant Sets", price: "₹1499", num: 33, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1617627191906-60cb1ecd4226?w=800&q=85" }
    ]
  },
  "lehengas": {
    label: "Lehengas",
    items: [
      { name: "Bridal Lehengas", price: "₹3999", num: 34, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1594736797933-d040eba03634?w=900&q=85" },
      { name: "Designer Lehengas", price: "₹4999", num: 35, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=85" },
      { name: "Festive Lehengas", price: "₹4999", num: 36, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1610030006620-6e8a33c83e27?w=800&q=85" },
      { name: "Party Wear Lehengas", price: "₹5999", num: 37, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=85" }
    ]
  },
  "salwar-suits": {
    label: "Salwar Suits",
    items: [
      { name: "Designer Salwar Suits", price: "₹999", num: 38, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1610030006620-6e8a33c83e27?w=800&q=85" },
      { name: "Party Wear Suits", price: "₹1299", num: 39, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1610030006620-6e8a33c83e27?w=800&q=85" },
      { name: "Straight Salwar Suits", price: "₹1399", num: 40, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1610030006620-6e8a33c83e27?w=800&q=85" },
      { name: "Traditional Suits", price: "₹1599", num: 41, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1610030006620-6e8a33c83e27?w=800&q=85" }
    ]
  },
  "saree-blouses": {
    label: "Saree Blouses",
    items: [
      { name: "Customized Blouses", price: "₹499", num: 42, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=85" },
      { name: "Designer Blouses", price: "₹999–₹2999", num: 43, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=85" },
      { name: "Embellished Blouses", price: "₹999–₹4999", num: 44, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=85" },
      { name: "Traditional Blouses", price: "₹999–₹5999", num: 45, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=85" }
    ]
  },
  "sharara-sets": {
    label: "Sharara Sets",
    items: [
      { name: "Festive Sharara Sets", price: "₹1599", num: 46, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1617059062244-1fcae2a14b7c?w=800&q=85" },
      { name: "Party Wear Sharara Sets", price: "₹2999", num: 47, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1617059062244-1fcae2a14b7c?w=800&q=85" },
      { name: "Sharara & Kurti Sets", price: "₹3999", num: 48, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1617059062244-1fcae2a14b7c?w=800&q=85" }
    ]
  },
  "traditional-dresses": {
    label: "Traditional Dresses",
    items: [
      { name: "Celebration Outfits", price: "₹9999", num: 49, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1610030006620-6e8a33c83e27?w=800&q=85" },
      { name: "Designer Ethnic Dresses", price: "₹9999", num: 50, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1610030006620-6e8a33c83e27?w=800&q=85" },
      { name: "Festival Wear", price: "₹9999", num: 51, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1610030006620-6e8a33c83e27?w=800&q=85" },
      { name: "Traditional Party Wear", price: "₹15999", num: 52, folder: "Ethnic Wear", fallback: "https://images.unsplash.com/photo-1610030006620-6e8a33c83e27?w=800&q=85" }
    ]
  }
};

export const KIDS_CATEGORIES = {
  "kids-casual": {
    label: "Casual Wear",
    items: [
      { name: "Casual Dresses", price: "₹299", num: 53, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Co-Ord Sets", price: "₹399", num: 54, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Comfortable Daily Wear", price: "₹499", num: 55, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Tops & Skirts", price: "₹499", num: 56, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] }
    ]
  },
  "kids-custom": {
    label: "Customized Kids' Wear",
    items: [
      { name: "Customized Dresses", price: "₹599", num: 57, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1596870230754-5e87c738a8ac?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Customized Ethnic Wear", price: "₹699", num: 58, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1543854589-fdd815f176e0?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Customized Frocks", price: "₹799", num: 59, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Customized Party Outfits", price: "₹999", num: 60, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1596870230754-5e87c738a8ac?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Size Customization", price: "₹1599", num: 61, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] }
    ]
  },
  "ethnic-kids": {
    label: "Ethnic Kids' Wear",
    items: [
      { name: "Anarkali Sets", price: "₹799", num: 62, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Kurta Sets", price: "₹899", num: 63, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1543854589-fdd815f176e0?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Lehenga Sets", price: "₹999", num: 64, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Pavadai Sets", price: "₹1599", num: 65, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1543854589-fdd815f176e0?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Traditional Dresses", price: "₹1999", num: 66, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1543854589-fdd815f176e0?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] }
    ]
  },
  "girls-dresses": {
    label: "Girls' Dresses",
    items: [
      { name: "Casual Dresses", price: "₹999", num: 67, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Designer Dresses", price: "₹1999", num: 68, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1596870230754-5e87c738a8ac?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Flared Dresses", price: "₹1499", num: 69, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Frocks", price: "₹1999", num: 70, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Party Dresses", price: "₹2999", num: 71, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1596870230754-5e87c738a8ac?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] }
    ]
  },
  "kids-party": {
    label: "Party Wear",
    items: [
      { name: "Birthday Outfits", price: "₹999", num: 72, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1596870230754-5e87c738a8ac?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Celebration Dresses", price: "₹1499", num: 73, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1596870230754-5e87c738a8ac?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Designer Frocks", price: "₹1999", num: 74, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1596870230754-5e87c738a8ac?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Special Occasion Outfits", price: "₹1999", num: 75, folder: "Kids Wear", fallback: "https://images.unsplash.com/photo-1596870230754-5e87c738a8ac?w=800&q=85", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] }
    ]
  }
};

export const WESTERN_CATEGORIES = {
  "bodycon": {
    label: "Bodycon Dresses",
    items: [
      { name: "Casual Bodycon", price: "₹999", num: 76, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=85" },
      { name: "Evening Bodycon", price: "₹1599", num: 77, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=85" },
      { name: "Party Wear Bodycon", price: "₹1799", num: 78, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=85" }
    ]
  },
  "western-coords": {
    label: "Co-Ord Sets",
    items: [
      { name: "Crop Top Sets", price: "₹1499", num: 79, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" },
      { name: "Party Wear Co-Ords", price: "₹1999", num: 80, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" },
      { name: "Top & Skirt Sets", price: "₹1499", num: 81, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" },
      { name: "Top & Trouser Sets", price: "₹1999", num: 82, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" }
    ]
  },
  "jumpsuits": {
    label: "Jumpsuits",
    items: [
      { name: "Casual Jumpsuits", price: "₹999", num: 83, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=85" },
      { name: "Designer Jumpsuits", price: "₹1999", num: 84, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=85" },
      { name: "Party Wear Jumpsuits", price: "₹2499", num: 85, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=85" }
    ]
  },
  "western-skirts": {
    label: "Skirts",
    items: [
      { name: "A-Line Skirts", price: "₹599", num: 86, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85" },
      { name: "Flared Skirts", price: "₹699", num: 87, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85" },
      { name: "Maxi Skirts", price: "₹699", num: 88, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=85" },
      { name: "Midi Skirts", price: "₹799", num: 89, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=85" },
      { name: "Mini Skirts", price: "₹499", num: 90, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85" }
    ]
  },
  "western-tops": {
    label: "Tops",
    items: [
      { name: "Casual Tops", price: "₹599", num: 91, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85" },
      { name: "Crop Tops", price: "₹499", num: 92, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85" },
      { name: "Designer Tops", price: "₹799", num: 93, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85" },
      { name: "Party Wear Tops", price: "₹999", num: 94, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85" },
      { name: "Peplum Tops", price: "₹599", num: 95, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85" }
    ]
  },
  "western-trousers": {
    label: "Trousers",
    items: [
      { name: "Flared Trousers", price: "₹999", num: 96, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" },
      { name: "Palazzo Pants", price: "₹899", num: 97, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" },
      { name: "Straight Trousers", price: "₹1299", num: 98, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" },
      { name: "Wide-Leg Trousers", price: "₹1299", num: 99, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" }
    ]
  },
  "western-dresses": {
    label: "Western Dresses",
    items: [
      { name: "Casual Dresses", price: "₹1599", num: 100, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=85" },
      { name: "Evening Dresses", price: "₹1699", num: 101, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=85" },
      { name: "Maxi Dresses", price: "₹1699", num: 102, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=85" },
      { name: "Midi Dresses", price: "₹1699", num: 103, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=85" },
      { name: "Mini Dresses", price: "₹999", num: 104, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=85" },
      { name: "Party Dresses", price: "₹1999", num: 105, folder: "Western Wear", fallback: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=85" }
    ]
  }
};

export const WOMEN_CATEGORIES = {
  "co-ords": {
    label: "Co-Ord Sets",
    items: [
      { name: "Crop Top Sets", price: "₹899", num: 106, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" },
      { name: "Party Wear Co-Ords", price: "₹1299", num: 107, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" },
      { name: "Top & Skirt Sets", price: "₹999", num: 108, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" },
      { name: "Top & Trouser Sets", price: "₹1399", num: 109, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" }
    ]
  },
  "dresses": {
    label: "Dresses",
    items: [
      { name: "Casual Dresses", price: "₹1599", num: 110, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=85" },
      { name: "Designer Dresses", price: "₹1999", num: 111, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=85" },
      { name: "Evening Dresses", price: "₹1299", num: 112, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=85" },
      { name: "Maxi Dresses", price: "₹1399", num: 113, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=85" },
      { name: "Midi Dresses", price: "₹1399", num: 114, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=85" },
      { name: "Party Wear Dresses", price: "₹1999", num: 115, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=85" }
    ]
  },
  "kurtis": {
    label: "Kurtis",
    items: [
      { name: "A-Line Kurtis", price: "₹799", num: 116, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1617627191906-60cb1ecd4226?w=800&q=85" },
      { name: "Anarkali Kurtis", price: "₹999", num: 117, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=85" },
      { name: "Designer Kurtis", price: "₹1299", num: 118, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1617627191906-60cb1ecd4226?w=800&q=85" },
      { name: "Flared Kurtis", price: "₹999", num: 119, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1617627191906-60cb1ecd4226?w=800&q=85" },
      { name: "Short Kurtis", price: "₹499", num: 120, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1617627191906-60cb1ecd4226?w=800&q=85" },
      { name: "Straight Kurtis", price: "₹699", num: 121, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1617627191906-60cb1ecd4226?w=800&q=85" }
    ]
  },
  "partywear": {
    label: "Party Wear",
    items: [
      { name: "Designer Gowns", price: "₹2999", num: 122, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1610030006670-d1e4ba6662c7?w=900&q=85" },
      { name: "Embellished Outfits", price: "₹4999", num: 123, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=85" },
      { name: "Evening Wear", price: "₹3999", num: 124, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=85" },
      { name: "Party Dresses", price: "₹5999", num: 125, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=85" }
    ]
  },
  "skirts": {
    label: "Skirts",
    items: [
      { name: "A-Line Skirts", price: "₹499", num: 126, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85" },
      { name: "Designer Skirts", price: "₹799", num: 127, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85" },
      { name: "Flared Skirts", price: "₹899", num: 128, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85" },
      { name: "Long Skirts", price: "₹699", num: 129, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=85" },
      { name: "Midi Skirts", price: "₹599", num: 130, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=85" }
    ]
  },
  "tops": {
    label: "Tops & Blouses",
    items: [
      { name: "Casual Tops", price: "₹499", num: 131, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85" },
      { name: "Crop Tops", price: "₹499", num: 132, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85" },
      { name: "Designer Blouses", price: "₹2999", num: 133, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=85" },
      { name: "Designer Tops", price: "₹1999", num: 134, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85" },
      { name: "Peplum Tops", price: "₹799", num: 135, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85" },
      { name: "Saree Blouses", price: "₹399", num: 136, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=85" }
    ]
  },
  "trousers": {
    label: "Trousers & Pants",
    items: [
      { name: "Cigarette Pants", price: "₹799", num: 137, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" },
      { name: "Designer Trousers", price: "₹999", num: 138, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" },
      { name: "Palazzo Pants", price: "₹899", num: 139, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" },
      { name: "Straight Pants", price: "₹999", num: 140, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" },
      { name: "Wide-Leg Pants", price: "₹999", num: 141, folder: "Womens Wear", fallback: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=85" }
    ]
  }
};
