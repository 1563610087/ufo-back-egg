# 设置基础镜像,如果本地没有该镜像，会从Docker.io服务器pull镜像
FROM node:14

# 配置环境变量
ENV NODE_ENV development

# 这个是容器中的文件目录
RUN mkdir -p /usr/src/app 

# 设置工作目录
WORKDIR /usr/src/app

COPY . /usr/src/app

# 暴露容器端口
EXPOSE 3300

CMD npm run dev


 