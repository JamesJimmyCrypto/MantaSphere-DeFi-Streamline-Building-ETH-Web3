# MantaSphere

MantaSphere is a decentralized application designed to streamline and secure your interactions with blockchain technology. By leveraging smart contracts and modern web technologies, MantaSphere simplifies complex blockchain operations, offering an intuitive and user-friendly experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Challenges](#challenges)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Smart Contract Integration**: Interact with smart contracts directly through a secure and intuitive interface.
- **Wallet Connectivity**: Easily connect various Ethereum wallets using RainbowKit.
- **Real-Time Data**: Access and update blockchain data with real-time synchronization.
- **User-Friendly Interface**: Built with React.js for a dynamic and responsive frontend experience.
- **Secure and Scalable**: Utilizes Solidity for smart contracts, ensuring safety and efficiency in transactions.

## Technologies Used

- **Solidity**: For developing and deploying smart contracts.
- **Hardhat**: Development environment for compiling and testing smart contracts.
- **React.js**: Frontend library for building a responsive user interface.
- **RainbowKit**: Simplifies wallet integration.
- **Viem**: TypeScript library for Ethereum interactions.
- **Express.js**: Backend framework for API development.
- **MongoDB**: NoSQL database for storing application data.
- **TypeScript**: Adds static typing for improved development efficiency.
- **Web3.js**: JavaScript library for interacting with Ethereum.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Jest**: Testing framework for frontend and backend code.
- **Prettier & ESLint**: Code formatting and linting tools.
- **dotenv**: Manages environment variables.

## Installation

To get started with MantaSphere, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/kunaldhongade/mantasphere.git
   cd mantasphere
   ```

2. **Install Dependencies**:

   For the frontend:

   ```bash
   cd frontend
   npm install
   ```

   For the backend:

   ```bash
   cd ../backend
   npm install
   ```

3. **Compile and Deploy Contracts**:

   ```bash
   cd ../contracts
   npx hardhat compile
   npx hardhat run scripts/deploy.js
   ```

4. **Start the Backend Server**:

   ```bash
   cd ../backend
   npm start
   ```

5. **Run the Frontend**:
   ```bash
   cd ../frontend
   npm start
   ```

## Usage

1. **Connect Your Wallet**: Open the frontend application and use RainbowKit to connect your Ethereum wallet.
2. **Interact with Smart Contracts**: Use the provided UI to interact with smart contracts and perform blockchain operations.
3. **View Data**: Access real-time data from the blockchain through the application's user interface.

## Challenges

During development, one major challenge was resolving dependency conflicts related to TypeScript versions. The issue arose because different libraries required incompatible versions of TypeScript. To overcome this, I adjusted the dependency versions and utilized `--legacy-peer-deps` during installation to ensure compatibility. This approach allowed me to align the dependencies and proceed with development.

## Contributing

Contributions to MantaSphere are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear description of the changes.

## License

MantaSphere is licensed under the MIT License. See [LICENSE](LICENSE) for more details.
