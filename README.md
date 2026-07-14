# OMNIFRAME Personality Review v1.3

Installable GitHub Pages PWA optimized for one-handed phone review.

## v1.3 review flow

- Exactly one undecided card is shown at a time on phones.
- The complete 10,000-card order is shuffled once and stored locally.
- Approving or disapproving automatically advances to the next random undecided card.
- **Later** moves the current card to the back of the queue without deciding it.
- Decided cards are not repeated in the normal queue.
- Every card clearly explains:
  - what the card is asking;
  - what approval means;
  - what disapproval means;
  - what behavior changes if approved.
- A visible note box is attached directly to every card.
- The note is saved with Approve, Disapprove or Later.
- Notes are included in full, culled and rejection JSON exports.
- A fixed progress bar shows reviewed, remaining and percentage complete.

## Update the existing GitHub Pages site

1. Extract the ZIP.
2. Open the existing GitHub repository.
3. Upload every extracted file and folder to the repository root.
4. Replace the previous files when GitHub asks.
5. Commit to `main`.
6. Wait for GitHub Pages to deploy.
7. Close the old browser tab and reopen the same Pages URL.
8. If necessary, open the URL once with `?v=1.3` appended.

Keeping the same Pages URL preserves existing local decisions. Export a Full Review Backup before replacing files as an extra precaution.

## Install on Android

Open the deployed site in Chrome and use the in-app Install button. If Chrome does not show the prompt, use:

`Chrome menu → Install app`  
or  
`Chrome menu → Add to Home screen`

The installed version supports offline use, local persistence, JSON import and JSON export.
