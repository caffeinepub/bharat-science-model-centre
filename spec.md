# Bharat Science Model Centre

## Current State
Full website with hero, product categories (21 cards), catalogue page, enquiry form, admin dashboard, sticky nav, floating WhatsApp button.

## Requested Changes (Diff)

### Add
- A "Brands We Deal In" section between the hero section and the product categories section.
- Continuous auto-scrolling marquee (infinite loop, no pause) displaying all 19 uploaded brand logos.
- Logos: Blue Star, VWR, Sigma-Aldrich, CDH, HiMedia, Merck, Hanna Instruments, Rankem, Olympus, Fisher Scientific, Qualigens, Finar, Remi, PolyLab, Loba Chemie, Kerro, Kimberly-Clark, NCP, Tarsons.
- The logo list should be duplicated in the DOM to create a seamless infinite scroll effect.
- Each logo displayed in a white card with object-fit: contain, consistent height (~60-70px).
- Section heading: "Brands We Deal In" or "Our Trusted Brands".

### Modify
- Home page layout: insert BrandsMarquee component between hero and product categories.

### Remove
- Nothing.

## Implementation Plan
1. Create a BrandsMarquee component with CSS keyframe animation for infinite horizontal scroll.
2. Logo image paths from /assets/uploads/ for all 19 uploaded logos.
3. Duplicate the logo array to ensure seamless loop.
4. Insert the component in the homepage between the hero section and product categories section.
5. Make the marquee pause on hover for accessibility.
