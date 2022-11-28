create table users (
    id number generated always as identity,
    email varchar(50) not null,
    descriptionAccess varchar(45)not null,
    fullName varchar(400) not null,
    cpf varchar(20) not null,
    telephoneNumber number not null,
    primary key (id)
);