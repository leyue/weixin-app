# weixin-app
### ��Ŀ����
```
$ npm install @wepy/cli -g # ȫ�ְ�װ WePY CLI ����
$ ���뵽��ĿĿ¼
$ npm install # ��װ��Ŀ������
$ npm run dev # �������ұ�����Ŀ
```
���WePY �ĵ���ַ��https://wepyjs.github.io/wepy-docs/2.x/#/base/getstart
### ��������
չʾNATSϵͳ�в��Ե�������ҳ��
### �ӿ���Ϣ
1.  ��ȡtoken�ӿ�

    + URL��```http://nats-sh.unisoc.com:30001/app/session```
    + ����ʽ��```POST ```
    + ����
        ```
        data: {
            name: "root",
            pwd: "123456780"
        },
        ```
    + ����ʾ��
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
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9vdC4xMjM0NTY3ODAiLCJpYXQiOjE1NjY0MzcxMzEsImV4cCI6MTU2NzMwMTEzMX0.ghfa4jUByHjKJfMzMLIPygu9-tEXGf0-5_8RoAstR2g" //����Ȩ��
            }
        ```
2. ��ȡ��Ϣ
    + URL��```http://nats-sh.unisoc.com:30001/app/task/taskID```
    + ����ʽ: ```GET```
    + ����
        ```
        {
            header: {
                'content-type': 'application/json',
                Authorization: 'Bearer '+ token
            }
        }
        ```
### ��������
![](NATS-WX.jpg)
+ �����Ϊ�Ѿ���ɵĲ��֡������������������JSON����Ϊ�գ�PC��Ҳδչʾ������
+ **չʾ������components�ļ������Ӧ�������**
    + ������Ϣ �C basicInfo.wpy
    + ģ��ͳ�� -  mudulesTable.wpy
    + ���ͳ�� -  categoryTable.wpy
    + ���߰汾 -  toolTable.wpy
    + Case�б� �C caseTable.wpy

