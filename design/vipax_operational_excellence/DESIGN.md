---
name: VIPAX Operational Excellence
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
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00201d'
  on-tertiary-container: '#0c9488'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-max: 1440px
  gutter: 24px
---

## Brand & Style
The design system is engineered for high-stakes corporate logistics and incident management. The brand personality is **authoritative, agile, and composed**, prioritizing the rapid transmission of critical information over decorative elements. 

The aesthetic follows a **Modern Corporate** movement: a high-fidelity execution characterized by surgical precision, expansive whitespace to reduce cognitive load during crises, and a strict information hierarchy. It evokes a sense of "calm under pressure," ensuring that users—from logistics coordinators to executive stakeholders—feel a sense of absolute control and reliability.

## Colors
The palette is anchored by **Deep Navy (#0F172A)**, providing a foundation of stability and professional institutional trust. **Slate Gray** is utilized for secondary information and structural borders to maintain a neutral environment for data density.

**Teal (#0D9488)** serves as the primary "Action" color, chosen for its association with precision and clarity, offering a sophisticated alternative to traditional blues. Functional colors for incident management (Red for critical, Amber for warning) are used sparingly but with high saturation to ensure immediate visibility against the **Clean White** and **Off-White (#F8FAFC)** backgrounds.

## Typography
This design system utilizes **Inter** for all primary interfaces due to its exceptional legibility in data-heavy environments and its neutral, systematic tone. 

The hierarchy is structured to support rapid scanning. Headlines use tighter letter-spacing and heavier weights to command attention, while body text maintains standard tracking for readability. For technical data—such as flight numbers, coordinates, and incident timestamps—**JetBrains Mono** is introduced as a secondary utility typeface to prevent character confusion and align with the "technical" nature of aviation logistics.

## Layout & Spacing
The layout employs a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. A strict **8px spacing system** governs all components to ensure mathematical harmony.

- **Desktop:** 24px margins and 24px gutters. Content is centered in a 1440px max-width container.
- **Data Displays:** Use a "Compact" mode for incident logs with 8px vertical padding, while "Standard" booking flows use 16px to 24px padding to provide breathing room.
- **Reflow:** Sidebars are fixed at 280px on desktop; on tablet, they collapse into a drawer to prioritize the primary data workspace.

## Elevation & Depth
Elevation is communicated through **Tonal Layering** and **Ambient Shadows**. This design system avoids heavy gradients, favoring flat surfaces that appear to "float" slightly above the background to indicate interactivity.

- **Level 0 (Background):** #F8FAFC - The canvas.
- **Level 1 (Cards/Panels):** White (#FFFFFF) with a 1px border in #E2E8F0.
- **Level 2 (Dropdowns/Modals):** White with an extra-diffused shadow: `0 10px 15px -3px rgba(15, 23, 42, 0.08)`.
- **Active State:** Elements use a subtle #0D9488 inner-glow or a 2px left-accent border to denote the "currently selected" incident or flight.

## Shapes
The shape language is **Balanced and Professional**. A standard corner radius of **8px (0.5rem)** is applied to primary UI elements like cards and input fields. This provides a modern, approachable feel without appearing overly "bubbly" or consumer-grade.

Small components like tags and status indicators use a **16px (1rem)** radius to differentiate them from functional inputs. Buttons follow the 8px standard to maintain a structural, architectural appearance.

## Components
- **Buttons:** Primary buttons are solid Navy (#0F172A) or Teal (#0D9488) with white text. Secondary buttons use a 1px Slate border. All have a subtle 8px radius.
- **Incident Chips:** Compact indicators with a background tint (e.g., light red) and bold text (dark red) to show status (e.g., "GROUNDED", "IN-TRANSIT").
- **Data Tables:** High-density rows with 1px bottom borders. Hover states should use a subtle gray (#F1F5F9) highlight. Use monospace for numeric flight data.
- **Input Fields:** Labeled clearly above the field. Use a 1px Slate-200 border that thickens and changes to Teal on focus.
- **Status Cards:** Summary cards at the top of dashboards featuring high-contrast "Action" colors and large "Display" typography for key metrics (e.g., "Active Incidents: 04").
- **Timeline/Tracking:** A vertical or horizontal stepper component using Teal for completed stages and Slate for pending stages, visualizing the logistics chain.