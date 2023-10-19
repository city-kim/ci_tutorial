# ci_tutorial

Vue3 + vitest + cypress + storybook & chromatic CI 환경을 구성하는 tutorial

[Tistory 1편](https://city-kim.tistory.com/18)

[Tistory 2편](https://city-kim.tistory.com/19)

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

```sh
pnpm build
pnpm test:e2e
```
