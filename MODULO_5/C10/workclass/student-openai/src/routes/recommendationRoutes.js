const express = require('express');
const { getRecommendations } = require ('../controllers/recommendationController.js');

const router = express.Router();

router.post('/students/:id/recommended-courses', getRecommendations);

module.exports = router;