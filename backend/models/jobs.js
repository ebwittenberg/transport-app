const db = require('./conn');

class Job {

    constructor(id, delivery_address, driving_distance, assigned) {
        this.id = id;
        this.delivery_address = delivery_address;
        this.driving_distance = driving_distance;
        this.assigned = assigned;
    }

    static getAllJobs() {
        return db.any(`
        select * from jobs
        WHERE assigned='FALSE'
        `)
        .then(allJobs => {
            return allJobs.map(job => new Job(job.id, job.delivery_address, job.driving_distance, job.assigned));
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