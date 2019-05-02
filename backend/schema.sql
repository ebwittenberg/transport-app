create table jobs (

    id serial primary key,
    delivery_address varchar(500),
    driving_distance integer,
    assigned boolean,
    completed boolean
);


create table drivers (

    id serial primary key,
    first_name varchar(200),
    last_name varchar(200),
    assigned_job integer references jobs(id)

);
