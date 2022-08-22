# elioWay Quickstart
# Documentation the elioWay Quickstart
All elioWay apps will be documented in the following way.
## Filenames
There will be a `/doc` folder inside each app. It should contain the documentation with the following filenames.
- `faq.md`
  - Add 'em as you think of them.
  - `faq-<subgroup-name-as-slug>.md` if there are a lot, split them out into `faq-` prefixed file names.
- `index.md`
  - This will be the home page of the app.
- `installing.md`
  - How to install this app, its prerequisites, or related tools.
- `quickstart.md`
  - How to get quickly started - a task based - whistle-stop tour of the app's features.
- `<simple>.md`
  - Add other files with names like "news", "history" and keep them updated (if you do)
    - `<simple>-<subsimple-title-as-slug>.md` If you want to go into more depth.
- `blog-<title-as-slug>.md`
  - Add misc, bloggable "How Tos" or explanations; "trip ups"; snippets, etc
## MarkDown
Documentation should be written in MARKDOWN, which is required by [chisel - elio's documentation builder (done the elioWay)](https://gitlab.com/elioangels/chisel) .
## Prettier Formatting
Install `prettier`:
```bash
cd ~/repo/theElioWay
yarn
```
Run `prettier` using the `yarn format` command. This will format any code, including the MARKDOWN files in your doc folder.:
```bash
cd ~/repo/theElioWay
yarn format
git add .
git commit -m "prettier"
```
## More
- [quickstart Index](quickstart.md)
- [elioWay Index](index.md)
