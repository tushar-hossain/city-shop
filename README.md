# City Shop

An e-commerce storefront built with Next.js 16 (App Router), React 19 and Tailwind CSS v4. Product, category and blog data come from the [DummyJSON](https://dummyjson.com) API. It has Google sign-in, a persistent cart and wishlist, and Stripe Checkout.

## Features

- **Home**: a hero banner followed by 4 products from every category, each with a "View All" link.
- **Products**: a product grid with a category filter sidebar, active-filter chips and result counts (`/products?category=beauty`).
- **Categories**: a "Shop by Categories" page with item counts, stats and a cover image per category.
- **Product details**: an image gallery, pricing, discount, stock and add to cart.
- **Search**: product search from the header.
- **Cart**: quantity controls, an order summary and Stripe Checkout (signed-in users only).
- **Wishlist**: save products with the heart icon, remove them, add all to the cart, or clear the list.
- **Blog**: paginated posts, tag filtering, popular posts, and post pages with the author and comments.
- **Contact**: contact details, a message form, a map and social links.
- **Auth**: Google sign-in with NextAuth.
- The cart and wishlist are kept in `localStorage` with redux-persist, so they survive a page reload.

## Tech stack

| Area | Library |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack), React 19, TypeScript |
| Styling | Tailwind CSS v4, `tailwind-merge`, `react-icons` |
| State | Redux Toolkit, React Redux, redux-persist |
| Auth | NextAuth v4 (Google provider) |
| Payments | Stripe Checkout (`stripe`, `@stripe/stripe-js`) |
| Notifications | `react-hot-toast` |
| Data | [DummyJSON](https://dummyjson.com) products, categories, posts, users |

## Getting started

### Prerequisites

- Node.js 20 or newer
- pnpm (the repo includes `pnpm-lock.yaml`)
- A Google OAuth client and a Stripe account (test mode is fine)

### 1. Install

```bash
git clone https://github.com/tushar-hossain/city-shop.git
cd city-shop
pnpm install
```

### 2. Environment variables

Create a `.env` file in the project root:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret

# Google OAuth: https://console.cloud.google.com/apis/credentials
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Stripe: https://dashboard.stripe.com/test/apikeys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

- Generate `NEXTAUTH_SECRET` with `openssl rand -base64 32`.
- In Google Cloud, add `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI.
- `NEXTAUTH_URL` is also used to build Stripe's success and cancel URLs.

### 3. Run

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |

## Routes

| Route | Page |
| --- | --- |
| `/` | Home: banner and products by category |
| `/products` | All products, filterable with `?category=<slug>` |
| `/products/[id]` | Product details |
| `/categories` | All categories |
| `/cart` | Shopping cart (requires sign-in) |
| `/favorite` | Wishlist |
| `/blog` | Blog list, with `?page=<n>` and `?tag=<tag>` |
| `/blog/[id]` | Blog post |
| `/contact` | Contact page |
| `/success`, `/cancel` | Stripe Checkout return pages |
| `/api/checkout` | `POST`: creates a Stripe Checkout session |
| `/api/auth/*` | NextAuth endpoints |

## Project structure

```
app/            Routes (App Router) and API route handlers
components/     UI components, grouped by feature (Products, Blog, CartPage, Header, ...)
constants/      Navigation links and banner content
helpers/        Data fetching (GetData, getCategoriesWithMeta, getProductsByCategory)
redux/          Redux store and the CityShop slice (cart, favorite)
public/assets/  Logo, banner and other static images
type.ts         Shared TypeScript types (Product, Category, Post, ...)
```

## Stripe testing

Use the card number `4242 4242 4242 4242` with any future expiry date, any CVC and any postcode. Payments made in test mode don't charge real money.

## Notes

- The contact form validates input and shows a confirmation, but it doesn't send email yet.
- The blog's data comes from DummyJSON's posts API, which has no images or dates. Covers are generated gradients and authors are shown as initials.

## Author

**Md. Tushar Hossain**: [GitHub](https://github.com/tushar-hossain) · [LinkedIn](https://www.linkedin.com/in/tushar-hossain-dev)
