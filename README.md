<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
## Description

[Nest](https://github.com/nestjs/nest) backend with authentication via Strava using OAuth2 to an existing app inspired by (https://www.nerd.vision/post/nestjs-third-party-oauth2-authentication)

## Configuration

Use a .env file with 3 variables:

```bash
CLIENT_ID = Your Strava Client ID
CLIENT_SECRET = Your Strava Client Secret
CALLBACK_URL = http://localhost:8080/api/auth/strava/callback in development mode
```

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author: Olivier Payelle

## License

  Nest is [MIT licensed](LICENSE).
