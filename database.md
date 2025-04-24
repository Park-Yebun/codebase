## SQL
* 데이터베이스란?<br/>
**저장이나 처리에 효율적인 형태로 변환된 정보를 체계적으로 모아놓은 것**

- 데이터의 양이 많아질수록 데이터를 저장하여 잘 관리하는 기술이 중요함

- 데이터 저장 방식의 종류 : file, spreadsheet,,,<br/>
-> 모두 데이터를 체계적으로 관리하기 어렵거나 데이터 누락 등의 손상과 같은 한계점을 지님<br/>
-> **관계형 데이터베이스(relational database)** 를 통해 데이터를 효율적으로 저장하고 조작할 수 있음

### 관계형 데이터베이스
- 데이터를 테이블 형태로 저장하여 구조적 관리, 또한 데이터와 데이터 간 연결고리(데이터 포인터)를 가지고 다른 데이터에 접근할 수 있도록 설계함

### RDBMS
**관계형 데이터베이스를 관리하는 프로그램**<br/>
**SQLite, MySQL, PostgreSQL Oracle Database,,,**

### SQL
-  SQL statement / SQL문(=쿼리문:데이터 베이스에 요청하는 문법)

|유형|역할|SQL 키워드|
|-----|---|---|
|DDL<br/>(data definition language)|데이터의 기본 구조 및 형식 변경|CREATE<br/>DROP<br/> ALTER|
|DQL<br/>(data query language)|데이터 검색|SELECT|
|DML<br/>(data manipulation language)|데이터 조작<br/>(추가, 수정, 삭제)|INSERT<br/>UPDATE<br/>DELETE|
|DCL<br/>(data control language)|데이터 및 작업에 대한 사용자 권한 제어|COMMIT<br/>ROLLBACK<br/>GRANT<br/>REVOKE|


1. DDL
```
* 테이블 생성
CREATE TABLE 테이블 이름(
    필드 이름 V 필드 타입 V 제약 조건 V (필드 속성)
);
```
- SQLite의 필드 데이터 타입: NULL, INTEGER, REAL, TEXT, BLOB
- 제약조건은 데이터의 무결성과 일관성을 보장하는 기준이 됨 (primary key, not null, foreign key등)
- AUTOINCREMENT: 필드의 자동증가를 나타내는 필드 속성, 작성된 새로운 레코드에 대해 이전 최대 값보다 큰 값을 할당함

```
* 필드 추가
ALTER TABLE
    테이블 이름
ADD COLUMN
    필드 이름 V 필드 타입 V 제약 조건 V (필드 속성);

* 필드 이름 변경
ALTER TABLE
    테이블 이름
RENAME COLUMN
    기존 이름 TO 새로운 이름;

* 필드 삭제
ALTER TABLE
    테이블 이름
DROP COLUMN
    필드 이름;

* 테이블 이름 변경
ALTER TABLE
    테이블 이름
RENAME TO 새로운 이름;
```
- 타입 선호도란?
    - 컬럼에 데이터타입을 명시적으로 지정하지 않거나 지원되지 않을경우 sqlite가 자동으로 데이터타입을 추론하여 지정하는 것
    - 목적 : 유연한 데이터 타입 지원, 데이터 자동 처리, 호환성 유지
    <img src="sql type affinity.png">
- .schema 테이블 이름 : 테이블 구조를 조회하는 명령어
- .tables : 데이터베이스에 있는 모든 테이블을 조회하는 명령어

```
* 테이블 삭제
DROP TABLE 테이블 이름;
```

2. DQL
```
* 테이블에서 데이터를 조회하는 구문

SELECT
    필드 이름
FROM
    테이블 이름;
```
- 모든 필드를 조회할 시에는 애스터리스크(*)사용
- 다중 필드를 조회할 시에는 ,로 필드 구분
- 필드의 이름을 임의로 변경해 조회할 때는 ```필드이름 AS '이름'```의 형태로 작성
- 필드 타입이 정수인 경우 연산자 활용 가능 ex) ```Milliseconds / 60000```
```
* 레코드 정렬하는 구문
SELECT
    필드 이름
FROM
    테이블 이름
ORDER BY
    기준 필드 이름 V ASC|DESC;
```
- ASC(오름차순, 기본값), DESC(내림차순)
- 두개 이상의 기준 필드가 있을 경우 첫번째 기준대로 우선 정렬된 후 두번째 기준에서는 첫번째 범위의 안에서 재정렬됨
- NULL값은 0보다 작은 수로 분류됨


