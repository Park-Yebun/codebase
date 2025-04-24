# intellij DB 연동

Created by: 박예분
Created time: 2024년 7월 4일 오후 3:42

### mysql 비밀번호 설정 (for Mac)

```c
sudo /usr/local/mysql/bin/mysql -u root
ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY '바꿀 비밀번호';
FLUSH PRIVILEGES;
exit;
```

### 인텔리제이 mysql workbench와 인텔리제이 자체 DB 연동은 다름!!!

![Untitled1](https://github.com/Park-Yebun/TIL/assets/139411465/20c3807e-f649-4023-8e10-d5b3c7f53c9b)

127.0.0.1 이 workbench DB

### 워크벤치 연동을 위해서는 jdbc 설정 파일(jar파일)을 인텔리제이에 읽혀줘야함

![Untitled2](https://github.com/Park-Yebun/TIL/assets/139411465/f2b52947-4230-481e-bc34-b0374ec75b9c)

워크벤치에 호환되는 설정파일 다운로드 후 설정에서 읽혀주기

### 인텔리제이에서 run 활성화 안될경우

프로젝트와 gradle java 버전 같은지 확인 후 gradle 새로고침 해보기

![Untitled3](https://github.com/Park-Yebun/TIL/assets/139411465/62c2944c-201e-4e35-ae91-73098dd2fe1a)

![Untitled4](https://github.com/Park-Yebun/TIL/assets/139411465/ce2f2414-a471-49b0-a830-fe42320652fe)

### [42000][1049] Unknown database 'DB 이름'.

워크벤치 or 인텔리제이 DB schema 에서 create database ‘DB 이름’; 쿼리 실행하기

### HikariPool-1 - Exception during pool initialization.

해당 에러는 데이터베이스와의 "통신 링크 실패” 라는 큰 개념의 에러이므로

정확한 원인을 알려면 에러코드 자세히 확인할 것 !
