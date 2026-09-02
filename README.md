# Hungrill Hub

A modern, high-performance, interactive business website for **Hungrill Hub - GRILL & BBQ in Irinjalakuda**, Thrissur. 

This website showcases authentic Arabian barbecue, charcoal-grilled Al-Faham options, customer-favorite Iranian shawarmas, crispy fried chicken feasts, subs, burgers, and thick milkshakes using modern dark glassmorphism aesthetics and smooth interactive components.

---

## Key Features

- **Fiery Amber Visual Theme**: Premium obsidian-dark styling with warm ambient glowing accents, smooth hover triggers, and responsive layout.
- **Authentic Interactive Menu**: 26 authentic dishes categorized across:
  - **Al Faham** (Hungrill Special, Turkish Tavuk, Kansas)
  - **Shawarmas** (Arabic Roll/Plate, Iranian Roll/Plate, Bun Shawarma, Cheesewrap)
  - **Fried Chicken & Combos** (Hungrill Twaine 2 Pc, Fab Four 4 Pc, Big 8 Bucket, Deca Tang 10 Pc Mega Feast, Chicken & Veg Nuggets)
  - **Wraps & Burgers** (Zinger Burrito, Veg Roll, Hungrill Chicken & Veg Burgers, Hoagies Subs)
  - **Drinks & Shakes** (9 Thick Shake varieties, Fresh Fruit Juices, Fresh Lime Soda)
  - **Sides & Extras** (French Fries, Fried Chicken Add-Ons, Garlic Paste Toum, Kuboos & Rumali Roti)
- **Multi-Tier Portion Pricing**: Clean, informative badges showing portion tiers (Quarter / Half / Full, Roll / Plate, Combos).
- **Official Scanned Menu Modal (Lightbox)**: An interactive modal allowing customers to inspect the 4 high-resolution printed menu cards directly on the website with tab switching and full-res preview.
- **Real-Time Live Search & Category Filtering**: Instant search across dish titles, descriptions, badges, and portion labels.
- **Genuine Reviews Carousel**: Auto-sliding and manual-controlled testimonial deck showing customer reviews from online profiles.
- **Location & Contact Integration**: Direct click-to-call, WhatsApp order links, and embedded Google Maps for Railway Station Road, Irinjalakuda.

---

## Tech Stack

- **Core**: Semantic HTML5 & Modern ES6+ JavaScript
- **Styling**: Pure CSS3 variables & Glassmorphic layouts (no bulky framework dependencies)
- **Icons**: Font Awesome v6
- **Testing**: Playwright (Python) for automated browser verification

---

## Running Locally

To run the project locally, serve the directory using Python's built-in HTTP server:

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd Hungrill
   ```

2. Start the local server:
   ```bash
   python -m http.server 8000
   ```

3. Open your browser and visit:
   ```text
   http://localhost:8000
   ```

---

## Folder Structure

```text
├── assets/
│   ├── hungrill/            # Authentic food photography for dishes
│   ├── menu/                # Official printed menu card scans (4 pages)
│   ├── ambience.jpg         # Dining interior style
│   ├── grill_hero.jpg       # Sizzling grill hero visual
│   ├── grill_platter.jpg    # Platter highlight
│   └── logo.jpg             # Official Hungrill Hub branding
├── index.html               # Main page layout, SEO tags & menu cards
├── styles.css               # Design system, glassmorphic styles & modal CSS
├── app.js                   # Navigation, live search, carousel & modal logic
├── README.md                # Project documentation
└── .gitignore               # Environment & OS file exclusions
```

