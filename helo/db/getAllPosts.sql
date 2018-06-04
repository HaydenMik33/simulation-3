select p.id,u.username,u.profile_pic,p.title,p.img,p.content from posts_sim3 p
join users_sim3 u on p.auth_id = u.id ;
