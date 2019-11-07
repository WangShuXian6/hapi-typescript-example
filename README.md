# NodeJS-Hapi TypeScript Scaffolding

A NodeJS + HapiJS(17) with Typescript Starter kit to build standard projects.

**Installation**

* *npm run setup* (install nuget packages & typings)

**Important Note**

* If working with NodeJS 10.0.0, Kindly delete the *package.lock.json* file then try *npm install*

**Run**

* *gulp build* (build ts files)
* *gulp test* (run mocha tests)
* *gulp tslint* (run tslint)
* *gulp watch* (watch ts files)
* *npm run start* (start the application)
* *npm run watch* (restart the application when files change)

**Features**

* *Project Structure - Feature oriented*
* *Hapijs - REST Api*
* *Swagger - documentation*
* *Jwt - authentication*
* *Mongoose - MongoDb*
* *nconf - configurations*
* *Logging - MongoDB collection based logging*
* *Unit Tests - chai + sinon + mocha*

Running on port 5000 ex: localhost:5000/docs

Have fun :)

## 本地开发

### 实时编译
```bash
npm run tsc-watch
```

### 实时重载代码
```bash
npm run watch
```

## 访问接口

>localhost:5000/xxx

## 编译部署

### 打包
```bash
npm run build
```

### 运行
```bash
npm run start
```

## 查看接口文档

>localhost:5000/docs


## 数据库链接格式

```
mongodb://user:password@host:port/router
```