const express = require("express");
const router = express.Router();

const cartypeController = require("../controller/cartype");

router
    .route("/")
    .get(cartypeController.getCartypes)
    .post(cartypeController.createCartype);

router
    .route("/:id")
    .get(cartypeController.getCartype)
    .put(cartypeController.updateCartype)
    .delete(cartypeController.deleteCartype);

module.exports = router;