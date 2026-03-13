# Re:Book - Community Bookstore Platform

A comprehensive, feature-rich bookstore platform built with Next.js, React, and Tailwind CSS. Celebrate reading with new, pre-loved, and rare books while building a vibrant community.

## 🎯 Key Features

### Shopping & Browsing
- **Multi-Category Browsing**: Fiction, Sci-Fi, Manga, Manhwa, Classics, Non-Fiction, and more
- **Advanced Search**: Full-text search with ISBN lookup and QR code scanning
- **Book Series**: Complete series browsing with reading order
- **Filter Options**: Price range, condition (new/pre-loved), format, language, and more
- **Multiple View Modes**: Grid, List, and Tile views for book browsing
- **Featured Sections**: Featured authors, trending books, and category spotlights

### User Accounts & Management
- **Authentication**: Secure login and signup with encrypted passwords
- **My Account Dashboard**: View orders, wishlist, reading history, and settings
- **Settings Menu**:
  - Dark/Light theme toggle
  - Recommendation algorithm toggle
  - Hide already-read books option
  - Email and notification preferences
  - Privacy and accessibility settings

### Shopping Features
- **Shopping Cart**: Add books with different conditions/formats
- **Checkout Flow**: Complete purchase flow with shipping and payment
- **PayPal Integration**: Ready for payment processing
- **Order History**: Track all orders with status tracking
- **Shipping Tracking**: Real-time order status updates

### Community & Social
- **Wishlist**: Save books for later
- **Reading History**: Track books you've read with checklist and batch operations
- **Book Reviews**: Write and read reviews with verified purchase badges
- **Reading Challenges**: Set reading goals (books and pages) with progress tracking
- **Book Clubs**: Join and participate in community book clubs
- **Rewards Program**: Earn points for purchases and activities
- **Referral System**: Invite friends and earn rewards

### Content & Discovery
- **Blog**: Book reviews, reading recommendations, and literary articles
- **Author Pages**: Author bios, all their books, similar authors, and follow system
- **Book Recommendations**: Personalized suggestions based on reading history (toggleable)
- **WorldCat Library Finder**: Find books in local libraries
- **Professional Reviews**: Integrated reviews from industry professionals
- **Book Awards**: Track Pulitzer, Hugo, Newbery, and other awards

### Administrative Features
- **Sell Your Books**: Program to sell pre-loved books back to Re:Book
- **Book Requests**: Community voting on books they want to see
- **Gift Certificates**: Purchase and redeem gift cards
- **Affiliate Program**: Earn commissions by promoting books
- **Wholesale Program**: Bulk ordering for businesses and institutions

### Help & Support
- **Help Center**: Comprehensive support system with:
  - FAQs
  - Return Policy
  - Shipping Information
  - Payment Methods
  - Order Status Tracking
  - Support Chat
- **Accessibility Page**: WCAG compliance and accessibility features
- **Privacy Policy**: Complete data protection information
- **Cookie Settings**: User control over tracking
- **Data Control**: "Do Not Sell My Data" option

### Additional Features
- **Dark Mode**: Full dark theme support
- **Social Integration**: Facebook, X, Pinterest, Tumblr, Instagram, YouTube buttons
- **Responsive Design**: Mobile-first approach for all devices
- **Performance**: Optimized loading and caching
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Optimized metadata and structured data

## 📁 Project Structure

```
/app
  /(auth)/          # Login, signup pages
  /(account)/       # User account dashboard, settings, orders
  /(books)/         # Book detail pages with reviews
  /(authors)/       # Author profile pages
  /(categories)/    # Category browsing and series pages
  /(cart)/          # Shopping cart and checkout
  /(community)/     # Wishlist, reading challenges, blog, etc.
  /(help)/          # Help center and support pages
  /(pages)/         # Static pages (about, contact)
  /(search)/        # Search and QR scanning
/components
  /layout/          # Header, Footer, MainLayout
  /books/           # BookCard, ReviewCard, ReviewForm, ViewToggle
  /search/          # FilterSidebar
  /ui/              # shadcn/ui components
/context/           # Global state (Auth, Theme, Cart, Reviews, Wishlist)
/data/              # Mock data (books, authors, categories, series)
/public/            # Static assets
```

## 🚀 Getting Started

### Installation
1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

### Running the Project
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Current Status

### Phase 1: Frontend Prototype ✅ Complete
- All pages created with mock data
- Full UI implementation
- Theme system with dark mode
- Responsive design
- Shopping cart functionality
- User authentication flow

### Phase 2: Backend Integration (Ready for Implementation)
- **Database**: Ready for Supabase PostgreSQL integration
- **Authentication**: Ready for Supabase Auth
- **Payments**: Ready for PayPal integration
- **Real Data**: Books, authors, reviews from actual database
- **User Accounts**: Persistent user data and order history
- **RLS Security**: Row-level security policies for data protection

## 🔧 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **UI Library**: React 19+
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Context + Custom Hooks
- **Theme**: Custom theme context with dark mode
- **Package Manager**: pnpm

## 🎨 Design System

- **Color Palette**: Warm, inviting earth tones
  - Primary: Deep brown (for warmth)
  - Secondary: Golden tones (for accents)
  - Neutrals: Warm grays and creams
- **Typography**: Clean sans-serif for readability
- **Layout**: Flexbox-first responsive design
- **Spacing**: Tailwind spacing scale

## 📈 Future Enhancements

1. **Backend Database**: Migrate mock data to Supabase
2. **Real Authentication**: Replace mock auth with Supabase Auth
3. **Payment Processing**: Integrate PayPal SDK
4. **Email System**: Transactional emails for orders and notifications
5. **Admin Dashboard**: Book management and analytics
6. **Advanced Analytics**: User behavior and sales tracking
7. **AI Recommendations**: ML-based book suggestions
8. **API Integration**: Real book data from third-party APIs (Open Library, Google Books)

## 📝 Notes

- All pages are functional with mock data
- Ready to connect to a backend database
- PayPal integration structure in place
- User authentication flows fully designed
- All navigation links working
- Mobile responsive throughout

## 📄 License

This project is created as a demonstration of a modern bookstore platform.

---

**Re:Book** - Celebrate Reading. Build Community. Discover Your Next Read.
