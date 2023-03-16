# scratch-pay
Scratch Pay is a TypeScript-based RESTful API server built with Node.js and Express. Check the API documentation at `http://localhost:3003/api-docs` in your browser. 

## Requirements
- Node.js 16 or higher
- Yarn 1.22 or higher
- Docker (optional, for containerized deployment)

## Installation

1. Clone the repository: `git clone git@github.com:ramos-larissa/scratch-pay.git`
2. Install dependencies: `yarn install`

## Running the application
1. Start the application: `yarn dev`
2. Visit `http://localhost:3003/api-docs` in your browser

### Building and running with Docker
1. Build the Docker image: `docker build -t scratch-pay . `
2. Run the container: `docker run -p 3003:3003 scratch-pay `
The server should be accessible at `http://localhost:3003`

## Usage 
The API documentation is available at `http://localhost:3003/api-docs` in your browser.
The route base path is `/api`.
A example of a valid request is:
`curl --location --request POST 'http://localhost:3003/api/clinics/search?locale=CA' `

## Testing	
1. Run the tests: `yarn test`

## License
[MIT](https://choosealicense.com/licenses/mit/)

[]: # Path: .gitignore


