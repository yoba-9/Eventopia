
    create table events (
        available_seats integer,
        capacity integer,
        date date not null,
        is_active bit,
        price float(53),
        time time(6),
        created_at datetime(6),
        id bigint not null auto_increment,
        updated_at datetime(6),
        category varchar(100),
        organizer varchar(200),
        image_url varchar(500),
        location varchar(500),
        description varchar(1000),
        contact_email varchar(255),
        title varchar(255) not null,
        primary key (id)
    ) engine=InnoDB;

    create table events (
        available_seats integer,
        capacity integer,
        date date not null,
        is_active bit,
        price float(53),
        time time(6),
        created_at datetime(6),
        id bigint not null auto_increment,
        updated_at datetime(6),
        category varchar(100),
        organizer varchar(200),
        image_url varchar(500),
        location varchar(500),
        description varchar(1000),
        contact_email varchar(255),
        title varchar(255) not null,
        primary key (id)
    ) engine=InnoDB;
