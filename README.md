# typechecking-test

This repo shows an example project where `ts-loader` reports the TypeScript error in `packages/app/src/index.ts` correctly, but `ForkTsCheckerWebpackPlugin` does not.

- Run `npm install` to set up.
- Run `npm run broken` to see the Webpack plugin report no errors.
- Run `npm run working` to see `ts-loader` report the error.
