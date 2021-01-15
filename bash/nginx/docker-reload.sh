#!/bin/bash

# 命名空间
group_name='zyh'

# 定义应用版本
app_version='1.0.0'

# nginx容器名称
nginx_name='cus_nginx'

echo "========== stop & remove container =========="
if [ "$(docker ps -a | grep $nginx_name)" ]; then
echo "=========== exits container ============"
docker stop $nginx_name && docker rm $nginx_name
fi

echo "========== remove image =========="
if [ "$(docker images | grep ${group_name}/${nginx_name}:${app_version})" ]; then
docker rmi ${group_name}/${nginx_name}:${app_version}
echo "=========== exits image ============"
fi

echo "========== build image =========="
docker build -t ${group_name}/${nginx_name}:${app_version} -f nginx/Dockerfile .

echo "========== create container =========="
docker run --name ${nginx_name} -p 80:80 -dit ${group_name}/${nginx_name}:${app_version}