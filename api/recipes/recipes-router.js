const router = require('express').Router()

const Recipe = require('./recipes-model');

router.get("/:recipe_id", (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
        .then(result =>{
            res.status(200).json(result)
        })
})





router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: "BETTER WATCH OUT FOR THE BOOGYBUG",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router