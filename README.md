# 一个面向对象的高效 node.js mvc and REST 框架

###### Node 版本

+ 大于等于 6.0.0

###### 变更

+ 2018-01-12

    * npm 包 1.1.0 util/LinkedQueue 添加 ```each()``` 方法

+ 2018-01-11

    * npm 包 1.0.9 util/LinkedQueue 添加 ```iterator()``` 和 ```remove(data)``` 方法

###### 网站

+ http://candyjs.org

###### 源码 source code

+ https://github.com/candy-js

###### 系统内置别名

+ @candy  系统目录
+ @app  项目目录 由 appPath 指定 ```CandyJs.Candy.app.getAppPath()``` 可得到该值
+ @runtime  缓存目录 默认指向 @app/runtime ```CandyJs.Candy.app.getRuntimePath()``` 可得到该值
+ @root  网站根目录 ```CandyJs.Candy.app.getRootPath()``` 可得到该值

###### 项目目录示例

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
