# weixin-app
### 项目配置
```
$ npm install @wepy/cli -g # 全局安装 WePY CLI 工具
$ 进入到项目目录
$ npm install # 安装项目依赖包
$ npm run dev # 监听并且编译项目
```
详见WePY 文档地址：https://wepyjs.github.io/wepy-docs/2.x/#/base/getstart
### 开发需求
展示NATS系统中测试单的详情页面
### 接口信息
1.  获取token接口

    + URL：```http://nats-sh.unisoc.com:30001/app/session```
    + 请求方式：```POST ```
    + 参数
        ```
        data: {
            name: "root",
            pwd: "123456780"
        },
        ```
    + 返回示例
        ```
        {
            "authority": [
                "root"
            ],
            "_id": "59e077e662778e4bf5165707",
            "__v": 0,
            "name": "root",
            "pwd": "123456780",
            "email": "Yue.Le@spreadtrum.com",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9vdC4xMjM0NTY3ODAiLCJpYXQiOjE1NjY0MzcxMzEsImV4cCI6MTU2NzMwMTEzMX0.ghfa4jUByHjKJfMzMLIPygu9-tEXGf0-5_8RoAstR2g" //访问权限
            }
        ```
2. 获取信息
    + URL：```http://nats-sh.unisoc.com:30001/app/task/taskID```
    + 请求方式: ```GET```
    + 参数
        ```
        {
            header: {
                'content-type': 'application/json',
                Authorization: 'Bearer '+ token
            }
        }
        ```
### 开发进度
![](NATS-WX.jpg)
+ 红框内为已经完成的部分。其他三部分由于相关JSON内容为空，PC端也未展示出来。
+ **展示内容与components文件夹里对应的组件：**
    + 基本信息 – basicInfo.wpy
    + 模块统计 -  mudulesTable.wpy
    + 类别统计 -  categoryTable.wpy
    + 工具版本 -  toolTable.wpy
    + Case列表 – caseTable.wpy

