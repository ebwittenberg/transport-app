const db = require('./conn');


class Driver {

    constructor(id, first_name, last_name) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
    }

    static getAllDrivers() {
        return db.any(`
        select * from drivers
        `)
    }

}

module.exports = Driver;