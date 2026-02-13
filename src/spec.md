# Specification

## Summary
**Goal:** Update the site’s visual theme to a classic blue (primary), turquoise (secondary), and gold (accent) palette across light and dark modes.

**Planned changes:**
- Update the global CSS theme variables (OKLCH) for `--primary`, `--secondary`, `--accent` and their `-foreground` counterparts in both `frontend/index.css` and `frontend/src/index.css` to match the new blue/turquoise/gold palette while maintaining readable contrast in light/dark modes.
- Replace hardcoded mint/emerald/green/gray/white Tailwind color utilities in app sections (nav, hero, forms, cards, admin overlay, and any emerald-styled headings/buttons) with theme token-based classes so the new palette applies consistently without leftover fixed-color styling.
- Ensure the existing page background gradient continues to work with the new palette and remains readable.

**User-visible outcome:** The entire site (including navigation and admin UI) consistently reflects the classic blue/turquoise/gold theme in both light and dark mode, with no remaining mint/emerald-specific styling and readable contrast throughout.
