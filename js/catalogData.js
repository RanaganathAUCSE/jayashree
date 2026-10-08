/**
 * Full product catalog configuration with exact catalogue numbers (1-151) and real local image folders.
 * Numbers 110–119 are intentionally skipped per specifications.
 */

export const BRIDAL_CATEGORIES = {
  "accessories": {
    label: "Bridal Accessories",
    items: [
      { name: "Bridal Belts", price: "₹399", num: 1, folder: "Bridal Wear", img: "/Bridal Wear/1.webp", sizes: ["Free Size"] },
      { name: "Dupattas", price: "₹699", num: 2, folder: "Bridal Wear", img: "/Bridal Wear/2.webp", sizes: ["Free Size"] },
      { name: "Matching Accessories", price: "₹499", num: 3, folder: "Bridal Wear", img: "/Bridal Wear/3.webp", sizes: ["Free Size"] },
      { name: "Veils", price: "₹999", num: 4, folder: "Bridal Wear", img: "/Bridal Wear/4.webp", sizes: ["Free Size"] }
    ]
  },
  "bridal-blouses": {
    label: "Bridal Blouses",
    items: [
      { name: "Customized Blouses", price: "₹999–₹4999", num: 5, folder: "Bridal Wear", img: "/Bridal Wear/5.webp" },
      { name: "Designer Blouses", price: "₹1999–₹9999", num: 6, folder: "Bridal Wear", img: "/Bridal Wear/6.webp" },
      { name: "Embellished Blouses", price: "₹2999–₹8999", num: 7, folder: "Bridal Wear", img: "/Bridal Wear/7.webp" },
      { name: "Traditional Blouses", price: "₹1599–₹6999", num: 8, folder: "Bridal Wear", img: "/Bridal Wear/8.webp" }
    ]
  },
  "bridal-gowns": {
    label: "Bridal Gowns",
    items: [
      { name: "Designer Gowns", price: "₹5999–₹9999", num: 9, folder: "Bridal Wear", img: "/Bridal Wear/9.webp" },
      { name: "Embellished Gowns", price: "₹3999–₹8999", num: 10, folder: "Bridal Wear", img: "/Bridal Wear/10.webp" },
      { name: "Reception Gowns", price: "₹6999–₹9999", num: 11, folder: "Bridal Wear", img: "/Bridal Wear/11.webp" },
      { name: "Wedding Gowns", price: "₹9999–₹29999", num: 12, folder: "Bridal Wear", img: "/Bridal Wear/12.webp" }
    ]
  },
  "bridal-lehengas": {
    label: "Bridal Lehengas",
    items: [
      { name: "Designer Lehengas", price: "₹9999–₹59999", num: 13, folder: "Bridal Wear", img: "/Bridal Wear/13.webp" },
      { name: "Embroidered Lehengas", price: "₹9999–₹29999", num: 14, folder: "Bridal Wear", img: "/Bridal Wear/14.webp" },
      { name: "Reception Lehengas", price: "₹9999–₹39999", num: 15, folder: "Bridal Wear", img: "/Bridal Wear/15.webp" },
      { name: "Traditional Bridal Lehengas", price: "₹9999–₹69999", num: 16, folder: "Bridal Wear", img: "/Bridal Wear/16.webp" }
    ]
  },
  "bridesmaid": {
    label: "Bridesmaid Wear",
    items: [
      { name: "Bridesmaid Dresses", price: "₹9999", num: 17, folder: "Bridal Wear", img: "/Bridal Wear/17.webp" },
      { name: "Bridesmaid Lehengas", price: "₹8999", num: 18, folder: "Bridal Wear", img: "/Bridal Wear/18.webp" },
      { name: "Coordinated Outfits", price: "₹9999", num: 19, folder: "Bridal Wear", img: "/Bridal Wear/19.webp" }
    ]
  },
  "engagement": {
    label: "Engagement Wear",
    items: [
      { name: "Designer Outfits", price: "₹9999–₹29999", num: 20, folder: "Bridal Wear", img: "/Bridal Wear/20.webp" },
      { name: "Engagement Dresses", price: "₹9999–₹39999", num: 21, folder: "Bridal Wear", img: "/Bridal Wear/21.webp" },
      { name: "Engagement Lehengas", price: "₹9999–₹49999", num: 22, folder: "Bridal Wear", img: "/Bridal Wear/22.webp" }
    ]
  },
  "reception": {
    label: "Reception Wear",
    items: [
      { name: "Designer Lehengas", price: "₹9999–₹29999", num: 23, folder: "Bridal Wear", img: "/Bridal Wear/23.webp" },
      { name: "Indo-Western Outfits", price: "₹9999–₹19999", num: 24, folder: "Bridal Wear", img: "/Bridal Wear/24.webp" },
      { name: "Reception Gowns", price: "₹9999–₹29999", num: 25, folder: "Bridal Wear", img: "/Bridal Wear/25.webp" }
    ]
  }
};

