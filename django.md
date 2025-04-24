## Django
### framework : 웹 애플리케이션을 빠르게 개발할 수 있도록 구조, 규칙, 라이브러리 등을 제공하는 패키지 도구 (ex- Express.js, Django, Spring 등)<br/>
-> 기본 요소를 제외한 핵심 기능에 선택과 집중 가능, 생산성 극대, 유지보수와 확장에 용이

### Django: python 기반의 웹 프레임 워크 

- 클라이언트와 서버 <br/>
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWYAAACNCAMAAACzDCDRAAAAt1BMVEX////P4vMAAADm5uaZmZnD1eX39/cSEhJ+fn6jo6PU5/jW6vvO4fLu7u7CwsJHRkWKl6O0xdQoLjJKUVjg4ODb7//Ozs7z8/Ozs7OsvMpjY2PX19eerLmFkZyntsS9vb06Ojq9zt46P0RncHmWpLBoaGgpKSl1dXWOjo5+iZRcZWxVXWRdXV1RUVF5eXmQkJAYGhxtd4BCSE0eISRMTEwxNjrg9f8wMDB0f4hYYWg7QUYVFxpqdH1++IaOAAALoElEQVR4nO2dC3eiPhPGwyCgCSiIKCiiCF5AbVG0q22//+d6J2i73d7+a+ut++Y5x3Lz7D78HCeZEJAQISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhob+SMb+0g/8LNeHSDn60JtWxSxpl/ENIqzysVjpk0kCqJULk8rCCe6vjcYkYMyi3Lu31BwtGY7cDE3c0JCpMmivoEagSUvlFZCi7/TnpQMntt9UxVNRLe/3B4kz7GLoqdBAtLnpEayLmPhne4GGt6maYmKsiaXxPgBkC5u12G3rtMm73nzGPau32EG5JH2quyM3fVIG50mw2O+p4TP7AfMv3yoR0SqNMFZi/JY751wRX5nJP49s9kvUIGdbIcIibw4474amkITB/SxxzE2562NiR/tztI+YhuDejPmnAsDfnLeG4N+vje8rGpb3+YFV4N82olHmHjrjlTo6hXCn3ZNxuVcq8QyeXbvii9+9hlo+qg/BovS96Vo9r+gyd9CYcV4dYhq9inhzX8+yLNg5QFTzleOrCIeFsfLUIKdeP6Fm3a1+0cYCqYFHpWGLmQZi/rHL9aJbR9JkwH88xPSXmF6FfruvHMy0wv5RRu208rQvMJ8Pc0gBqld0/LzAblROppO16BT1VYDZBzrUTad/70iYCM0azeiLJGWc8bnLTAvPpmkCAdm9f/AjMp2sCK78LTIH5TOWJwHwGCcwC87sSmAXmj/TPYKaKIh0+cndhzGiaHm76gpjpBkAxD7Z8WcyKDWnoH2z6zJj3gbBbgE/NOntpmRYHaBHj9IOgOT/mF6apBwqbbtjO5kvT0t70FWCmSmwqlC+6FtUDiK1N3fIUSQrxuOJRKejGCtU93cTD/D3XgJla3VhH06GJ3hUTPGuZhp6OxNG4FXKjAbq3wq6ye8/FMVtgTyFmuEjB1Jdwn64hnW4ZHQBjUarX12meKQrc55GeDbbQZZfHjP9deg8hM2FrQxis0Xs2SiCmOkSMgR+AvYWUxVB/wPWpDd57nM+JmT7ad3dxQtcLxgJQKISOub4LwAlzUKTci23mUPB0SKiUTh0nhPDymCUtvnMWQQgBY5u64wFzpsndYuv4MKAWSGniOAFIPniSrsWOY76b0s+K2YdlN3QUCKmk57EEFjPXDBf+dhCHgN/MIN5wzB5lD1FsxhgzF8dMI5jGEkJ1MH2AEgDludl7oGkXG3CbUd03U8Ss6TSErmni3ksnDWY9ahDpPEjpoLvHzKZmZJppN2Ue5NuYY8akrE2jKFoEl8csMX8K4PuACSwEa48ZzwHCZTCIWQLrRRcx5zo2j2kUPS4ujZnGnuPEoIPPqALBDrND/fo6tDTbdwbRHaMQcMwsNx3mJNeQNBLFYZFt4ZeN+aAXmBNGIxvukiVIeB67pJHruB46TOlePGlsNM+KcicB37LXks4xI1UJ6joD3lFahpYNPk8amF98a3MNuZnWU8uqb9j90gtgwwrMtoXEI96UMwWSMMiA+hn2PdKBZw2W73g+c795AbDFyi9eQ4QdNzukyjZT6GNC6WZDJWUJ63hj4n48u2AJ0/C9Rvvc0YwFiZbg6iaDLqXWlKK1JVNsnypTHzdysINp6KX83d26tnm3djwvZrqvP57KkH2ff/8q9tNdcfL0nstjfmuavjS99/wfpsXQ0Uf6Z4aOviaB+SMJzGfOzUdwfC2YDzqXs2JWPhhB9A4J9nNjtt43p/vvlSHXgJkWpdR7HhYHhMbZi+3pu6b198eIrgOzw4qhWlYsKGWMrzvbYgCXsuJFdwcZP8jXL435Md2ZfuULMe82i37d74PF+psP4MyY/Xo9xjokyuuRTpNkulZCW9tMEzNiNF5S6t07np2tTfRl1qfMsh+mrwdwz485yWwLraEvrE/sOE8pnoYJ3harkxRLq+7GMQcPy4CGdlczWbzONxfGbHtdXK+nXlCPnEdYJDo8eikkHkjsHovvRaRA14vBd7D0MrGS9R5fj3h9hFltyT2VGL0qnwpuuHwenEGabjExvOnKu80q32q4jd2i85npJ8wL2HjbBz0sfAWs/tCNA4iDAViLLcb0WqcPAR7wNiCFsO56JvjBYEsvilmnDsS6KTl0ce88Lplj1rFwqm8c8BRYxiwPlJg5+iBxIGEs2t45d+tXlws/wuz2ATpVmPUzg7jQ7ucGgVp/DjIxRrU2VEhHW9Vg1CLjbAhtQm5hqH12380zZpsPdIWh6TjSg8nyhDn2I6MWWBgbfsYvQyhB4DDcEWKg6Ll/x8d6L4qZSSyPWbgZaLB0HlNGF9jAsHTjTLvewJyGIFEvXQMgZp+ytVYf1SFlf4cZGmqL3zd1OyMjXNw0CdwgrRVpt/nNXEYDDxqZqyL41szo8Pux+u7Hpn8nDVaMvQXcF2KOKavjJ19cfwgXXTuOl5jw7DpwzAp+IvlolMOrPtUlMCsQ+UoyKDBv7AIzi+1NEubmlPmQBLq9wzxIqK6/bk4+xkxIB1zXvQUyhuLmBujwXQ1+zzbJew3ABDIrEejzCYmlUc912588IuYVZu6L1rsvMTtTM7eShR2zNDct5QmzJelvOtWXwBwAdejyvsAcQMgHE5muYQcpg9iJ7Dsn3EUzTXKd0fxvk8aIx+yw3R4OVeKuAJrFjcUyNPmC9CtPmNVSH0bqzYi/tfyx6T8xK6nNc0HX4ZijAcNw8Jg/AGplyDYz+UA6xyxJg4hhArl40oBYyZaLwRKcokeaao9rbYMtOObtFB0HkEbrenTHv3b6IF+sB3/ZBHLMHX6/u9Ej2PCp7WHxbI0eqCOeGqC6x6y6fB6zW+njzuYnjeDLfjNGc+Fr/ejwC2dKPojWGBYK2LwRZGwDi6kNAcdMPbCxbb9gE1hUgTQIqWLGoe5Ty+M7PTPEQotaARZcAb9eb/pKGNBdkeV1/dcl74eYc/yzGsqN2oqMyoZcm2B66HS0CalAU74B/AwKzC1wMTE3VagYTah8bPq5CvR4yac/+8I4pbofK2iQBlbxkqSg60kBnpPOZ0n43TeVy/nHNJ5HmZ+w0T+P7Q8+TUF509P/CHOv6DaUgfci5BoA5gPALf7MBzeDuUEafcQ8dtENAEa0PAMofWL6jzEN+sbX73N58vl8Tu+Y/qdH6ODTjvF/6AeP0B1Dh2BufsO0wPy3mEvfqcoF5qsYbz5IAvNHEpifMbfc0z10RWDeY26OM5BPZlpg5pgbk/zQ5/EcJoHZIBXt/ScKHU0dgRkxG+58h2NcPonGssC8y81yCSvqE3Y6BOYntp2JaAJf6KhP7jpfv/lols+G+YjPodMPew7dl/UTn0N3XJ0H83E9r07vWC0dVZ9cJz2iGsc1/Z0xWSEhISEhISEhISGhcwkaxtvCrip+MerIgoY6eX0VpHHC6yL/d1KbPbn4RRg+nilXeUEq47LBh0GaVxnOjepupn/htaFWG7tNQlpNbthoNb4zBec0Mn71Z1AtkoZMXBhqK0JqN7ivoq6gf7qh5K9rOBrCkA8rDWFMWtoKfvEJZE0+D3Le12QyqZ1pYOsQDWeEVGCXm2XudzYhqxruG5FiluzVSUZXRq1V5ea0npqVCRnf4KtM+NzSUo1MQL063y0o7rjZYS5lruuWgdRKGB2aeqW5GeYVmf+OWM/tzVbF/OkO4HnIHai4bgWMyRX+QmxrP2Nzh1lrz2bDMalVrhmzMenDigx/ca+3u6mQo2qvhmlj1p61h61J+9IO3xG/w0ae7zBXM8Jblt+Yr+7LR4pfzSQGVEs8ZpsdtcBcmc1cjBiekXvkKjG7GM78u1c0gdkY2d6SPscMqgzuFXLmN2N1oNOCEnqs7jAbRaPX7svqfEUmZ/jpqcPlajBXSSYbI4MY7WL2/BAjvFNTyfhbk5NPpR6AhgYbNchcotaKpDcu7hOaANyopPTJPUOX1BWG7Of6cYaFhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEjqv/AW9AP8KfuGYSAAAAAElFTkSuQmCC)

