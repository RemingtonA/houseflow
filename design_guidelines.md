# Design Guidelines: Houseflow - Apple-Style Minimalist Chain Visualization

## Design Approach
**Reference-Based:** Apple Human Interface Guidelines (HIG) with inspiration from Apple's product pages and macOS aesthetic. Clean, content-focused, minimal experience with purposeful use of white space and subtle depth.

## Core Design Principles
- **Clarity:** Typography and layout prioritize readability and hierarchy
- **Deference:** UI elements step back to let content shine
- **Depth:** Subtle shadows and layering create realistic dimensionality
- **Restraint:** Every element serves a purpose; no decoration for decoration's sake

## Typography
**Font Family:** SF Pro Display (primary), -apple-system fallback stack
- **Headings:** SF Pro Display, weights 600-700
- **Body Text:** SF Pro Text, weight 400
- **Accent/Labels:** SF Pro Text, weight 500
- **Logo/Brand:** SF Pro Display, weight 300 (light, elegant)

**Scale:**
- Hero text (login): 48px / 3rem
- Page titles: 32px / 2rem  
- Section headers: 24px / 1.5rem
- Body: 16px / 1rem
- Labels/small: 14px / 0.875rem

## Layout System
**Spacing Units:** Tailwind units 2, 4, 6, 8, 12, 16, 24
- Component padding: p-6, p-8
- Section spacing: my-12, my-16
- Element gaps: gap-4, gap-6
- Button padding: px-8 py-3

**Grid System:**
- Centered single-column layouts with max-w-md for login, max-w-6xl for main app
- Sidebar: Fixed width 280px, full height
- Main content: Flex-grow with centered content area

## Component Library

### Login Screen
**Layout:** Centered card on gradient background
- Card: White background, subtle shadow (0 10px 40px rgba(0,0,0,0.08)), rounded-2xl
- Width: max-w-md
- Padding: p-12
- Logo placement: Top center, mb-8
- Input fields: Minimal borders (bottom border only), focused state with blue accent
- Button: Primary blue (#007AFF), full width, rounded-full, py-4
- Hover state: Slight darkening, no dramatic effects

**Background:** Soft gradient from light gray (#F5F5F7) to white

### "Houseflow" Animation
**Transition Screen:** Full viewport, white background
- Text animation: Letter-by-letter fade-in with slight upward motion
- Duration: 1.2 seconds total
- Font: SF Pro Display Light, 56px
- Color: Start at gray (#86868B), transition to black (#1D1D1F)
- Exit: Fade out entire screen after brief pause (0.5s hold)

### Main Application Page

**Background Aesthetic:** White with subtle brushed metal texture
- Base: Pure white (#FFFFFF)
- Texture: CSS linear-gradient creating fine horizontal lines
- Overlay: Very subtle radial gradient for depth

**Sidebar: "My Chains"**
- Fixed position, left side, full height
- Width: 280px
- Background: Slightly darker white (#FAFAFA) with subtle border-right
- Header: "my chains" in lowercase, SF Pro Display Light, 20px, color #86868B, p-8
- Shadow: Subtle right shadow (4px 0 12px rgba(0,0,0,0.03))

**House Chain Visualization (Main Content)**
- Container: Centered in remaining space, max-w-4xl
- Houses: SVG icons, 80px × 80px, arranged horizontally with equal spacing
- House style: Minimalist line icons, 2px stroke, rounded corners
- Color: Dark gray (#424245)
- Hover: Subtle scale (1.05) and shadow increase
- Chain links: SVG curved paths connecting house icons, 3px stroke, #D1D1D6 color
- Layout: Flex row with justify-between, gap-16

**House Icon Details:**
- Simple geometric house shapes with pitched roofs
- Subtle 3D effect with dual-tone fill (white body, light gray roof)
- Drop shadow: 0 4px 12px rgba(0,0,0,0.1)
- Each house slightly different to show individuality

### Color Palette
- **Primary Blue:** #007AFF (buttons, accents)
- **Text Primary:** #1D1D1F (nearly black)
- **Text Secondary:** #86868B (gray)
- **Borders:** #D1D1D6 (light gray)
- **Backgrounds:** #FFFFFF (white), #FAFAFA (off-white), #F5F5F7 (light gray)

### Interactive States
- **Buttons:** 0.2s ease transitions, subtle darkening on hover
- **Houses:** 0.3s ease scale transform, shadow intensifies
- **Inputs:** Bottom border color change (#007AFF) on focus, smooth transition

### Animations
**Use sparingly:**
- Login to animation transition: Cross-fade (0.4s)
- Houseflow text reveal: Staggered fade-in
- Page transitions: Gentle opacity/position changes (0.3s)
- House hover: Scale and shadow (0.2s)

### Accessibility
- Minimum contrast ratio: 4.5:1 for all text
- Focus states: Visible blue outline (#007AFF, 2px)
- Touch targets: Minimum 44px × 44px
- Keyboard navigation: Full support for all interactive elements

### User-Specific Variations
**Admin page:** 7 houses in chain (showing more properties)
**User1 page:** 5 houses in chain (standard view)
**User2 page:** 3 houses in chain (fewer properties)

Each maintains same aesthetic with quantity variation only.

## Images
No hero images required for this application. The design relies on clean typography, iconography, and subtle textures to create visual interest while maintaining Apple's minimalist philosophy.