export const ETHNIC_CATEGORIES = {
  "anarkalis": {
    label: "Anarkalis",
    items: [
      { name: "Designer Anarkalis", price: "₹999", num: 26, folder: "Ethnic Wear", img: "/Ethnic Wear/26.webp" },
      { name: "Floor Length Anarkalis", price: "₹1499", num: 27, folder: "Ethnic Wear", img: "/Ethnic Wear/27.webp" },
      { name: "Party Wear Anarkalis", price: "₹2999", num: 28, folder: "Ethnic Wear", img: "/Ethnic Wear/28.webp" },
      { name: "Traditional Anarkalis", price: "₹2999", num: 29, folder: "Ethnic Wear", img: "/Ethnic Wear/29.webp" }
    ]
  },
  "kurta-sets": {
    label: "Kurta Sets",
    items: [
      { name: "Designer Kurta Sets", price: "₹999", num: 30, folder: "Ethnic Wear", img: "/Ethnic Wear/30.webp" },
      { name: "Festive Kurta Sets", price: "₹999", num: 31, folder: "Ethnic Wear", img: "/Ethnic Wear/31.webp" },
      { name: "Kurta & Palazzo Sets", price: "₹1299", num: 32, folder: "Ethnic Wear", img: "/Ethnic Wear/32.webp" },
      { name: "Kurta & Pant Sets", price: "₹1499", num: 33, folder: "Ethnic Wear", img: "/Ethnic Wear/33.webp" }
    ]
  },
  "lehengas": {
    label: "Lehengas",
    items: [
      { name: "Bridal Lehengas", price: "₹3999", num: 34, folder: "Ethnic Wear", img: "/Ethnic Wear/34.webp" },
      { name: "Designer Lehengas", price: "₹4999", num: 35, folder: "Ethnic Wear", img: "/Ethnic Wear/35.webp" },
      { name: "Festive Lehengas", price: "₹4999", num: 36, folder: "Ethnic Wear", img: "/Ethnic Wear/36.webp" },
      { name: "Party Wear Lehengas", price: "₹5999", num: 37, folder: "Ethnic Wear", img: "/Ethnic Wear/37.webp" }
    ]
  },
  "salwar-suits": {
    label: "Salwar Suits",
    items: [
      { name: "Designer Salwar Suits", price: "₹999", num: 38, folder: "Ethnic Wear", img: "/Ethnic Wear/38.webp" },
      { name: "Party Wear Suits", price: "₹1299", num: 39, folder: "Ethnic Wear", img: "/Ethnic Wear/39.webp" },
      { name: "Straight Salwar Suits", price: "₹1399", num: 40, folder: "Ethnic Wear", img: "/Ethnic Wear/40.webp" },
      { name: "Traditional Suits", price: "₹1599", num: 41, folder: "Ethnic Wear", img: "/Ethnic Wear/41.webp" }
    ]
  },
  "saree-blouses": {
    label: "Saree Blouses",
    items: [
      { name: "Customized Blouses", price: "₹499", num: 42, folder: "Ethnic Wear", img: "/Ethnic Wear/42.webp" },
      { name: "Designer Blouses", price: "₹999–₹2999", num: 43, folder: "Ethnic Wear", img: "/Ethnic Wear/43.webp" },
      { name: "Embellished Blouses", price: "₹999–₹4999", num: 44, folder: "Ethnic Wear", img: "/Ethnic Wear/44.webp" },
      { name: "Traditional Blouses", price: "₹999–₹5999", num: 45, folder: "Ethnic Wear", img: "/Ethnic Wear/45.webp" }
    ]
  },
  "sharara-sets": {
    label: "Sharara Sets",
    items: [
      { name: "Festive Sharara Sets", price: "₹1599", num: 46, folder: "Ethnic Wear", img: "/Ethnic Wear/46.webp" },
      { name: "Party Wear Sharara Sets", price: "₹2999", num: 47, folder: "Ethnic Wear", img: "/Ethnic Wear/47.webp" },
      { name: "Sharara & Kurti Sets", price: "₹3999", num: 48, folder: "Ethnic Wear", img: "/Ethnic Wear/48.webp" }
    ]
  },
  "traditional-dresses": {
    label: "Traditional Dresses",
    items: [
      { name: "Celebration Outfits", price: "₹9999", num: 49, folder: "Ethnic Wear", img: "/Ethnic Wear/49.webp" },
      { name: "Designer Ethnic Dresses", price: "₹9999", num: 50, folder: "Ethnic Wear", img: "/Ethnic Wear/50.webp" },
      { name: "Festival Wear", price: "₹9999", num: 51, folder: "Ethnic Wear", img: "/Ethnic Wear/51.webp" },
      { name: "Traditional Party Wear", price: "₹15999", num: 52, folder: "Ethnic Wear", img: "/Ethnic Wear/52.webp" }
    ]
  }
};

