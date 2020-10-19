# lerna-example
lerna 使用

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

- 命令：`lerna add <pkg> [globs..]`
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
1. 使用 npm 和 yarn 的区别

如果 `lerna.json` 中的 `"npmClient": "npm"`, 会在没个包下面安装对应 `node_modules` ，如果使用 `yarn` 则把所有的依赖安装到根目录下的 `node_modules`.



## 参考资料

官网：https://lerna.js.org/
Github：https://github.com/lerna/lerna
