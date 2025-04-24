# Oauth 와 jwt

Created by: 박예분
Created time: 2024년 6월 7일 오후 4:53
Tags: 인가, 인증, 프로토콜

## Oauth

### Oauth의 정의

Open Authorization의 약자

다양한 플랫폼 환경에서 사용자 인증을 통해 유저 리소스 접근 권한을 위임받는 것을 의미함

| Authentication(인증) | 해당 사용자가 자신이 주장하는 사람인지 확인하는 것으로, 식별(identify)과 연관된 개념 |
| --- | --- |
| Athorization(인가) | 해당 사용자에게 리소스에 접근할 수 있는 권한을 부여하는 것으로, 접근(access)과 연관된 개념 |

### Oauth2.0 의 주요 용어

- 사용자 - Resource Owner
- 접근을 요청하는 서비스(Our service) - Client
- 인가를 허용하는 주체 - Server

❗**OAuth 1.0과 달라진 점**

1. 기능의 단순화, 기능과 규모의 확장성 등을 지원하기 위해 만들어짐
2. https를 통해 암호화를 하여 과정을 단수화
3. 다양한 자격 증명(인증) 방식이 제공(Authorization Code, Implicit, Client Credentials, Resource Owner Credentials)
4. api서버에서 인증서버와 리소스 서버가 분리

### Oauth의 동작 흐름

![Oauth Flow.png](https://github.com/user-attachments/assets/bd55ca38-1779-4a05-889c-0b1d44ef0650)

1. 유저가 클라이언트에 로그인 요청
2. 클라이언트(이 경우 브라우저)는 플랫폼의 서버에 접근을 위한 엑세스 토큰을 요청
3. 플랫폼 서버에서 해당 사용자를 찾아 로그인 인가 동의 요청(로그인 인증)
4. 사용자의 인가 동의
5. 인가를 마친 플랫폼 서버에서 액세스 토큰 반환
6. 클라이언트 단에서 액세스 토큰을 저장
7. 클라이언트에서 추가로 사용자 정보에 대한 리소스 요청
8. 플랫폼서버에서 리소스 반환
9. 클라이언트는 유저에게 리소스 제공

## JWT
