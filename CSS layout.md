## CSS box model
* html의 모든 요소는 사각형의 박스로 이루어져 있다. 
* 동그라미형태의 요소를 만들기 위해서는 박스의 모서리를 깎는 작업이 필요(border-radius: 해당 박스의 상하좌우를 **만큼 깎아라)

### css box model 구성요소
1. 내부: content, padding, border
2. 외부: magin(박스 간의 영역), auto값을 넣으면 마진을 어디에 할당할 것인가를 결정함 왼쪽에 오토를 주면 왼쪽에 모든 마진을 몰아줌, 또한 마진과 패딩값은 한번에 1개를 할당할수도, 2개, 3개, 4개를 할당할 수도 있음

### box-sizing
* 박스의 width, height는 cotent의 크기를 결정한다.
* box-sizing 1) border box -- 박스크기에 맞춰 내부 구성요소 너비 결정<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2) content-box --  기존 콘텐트 크기에 맞춰 너비 결정

### box type (display type)
1. block: 한줄 공간을 모두 차지, 아래로 쌓임 ex)h, p, div, li 등
2. inline: 행으로 나뉘지 않고 본인의 컨텐츠만큼만 공간 차지, ** width와 height값 사용X ** 오른쪽으로 쌓임, 수평방향으로는 이동 가능, 상하로는 밀어내기 불가능 ex)a, image, span 등 <br>
  블럭요소는 마진으로 가운데 정렬, 인라인요소는 text-align으로 가운데 정렬
3. inline block: width와 height값 지정 가능한 인라인요소의 형태
4. none: 화면에 표시되지 않고 공간차지도 하지 않음/공간은 사용하되 눈에 보이지 않게는 visibility 사용

### position
* 요소를 normal flow에서 벗어나서 원하는 위치에 놓기(다른요소위에 올리거나 특정위치에 고정 등)

1. static: 기본값, normal flow
2. relative: 상대적 위치, 원래 자기자리를 기준으로 이동
3. absolute: 절대적 위치, 가까운 relative부모를 기준으로 이동하고 선언되는 순간 기존의 자신의 위치는 버림, 전체레이아웃에 영향
4. fixed: 화면영역을 기준으로 이동, 선언되는 순간 기존위치 버림
5. sticky: 임계점 위치에 도달한 순간부터 다음 sticky가 나올때까지 fixed가 됨

6. (+) Z-index: z축(높이값)을 이용해 더 높은 값의 요소가 작은 값의 요소를 덮음

### Flexbox : 요소를 행과 열 형태로 배치하는 1차원 레이아웃 방식
* position = 배열, flexbox = 공간배열과 정렬
* 주축과 교차축: flex item이 배열되는 기준이 되는 축(주축이 기본값)

* flexbox의 구조<br>
1. flex container : display이 속성이 flex인 부모요소. 
2. flex item : flex container의 1차 자식요소.


**flexbox 속성 정리**
1. flex-direction
2. flex-wrap
3. justify-content
4. align-content
5. align-items
6. align-self
