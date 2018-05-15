select p.id,username,profile_pic,title,img,content from posts_sim3 p
join users_sim3 u on p.auth_id = u.id ;
