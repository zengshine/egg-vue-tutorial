# egg-vue-tutorial

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+

### 常用命令

> 查看退出容器的日志

- docker logs -f -t --tail 50 cus_nginx

### Node 服务日志路径

#### root 角色

- /root/logs/

#### 普通用户

- /home/\${userName}/logs
