# SEB Project 2 Starter

## Vite setup

```bash
❯ bun create vite@latest
◇  Project name:
│  seb-p2-starter
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript + SWC
```

## Did install

- `bun install`
- `bun pm trust -all`

## Did GA modifications

- eslint.config.js
- App.jsx

## Remove unused files

- remove reference in `src/main.jsx`
  - `src/index.css`
- remove reference in `src/App.jsx`
  - `src/App.css`
  - `src/assets/react.svg`

## Setup commitlint

- `bun add -d @commitlint/cli @commitlint/config-conventional`
- `bun add -d husky`
- `bunx husky init`
  - remove `.husky/pre-commit`
- `bun pkg set scripts.commitlint="commitlint --edit"`
- `echo "bun run commitlint \${1}" > .husky/commit-msg`