#### filtering data
```
* 중복된 레코드를 제거하는 구문
SELECT DISTINCT
    필드 이름
FROM
    테이블 이름;
```
```
* 특정 조건을 지정하는 구문(조건문)
SELECT
    필드 이름
FROM
    테이블 이름
WHERE
    조건;
```
- 모든 변수 값은 연산자를 사용, 다만 NULL값은 등호 대신 IS 사용
- AND, OR과 같은 논리 연산자는 줄바꿈된 조건식의 맨 앞에 위치시키는 것을 권장
- 부등호는 BETWEEN num AND num과 같이 대체해 쓸 수 있음
- IN/NOT IN을 쓸때는 리스트를 튜플 형태로 묶어주기
- LIKE는 특정문자열을 포함한 데이터를 조회할 때 사용 ('%'- 문자열의 자리수에 상관없이 시작하거나 끝나는 문자열 검색, '_'-문자열의 자리수만큼 언더바를 사용해서 검색), %와 _을 혼용하여 사용할 수도 있음

```
* 레코드 수를 제한하여 조회하는 구문
SELECT
    필드 이름
FROM
    테이블 이름
LIMIT
    상쇄할 데이터 수 V 보여줄 데이터 수;
```
- 하나 또는 두개의 인자를 사용할 수 있음
- 인자는 반드시 0 또는 양의 정수

#### grouping data
```
SELECT
    필드 이름
FROM
    테이블 이름
GROUP BY
    필드 목록;
```
- 집계함수(aggregation functions)를 함께 사용하여 레코드의 요약본을 생성하는 절
- 집계함수는 SELECT절에 위치
- 세부 조건을 지정할 때는 WHERE가 아니라 HAVING구문을 사용할 것

![SQL문 실행순서](https://cdn.sisense.com/wp-content/uploads/image-1-order-blog.png)

3. DML
```
* 테이블 레코드 삽입
INSERT INTO
    테이블 이름(필드 목록)
VALUES
    (밸류 목록);
```
- VALUES 절에는 연속한 밸류 목록을 콤마로 구분하여 레코드를 한번에 삽입할 수 있음
- 시간을 기록하는 특수한 레코드의 경우 날짜/시간과 관련된 함수(DATE(), TIME()등)를 밸류값 대신 작성할 수 있음

```
* 테이블 레코드 수정
UPDATE
    테이블 이름
SET
    필드 이름 = '수정값'
WHERE
    레코드를 특정하는 조건;
```
```
* 테이블 레코드 삭제
DELETE FROM
    테이블 이름
WHERE
    레코드를 특정하는 조건;
```

#### multi table query - join<br/>
여러 테이블 간의 논리적 연결 - 관계<br/>

- inner join : 두 테이블에서 겹치는(값이 일치하는) 레코드만 결합하여 결과를 반환
```
SELECT
    필드 이름
FROM
    메인 테이블 이름(추가 데이터가 붙여질 테이블)
INNER JOIN 보조 테이블 이름
    ON 두 테이블에서 일치하는 조건;
(WHERE)
    결합한 데이터에서 특정할 레코드 조건
```
- left join : 오른쪽 테이블의 일치하는 레코드와 함께 왼쪽 테이블의 모든 레코드 반환
```
* inner join에서 미처 일치되지 못한 레코드들도 함께 NULL로 반환

SELECT
    필드 이름
FROM
    왼쪽 테이블 이름
LEFT JOIN 오른쪽 테이블 이름
    ON 두 테이블을 일치시키는 조건;
(WHERE)
    결합한 데이터에서 특정할 레코드 조건
```

4. DCL

### 다대일 관계
**N:1 or 1:N**<br/>
**한 테이블에 있는 한 개의 레코드가 다른 테이블의 다수의 레코드와 연결되어있는 관계**<br/> ex) user테이블과 comment테이블의 관계


### 다대다 관계
**N:M or M:N**<br/>
**한 테이블의 다수의 레코드가 다른 테이블의 다수의 레코드와 연결되어있는  관계**<br/> ex)인스타그램 좋아요 기능-모든 유저 테이블은 모든 좋아요 테이블과 연결되어 있음, 모든 유저가 모든 게시글에 좋아요를 누를 수 있음 




