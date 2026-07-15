# OMNIFRAME Memory Review v4.0

This is a major semantic and catalog update.

## Decision meanings

- **Important** — retain and prioritize as meaningful personality or knowledge context.
- **Neutral** — remember it, but do not attach strong feelings or spontaneous recommendation behavior.
- **Not important** — safe to omit or forget from routine personality memory. This is not dislike.
- **I don't know** — keep it in the research queue until more information is available.

## Catalog

Total subjects: **4,811**

- Video Games: 900 total; 200 in the Popular 200 reference set
- Movies: 495 total; 200 in the Popular 200 reference set
- TV Shows: 230 total; 200 in the Popular 200 reference set
- Cartoons: 228 total; 200 in the Popular 200 reference set
- Anime: 477 total; 200 in the Popular 200 reference set
- Manga: 242 total; 200 in the Popular 200 reference set
- Art Styles: 290 total; 200 in the Popular 200 reference set
- Architecture: 258 total; 200 in the Popular 200 reference set
- Software & Technology: 308 total; 200 in the Popular 200 reference set
- Music & Audio: 255 total; 200 in the Popular 200 reference set
- Books, Comics & Tabletop: 260 total; 200 in the Popular 200 reference set
- Creators & Studios: 273 total; 200 in the Popular 200 reference set
- Activities & Atmosphere: 283 total; 200 in the Popular 200 reference set
- Behavior & Practices: 312 total; 200 in the Popular 200 reference set

Every category retains the prior extrapolated list and includes a 200-item curated mainstream reference set. The Popular 200 is a practical starting set, not an objective universal ranking.

Video games remain one card per game or franchise and can be filtered by genre without duplicating decisions. Movies, live-action TV shows, western cartoons, anime, manga, art styles, and architecture are separate categories.

Art Styles and Architecture include a **Google Images** button so the user can visually inspect the style before choosing.

## Upgrade from v3

The app uses a new v4 storage key and reads v3 data once on first launch:

- Like → Important
- Neutral → Neutral
- Dislike → Not important
- Don't know → I don't know

The old v3 storage is not deleted and is preserved in the v4 migration record.

## Deploy

1. Export a Full Backup from v3.2.
2. Extract this ZIP.
3. Replace every file in the existing GitHub repository.
4. Commit to `main`.
5. Wait for GitHub Pages to deploy.
6. Close old tabs.
7. Open the Pages URL once with `?v=4.0` appended.