웹에서 어떠한 사이트를 방문할때 클라이언트(ex-chrome)는 방문할 사이트 서버에 서비스를 요청한다. 그러면 서버는 데이터베이스에서 해당 파일을 찾아 클라이언트의 요청에 응답한다. 부가적으로 크롬과 같은 웹 브라우저는 사용자가 전달받은 페이지를 볼 수 있도록 해석해서 제공해주게 된다. <br/>
-> django라는 프레임워크를 통해 서버를 구현할 수 있다..!!

### 가상환경과 전역환경
- 전역환경: 로컬 컴퓨터에서 사용중인 모든 라이브러리
- 가상환경: python 및 python 패키지들로부터 독립적인 가상의 작업 환경

- 가상환경이 필요한 이유: 작업 툴의 버전이 상이하거나 패키지의 충돌 가능성 문제를 예방


#### django로 서버를 구현해보자
```
1. 가상환경 만들기
$ python -m venv venv
2. 가상환경 on(activate)
$ source nenv/Scripts/activate
3. django 설치
$ pip install django
4. 패키지 목록 얼리고 파일로 저장
$ pip freeze > requirements.txt
**패키지 목록에 있는 툴 설치하기**
pip install -r requirements.txt
5. 프로젝트 생성
$ django-admin startproject firstpjt . 
6. 어플리케이션(기능) 생성
python manage.py startapp articles
7. 어플리케이션 등록
project > settings > installed_apps의 맨 윗줄에 어플리케이션 이름 작성
```

