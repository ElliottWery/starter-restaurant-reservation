function create(reservation) {
    return knex("reservations")
    .insert(reservation)
    .returning("*")
};

function search() {

}

function read(reservationId) {
    return knex("reservations")
    .select("*")
    .where({ reservationId })
    .first();
  }

function list() { 
    return knex("reservations") 
    .select("*") 
    .orderBy("reservation_time");
};

function listDate() {

}

function destroy(reservationId) {
    return knex("reservations")
      .where({ reservationId })
      .del()
  }

module.exports = {
create,
search,
read,
list: list, listDate,
delete: destroy,
}