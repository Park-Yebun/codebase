# React hooks

Created by: 박예분
Created time: 2024년 5월 28일 오전 9:00

- 상태관리 함수
    - vue.js의 생명주기 훅과 같은 맥락
    - React 16.8 부터 적용되었으며 기존의 class에 대한 대안책으로 나옴
        - 복잡성과 길이 : **클래스형 컴포넌트**는 constructor, this, binding과 같은 여러 규칙을 따라야 하며, 이로 인해 코드가 복잡하고 길어질 수 있습니다. 클래스 기반의 구조는 체계적인 코드관리에 용이하지만, UI개발 특성상 때때로 불필요하게 복잡하게 느껴질 수 있습니다.
        - 로직 재사용의 어려움 : 클래스형 컴포넌트에서는 High-Order Components(HOC)를 통해 재사용성을 얻을 수 있지만, 특정 DOM 처리나 API 호출, 상태 관리 같은 로직의 재사용은 제한적입니다. 동일한 로직을 여러 life cycle method에 중복해서 넣어야 하는 상황이 자주 발생합니다.
    - class 안에서 동작하지 않는 대신, 함수형 컴포넌트에서 class 없이 React를 사용할 수 있게 해줌

1. useState

<aside>   
    
- this값을 가지지 못하는 기존 함수 컴포넌트에서도 적용가능한 상태관리 함수
  
- 인자로 초기 state값을 하나 받음(초기값은 첫번째 렌더링에만 딱 한번 사용됨)
  
- 배열 구조 분해 방식을 통해 변수가 선언되어 있음(’[ ]’)
  

</asid>
   
2. useEffect

<aside>   
    
- React 컴포넌트 안에서 데이터를 가져오거나 구독하고, DOM을 직접 조작하는 작업등의 side effects를 함수 컴포넌트 안에서 실행할 수 있게 해줌   
    
( 참고로 DOM render 후에 side effects가 발생 )   

- 기존 React Class에서의
`componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 의 역할을 하나의 훅으로 통합

- 메모리 누수가 발생하지 않도록 정리(clean-up)하는 과정이 필요할 경우,
return을 통해 unmount시에 필요한 로직을 작성할 수 있음

- 그러나 clean up을 포함한 effect는 한번이 아니라 렌더링이 실행되는 때마다 실행됨
  
- 빈 배열(`[]`)을 두 번째 인수로 넘기면 useEffect가 최초 한번만 실행되며, 배열 안에 특정 변수를 넣어주면 해당 값이 변경될 때 마다 재실행됨


</aside>

3. useContext

<aside>   
    
- React Context API 와 useContext

  
- Context는 앱 안에서 전역적으로 사용되는 데이터를 여러 컴포넌트끼리 쉽게 공유할 수 있는 방법을 제공함
  
- Context API는 종속성을 주입하기 위한 도구이기 때문에 전역 상태관리 툴이라기엔 다소 애매한 면이 있다.
  
- **useContext**는 기존의 React에 존재하는 Context를 더 편하게 사용할 수 있게 해주는 역할을 한다.
  

```jsx
// Parent.js
// ParentContext 객체를 생성한다.
export const ParentContext = createContext();

const Parent 
= () => {
  const user = {
    name: "변우석",
    job: "배우"
  };
 return (
    <>
      <ParentContext.Provider value={user}>
        <div>
          <Children />
        </div>
      </ParentContext.Provider>
    </>
  );
};
------------------------------------------------------------------------------
// Children.js
// 콘테스트 객체 임포트해주기 (useContext는 React에게 Heading 컴포넌트가 Context 객체를 읽으려 한다고 알려주는 역할)
import { useContext } from 'react';
import { ParentContext } from './ParentContext.js';
const Children = () => {
  // useContext를 이용해서 따로 불러온다.
  const user = useContext(ParentContext);
  return (
    <>
      <h3>ParentContext의 데이터의 name은 {user.name}입니다.</h3>
      <h3>ParentContext의 데이터의 job은 {user.job}입니다.</h3>
    </>
  );
};
```

</aside>

4. useRef

<aside>
    
    - 컴포넌트가 계속해서 렌더링이 되어도 컴포넌트가 언마운트 되기 전까지는 값을 그대로 유지할 수 있다.   
    
    - current 속성은 값을 변경해도 state를 변경할 때 처럼 React 컴포넌트가 재렌더링 되지 않는다.   
    
    - ref는 state와 비슷하게 어떤 값을 저장하는 저장공간으로 사용된다.   
    
    - state 와 ref의 비교   
    

State의 변화 ➡️ 렌더링 ➡️ 컴포넌트 내부 변수들 초기화

---

Ref의 변화 ➡️ No 렌더링 ➡️ 변수들의 값이 유지됨

---

State의 변화 ➡️ 렌더링 ➡️ 그래도 Ref의 값은 유지됨

---

✅ **변경시 렌더링을 발생시키지 말아야하는 값**을 다룰때 사용한다

(변화는 감지해야하지만, 그 변화가 렌더링을 발생시키면 안될때)

</aside>
