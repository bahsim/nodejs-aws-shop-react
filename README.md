## Getting Started

This project is a React-based e-commerce application deployed using AWS services. It leverages AWS CDK for infrastructure management and provides a set of scripts to facilitate development, testing, and deployment.

To get started with this project, follow these steps:

### Deploying with AWS CDK

- **Deploy the project using AWS CDK:**
    ```sh
    npm run cdk:deploy
    ```

- **Destroy the deployed resources using AWS CDK:**
    ```sh
    npm run cdk:destroy
    ```

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)
- [AWS CLI](https://aws.amazon.com/cli/) (configured with appropriate credentials)
- [AWS CDK](https://aws.amazon.com/cdk/) (version 1.100.0 or higher)

### Environment Setup

Before you begin, ensure your environment is set up correctly:

1. **Configure AWS CLI:**
    ```sh
    aws configure
    ```
    Follow the prompts to set up your AWS credentials.

2. **Install AWS CDK globally:**
    ```sh
    npm install -g aws-cdk
    ```

3. **Bootstrap your AWS environment:**
    ```sh
    cdk bootstrap
    ```

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/nodejs-aws-shop-react.git
    ```
2. Navigate to the project directory:
    ```sh
    cd nodejs-aws-shop-react
    ```
3. Install the dependencies:
    ```sh
    npm install --legacy-peer-deps
    ```

### Running the Project

To run the project, you can use the following scripts:

- **Start the project in development mode with mocked API:**
    ```sh
    npm run start
    ```

- **Build the project for production:**
    ```sh
    npm run build
    ```

- **Preview the project in production mode:**
    ```sh
    npm run preview
    ```

- **Run tests:**
    ```sh
    npm run test
    ```

- **Run UI tests:**
    ```sh
    npm run test:ui
    ```

- **Run tests with coverage:**
    ```sh
    npm run test:coverage
    ```

- **Lint the code:**
    ```sh
    npm run lint
    ```

- **Format the code:**
    ```sh
    npm run prettier
    ```

Now you are ready to start developing with the React-shop-cloudfront project!
