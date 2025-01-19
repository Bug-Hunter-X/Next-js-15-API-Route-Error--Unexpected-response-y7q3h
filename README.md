# Next.js 15 API Route Error: Unexpected response

This repository demonstrates a bug encountered when upgrading a Next.js application from version 13 to 15.  A simple API route that worked correctly in Next.js 13 throws an unexpected error in Next.js 15. The issue seems to stem from the use of `res.status().json()` within the API route handler.

## Steps to Reproduce

1. Clone this repository.
2. Navigate to the `pages/api/hello.js` file.
3. Run `npm install` to install dependencies.
4. Start the development server using `npm run dev`.
5. Access the API route using your browser or a tool like `curl` (e.g., `http://localhost:3000/api/hello`).

## Expected Behavior

The API route should return a JSON response with the message `{ name: 'John Doe' }` and a status code of 200.

## Actual Behavior

Next.js 15 throws an unexpected error. The specific error message might vary but generally indicates a problem with the response handling. 

## Solution

A potential solution is to use `res.json()` directly without explicitly setting the status code.  In many cases, Next.js will implicitly set the appropriate status code for you (200 for successful responses).

## Further Notes

This issue highlights potential compatibility problems when upgrading Next.js versions. Thorough testing is crucial when making such upgrades. The underlying cause of the error might be related to changes in the response handling mechanism introduced in Next.js 15.