### 디자인패턴
- MVC/MTV : 애플리케이션을 구조화하는 대표적인 패턴으로 공통적인 문제를 해결하기 위한 해결책의 관행. (이런 패턴으로 만들면 에러를 방지하기 쉽다!)
- Model : 데이터베이스
- view/templates : 사이트에 보여질 시각적 요소
- controller/view : 시스템 동작들(요청/응답)

### 프로젝트 구조
1. setting.py - 프로젝트의 모든 설정 관리
2. urls.py - URL과 적절한 views를 연결시켜줌
3. init__.py - 해당 폴더를 패키지로 인식하도록 설정
4. asgi.py - 비동기식 웹 서버와의 연결 관련 설정
5. wsgi.py - 웹 서버와의 연결 관련 설정
6. manage.py - 사용가능한 명령어들 모음

### 앱 구조
1. admin.py - 관리자용 페이지 설정
2. models.py - 데이터베이스와 관련해 model을 정의
3. views.py - 서비스 요청에 대한 응답을 반환
4. apps.py - 앱에 대한 정보
5. tests.py - 프로젝트 테스트 코드를 작성하는 곳

#### 서버에서 직접 요청을 받아 응답해보자
```
1. URLs
URLs 파일에서 요청받은 서비스를 view로 연결해주는 코드를 작성
앱 패키지에서 view 모듈 가져오기 > 경로(서비스 주소, 적용할 함수) 작성해주기

2. view
views 파일에서 요청받은 서비스를 처리하는 함수를 작성
반드시 함수의 매개변수는 request인자로 받고, return render사용하기

3. template
해당되는 앱에 경로를 만들어주고 html형태의 template생성

4. 서버 실행
$ python manage.py runserver

**서버 종료**
$ ctrl+c
```

