require('dotenv').config();
const app = require("./src/app");

app.listen(process.env.PORT || 3000,function() {
    console.log("Server is running on port 3000");
})