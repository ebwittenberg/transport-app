const db = require('./conn');

class Job {

    constructor(id, delivery_address, driving_distance) {
        this.id = id;
        this.delivery_address = delivery_address;
        this.driving_distance = driving_distance;
    }

    static getAllJobs() {
        return db.any(`
        select * from jobs
        `)
        .then(allJobs => {
            return allJobs.map(job => new Job(job.id, job.delivery_address, job.driving_distance));
        })
    
    }


}

module.exports = Job;