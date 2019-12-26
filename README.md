>```chore-updatePackage``` 版本更新了全部依赖和打包脚本,新增生产环境配置文件

```bash
git fetch origin chore-updatePackage

git checkout  chore-updatePackage
```

>开发模式不会复制配置json文件,所以需要手动复制json文件至build目录，

>或者首先执行 ```npm run build```可以正常复制json配置文件

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

***
### 1 开发准备
>不要安装依赖

#### 1.1 编译 hapi docker + mongodb docker
>>1.1.1  修改 ```configurations / database / connectionString``` : ```mongodb://localhost:27017/taskdb-prod``` 为 ```mongodb://mongodb/taskdb-prod```
>1.1.2 
```bash
#docker-compose up -d
docker run -p 27017:27017 --name app-mongo mongo
```

>To rebuild this image you must use ```docker-compose build``` or ```docker-compose up --build```

>1.1.2 关闭 hapi docker 容器,保留 mongodb docker 容器运行

### 2 开始本地开发
#### 2.1 实时编译

```bash
npm run tsc-watch
```

#### 2.2 实时重载代码

```bash
npm run watch
```

#### 2.3 本地开发地址
>http://localhost:5000/


***
### 3 单独测试 hapi 容器
#### 3.1 启动 hapi

```bash
docker run -p 27017:27017 --name app-mongo mongo
docker image build -t app:v1 .
docker run app:v1
#docker start app:v1
```

#### 或者 启动 hapi + mongodb
```bash
#docker-compose up -d
docker run -p 27017:27017 --name app-mongo mongo
```

***
### 4 其他命令

### 实时编译

```bash
npm run tsc-watch
```

### 实时重载代码

```bash
npm run watch
```

## 访问接口

> localhost:5000/xxx

## 编译部署

### 打包

```bash
npm run build
```

### 普通运行

```bash
npm run start
```

### 使用 pm2 稳定运行自动重启

```bash
npm install pm2 -g # 安装 pm2
pm2 start build/src/index.js -i 3 # 开启三个进程
pm2 start build/src/index.js -i max --watch  # 根据机器CPU核数，开启对应数目的进程
```

## 查看接口文档

> localhost:5000/docs

## 数据库链接格式

```
mongodb://user:password@host:port/router
```

#### todo
>```@hapi/boom``` 8.x 更新后需要同步依赖

### ```configurations / database / connectionString```

#### 本地 node docker + mongo docker 使用 componse
>```mongodb://mongodb:27017/taskdb-prod```

#### 本地 node 实时编译 + mongo docker 
>```mongodb://localhost:27017/taskdb-dev```

#### 本地 node 实时编译 + mongo docker 不使用 componse
>```mongodb://localhost:27017/taskdb-dev```

#### 正式 node docker + 公有云 mongo  不使用 componse
>```mongodb://user:password@host:port/router```

#### 正式 node docker + mongo docker 使用 componse
>```mongodb://mongodb/taskdb-prod```

#### 测试
```curl "mongodb:27017"```