# RENTROPY

A static, responsive rental platform that promotes a **circular economy** by connecting people who have gear, tools, and equipment with people who need them. Rent by the day, reduce waste, and support sustainable consumption.

---

## Mission

RENTROPY believes in a world where **access matters more than ownership**. The platform reduces waste, strengthens communities, and supports the circular economy through a simple flow: **Use → Return → Reuse**.

---

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (vanilla)
- **Data:** `localStorage` for cart, saved items, rentals, chat, and login state (no backend required)
- **Design:** Neomorphism UI with a consistent color palette (primary blue, accent blue, neo shadows)

---

## Project Structure

```
Rentropy/
├── README.md
├── src/
│   ├── assets/                 # Images, logo, product assets
│   └── frontend/              # Main Rentropy static site
│       ├── index.html         # Homepage
│       ├── index.css
│       ├── listing.html       # Product listings (grid, filters, search)
│       ├── listing.css
│       ├── product.html       # Product detail page
│       ├── product.css
│       ├── cart.html          # Shopping cart
│       ├── cart.css
│       ├── checkout.html      # Checkout (address, payment)
│       ├── checkout.css
│       ├── login.html         # Login / Sign up
│       ├── login.css
│       ├── dashboard.html     # User dashboard (profile, rentals, saved, history)
│       ├── dashboard.css
│       ├── chat.html          # Messages (conversations with sellers)
│       ├── chat.css
│       ├── about.html         # About, mission, SDG, How it works
│       ├── about.css
│       ├── brand-dashboard.html  # Brand/seller dashboard (products, analytics)
│       ├── brand-dashboard.css
│       └── Rentee/            # Alternate frontend variant (optional)
```

Each page has its own CSS file for independent styling.

---

## Features

### 1. Homepage
- **Hero:** Gradient background (dark blue `#0D2E9B` to white), headline “Rent Anything, Anywhere,” tagline, search/filter by category, link to all listings
- **Most Popular:** Featured product cards (neomorphism style) linking to product detail
- **Popular Categories:** Category cards (Outdoor, Fashion, Tools, Electronics) linking to filtered listings
- **SDG Impact:** Section highlighting alignment with SDG 12, 11, 13
- **CTA:** Browse all listings
- Navbar fades on scroll; smooth scrolling

### 2. Product Listing (`listing.html`)
- **Where & When:** Cards for location and date-range selection (prices update by rental days)
- **Filters:** Category, price range, location
- **Search:** Search bar; on scroll it collapses into a transparent bubble overlay at the top
- **Grid:** Product cards with image, name, category, price per day (respects selected dates)
- **Inquire:** Button on each card opens the Messages page for that product
- Neomorphism card style; navbar fades on scroll

### 3. Product Detail (`product.html`)
- Product image, title, category, brand, description
- **When do you need it?** Editable date range (start/end); pricing updates by duration
- **Pricing:** Per-day and total for selected days
- **Actions:** Add to cart, **Inquire** (opens chat), **Save** / **Unsave** (saved items)
- Saves selected dates in URL so cart and listing stay in sync

### 4. Cart (`cart.html`)
- List of cart items with image, name, brand, **rental period** (date range and days)
- **Change dates** per item; **Update** recalculates price
- **Remove** item
- **Order summary:** Rental period, itemized lines (price/day × days), subtotal, 10% service fee, total
- **Saved products:** Section to quickly add saved items to cart (with date selection)
- **Proceed to checkout**

### 5. Checkout (`checkout.html`)
- **Order summary:** Same structure as cart (rental period, itemized lines, subtotal, fee, total)
- **Payment method:** GCash, PayMaya, GoTyme, or Credit card
- Address/contact placeholder and **Confirm** action
- On confirm, rentals are saved to `localStorage` (for My Rentals) with `amount_paid` and payment method

### 6. User Dashboard (`dashboard.html`)
- **Profile:** Display name, email, phone (form)
- **My Rentals:** Active rentals with image, name, dates, provider; **View details** (modal with rental + payment info, **amount paid**); **Chat** (opens Messages for that rental)
- **Saved items:** Grid of saved products; link to product page
- **History:** Past rentals (moved here only after the rental end date); same View details and Chat
- Rentals move to History automatically when the rental period has ended

### 7. Brand Dashboard (`brand-dashboard.html`)
- For sellers: products list, add product, analytics placeholder, featured upgrade
- Separate from the main renter flow

### 8. About (`about.html`)
- **Mission:** Circular economy, access over ownership
- **How it works:** Use → Return → Reuse
- **SDG alignment:** SDG 12 (Responsible Consumption & Production), SDG 11 (Sustainable Cities & Communities), SDG 13 (Climate Action)
- **Contact:** Email, support

### 9. Login / Sign Up (`login.html`)
- Custom forms (no Firebase); state stored in `localStorage` for demo
- After login, nav shows Dashboard and Messages icons instead of Sign Up / Login

### 10. Messages (`chat.html`)
- **Dedicated chat page** (Messenger-style): conversation list on the left, active thread on the right
- **Conversations:** Product inquiries (`product_<id>`) and rental chats (`rental_...`) from dashboard
- When a conversation is selected, the placeholder is hidden and the chat thread fills the panel
- Messages and conversation list persisted in `localStorage`
- **Inquire** from product or listing opens this page with the right thread; **Chat** from dashboard does the same for a rental

---

## Design System

### Color palette
- **Primary blue:** `#1a2b75` (logo, key buttons, headings)
- **Hero gradient:** `#0D2E9B` (darker) to `#ffffff`
- **Accent blue:** `#007bff` (search button, links)
- **Dark text:** `#333333`
- **Light text:** `#ffffff`
- **Neomorphism:** Background `#e0e5ec`, light shadow `#ffffff`, dark shadow `#a3b1c6`; raised and pressed box-shadows for cards and inputs

### UI
- **Neomorphism** for cards, buttons, inputs, and modals (soft shadows, same-tone background)
- **Responsive:** Layouts adapt for mobile and desktop
- **Smooth scroll:** `scroll-behavior: smooth` and ease-in-out where applicable
- **Navbar:** Transparent on hero; fades on scroll on index; optional solid background on listing, about, how-it-works

---

## How to Run

The frontend is static. Use any local server that serves `src/frontend` as the root (or open files directly; some features that rely on path-based assets may need a server).

### Option 1: VS Code Live Server
1. Open `src/frontend` in VS Code.
2. Right-click `index.html` → “Open with Live Server.”

### Option 2: Python
```bash
cd src/frontend
python -m http.server 8080
```
Then open `http://localhost:8080`.

### Option 3: Node (npx)
```bash
cd src/frontend
npx serve .
```

**Entry point:** `src/frontend/index.html`

---

## Data in localStorage

| Key               | Purpose                                      |
|-------------------|----------------------------------------------|
| `cart`            | Cart items (product, dates, quantity, price) |
| `savedItems`      | Saved-for-later products                     |
| `rentals`         | Active and past rentals (from checkout)      |
| `chat_conversations` | All chat threads (product + rental)      |
| `currentUser`     | Logged-in user (email) for demo              |

---

## Payment Options (Checkout)

- **GCash**
- **PayMaya**
- **GoTyme**
- **Credit card**

Stored with each rental for display in dashboard “View details.”

---

## License & Copyright

© 2026 RENTROPY. All rights reserved.
