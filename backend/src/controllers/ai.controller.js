const generateContent = require("../services/ai.service");

module.exports.getResponse = async function (req, res) {
    const {code} = req.body;
    if(!code){
        return res.status(400).json({ error: 'Missing prompt parameter' });
    }
    
   let response = await generateContent(code);
   res.send(response);
}   