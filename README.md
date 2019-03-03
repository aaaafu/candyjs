# 一个面向对象的高效 node.js mvc and REST 框架。 CandyJs 不是第三方框架的扩展，而是一个全新的框架。

### 为什么是 CandyJs

+ CandyJs 实现了 MVC (Model-View-Controller) 设计模式并基于该模式组织代码

+ CandyJs 实现了自动路由映射

+ CandyJs 高可扩展和高可配置

+ CandyJs 的代码简洁优雅 这是它的编程哲学

+ CandyJs 采用 MIT 许可 这意味着您可以免费的使用 CandyJs 来开发 WEB 应用

### 文档

+ http://candyjs.org

+ https://douyu-beijing.github.io/candyjs-guide

### 源码 source code

+ https://github.com/douyu-beijing/candyjs

### Node 版本

+ 大于等于 6.0.0

### 变更

+ 2019-02-25

    * npm 包 3.1.3 优化部分代码

+ 2018-09-27

    * npm 包 3.1.0 优化日志系统

+ 2018-08-20

    * npm 包 3.0.5 移除 y/web/Request 类的 ```setQueryString()``` 方法

+ 2018-08-20

    * npm 包 3.0.3 项目增加组件测试用例

+ 2018-08-02

    * npm 包 3.0.2 项目中 `class` 配置项修改为 `classPath`

+ 2018-06-15

    * npm 包 3.0.0 更新了 web/Request 和 web/URL 两个类 web/URL 类中的大部分方法移动到了 web/Request 中

+ 2018-05-09

    * npm 包 2.0.0 重构 rest 模式

+ 2018-05-07

    * npm 包 1.2.3 优化代码

+ 2018-03-21

    * npm 包 1.2.0 修改 rest 模式不能正常运行 bug

+ 2018-03-15

    * npm 包 1.1.5 StringHelper.indexOfN() 方法名字修改为 StringHelper.nIndexOf()

+ 2018-03-02

    * npm 包 1.1.4 系统所用的事件变量从实例变量修改为静态变量

+ 2018-02-05

    * npm 包 1.1.3 日志生成文件 bug 修复

+ 2018-02-01

    * npm 包 1.1.2 日志部分重构

+ 2018-01-12

    * npm 包 1.1.1 修复部分 bug

+ 2018-01-12

    * npm 包 1.1.0 util/LinkedQueue 添加 ```each()``` 方法

+ 2018-01-11

    * npm 包 1.0.9 util/LinkedQueue 添加 ```iterator()``` 和 ```remove(data)``` 方法

### 系统内置别名

+ @candy  系统目录
+ @app  项目目录 由 appPath 指定 ```CandyJs.Candy.app.getAppPath()``` 可得到该值
+ @runtime  缓存目录 默认指向 @app/runtime ```CandyJs.Candy.app.getRuntimePath()``` 可得到该值
+ @root  网站根目录 ```CandyJs.Candy.app.getRootPath()``` 可得到该值

### 项目目录示例

<pre>
|- index.js
|
|- node_modules 目录
|
|- public 目录
|
|- app 项目目录
|  |
|  |-- apis
|  |
|  |-- controllers 普通控制器目录
|      |
|      |-- user 用户组目录
|      |   |
|      |   |-- IndexController.js  - host:port/user/index 可以访问到该类
|      |   |-- OtherController.js  - host:port/user/other 可以访问到该类
|      |
|      |-- goods 商品组目录
|      |   |
|      |   |-- IndexController.js  - host:port/goods/index 可以访问到该类
|      |   |-- OtherController.js  - host:port/goods/other 可以访问到该类
|      |
|   -- views 普通控制器模板目录
|      |
|      |-- user 用户组模板 对应上面用户组
|      |   |
|      |   |-- index.html
|      |   |-- other.html
|      |
|   -- goods 商品组模板
|      |   |
|      |   |-- index.html
|      |   |-- other.html
|      |
|   -- modules 模块
|      |
|      |-- reg
|      |   |
|      |   |-- controllers 模块控制器目录 其下无子目录
|      |   |   |
|      |   |   |-- IndexController.js
|      |   |
|      |   |-- views 模块模板目录
|      |   |   |
|      |   |   |-- index.html
|      |   |
|      |   |-- 其他目录
|      |
|   -- runtime 缓存目录
|
</pre>
