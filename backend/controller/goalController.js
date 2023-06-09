const asyncHandler  = require('express-async-handler')

// Get Goals
// GET /api/goals
// PRIVATE
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get goals" })
})

// Set Goals
// POST /api/goals
// PRIVATE
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please enter text field')
    }
    res.status(200).json({ message: "Post goals" })
})

// Update Goals
// PUT /api/goals/:id
// PRIVATE
const putGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get goals ${req.params.id}` })
})

module.exports = {
    getGoals,
    setGoals,
    putGoals
}