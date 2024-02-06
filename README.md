# template-vue

Opinionated [Vue](https://vuejs.org/) template for new projects.

## Getting Started

1. Go to or create the project folder.
2. Get the template files:

```bash
npx degit github:joaopalmeiro/template-vue
```

or

```bash
npx degit github:joaopalmeiro/template-vue --force
```

3. Search for `template-vue` and replace it with the project name.
4. Search for `Opinionated Vue template for new projects.`/`Opinionated [Vue](https://vuejs.org/) template for new projects.` and replace it with the (short) project description.
5. Search for `João Palmeiro` and replace it with the author's name.
6. Run the first two commands in the [`Development` section](#development) to install [Node.js](https://nodejs.org/en) and the development dependencies.
7. Open the [NOTES.md](NOTES.md) file and install the project-specific dependencies according to the first command in the [Commands section](NOTES.md#commands).
8. Delete the [`Template References` section](NOTES.md#template-references) from the [NOTES.md](NOTES.md) file.
9. Delete the [`Getting Started` section](#getting-started).

## Development

Install [fnm](https://github.com/Schniz/fnm) (if necessary).

```bash
fnm install && fnm use && node --version && npm --version
```

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run lint
```

```bash
npm run format
```
