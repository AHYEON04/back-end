## 회원가입

### Post /user/register

### Request

```
{
    "name": "name",
    "userID": "userId",
    "password": "password"
}
```

### Response

```
200
{
    "message":"성공"
}
```

아이디 중복

```
400
{
    "message":"중복된 아이디"
}
```

서버 에러

```
500
{
    "message": "서버 에러"
}
```

```