export const KIDS_CATEGORIES = {
  "kids-casual": {
    label: "Casual Wear",
    items: [
      { name: "Casual Dresses", price: "₹299", num: 53, folder: "Kids Wear", img: "/Kids Wear/53.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Co-ord Sets", price: "₹399", num: 54, folder: "Kids Wear", img: "/Kids Wear/54.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Comfortable Daily Wear", price: "₹499", num: 55, folder: "Kids Wear", img: "/Kids Wear/55.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Tops & Skirts", price: "₹499", num: 56, folder: "Kids Wear", img: "/Kids Wear/56.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] }
    ]
  },
  "kids-custom": {
    label: "Customized Kids' Wear",
    items: [
      { name: "Customized Dresses", price: "₹599", num: 57, folder: "Kids Wear", img: "/Kids Wear/57.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Customized Ethnic Wear", price: "₹699", num: 58, folder: "Kids Wear", img: "/Kids Wear/58.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Customized Frocks", price: "₹799", num: 59, folder: "Kids Wear", img: "/Kids Wear/59.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Customized Party Outfits", price: "₹999", num: 60, folder: "Kids Wear", img: "/Kids Wear/60.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Size Customization", price: "₹1599", num: 61, folder: "Kids Wear", img: "/Kids Wear/61.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] }
    ]
  },
  "ethnic-kids": {
    label: "Ethnic Kids' Wear",
    items: [
      { name: "Anarkali Sets", price: "₹799", num: 62, folder: "Kids Wear", img: "/Kids Wear/62.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Kurta Sets", price: "₹899", num: 63, folder: "Kids Wear", img: "/Kids Wear/63.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Lehenga Sets", price: "₹999", num: 64, folder: "Kids Wear", img: "/Kids Wear/64.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Pavadai Sets", price: "₹1599", num: 65, folder: "Kids Wear", img: "/Kids Wear/65.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Traditional Dresses", price: "₹1999", num: 66, folder: "Kids Wear", img: "/Kids Wear/66.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] }
    ]
  },
  "girls-dresses": {
    label: "Girls' Dresses",
    items: [
      { name: "Casual Dresses", price: "₹999", num: 67, folder: "Kids Wear", img: "/Kids Wear/67.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Designer Dresses", price: "₹1999", num: 68, folder: "Kids Wear", img: "/Kids Wear/68.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Flared Designer", price: "₹1499", num: 69, folder: "Kids Wear", img: "/Kids Wear/69.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Frocks", price: "₹1999", num: 70, folder: "Kids Wear", img: "/Kids Wear/70.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Party Dresses", price: "₹2999", num: 71, folder: "Kids Wear", img: "/Kids Wear/71.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] }
    ]
  },
  "kids-party": {
    label: "Party Wear",
    items: [
      { name: "Birthday Outfits", price: "₹999", num: 72, folder: "Kids Wear", img: "/Kids Wear/72.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Celebration Dresses", price: "₹1499", num: 73, folder: "Kids Wear", img: "/Kids Wear/73.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Designer Frocks", price: "₹1999", num: 74, folder: "Kids Wear", img: "/Kids Wear/74.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] },
      { name: "Special Occasion Outfits", price: "₹1999", num: 75, folder: "Kids Wear", img: "/Kids Wear/75.webp", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"] }
    ]
  }
};

export const WESTERN_CATEGORIES = {
  "bodycon": {
    label: "Bodycon Dresses",
    items: [
      { name: "Casual Bodycon", price: "₹999", num: 76, folder: "Western Wear", img: "/Western Wear/76.webp" },
      { name: "Evening Bodycon", price: "₹1599", num: 77, folder: "Western Wear", img: "/Western Wear/77.webp" },
      { name: "Party Wear Bodycon", price: "₹1799", num: 78, folder: "Western Wear", img: "/Western Wear/78.webp" }
    ]
  },
  "western-coords": {
    label: "Co-Ord Sets",
    items: [
      { name: "Crop Top Sets", price: "₹1499", num: 79, folder: "Western Wear", img: "/Western Wear/79.webp" },
      { name: "Party Wear Co-ords", price: "₹1999", num: 80, folder: "Western Wear", img: "/Western Wear/80.webp" },
      { name: "Top & Skirt Sets", price: "₹1499", num: 81, folder: "Western Wear", img: "/Western Wear/81.webp" },
      { name: "Top & Trouser Sets", price: "₹1999", num: 82, folder: "Western Wear", img: "/Western Wear/82.webp" }
    ]
  },
  "jumpsuits": {
    label: "Jumpsuits",
    items: [
      { name: "Casual Jumpsuits", price: "₹999", num: 83, folder: "Western Wear", img: "/Western Wear/83.webp" },
      { name: "Designer Jumpsuits", price: "₹1999", num: 84, folder: "Western Wear", img: "/Western Wear/84.webp" },
      { name: "Party Wear Jumpsuits", price: "₹2499", num: 85, folder: "Western Wear", img: "/Western Wear/85.webp" }
    ]
  },
  "western-skirts": {
    label: "Skirts",
    items: [
      { name: "A-Line Skirts", price: "₹599", num: 86, folder: "Western Wear", img: "/Western Wear/86.webp" },
      { name: "Flared Skirts", price: "₹699", num: 87, folder: "Western Wear", img: "/Western Wear/87.webp" },
      { name: "Maxi Skirts", price: "₹699", num: 88, folder: "Western Wear", img: "/Western Wear/88.webp" },
      { name: "Midi Skirts", price: "₹799", num: 89, folder: "Western Wear", img: "/Western Wear/89.webp" },
      { name: "Mini Skirts", price: "₹499", num: 90, folder: "Western Wear", img: "/Western Wear/90.webp" }
    ]
  },
  "western-tops": {
    label: "Tops",
    items: [
      { name: "Casual Tops", price: "₹599", num: 91, folder: "Western Wear", img: "/Western Wear/91.webp" },
      { name: "Crop Tops", price: "₹499", num: 92, folder: "Western Wear", img: "/Western Wear/92.webp" },
      { name: "Designer Tops", price: "₹799", num: 93, folder: "Western Wear", img: "/Western Wear/93.webp" },
      { name: "Party Wear Tops", price: "₹999", num: 94, folder: "Western Wear", img: "/Western Wear/94.webp" },
      { name: "Peplum Tops", price: "₹599", num: 95, folder: "Western Wear", img: "/Western Wear/95.webp" }
    ]
  },
  "western-trousers": {
    label: "Trousers",
    items: [
      { name: "Flared Trousers", price: "₹999", num: 96, folder: "Western Wear", img: "/Western Wear/96.webp" },
      { name: "Palazzo Pants", price: "₹899", num: 97, folder: "Western Wear", img: "/Western Wear/97.webp" },
      { name: "Straight Trousers", price: "₹1299", num: 98, folder: "Western Wear", img: "/Western Wear/98.webp" },
      { name: "Wide-Leg Trousers", price: "₹1299", num: 99, folder: "Western Wear", img: "/Western Wear/99.webp" }
    ]
  },
  "western-dresses": {
    label: "Western Dresses",
    items: [
      { name: "Casual Dresses", price: "₹1599", num: 100, folder: "Western Wear", img: "/Western Wear/100.webp" },
      { name: "Evening Dresses", price: "₹1699", num: 101, folder: "Western Wear", img: "/Western Wear/101.webp" },
      { name: "Maxi Dresses", price: "₹1699", num: 102, folder: "Western Wear", img: "/Western Wear/102.webp" },
      { name: "Midi Dresses", price: "₹1699", num: 103, folder: "Western Wear", img: "/Western Wear/103.webp" },
      { name: "Mini Dresses", price: "₹999", num: 104, folder: "Western Wear", img: "/Western Wear/104.webp" },
      { name: "Party Dresses", price: "₹1999", num: 105, folder: "Western Wear", img: "/Western Wear/105.webp" }
    ]
  }
};

export const WOMEN_CATEGORIES = {
  "co-ords": {
    label: "Co-Ord Sets",
    items: [
      { name: "Crop Top Sets", price: "₹899", num: 106, folder: "Womens Wear", img: "/Womens Wear/106.webp" },
      { name: "Party Wear Co-ords", price: "₹1299", num: 107, folder: "Womens Wear", img: "/Womens Wear/107.webp" },
      { name: "Top & Trouser Sets", price: "₹1399", num: 108, folder: "Womens Wear", img: "/Womens Wear/108.webp" },
      { name: "Tops & Skirts Set", price: "₹999", num: 109, folder: "Womens Wear", img: "/Womens Wear/109.webp" }
    ]
  },
  "dresses": {
    label: "Dresses",
    items: [
      { name: "Casual Dresses", price: "₹1599", num: 120, folder: "Womens Wear", img: "/Womens Wear/120.webp" },
      { name: "Designer Dresses", price: "₹1999", num: 121, folder: "Womens Wear", img: "/Womens Wear/121.webp" },
      { name: "Evening Dresses", price: "₹1299", num: 122, folder: "Womens Wear", img: "/Womens Wear/122.webp" },
      { name: "Maxi Dresses", price: "₹1399", num: 123, folder: "Womens Wear", img: "/Womens Wear/123.webp" },
      { name: "Midi Dresses", price: "₹1399", num: 124, folder: "Womens Wear", img: "/Womens Wear/124.webp" },
      { name: "Party Wear Dresses", price: "₹1999", num: 125, folder: "Womens Wear", img: "/Womens Wear/125.webp" }
    ]
  },
  "kurtis": {
    label: "Kurtis",
    items: [
      { name: "A-Line Kurtis", price: "₹799", num: 126, folder: "Womens Wear", img: "/Womens Wear/126.webp" },
      { name: "Anarkali Kurtis", price: "₹999", num: 127, folder: "Womens Wear", img: "/Womens Wear/127.webp" },
      { name: "Designer Kurtis", price: "₹1299", num: 128, folder: "Womens Wear", img: "/Womens Wear/128.webp" },
      { name: "Flared Kurtis", price: "₹999", num: 129, folder: "Womens Wear", img: "/Womens Wear/129.webp" },
      { name: "Short Kurtis", price: "₹499", num: 130, folder: "Womens Wear", img: "/Womens Wear/130.webp" },
      { name: "Straight Kurtis", price: "₹699", num: 131, folder: "Womens Wear", img: "/Womens Wear/131.webp" }
    ]
  },
  "partywear": {
    label: "Party Wear",
    items: [
      { name: "Designer Gowns", price: "₹2999", num: 132, folder: "Womens Wear", img: "/Womens Wear/132.webp" },
      { name: "Embellished Outfits", price: "₹4999", num: 133, folder: "Womens Wear", img: "/Womens Wear/133.webp" },
      { name: "Evening Wear", price: "₹3999", num: 134, folder: "Womens Wear", img: "/Womens Wear/134.webp" },
      { name: "Party Dresses", price: "₹5999", num: 135, folder: "Womens Wear", img: "/Womens Wear/135.webp" }
    ]
  },
  "skirts": {
    label: "Skirts",
    items: [
      { name: "A-Line Skirts", price: "₹499", num: 136, folder: "Womens Wear", img: "/Womens Wear/136.webp" },
      { name: "Designer Skirts", price: "₹799", num: 137, folder: "Womens Wear", img: "/Womens Wear/137.webp" },
      { name: "Flared Skirts", price: "₹899", num: 138, folder: "Womens Wear", img: "/Womens Wear/138.webp" },
      { name: "Long Skirts", price: "₹699", num: 139, folder: "Womens Wear", img: "/Womens Wear/139.webp" },
      { name: "Midi Skirts", price: "₹599", num: 140, folder: "Womens Wear", img: "/Womens Wear/140.webp" }
    ]
  },
  "tops": {
    label: "Tops & Blouses",
    items: [
      { name: "Casual Tops", price: "₹499", num: 141, folder: "Womens Wear", img: "/Womens Wear/141.webp" },
      { name: "Crop Tops", price: "₹499", num: 142, folder: "Womens Wear", img: "/Womens Wear/142.webp" },
      { name: "Designer Blouses", price: "₹2999", num: 143, folder: "Womens Wear", img: "/Womens Wear/143.webp" },
      { name: "Designer Tops", price: "₹1999", num: 144, folder: "Womens Wear", img: "/Womens Wear/144.webp" },
      { name: "Peplum Tops", price: "₹799", num: 145, folder: "Womens Wear", img: "/Womens Wear/145.webp" },
      { name: "Saree Blouses", price: "₹399", num: 146, folder: "Womens Wear", img: "/Womens Wear/146.webp" }
    ]
  },
  "trousers": {
    label: "Trousers & Pants",
    items: [
      { name: "Cigarette Pants", price: "₹799", num: 147, folder: "Womens Wear", img: "/Womens Wear/147.webp" },
      { name: "Designer Trousers", price: "₹999", num: 148, folder: "Womens Wear", img: "/Womens Wear/148.webp" },
      { name: "Palazzo Pants", price: "₹899", num: 149, folder: "Womens Wear", img: "/Womens Wear/149.webp" },
      { name: "Straight Pants", price: "₹999", num: 150, folder: "Womens Wear", img: "/Womens Wear/150.webp" },
      { name: "Wide Leg Pants", price: "₹999", num: 151, folder: "Womens Wear", img: "/Womens Wear/151.webp" }
    ]
  }
};
