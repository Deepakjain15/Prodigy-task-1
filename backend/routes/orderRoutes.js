const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
  addOrderItems,
  getMyOrders,
} = require('../controllers/orderController');
const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders);

module.exports = router;
