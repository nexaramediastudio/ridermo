# TVS Showroom Website — Full Project Context

## Project Overview

Create a premium modern motorcycle showroom website focused only on TVS bikes. The website must feel luxurious, cinematic, futuristic, and clean while staying minimal and fast.

The goal is:

* Showcase TVS bikes professionally
* Build brand trust
* Post bikes easily
* Create a premium dealership vibe
* Generate customer inquiries
* Look modern on both mobile and desktop

The website should feel similar to luxury automotive brands.

---

# Brand Identity

## Main Brand

TVS Motor Company

## Design Style

* Dark premium UI
* Clean minimal layout
* Futuristic but elegant
* High-end dealership feeling
* Smooth cinematic animations
* Large bike visuals
* Modern typography
* Spacious layouts

---

# Color Palette

## Primary Colors

* Background: #0B0B0B
* Secondary Background: #121212
* Card Background: rgba(255,255,255,0.05)
* Border: rgba(255,255,255,0.08)

## Accent Colors

* TVS Red: #E10600
* Soft Red Glow: rgba(225,6,0,0.4)
* White Text: #FFFFFF
* Gray Text: #A1A1AA

## Effects

* Glassmorphism
* Soft shadows
* Red glow hover effects
* Blur backgrounds
* Gradient overlays

---

# Typography

## Main Font

Sora

## Font Usage

* Headings: Sora Bold
* Subheadings: Sora SemiBold
* Body Text: Sora Regular

## Typography Style

* Clean
* Modern
* Premium
* Slight letter spacing
* Large hero text

---

# Tech Stack

## Frontend

* React
* Next.js
* Tailwind CSS
* Framer Motion

## Backend

* Node.js
* Express.js

## Database

* PostgreSQL

## ORM

* Prisma ORM

## Hosting

Frontend:

* Vercel

Backend:

* Railway or Render

Database:

* Supabase PostgreSQL

---

# Website Pages

## 1. Home Page

Purpose:

* Create first impression
* Showcase premium feeling
* Display featured TVS bikes

Sections:

* Hero section
* Featured bikes
* Brand showcase
* Finance options
* About showroom
* Social media section
* Contact section

Features:

* Fullscreen hero
* Cinematic bike images
* Animated gradients
* Scroll animations
* Smooth transitions
* Hover effects

---

## 2. Bike Collection Page

Purpose:
Show all TVS bikes.

Bike Categories:

* Apache Series
* Raider Series
* Ntorq Series
* Ronin
* Sport Bikes
* Scooters

Each Bike Card Must Include:

* Bike image
* Bike name
* Engine CC
* Price
* Short description
* Explore button

Animations:

* Card hover zoom
* Glow effects
* Smooth fade in

---

## 3. Bike Details Page

Purpose:
Detailed information about each bike.

Sections:

* Large bike gallery
* Specifications
* Features
* Finance options
* Inquiry button
* WhatsApp contact

UI Style:

* Large visuals
* Minimal text
* Premium layout
* Animated image transitions

---

## 4. About Page

Sections:

* Company story
* Mission
* Why choose us
* Trust indicators
* Services

---

## 5. Contact Page

Sections:

* Inquiry form
* WhatsApp button
* Facebook
* Instagram
* Google Maps

---

# Admin Dashboard

Purpose:
Manage bikes and content easily.

Features:

* Add bike
* Edit bike
* Delete bike
* Upload images
* Manage prices
* Manage finance details
* Manage featured bikes

Admin UI:

* Clean dashboard
* Dark mode
* Sidebar navigation
* Modern cards

---

# Database Structure

## Table: bikes

Fields:

* id
* name
* slug
* category
* engine_cc
* price
* description
* top_speed
* mileage
* featured
* created_at
* updated_at

---

## Table: bike_images

Fields:

* id
* bike_id
* image_url
* created_at

---

## Table: inquiries

Fields:

* id
* customer_name
* phone_number
* message
* bike_id
* created_at

---

## Table: finance_options

Fields:

* id
* bike_id
* down_payment
* monthly_payment
* duration_months

---

# Animations

## Required Animations

### Hero Section

* Slow zoom effect
* Floating gradient lights
* Fade in text
* Smooth button animations

### Bike Cards

* Hover scale effect
* Glow border effect
* Image zoom on hover
* Smooth transitions

### Scroll Animations

* Fade up
* Blur reveal
* Slide animations
* Staggered animations

### Buttons

* Glow hover
* Magnetic hover
* Smooth transitions

---

# UI Components

## Navbar

* Transparent on top
* Blur effect on scroll
* Sticky navigation
* Minimal links

## Buttons

Style:

* Rounded
* Modern
* Glow effects
* Smooth hover

## Cards

Style:

* Glassmorphism
* Rounded corners
* Border glow
* Soft shadows

---

# Mobile Responsiveness

Must support:

* Mobile
* Tablet
* Desktop

Requirements:

* Responsive grids
* Mobile menu
* Optimized images
* Fast loading
* Touch-friendly buttons

---

# Performance Requirements

Website must:

* Load fast
* Use optimized images
* Use lazy loading
* Use modern animations without lag
* Have good SEO
* Score high on Lighthouse

---

# SEO Requirements

Include:

* Meta titles
* Meta descriptions
* Open Graph tags
* Bike keywords
* Structured data

---

# Social Media Integration

Platforms:

* Facebook
* Instagram
* WhatsApp
* TikTok (optional)

Features:

* Direct contact buttons
* Share buttons
* Embedded Instagram posts (optional)

---

# Future Features

Potential upgrades:

* Online booking
* Bike comparison
* Finance calculator
* Customer accounts
* AI chatbot
* Blog system
* Inventory management
* Multi-branch support

---

# Design Inspiration

Website vibe should feel similar to:

* Luxury automotive brands
* Modern motorcycle companies
* Cinematic landing pages
* Premium tech websites

Main feeling:

* Powerful
* Premium
* Minimal
* Fast
* Clean
* Professional

---

# Folder Structure

project-root/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── animations/
│   ├── styles/
│   ├── lib/
│   └── public/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── prisma/
│   └── uploads/
│
└── database/

---

# Recommended Libraries

Frontend:

* Framer Motion
* Lucide Icons
* Swiper.js
* GSAP (optional)
* React Icons

Backend:

* Prisma
* JWT
* Multer
* Cloudinary

---

# Final Vision

The final website should:

* Feel expensive
* Look futuristic
* Have smooth animations
* Showcase TVS bikes beautifully
* Work perfectly on mobile
* Be easy to update
* Create a strong dealership identity
* Feel like a real premium motorcycle brand website
