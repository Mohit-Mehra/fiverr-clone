# Fiverr Clone Project with MERN Stack and Stripe

This is a Fiverr clone project built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and integrated with Stripe for payment processing. It aims to replicate the core functionalities of Fiverr, a popular online marketplace for freelancers and clients.

## Features

- User registration and authentication: Users can sign up, log in, and manage their profiles.
- Create and manage gigs: Users can create gigs to offer their services, specify pricing, and provide descriptions.
- Browse and search gigs: Users can browse and search gigs based on categories, keywords, and filters.
- Place orders: Users can place orders for gigs they are interested in, providing additional details and requirements.
- Messaging system: Users can communicate with each other through an integrated messaging system.
- Payment integration: Stripe is integrated for secure and reliable payment processing.
- Order management: Users can manage their orders, track their progress, and provide feedback.
- Ratings and reviews: Users can rate and leave reviews for completed orders.
- Admin panel: An admin panel is provided to manage users, gigs, orders, and site settings.

## Prerequisites

Make sure you have the following dependencies installed before running the project:

- Node.js (v14 or above)
- MongoDB
- Stripe account and API keys

## Getting Started

1. Clone the repository:

```shell
git clone https://github.com/mohit-mehra/fiverr-clone.git
```

2. Navigate to the project directory:

```shell
cd fiverr-clone
```

3. Install server dependencies:

```shell
npm install
```

4. Navigate to the client directory:

```shell
cd client
```

5. Install client dependencies:

```shell
npm install
```

6. Go back to the project root directory:

```shell
cd ..
```

7. Create a `.env` file in the project root and add the following environment variables:

```
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_KEY =your_JWY_KEY
```

8. Start the development server:

```shell
npm run dev
```

9. Open your web browser and navigate to `http://localhost:3000` to see the application running.


## Contributing

Contributions to the Fiverr clone project are welcome! If you find any issues or have suggestions for improvements, please submit an issue or pull request on the project's GitHub repository.


## Acknowledgements

The Fiverr clone project is inspired by the original Fiverr platform and uses various open-source libraries and frameworks to provide its functionality. Special thanks to the contributors of these projects:

- [React.js](https://reactjs.org)
- [Node.js](https://nodejs.org)
- [Express.js](https://expressjs.com)
- [MongoDB](https://www.mongodb.com)
- [Stripe](https://stripe.com)

## Contact

For any questions or inquiries regarding the Fiverr clone project, you can contact the project maintainer at [info.mohitverse@gmail.com](mailto:info.mohitverse@gmail.com).
