"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const order_validation_1 = require("./order.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = (0, express_1.Router)();
router.post('/add-order', (0, auth_1.default)(['customer']), (0, validateRequest_1.default)(order_validation_1.orderValidations.createOrderValidationSchema), order_controller_1.orderController.createOrderIntoDb);
router.post('/verify-order', order_controller_1.orderController.verifyPayment);
router.get('/get-all-orders', order_controller_1.orderController.getAllOrders);
router.get('/get-today-sale', order_controller_1.orderController.getTodaysSale);
router.get('/get-total-sale', order_controller_1.orderController.getTotalSale);
router.get('/get-my-orders', (0, auth_1.default)(['customer']), order_controller_1.orderController.getMyOrders);
router.patch('/change-status/:id', order_controller_1.orderController.changeStatus);
router.delete('/delete-order/:id', order_controller_1.orderController.deleteOrder);
exports.orderRoutes = router;
