<center>
  <img src=".github/assets/logo_positivehealth.svg" alt="Positive Health logo" width="360" />
</center>
<br /><br />

# Positive Health
A healthcare company created for study and practice purposes only.

## Summary
- [Access website](#access-website)
- [Technologies](#technologies)
- [Settings](#settings)
  - [How to run](#how-to-run)
  - [VsCode](#vscode)
  - [Commands](#commands)
  - [Internationalization](#internationalization)
- [Development flow](#development-flow)
- [Production flow](#production-flow)

## Access website
- [PositiveHealth](https://positivehealth.netlify.app/)

## Technologies

- [TypeScript](https://www.typescriptlang.org/docs/)
- [ReactJS](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Yup](https://github.com/jquense/yup)
- [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- [Sass](https://sass-lang.com/documentation/)
- [I18next](https://www.i18next.com/)
- [I18next-react](https://react.i18next.com/)
- [Fontawesome](https://fontawesome.com/)
- [Clsx](https://github.com/lukeed/clsx)
- [Chart.js2](https://react-chartjs-2.js.org/)
- [DateFNS](https://date-fns.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Lint-Staged](https://github.com/okonet/lint-staged)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Vitest](https://vitest.dev/)
- [Storybook](https://storybook.js.org/)

## Settings

### How to run
yarn && yarn dev

### VsCode
The settings below are not mandatory but make it easier in development at Ide VsCode

1. Create the `settings.json` file inside `.vscode`, with the following settings:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  }
}

```

### Internationalization
Internationalization done using i18next, if in doubt, please read the documentation

### Commands
* `dev`: runs the application and starts a local server at `http://localhost:{port}/`.
* `build`: generate for production.
* `preview`: generates for production and starts a local server on `http://localhost:{port}/`.
* `lint`: runs the linter on all components and pages.
* `format`: runs prettier to format all components and pages.
* `test`: runs vitest in watch mode.
* `test:coverage`: runs vitest with code coverage.
* `storybook`: runs the storybook and starts a local server at `http://localhost:{port}/`.
* `storybook:build`: generates a build for storybook production.

## Development flow
1. Digite no terminal `yarn dev` para iniciar o projeto

## Production flow
1. Type in terminal `yarn preview`
2. Publish the files
