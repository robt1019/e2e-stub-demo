# What is this???

A demo repo showing an approach to stubbing slow dependencies for e2e tests

It was made as a play along for this blog post which explains the commits in greater detail:

http://wtfisanapi.com/htf-do-i-write-e2e-tests-with-a-stubbed-dependency-angular-nrwl-nx-edition/

It uses Cypress, and was built using Nrwl Nx

It is an Angular application which calls a so called `slow ass api` (also inside the repo), which returns some data to the Angular App to render after an indeterminate amount of time.

I made it to show how stubbing slow dependencies can be a relatively painless, robust and speedy approach to e2e testing, when paired with strong typings.

## Install

`npm i` or `yarn`

## Run app locally

`npm run start` or `yarn start`

App will hopefully pop up on `localhost:4200`

It is a beautiful app, making full use of the html `marquee` element amongst other gems.

## Run e2e tests

`npm run e2e` or `yarn e2e`
