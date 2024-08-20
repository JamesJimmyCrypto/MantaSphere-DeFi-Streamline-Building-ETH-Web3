# MantaSphere Frontend

![MantaSphere Logo](path/to/your/logo.png)

MantaSphere is a SocialFi platform that enables users to connect, interact, and transact securely on the blockchain. This repository contains the frontend codebase built with React, Tailwind CSS, and Web3.js.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Secure Authentication**: Connect with your wallet and manage your identity securely.
- **Interactive Dashboard**: Manage your content, governance proposals, and transactions in an intuitive UI.
- **Marketplace**: Buy and sell NFTs directly from the platform.
- **Seamless Web3 Integration**: Interact with smart contracts directly from the frontend.
- **Responsive Design**: Fully responsive design with Tailwind CSS.

## Demo

Check out the live demo: [MantaSphere Demo](https://mantasphere.vercel.app)

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or Yarn
- MetaMask or any Web3 wallet

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/kunaldhongade/MantaSphere.git
   cd MantaSphere/client
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the following variables:

   ```plaintext
   REACT_APP_INFURA_PROJECT_ID=your-infura-project-id
   REACT_APP_MARKETPLACE_CONTRACT_ADDRESS=your-marketplace-contract-address
   REACT_APP_CONTENT_NFT_CONTRACT_ADDRESS=your-content-nft-contract-address
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Usage

- **Login**: Connect your wallet to log in.
- **Dashboard**: Manage your content, create governance proposals, and view your transactions.
- **Marketplace**: Browse and purchase NFTs.

## Directory Structure

```
MantaSphere/client/
├── src/
│   ├── assets/            # Images, icons, and other static assets
│   ├── components/        # Reusable components (e.g., buttons, forms)
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components (e.g., Home, Dashboard, Login)
│   ├── services/          # API and blockchain interaction services
│   ├── styles/            # Global styles and Tailwind configuration
│   ├── App.js             # Main application component
│   └── index.js           # Entry point of the application
├── public/                # Static files (e.g., index.html)
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
└── README.md              # This README file
```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

- `REACT_APP_INFURA_PROJECT_ID` - Your Infura project ID.
- `REACT_APP_MARKETPLACE_CONTRACT_ADDRESS` - The contract address for the marketplace.
- `REACT_APP_CONTENT_NFT_CONTRACT_ADDRESS` - The contract address for the content NFT.

## Contributing

We welcome contributions to MantaSphere! Please follow these steps:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact:

- \*\*Kunal Dhongade
- [LinkedIn](https://www.linkedin.com/in/kunaldhongade)
- [Twitter](https://twitter.com/kunaldhongade)
