# serverless token

 [path](https://service-gdl2ihc7-1252957949.ap-shanghai.apigateway.myqcloud.com/release/token "") 

##  生成
  post /create
  data {}

```bash
curl 'https://service-gdl2ihc7-1252957949.ap-shanghai.apigateway.myqcloud.com/release/token/create'  --data '{"user":"admin","password":"123456"}'
```
  
```json
        {
          "errorCode": 0,
          "errorMessage": "",
          "ok": true,
          "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOiJhZG1pbiIsInBhc3N3b3JkIjoiMTIzNDU2In0sImFsZyI6IkhTMjU2IiwidHlwIjoiSldUIiwiYXVkIjoiYWFhYSIsInN1YiI6ImNjY2MiLCJleHAiOjE1NzM2MjczNDMsImlhdCI6MTU3MzU0MDk0M30.iVreAdKLs_I0f1ad7Spr2Ykay7PnE5dUgwIuVp06lYw"
        }
```
                
##  解析

get /parse/?token=xxxx
  
```bash

  curl "https://service-gdl2ihc7-1252957949.ap-shanghai.apigateway.myqcloud.com/release/token/parse?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOiJhZG1pbiIsInBhc3N3b3JkIjoiMTIzNDU2In0sImFsZyI6IkhTMjU2IiwidHlwIjoiSldUIiwiYXVkIjoiYWFhYSIsInN1YiI6ImNjY2MiLCJleHAiOjE1NzM2Mjk0MDIsImlhdCI6MTU3MzU0MzAwMn0.gSBR8AZImIWu9MoAJ4_Drecbcx-vRgj2AiUtvniyHzc"

```
成功
```json
{
  "errorCode": 0,
  "errorMessage": "",
  "ok": true,
  "data": {
    "data": {
      "user": "admin",
      "password": "123456"
    },
    "alg": "HS256",
    "typ": "JWT",
    "aud": "aaaa",
    "sub": "cccc",
    "exp": 1573627211,
    "iat": 1573540811
  }
}

```
失败
```json
{
  "errorCode": 0,
  "errorMessage": {},
  "ok": false,
  "data": {}
}

```

# 配置文件
```yaml
    TOKEN_KEY: "The signing/public key is part of the JSON Web Token which the application client exchanges with the server. Each app has a unique key which allows it to identify authenticated client requests. You must keep track of your key for when you are ready to start creating JWTs."
     TOKEN_LIFE: "86400"  #有效期默认24h
     AUD: "aaaa"
     SUB: "cccc"
```
