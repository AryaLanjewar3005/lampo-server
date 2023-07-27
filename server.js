const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const knex = require("knex");
const database = {
  lamps: [
    {
      id: 1,
      name: "Table Lamp 1",
      price: 29.99,
      category: "Table Lamps",
      image:
        "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 2,
      name: "Floor Lamp 1",
      price: 59.99,
      category: "Floor Lamps",
      image:
        "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      name: "Desk Lamp 1",
      price: 39.99,
      category: "Desk Lamps",
      image:
        "https://images.unsplash.com/photo-1585597647877-6eaa01bf9a05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      id: 4,
      name: "Ceiling Lamp 1",
      price: 79.99,
      category: "Ceiling Lamps",
      image:
        "https://images.unsplash.com/photo-1565374235393-6fe32a07cc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    },
    {
      id: 5,
      name: "Wall Lamp 1",
      price: 49.99,
      category: "Wall Lamps",
      image:
        "https://plus.unsplash.com/premium_photo-1678395446995-575bfdcb0f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 6,
      name: "Chandelier 1",
      price: 149.99,
      category: "Chandeliers",
      image:
        "https://images.unsplash.com/photo-1559924508-1461423083c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 7,
      name: "Bedside Lamp 1",
      price: 34.99,
      category: "Bedside Lamps",
      image:
        "https://plus.unsplash.com/premium_photo-1678375722586-b5eef2972f4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 8,
      name: "Pendant Lamp 1",
      price: 69.99,
      category: "Pendant Lamps",
      image:
        "https://images.unsplash.com/photo-1602145461313-26c587cc0ca9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
  ],
  allLamps: [
    {
      id: 1,
      name: "Table Lamp 1",
      price: 29.99,
      category: "Table Lamps",
      image:
        "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 2,
      name: "Floor Lamp 1",
      price: 59.99,
      category: "Floor Lamps",
      image:
        "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      name: "Desk Lamp 1",
      price: 39.99,
      category: "Desk Lamps",
      image:
        "https://images.unsplash.com/photo-1585597647877-6eaa01bf9a05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      id: 4,
      name: "Ceiling Lamp 1",
      price: 79.99,
      category: "Ceiling Lamps",
      image:
        "https://images.unsplash.com/photo-1565374235393-6fe32a07cc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    },
    {
      id: 5,
      name: "Wall Lamp 1",
      price: 49.99,
      category: "Wall Lamps",
      image:
        "https://plus.unsplash.com/premium_photo-1678395446995-575bfdcb0f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 6,
      name: "Chandelier 1",
      price: 149.99,
      category: "Chandeliers",
      image:
        "https://images.unsplash.com/photo-1559924508-1461423083c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 7,
      name: "Bedside Lamp 1",
      price: 34.99,
      category: "Bedside Lamps",
      image:
        "https://plus.unsplash.com/premium_photo-1678375722586-b5eef2972f4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 8,
      name: "Pendant Lamp 1",
      price: 69.99,
      category: "Pendant Lamps",
      image:
        "https://images.unsplash.com/photo-1602145461313-26c587cc0ca9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
  ],
};

const users = [];
const app = express();
app.use(express.json());
app.use(cors());

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false},
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PW,
    database: process.env.DATABASE_DB,
    port: 5432,
  },
});
// Validation function
function validateUser(username, email, password) {
  // Implement your validation logic here
  // Return an object indicating if the validation succeeded and an error message if it failed

  // Example validation checks
  if (!username || !email || !password) {
    return {
      valid: false,
      error: 'Please provide all required fields.'
    };
  }

  if (password.length < 6) {
    return {
      valid: false,
      error: 'Password must be at least 6 characters long.'
    };
  }

  return {
    valid: true
  };
}
app.get("/", (req, res) => {
  res.json(users);
});

app.get("/showcase", (req, res) => {
  db.select("*")
    .from("products")
    .then((products) => res.json(products));
});

app.get("/products", (req, res) => {
  db.select("*")
    .from("products")
    .then((products) => res.json(products));
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  if (req.body.password === req.body.confirmPassword) {
    const validationResult = validateUser(username, email, password);
    if (!validationResult.valid) {
      return res.status(400).json({ error: validationResult.error });
    }
    const existingUser = await db("users").where({ email }).first();
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists.' });
    }
    const hash = bcrypt.hashSync(req.body.password, 10);
    console.log({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    try {
      await db("users").insert({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      });
      await res.json({username: req.body.username}); // or any appropriate success response
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while registering the user.' });
    }
    try{
      await db("carts").insert({username: req.body.username, cart_items: null});
    } catch (err){
      res.json({error: "An error occurred while creating carts"});
    }
  } else {
    res.status(400).json({ error: 'Passwords do not match.' });
  }
});


app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const user = await db('users')
      .where({ email })
      .first();

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Fetch cart items for the user
    const cart = await db('carts')
      .where({ username: user.username })
      .first();

    const cartItems = cart ? cart.cart_items : [];

    // User authenticated successfully
    res.json({ message: 'User authenticated successfully.', username: user.username, cartItems });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while signing in.' });
  }
});


app.post("/addcart", async (req, res) => {
  const { username, cart_items } = req.body;

  try {
    await db('carts').where({ username }).update({ cart_items });
    res.json({ message: 'Cart updated successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the cart.' });
  }
});

app.listen(process.env.PORT || 4000);
