const express =require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
app.use(express.json())

dotenv.config();


// ConnectDB
mongoose.connect(process.env.MONGO_DB_URI, {
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// ConnecRoute
const InformationRoute = require("./routes/information");
app.use("/api/information", InformationRoute);

const authRoute = require("./routes/auth");
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));