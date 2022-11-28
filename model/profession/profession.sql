CREATE TABLE profession (
    id number generated always as identity,
    description varchar(400) not null,
    primary key (id)
);