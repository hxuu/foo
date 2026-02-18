
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        soilMoisture: "45%",
        temperature: "29°C",
        status: "Optimal",
        humidity: "60%"
    });
});

module.exports = router;