### DTL (django template language)
- 템플릿에서 조건, 반복, 변수 등의 프로그래밍적 기능을 제공하는 언어체계

1. Variable : render함수의 세번째로 전달받는 인자. 딕셔너리 데이터를 사용함. 딕셔너리의 key에 해당하는 부분을 변수로 사용 - {{ variale }}
2. Filters : 변수를 수정할때 사용, 두개 이상의 필터도 사용가능(chained) - {{variale|filter|filter}}
3. Tags : 반복 등의 논리적 기능 수행, 시작태그와 종료태그가 한쌍(예외O) - {% if %}{% endif %}
4. Comments : 주석 처리 - {# #}, {% comment %}{% endcomment %}

```
html은 사용자에게 보여지는 부분
사용자에게 특정한 조건에 따라 보여지는게 달라야할때

view는
로직에서 필요하다면 사용
근데 html에서도 써도 되고 view에서도 써도 된다면
view에서 사용하는 것을 권장

html에서 많이 처리할수록 로딩시간 지연됨 파이썬에서 처리할 수 있는 것은 처리하기. 파이썬이 훨씬 빠름

사용자가 관리자인 사람과 일반사용자의 페이지가 달라야한다면 if문을 사용해 html에서 처리하기
```

#### template 상속
- 공통요소를 여러번 반복하지 않기 위해 최상위 템플릿에 속성 작성<br/>
조건 ①공통요소 포함 ②하위템플릿을 재정의할 수 있는 공간<br/>
절차 ①base template 생성 ②block태그 작성 ③하위템플릿에 extend+block 작성

```
* extend tag : 자식이 부모를 확장한다는 것을 알림. 반드시 최상단에 작성.
* block tag : 하위에서 재정의할 수 있는 부분 작성(부모와 자식 모두 작성)
```

- base.html이 상위 폴더에 존재할 경우 : 프로젝트의 settings에서 'DIRS': [BASE_DIR / "templates"] 형태로 검색경로 변경해주기

#### HTML form (요청과 응답)
- action & method
    1. action : 데이터의 목적지를 설정(링크)
    2. method : 데이터를 어떤방식으로 보낼것인지(GET, POST)
- 'name' attribute : input되어 들어온 데이터에 붙이는 이름, 서버는 name을 통해서만 데이터에 접근할 수 있음




#### URL dispatcher
- variable routing : 중복이나 반복을 방지하기 위해 URL의 일부에 변수를 포함시키는 것, view에서 인자로 받아온 이름을 url에 그대로 삽입해주면 됨 - path('address/<__type:variable_name>/', views.함수) 

#### App URL Mapping
- 각각의 앱이 URL을 나눠 관리해 복잡도 개선
- include : (베이스url에)프로젝트에 있는 url.py가 내부 앱들의 url을 각각 참조할 수 있도록 맵핑<br/>
절차 ①프로젝트 url파일에 import include ②path에 views.함수 대신 include('url 경로')

#### URL 이름지정
- (어플url)에 이름을 지어줘서 정리하기<br/>
절차 ①각각의 url에 현재경로에 있는 views import하기 ②path 맨 뒤에 name=""지정<br/> **HTML문서에서는 __<a__ href="{% url 'name' %}">text</a__> 이런식으로 활용가능**

#### URL 이름공간
- 만약에 두 어플에 있는 url이름이 겹친다면?
- app_name 속성 지정해주기<br/>
절차 ①urls.py 파일에서 urlpatterns 리스트 위에 app_name=""지정 ②url태그 사용된곳은 {% url 'index' %} --> {% url 'articles:index' %} 형태로 바꿔주기

### static files(정적 파일) : 서버 측에서 변경되지 않고 고정적으로 제공되는 파일(ex-image, JS, CSS)

