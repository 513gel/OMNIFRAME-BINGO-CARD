# OMNIFRAME Preference Review v2.0

This is a complete replacement for the earlier abstract 10,000-card application.

## What is different

- The main catalog contains **1,388 actual named or plain-language items**.
- The Games section contains **899 named games**.
- Decisions are **Like**, **Neutral**, **Dislike**, or **Later**.
- Neutral means OMNIFRAME understands and can help with the item but has no automatic positive or negative attitude.
- Every card explains what the item is and exactly what each decision changes.
- Notes are saved with decisions and exported.
- The layout is one-column and mobile-first at every viewport width. It cannot fall back to the old multi-column desktop grid on a phone.
- Your older localStorage review is preserved as a legacy record in full exports; the new application uses a separate storage key.

## Deploy over the existing GitHub Pages site

1. Export a backup from the old site if you care about its current seven decisions.
2. Extract this ZIP.
3. Delete the old repository files or replace them with every extracted file and folder.
4. Commit to `main`.
5. Wait for GitHub Pages to deploy.
6. Close every old tab of the site.
7. Reopen the same Pages URL with `?v=2.0` appended once.
8. Refresh once more after the new header appears.

The header must read:

`v2.0 · named items · Like / Neutral / Dislike`

## Install

Open the deployed site in Chrome and tap **Export → Install app**, or use:

`Chrome menu → Install app`

The supplied icon will appear on the home screen.
