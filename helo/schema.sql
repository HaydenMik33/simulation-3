CREATE TABLE users_sim3 (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic text
);

CREATE TABLE posts_sim3(
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img text,
    content text,
    auth_id integer references users_sim3(id) 
);

