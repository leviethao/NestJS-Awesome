CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

insert into product values
(uuid_generate_v4(), 'tra sua 1'),
(uuid_generate_v4(), 'tra sua 2'),
(uuid_generate_v4(), 'tra sua 3')