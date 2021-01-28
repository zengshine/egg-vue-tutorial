FROM node:14.15.3

ENV TIME_ZONE=Asia/Shanghai

# ENV APP_HOST = '8.135.3.155:80'

RUN \
  mkdir -p /usr/src/egg-vue \
  && echo "${TIME_ZONE}" > /etc/timezone \
  && ln -sf /usr/share/zoneinfo/${TIME_ZONE} /etc/localtime

WORKDIR /usr/src/egg-vue

COPY package.json /usr/src/egg-vue

RUN npm i --registry=https://registry.npm.taobao.org

COPY . /usr/src/egg-vue

RUN npm run build

EXPOSE 7001

CMD ["npm","start"]
