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

## 使用 npm 和 yarn 的区别

如果 `lerna.json` 中的 `"npmClient": "npm"`, 会在没个包下面安装对应 `node_modules` ，如果使用 `yarn` 则把所有的依赖安装到根目录下的 `node_modules`.



## 参考资料

官网：https://lerna.js.org/
Github：https://github.com/lerna/lerna
