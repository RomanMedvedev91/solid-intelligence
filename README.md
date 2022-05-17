# SOLID INTELLIGENCE

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server at http://localhost:3000/

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Setup OPEN AI API KEY

- sign up to OpenAI
- Go to https://beta.openai.com/signup
- Enter your email address and password
- Verify your email address
- Verify your phone number by entering the code that is sent to you via SMS
- Once logged in, go to https://beta.openai.com/account/api-keys to get your secret API key
- rename file in project folder `.env.development.example` to `.env.development`
- open `.env.development` and past your API key in after `REACT_APP_OPENAI_API_KEY=`

## Dependencies

- testing-library/jest-dom
- testing-library/react
- testing-library/react-hooks
- dotenv
- eslint
- prettier
