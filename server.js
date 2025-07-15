const expressSession = require("express-session");
const MongoStore = require("connect-mongo");

app.locals.moment = moment;

// Configure MongoDB connection
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
};

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE, dbOptions)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Configure session store
app.use(
  expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE,
      ttl: 24 * 60 * 60, // Session TTL in seconds (1 day)
    }),
    cookie: {
      secure: false, // Set to true only in production with HTTPS
      maxAge: 24 * 60 * 60 * 1000, // Cookie max age in milliseconds (1 day)
    },
  })
);

// Debug connection state
mongoose.connection.on("connecting", () => {
  console.log("MongoDB connecting...");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

mongoose.connection.on("disconnecting", () => {
  console.log("MongoDB disconnecting...");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).send("Something broke!");
});

// Prevent server from crashing on unhandled errors
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
});

//testing the connection
