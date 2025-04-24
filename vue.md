## Vue
- Front-end Development : UI와 UX를 만들고 디자인하는 것 <-> Back-end Development
- Client-side frameworks : 프론트엔드(=클라이언트 측에서) 개발을 도와주는 JavaScript 기반의 프레임워크들 ex) Angular, React, vue
    - 역할과 목적 : 동적인 대화형 웹 애플리케이션을 쉽게 구축할 수 있게 한다.
- Single Page Application : 페이지 한 개로 구성된 웹 애플리케이션
    - 동작 방식 : 초기에 서버로부터 필요한 모든 정적 HTML을 한번에 가져옴 -> 이후 요청이 오면 프레임워크는 각 HTML요소에 적절한 동적 javascript코드를 실행해 DOM을 업데이트함<br/>
    => 이러한 방식을 CSR(Client-side Rendering)방식이라고 함


#### CSR의 장점과 단점
1. 장점
    - 매번 모든 데이터를 새로고침할 필요 없어 서버로 전송되는 데이터의 양을 최소화할 수 있다.
    - 프론트엔드와 백엔드의 역할이 구분되어 있어 대규모 웹 어플리케이션을 쉽게 관리할 수 있다.

2. 단점
    - 초기 페이지 구동 시에 속도가 느리다.
    - SEO(검색 엔진 최적화)에 적절하지 않다.

### Vue의 2가지 핵심 기능
1. 선언적 렌더링 (Declarative Rendering)
    - HTML을 확장하는 구문을 사용해 HTML이 javascript데이터를 기반으로 어떻게 보이는지 설명할 수 있다.
2. 반응형 (Reactivity)
    - 변경사항을 자동 추적하여 DOM을 효율적으로 업데이트한다.


### Syntax
1. computed VS method
- computed: 의존된 반응형 데이터를 자동으로 추적하는 속성(함수)
    - 의존하는 데이터가 변경될 때만 재평가
    - 반환되는 값은 computed ref
- computed가 하는 역할을 method도 거의 유사하게 할 수 있지만 computed속성은 계산된 값이 캐시데이터 형태로 저장되면서 여러곳에서 사용될 때 중복 계산을 방지함
- 반면 method는 호출될 때마다 데이터를 렌더링

2. conditional Rendering
- v-if: 표현식 값의 true/false값을 기반으로 요소를 조건부로 렌더링 (v-else-if, v-else와 같이 사용), 조건문의 결과값이 false라면 요소가 아예 렌더링 되지 않음
- v-show: 조건문을 가진다는 점은 v-if와 비슷하나 결과값에 따라 요소의 가시성을 전환한다는 점이 차이점

3. List Rendering
- v-for: 요소 또는 템플릿 블록을 여러번 렌더링 하는 속성 
- for with key: key는 반드시 고유하며 식별 가능한 값을 쓸 것. (index는 쓸 수 없음, 계속해서 업데이트되기 때문에 고유성에 어긋남)
- *주의사항* : 동일한 요소에서 v-if와 v-for을 함께 쓰지 않는다. if가 먼저 실행되어서 해당 요소를 못 찾을 수 있음

4. watchers
- 반응형 데이터를 감시하고, 감시하는 데이터가 변경되면 콜백 함수를 호출
- computed VS watch: 모두 데이터의 변화를 감지하고 처리한다는 공통점이 있으나, computed는 미리 계산된 값을 반환하고 watch는 변화를 감지하면 특정 작업을 수행한다는 점에 차이가 있음.
- *주의사항* : 모두 감시(의존)하는 데이터의 원본을 직접 변경하지 않는다. 변경하면 호출의 무한 굴레에 빠지게 됨
- computed의 반환값도 변경하지 말 것. 직접 변경한다면 computed 함수의 의미가 없음

5. Lifecycle Hooks
- Vue 인스턴스의 생애주기 동안 특정 시점에 실행되는 함수
    - onMounted: Vue 컴포넌트 인스턴스가 초기 렌더링 되면 작업 수행
    - onUpdated: 반응형 데이터의 변경으로 인해 DOM이 업데이트 되면 작업 수행


### SFC (Single-File Components)
- component: 재사용이 가능한 코드의 블록, UI를 독립적인 일부분으로 나눈 형태
- SFC는 HTML, CSS, JS를 하나의 파일로 묶어낸 파일 형식, SFC를 통해 컴포넌트를 생성하고 관리할 수 있음

1. SFC 문법 
- <template>, <script>, <style>의 구성요소를 가짐 (위치하는 순서는 상관없음)
- <template>는 최상의 블록 하나만을 가질 수 있음
- <script setup>의 구조로 setup()함수로 사용되어 따로 선언해줄 필요 없음, return값도 선언 필요없음
- <style scoped>의 구조를 가지며, scoped가 지정되면 css가 현재 컴포넌트에만 적용됨 (*단, 부모 컴포넌트에 적용한 스타일은 최상위 요소의 자식에게도 적용된다)

