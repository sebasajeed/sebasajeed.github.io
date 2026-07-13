# FinTrack Landing Page Export

This folder contains the static production export for the FinTrack landing page.

## Files

- `index.html` is the app entry point.
- `assets/` contains the compiled JavaScript and CSS.

## Preview

Serve this folder with any static server. For example:

```powershell
npx serve .
```

## Portfolio Use

Copy the contents of this folder into the portfolio location where the landing page should live.

The build uses relative asset paths (`./assets/...`), so it can work from a portfolio subfolder as well as from a site root.

The beta application form posts to `sebasajeed@gmail.com` through a static form delivery endpoint. The first submission may require inbox confirmation from the form provider.

If direct refreshes on nested routes are needed, configure the host to serve `index.html` as the fallback because this is a React single-page app.
