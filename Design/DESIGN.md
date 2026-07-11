---
name: Cognitive Flow
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#464555'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#57dffe'
  on-secondary-container: '#006172'
  tertiary: '#571ac0'
  on-tertiary: '#ffffff'
  tertiary-container: '#6f3dd9'
  on-tertiary-container: '#e3d5ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  dark-navy: '#0A192F'
  off-white: '#F8FAFC'
  light-grey: '#F1F5F9'
  violet-accent: '#7C3AED'
  surface-border: '#E2E8F0'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality for the design system is **Modern, Premium, and Technical**. It is designed to bridge the gap between complex AI automation and human-centric consulting. The aesthetic balances the high-energy, futuristic nature of AI with the grounded reliability required by global enterprise clients.

The design style is **Modern Corporate with Glassmorphic Accents**. It utilizes a hybrid theme approach:
- **High-Impact Dark Mode** for hero sections and immersive "deep dive" areas to evoke technical sophistication and the "black box" of AI.
- **Clean Light Mode** for functional areas, dashboards, and detailed content to ensure maximum readability, accessibility, and trust.
- **Visual Metaphors:** Use of "Connected Nodes" and subtle gradient paths to represent seamless workflows and reliability.

## Colors

The palette is anchored by a **Hybrid Theme** strategy. 

### Core Palette
- **Primary (Indigo):** Used for primary actions, links, and branding on light backgrounds.
- **Secondary (Cyan) & Tertiary (Soft Purple):** Primarily used as gradients (`#06B6D4` to `#8B5CF6`) within the Dark Navy hero section to create a sense of energy and innovation.
- **Neutral (Off-White/Grey):** Foundations for the main content areas to maintain a "clean" and "airy" professional feel.

### Usage Guidance
- **Dark Sections:** Use `dark-navy` (#0A192F) with Cyan/Purple gradients for text highlights and decorative glow effects.
- **Light Sections:** Use `off-white` (#F8FAFC) for page backgrounds and `light-grey` (#F1F5F9) for section nesting or subtle contrast.
- **Accessibility:** Maintain a minimum 4.5:1 contrast ratio for all body text. On dark backgrounds, ensure cyan accents are used primarily for decorative elements or paired with high-contrast white text.

## Typography

This design system uses a dual-font strategy to balance character with utility.

- **Headlines (Plus Jakarta Sans):** Chosen for its modern, slightly rounded, and friendly geometric shapes. It provides a premium "tech" look that remains approachable. Use tighter letter-spacing on large display sizes to increase impact.
- **Body & Labels (Inter):** A systematic, highly legible sans-serif. It is utilized for all functional text, ensuring that complex technical descriptions are easy to digest for international clients.

**Hierarchy Rules:**
- Use `display-lg` exclusively for hero sections.
- `headline-md` should be used for card titles.
- `label-md` (Semibold) is reserved for buttons and navigation items.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid with Fluid Containers**. 

### Grid System
- **Desktop:** 12-column grid, 1280px max-width, 24px gutters.
- **Tablet:** 8-column grid, fluid width, 24px margins.
- **Mobile:** 4-column grid, fluid width, 16px margins.

### Spacing Rhythm
- **Generous Whitespace:** Section vertical padding should be significant (120px on desktop) to allow the "premium" feel to emerge through breathing room.
- **Component Spacing:** Use an 8px base unit. Cards should use 32px internal padding (`stack-lg`) to maintain an airy, sophisticated look.
- **Workflow Visualization:** Elements representing AI "steps" or "nodes" should be connected with thin, 1px paths that respect the grid lines.

## Elevation & Depth

Depth in this design system is achieved through **Subtle Tonal Layering** rather than heavy shadows.

- **Surface Strategy:** Cards use a pure white (`#FFFFFF`) background placed on top of `light-grey` (`#F1F5F9`) section backgrounds.
- **Shadows:** Use extremely soft, ambient shadows. Example: `0 4px 20px rgba(10, 25, 47, 0.04)`. The shadow color should be a tint of the Dark Navy to keep the palette cohesive.
- **Borders:** Every card and interactive element should have a subtle 1px border (`#E2E8F0`) to define shape without adding visual weight.
- **Hero Depth:** In the Dark Navy hero, use "Backdrop Blurs" (Glassmorphism) for navigation bars or floating badges to create a high-tech, multi-layered feel.

## Shapes

The shape language is **Refined and Balanced**. 

- **Corner Radius:** A standard radius of `0.5rem` (8px) is applied to all primary UI components (cards, inputs, buttons). This "Rounded" setting provides a professional yet modern feel that is less clinical than sharp corners but more serious than pill shapes.
- **Consistency:** Maintain the same radius across all elements to reinforce the "Reliability" keyword.
- **Iconography:** Use "Linear" icons with a 1.5px or 2px stroke weight. Avoid filled icons unless used for active states or primary indicators.

## Components

### Buttons
- **Primary (Light Background):** Solid `Indigo (#4F46E5)` with white text. 
- **Primary (Dark Hero):** Gradient background `Cyan (#06B6D4) to Soft Purple (#8B5CF6)` with white text.
- **Secondary:** Transparent background with a `1.5px` border of the primary color.
- **States:** On hover, primary buttons should shift slightly darker or increase shadow spread.

### Cards
- **Style:** White background, `rounded-lg`, `1px` border (`#E2E8F0`), and soft ambient shadow.
- **Padding:** 32px for desktop, 24px for mobile.
- **Usage:** Use for service offerings, case studies, and process steps.

### Input Fields
- **Style:** Background `#FFFFFF`, border `#E2E8F0`, height 48px.
- **Focus State:** Border color changes to `Indigo (#4F46E5)` with a subtle outer glow.

### Specialized AI Components
- **Node Badge:** Small, semi-transparent chips used to categorize AI services (e.g., "LLM Training," "Workflow Audit").
- **Connectivity Lines:** Subtle 1px SVG paths with a slight gradient to visually link different service cards, symbolizing an "Automated Workflow."