2. vite
- SFC로 서버를 실행하기 위해서는 인터프리터가 필요하다. ex) vite
```
* vite 프로젝트 명령어 모음
npm create vue@lastest --vite 프로젝트 생성
cd vue-project --생성된 프로젝트로 경로 이동
npm install --프로젝트 디렉토리 설치
npm run dev --서버 실행

```

- vite 프로젝트 구조
    1. node_modules: node.js 프로젝트에서 사용되는 외부 패키지들이 저장되는 디렉토리, 프로젝트 실행에 필요한 라이브러리 및 패키지 데이터를 포함함
    2. src/components: Vue 컴포넌트들을 작성하는 곳
    3. src/App.vue: Root Component, 최상위 컴포넌트로 모든 하위 컴포넌트를 포함함
    4. src/main.js: 필요한 라이브러리를 import하고 전역 설정을 수행함
    5. index.html: Vue앱의 기본 HTML파일, 사용자에게 직접적으로 노출되는 파일


3. 모듈과 번들러
- 모듈(Module): 프로그램을 구성하는 독립적인 코드 블록 파일
- 모듈의 문제점: 개발하는 어플리케이션이 복잡해지면서 모듈 간의 의존성이 심화되고 유지보수가 어려워짐
- 번들러(Bundler): 여러 모듈과 파일을 하나의 번들로 묶어 모듈의 의존성 관리 및 코드 최적화에 사용되는 도구, vite는 Rollup이라는 번들러를 사용


4. Virtual DOM
- 가상의 DOM을 생성해 메모리에 저장하고 실제 DOM과 동기화하는 프로그래밍 개념
- 장점 및 특징
    - 실제 DOM의 조작을 최소화, 변경된 부분만 업데이트하여 성능 향상(효율성)
    - 데이터의 변경을 자동으로 감지하여 UI를 업데이트(반응성)
    - 개발자는 실제 DOM조작을 Vue에게 맡기고 컴포넌트와 템플릿을 이용해 추상화된 프로그래밍 방식을 택할 수 있음(추상화)
- 주의사항
    - 실제 DOM에 접근하지 말 것, Vue의 ref, Lifecycle Hooks 함수를 이용해 간접적으로 조작할 것

5. Passing Props & Component Events
- props: 부모 컴포넌트로 부터 자식 데이터를 전달하는데 사용되는 속성
    - 모든 props는 자식 속성과 부모 속성 사이에 **하향식 단방향 바인딩**을 형성한다.
    - 부모 속성이 업데이트 되면 이를 내려받는 자식 컴포넌트는 자연스럽게 갱신(임의로 props를 변경하는 것은 불가능)
```
* prop 이름="prop값"  --부모 컴포넌트의 자식 컴포넌트 바인딩에 추가해주기
* defineProps({prop 이름: 타입}]  --자식 컴포넌트에서 내려받은 prop을 정의해주기
* {{ prop이름 }}  -- 자식 템플릿에서 반응형 변수처럼 사용

--> 같은 방식으로 내려받은 데이터를 하위 자식 컴포넌트에 한번 더 내려보낼 수 있음
** prop이름 작성 시에 camelCase와 kebab-case를 구분해줄 것
```
- $emit: 자식 컴포넌트가 이벤트를 발생시켜 부모 컴포넌트로 데이터를 전달하는 메서드
```
* @action="$emit('이벤트 이름')"  --자식 컴포넌트는 사용자 정의 이벤트를 발신
* @이벤트 이름="함수이름"  --부모 컴포넌트는 v-on(@)을 이용해 이벤트를 수신, 함수는 수신 후 처리할 동작을 호출
** const 변수이름 = defineEmits(['이벤트 이름'])  --자식 컴포넌트의 script에서는 $emit 메서드를 사용해야할때는 이벤트를 쓸 수 있게 따로 선언해주기/템플릿에서도 $emit 메서드 없이 사용가능!!

```

### Router
1. Routing
2. Vue Routor
3. Navigation Guard


### State Management(상태/데이터 관리)
- 컴포넌트 구조를 보다 단순화시켰을 경우<br/>
데이터의 흐름에 따라 상태(state)-뷰(view)-기능(actions)의 구조를 가진다.
- 여기서 상태(데이터)는 1.여러 뷰가 동일한 상태에 종속되거나 2.서로 다른 뷰의 기능이 동일한 상태를 변경시켜야하는 경우 복잡해지고 관리가 어려워지게 된다.<br/>

==> 따라서 이러한 문제방지를 위해 상태관리 tool이 필요하다.

#### Pinia(Vue의 공식 상태 관리 라이브러리)
1. 구성요소
    - store: 각 컴포넌트의 공유 상태가 저장된 중앙 저장소, 모든 상태, 기능을 작성가능
        - state: 반응형 상태(ref 데이터)
        - getters: 계산된 값 (computed 데이터)
        - actions: 메서드 (functions)
        - plugin: 상태 관리에 필요한 추가적인 기능을 제공하거나 확장하는 모듈

