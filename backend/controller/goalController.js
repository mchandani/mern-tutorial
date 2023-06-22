const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')
// Get Goals
// GET /api/goals
// PRIVATE
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })
    res.status(200).json(goals)
})

// Set Goals
// POST /api/goals
// PRIVATE
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please enter text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})

// Update Goals
// PUT /api/goals/:id
// PRIVATE
const putGoals = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Cannot find goal')
    }
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorozed!')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedGoal)
})
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Cannot find goal')
    }
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorozed!')
    }
    await goal.deleteOne()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoal
}