const router = require('express').Router()

router.use('*', (req, res, next) => {
    res.json({ api: 'up'})
})



router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: "BETTER WATCH OUT FOR THE BOOGYBUG",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router