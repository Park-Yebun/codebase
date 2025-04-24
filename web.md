    ## web
- 사용자들이 정보를 검색하고 **상호작용**하는 기술
- web page < web site : 웹 페이지는 웹 사이트를 구성하는 하나의 요소
- web page의 구성요소
    1. HTML
    2. CSS
    3. javascript

#### HTML(HyperText Markup Language) : 웹 페이지의 의미와 구조를 정의하는(명시하는) 언어
    - HTML의 구조
     * <!DOCTYPE html> : 현재 작업중인 문서가 html형태로 쓰여졌다.
     * <html></html>: 전체 페이지의 시작과 끝 표시
     * <title></title> : 브라우저의 탭 에 표시할 텍스트
     * <head></head>  <body></body> : 사용자에게 보여지지 않는 기타 설정들, 사용자에게 제공되는 콘텐츠들

    - HTML의 요소
     * element = opening tag - content - closing tag     **닫는 태그가 없는 태그도 존재함** **태그들 간에는 상하관계가 존재한다**

    - HTML 속성
     * 태그에 이름을 부여하거나 추가적인 기능, 내용을 담고자 할때 사용
     * 태그 뒤에 공백을 주고 class를 붙여 사용, 속성값은 따옴표로 감쌈


#### CSS(Cascading Style Sheet) : 디자인과 레이아웃을 구성하는 언어
    - CSS의 요소
     * 선택자 {속성 : 값}
    
    - CSS 적용방법
     * 인라인(inline) : html 태그 안에 속성을 바로 부여하는 방법
     * 내부스타일(internal) : 스타일 태그를 따로 작성해서 그 안에 속성을 부여하는 방법
     * 외부스타일(external) : css 전용파일을 만들어 링크로 불러오는 방법

- CSS 선택자
    - 기본 선택자
        - 전체 선택자 : * {}
        - 요소 선택자 : tag명 {}
        - 클래스 선택자 : .class명 {} / tag명[class=""] {}    **클래스명은 띄어쓰기 불가, 띄어쓰기 할 경우 클래스 두개로 인식**
        - 아이디 선택자 : #id명 {} / tag명[id=""] {}
        - 속성 선택자 : [속성이름="속성값"] {}

    - 결합 선택자
        - 자손 결합자 : 태그 or 클래스명 자손명 {}
        - 자식 결합자 : 태그 or 클래스명 > 자손명 {} / 한단계 아래 자식들만 선택

- 우선순위
    - 기본적으로 계단식 구조 : 가장 마지막에 부여된 속성이 출력됨
    - importance > inline > 선택자(id-class-요소) > 소스 코드 순서

- CSS 상속
    - css의 기본적인 특성으로 상위 태그의 속성을 하위 태그가 상속하여 재사용성을 높인다.
    - 상속가능한 속성 : text관련, opacity, visibility
    - 상속 불가능한 속성 : box model관련, position관련



##### html문서에서의 주석처리
- head : /* text */
- body : <!--text >
