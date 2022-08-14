/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./reservations.controller");

router
    .route("/")
    .get(controller.list);

router 
    .route("/reservations/new")
    .get(reservationId)
    .post(reservations)

router 
    .route("/dashboard")

router
    .route("/reservations")
    

module.exports = router;
