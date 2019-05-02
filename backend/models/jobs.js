const db = require('./conn');

class Job {

    constructor(id, delivery_address, driving_distance, assigned_driver) {
        this.id = id;
        this.delivery_address = delivery_address;
        this.driving_distance = driving_distance;
        this.assigned_driver = assigned_driver;
    }

    static getAllJobs() {
        return db.any(`
        select * from jobs
        WHERE assigned='FALSE'
        `)
        .then(allJobs => {
            return allJobs.map(job => new Job(job.id, job.delivery_address, job.driving_distance, job.assigned_driver));
        })
    }

    static markAssigned(jobID) {
        return db.result(`
        UPDATE jobs
        set assigned='TRUE'
        WHERE id=${jobID}
        `)
    }


}

module.exports = Job;