# lerna-example

**为什么要使用lerna，解决了什么问题：**

1. 团队内维护的项目太多可复用的逻辑以文件的形式多份复制到 N 个项目，如果其中一块有问题，需要多个项目进行维护。通过 lerna 把这些功能以 npm 包的方式维护，好处有：把这些功能当做基础库的 npm 包来维护，只需要维护一处。
2. 功能点拆分到基础库后，作为单独的 npm 包，更加容易让测试覆盖。
3. lerna 在开发时，只需要安装一份 `node_modules` 到根目录。

**风险点**
1. 把可复用功能从文件形式移植到 npm 包方式维护，带来风险点就会提升更大，如果某个功能点的 npm 包，出现bug。那么影响范围就会更大。所有需要配合严格的 npm 包管理规范使用，比如同步环境依次发布和使用 alpha、beta、release 等。


## 发布模式的选择

使用哪个方式来维护我们的 npm 版本号，固定模式是统一版本号，即所有 npm 包都是同一版本号。独立模式，每个 npm 包的版本号需要自己维护，可以不一样。可以根据不同场景使用不同的模式。

修改 `lerna.json` 中的 `"version"` 为某个版本号，后面需要发布新版本时候
1. 先通过 更改 `lerna.json` 中的 `"version"` 为新的
2. 通过 `npx lerna version` 来更改所有包的版本号

```json
{
  "packages": [
    "packages/*"
  ],
  "version": "1.2.0",
  "command": {
  },
  "publish": {
    "registry": "https://registry.npmjs.org/"
  }
}
```

### 1. 固定模式

在关联性比较高的场景，比如开发某个软件A和软件A下各种插件。这种建议采用固定模式，因为这些，通过固定模式的版本号，能快速知道某些插件和软件是否兼容。

### 2. 独立模式

在关联性不高的场景，比如比较分散的功能点工具库，各个 npm 包之间没有很强的关联性。这时候建议采用独立模式。
## 安装

```shell
$ npm install --global lerna
```

## 起步

创建项目 

```shell
$ mkdir lerna-example && cd lerna-example
$ npx lerna init
```

## 添加第一个包

- 命令：`lerna create <name> [loc]`
- 文档： https://github.com/lerna/lerna/tree/master/commands/create#readme

**举例**

这里包名为 `lerna-pkg-util`

```
lerna create lerna-pkg-util
```

## 添加依赖

- 命令：`lerna add <pkg> [globs..]`
- 文档：https://github.com/lerna/lerna/tree/master/commands/add#readme

**举例**

这里往 `lerna-pkg-util` 包添加依赖 `dayjs`

```
lerna add dayjs --scope=lerna-pkg-util
```

如果是 dev 依赖加上命令

```
lerna add gulp --scope=lerna-pkg-util --dev
```

## 安装依赖

- 命令：`lerna bootstrap`
- 文档：https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme

## 包发布

- 命令：`lerna publish [bump]`
- 文档：https://github.com/lerna/lerna/tree/master/commands/publish#readme

推荐采用 `lerna publish from-package --yes` 方式来发布，因为如果直接采用 `lerna publish` 与 `lerna publish from-git` 则需要 git commit 没提交，才能 `publish` 成功。而采用 `lerna publish from-package --yes` 则只需要 `npm` 包的版本号没有发不过，则可以继续发布。这样很方便集成在 `CI` 里。


## 常见问题

1. 如何把 `node_modules` 安装到根目录

在项目 `lerna.json` 增加如下配置
```
  "command": {
    "bootstrap": {
      "hoist": true
    }
  }
```

2. 如何解决 `CI` 环境下发布权限问题？

在 `lerna` 项目根目录下，创建 `.npmrc`，里面代码如下：

```
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

在 `npmjs` 后台创建 `Access Tokens` ，然后在 `CI` 设置 `NPM_TOKEN` 的环境变量为 `Access Tokens` 的值即可。


## 参考资料

官网：https://lerna.js.org/
Github：https://github.com/lerna/lerna

