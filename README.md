# 7qNode
前后端分离框架

## 使用说明

* ### 支持get请求接口自动转发
    访问如下地址
    ```
    http://127.0.0.1:3000/api/query?type=shunfeng&postid=972360168653
    ```
    根据规则会自动请求配置url对应服务器的接口.
    ``` javaScript
    var configs = {
        serverUrl: 'http://www.kuaidi100.com',
        rule: {
            local: 'api/',
            after: ''
        }
    }
    ```
    根据上面的配置,本地请求 本机IP+'/api/aa/bb/cc?aa=11',会将http://www.kuaidi100.com/api/aa/bb/cc?aa=11返回,如果不是JSON数据格式会返回一个500错误的接口.
    ``` javaScript
    {
    "status": 500,
    "message": "这不是一个json接口"
    }
    ```

* #### 支持resetful接口

	``` javaScript
	// 成功返回数据
	res.success('[]');

    // 结果
	{
    "status": 200,
    "message": "messge",
    "data": "[]"
    }

	//返回错误数据
	var err = new Error();
    err.message = '自定义错误';
	res.fail(err);

    // 错误结果
    {
    "status": 500,
    "message": "自定义错误"
    }

	// 404接口,自动输出
	{
    "status": 404,
    "message": "Not Found"
    }
	```

## 关于日志
移除logjs4,使用alinode和[pm2管理日志](https://wohugb.gitbooks.io/pm2/content/features/log.html)

## To Do
> * 热编译处理。
> * Gulp工程化。
> * 文档编写。
> * 中间件编写。
> * bower配置加入。
> * <del>路由设计(第一阶段)。</del>
> * <del>路由设计(第二阶段)。</del>
> * 路由设计。
> * pm2配置文件。
> * 支持cookies转发,加入cookies加密解密机制。
> * 加入一个实例网站。
