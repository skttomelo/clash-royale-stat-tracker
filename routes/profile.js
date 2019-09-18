const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get("/players/:gamertag", async (req,res) => {
    try{
        const headers = {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.CLASHROYALE_API_JSON_TOKEN}`,
        }

        const {gamertag} = req.params;

        const response = await fetch(`${process.env.CLASHROYALE_API_URL}/players/%23${gamertag}`, {
            headers
        });

        const data = await response.json();

        if(data.errors && data.errors.length > 0){
            return res.status(404).json({
                message: 'Player was not found'
            })
        }

        res.json(data);
    } catch(err){
        console.log(err);
        res.status(500).json({
            message: 'server error'
        });
    }
});

module.exports = router;