# OMNIFRAME Preference Review v3.1

This update adds external research links without changing the v3 storage key or the 2,500-subject catalog.

## Research links on every subject

Each review card now includes:

- **Search Wikipedia** — opens an English Wikipedia search for the subject with a category-specific qualifier.
- **Search Fandom** — shown for games, anime, films, television, comics, tabletop subjects, creators, and studios. It opens a cross-wiki Fandom search.
- **Search the web** — provides a fallback when neither wiki has a useful page.

The app uses search pages instead of inventing exact article URLs. This avoids sending the user to the wrong page when a franchise name is ambiguous or no dedicated article exists.

All links:

- open in a new tab;
- use `noopener noreferrer`;
- save the current note before opening;
- leave the current subject selected;
- do not make a decision automatically.

## Upgrade

1. Export a Full Backup from v3.0.
2. Extract this ZIP.
3. Replace every file in the existing GitHub repository.
4. Commit to `main`.
5. Wait for GitHub Pages deployment.
6. Close old tabs.
7. Reopen the same site with `?v=3.1` appended once.

The storage key remains `omniframe.preference-review.v3`, so v3.0 decisions, notes, history, custom subjects, and progress remain compatible.
