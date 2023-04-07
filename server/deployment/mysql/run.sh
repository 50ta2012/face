docker run -d --restart=unless-stopped -p 3314:3306 \
--name face-db \
-e MYSQL_ROOT_PASSWORD=UMFKpDkPsigAb1Q1UoBT \
-v `pwd`/init.sql:/docker-entrypoint-initdb.d/init.sql \
mysql:latest