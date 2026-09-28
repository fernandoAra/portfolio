# Portfolio repository instructions

- Treat `docs/product-brief.md` as the product source of truth.
- Keep portfolio content factual. Do not invent roles, outcomes, employers, or contact details.
- Preserve browse-first access: no essential content may require sound, animation, or gameplay.
- Run `npm run verify` after material changes. Run `npm run test:e2e` when navigation or interaction changes.
- Use Node.js 22.19 or newer (CI uses Node 24).
- Maintain English and Brazilian Portuguese route parity.
- Respect reduced motion, keyboard navigation, and the opt-in audio policy.
- Keep the Phaser module lazy-loaded from the Play route only.
