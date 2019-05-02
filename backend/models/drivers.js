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

    static assignJobToDriver(driverID, jobID) {
        return db.result(`
        UPDATE drivers
        SET assigned_job=${jobID}
        WHERE id=${driverID} 
        `)


    }

}

module.exports = Driver;