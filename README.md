# 7qNode
前后端分离框架

## 使用说明

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
> * 路由设计。
> * pm2配置文件。
