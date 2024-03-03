# Notes

## Template References

- https://github.com/egoist/ts-lib-starter
- https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vue-ts
- https://github.com/vuejs/create-vue
- https://github.com/vuejs/tsconfig
- https://github.com/vuejs/create-vue/blob/main/template/config/typescript/package.json
  - `"type-check": "vue-tsc --noEmit -p tsconfig.app.json --composite false"`
- https://github.com/joaopalmeiro/create-vite-tsconfigs
- https://github.com/joaopalmeiro/create-vue-tsconfigs
- https://www.typescriptlang.org/docs/handbook/project-references.html#overall-structure
- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#composite-projects
- https://www.typescriptlang.org/tsconfig#allowImportingTsExtensions
- https://github.com/vuejs/create-vue/tree/main/template/tsconfig/base:
  - https://github.com/vuejs/create-vue/blob/main/template/tsconfig/base/tsconfig.json
  - https://github.com/vuejs/create-vue-templates/blob/v3.9.2/typescript/tsconfig.json
  - https://github.com/vuejs/create-vue/blob/main/template/tsconfig/base/tsconfig.app.json
  - https://github.com/vuejs/create-vue/blob/main/template/tsconfig/base/tsconfig.node.json
- https://github.com/vuejs/create-vue-templates/tree/v3.9.2/typescript
- https://github.com/vuejs/create-vue/releases
- https://github.com/vuejs/create-vue/releases/tag/v3.9.0
- https://github.com/vuejs/language-tools/issues/3889
- https://github.com/vuejs/language-tools/issues/3638
- https://www.typescriptlang.org/tsconfig#tsBuildInfoFile
- `vue.vscode-typescript-vue-plugin` extension:
  - https://github.com/vuejs/language-tools/blob/master/CHANGELOG.md
  - https://github.com/vuejs/language-tools/blob/v2.0.2/extensions/vscode/src/nodeClientMain.ts#L138
  - https://github.com/vuejs/language-tools/releases/tag/v2.0.0
  - https://github.com/vuejs/language-tools/issues/3939
  - https://github.com/microsoft/vscode-discussions/discussions/1#discussioncomment-8648185

### Commands

```bash
npm create vue@3.9.2 test-create-vue
```

```bash
npm create vite@5.2.1 test-create-vite -- --template vue-ts
```

```bash
rm -rf test-create-vite/ test-create-vue/
```

### Snippets

```markdown
6. Run the first command in the [`Development` section](#development) to install [Node.js](https://nodejs.org/en).
7. Open the [NOTES.md](NOTES.md) file and run the first command in the [`Commands` section](NOTES.md#commands) to install the base packages.
```

```json
{
  "scripts": {
    "lint:appTypes": "vue-tsc --project tsconfig.app.json --noEmit --composite false",
    "lint:code": "prettier . --check",
    "lint:nodeTypes": "vue-tsc --project tsconfig.node.json --noEmit --composite false",
    "lint:pkgJson": "sort-package-json --check",
    "lint:types": "run-s lint:appTypes lint:nodeTypes",
    "lint": "run-s lint:pkgJson lint:types lint:code"
  }
}
```

## Commands

```bash
npm install vue && npm install -D vite @vitejs/plugin-vue typescript vue-tsc create-vue-tsconfigs sort-package-json npm-run-all2 prettier @joaopalmeiro/prettier-vue-config
```

```bash
rm -rf node_modules/ && npm install
```

```bash
npx prettier . --check --log-level debug
```
