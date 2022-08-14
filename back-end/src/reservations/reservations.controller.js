/**
 * List handler for reservation resources
 */

// functions for this file reservationExists, timeIsValid, dateFormatIsValid, dateNotInPast, timeDuringBizHours, dateNotTuesday, statusIsBookedOrNull, hasValidValues, statusNotFinished

statusIsBooked, statusIsBooked
import asyncErrorBoundary from "./errors/asyncErrorBoundary.js"

 const VALID_PROPERTIES = [ "first_name", "last_name", "mobile_number", "reservation_date", "reservation_time", "people", "status", "reservation_id", "created_at", "updated_at", ];

 async function create(req, res) {
  const reservation = req.body.data;
  const reservationId = await service.create(reservation);
  res.status(201).json({ data: reservationId });
}

async function search(req, res, next) {

}

async function read(req, res) {

}

async function list(req, res, next) {
  const { mobile_number, date } = req.query;
  res.json({ data: reservations });
}

async function listDate(req, res, next) {

}

async function destroy(req, res) {
  
}

function hasOnlyValidProperties(req, res, next) { 
  const { data = {} } = req.body; 
  const invalidStatuses = Object.keys(data).filter( (field) => !VALID_PROPERTIES.includes(field) ); 
  if (invalidStatuses.length) { 
    return next({ status: 400, message: `Invalid field(s): ${invalidStatuses.join(", ")}`, 
  }); 
  } 
  next(); 
}

module.exports = {
	list: asyncErrorBoundary(list),
  create: asyncErrorBoundary(create),

}