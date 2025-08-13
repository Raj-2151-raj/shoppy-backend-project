#  ShoppyGlobe Backend API

Backend API for **ShoppyGlobe** — a minimal e-commerce application built with **Node.js**, **Express**, and **MongoDB**.  
Supports **product listing**, **user authentication**, **shopping cart management**, and **image uploads**.

---

##  Features
- **User Authentication**
  - Register new users with password hashing
  - Login with JWT token issuance
- **Products**
  - CRUD operations
  - Image upload with Multer
- **Cart**
  - Add, view, update, and remove items
- **Security**
  - JWT-based authentication
  - CORS configuration
- **Documentation**
  - Thunder Client collection included

---

## 📂 Project Structure
│
├── config/
│ └── db.js # MongoDB connection setup
│
├── controllers/ # Business logic
│ ├── authController.js # Login & register logic
│ ├── cartController.js # Cart operations
│ └── productController.js # Product operations
│
├── middlewares/
│ └── authMiddleware.js # JWT authentication middleware
│
├── models/ # Mongoose models
│ ├── cartModel.js
│ ├── productModel.js
│ └── userModel.js
│
├── routes/ # API routes
│ ├── authRoutes.js
│ ├── cartRoutes.js
│ └── productRoutes.js
│
├── .env # Environment variables
├── package.json # Project dependencies
├── package-lock.json
├── README.md # Documentation
└── server.js # Entry point




##  Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Raj-2151-raj/shoppy-backend-project.git
cd shoppyglobe-backend
2️⃣ Install dependencies

npm install
3️⃣ Configure environment variables
Create a .env file in the root folder:

env

MongoDB_URL=mongodb+srv://rajcthakur07:z5pKerZbfuRIiGBu@cluster0.omywt40.mongodb.net/mydatabase
JWT_SECRET_KEY=MySecretKey123
PORT=5000


4️⃣ Start the server



# Production mode
npm start
Server will start at:

http://localhost:5000

 API Endpoints

Method	Endpoint	Description	Auth Required
POST	/api/register	Register user	
POST	/api/login	Login user	

Products
Method	Endpoint	Description	Auth Required
GET	/api/products	Get all products	
GET	/api/products/:id	Get product by ID	
POST	/api/products	Create new product	
PUT	/api/products/:id	Update product	
DELETE	/api/products/:id	Delete product	

Cart
Method	Endpoint	Description	Auth Required
GET	/api/cart	Get user cart	
POST	/api/cart	Add item to cart	
PUT	/api/cart/:productId	Update cart item	
DELETE	/api/cart/:productId	Remove cart item	

 Thunder Client Collection
You can import the thunder-collection.json file in Thunder Client to test all APIs easily.

Authentication
All protected routes require a Bearer Token in the header:

http

Authorization: JWT <your_token_here>
 Technologies Used
Node.js

Express.js

MongoDB + Mongoose

JWT (authentication)

github link : https://github.com/Raj-2151-raj/shoppy-backend-project.git

License
MIT License © 2025 Raj chandrakant thakur