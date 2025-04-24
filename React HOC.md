# React HOC

Created by: 박예분
Created time: 2024년 5월 28일 오전 9:00

- 컴포넌트 로직 재사용을 위한 ‘패턴’,  React API가 아님
- **HOC 정의**: HOC는 함수로 정의되며, 이 함수는 하나의 컴포넌트를 인자로 받습니다. 이 인자로 받은 컴포넌트를 `WrappedComponent`라고 부릅니다.
- **새로운 컴포넌트 반환**: HOC는 새로운 컴포넌트를 반환합니다. 이 새로운 컴포넌트는 일반적으로 클래스형 컴포넌트이거나 함수형 컴포넌트입니다.
- **`WrappedComponent` 렌더링**: 반환된 컴포넌트는 `WrappedComponent`를 렌더링하면서 필요한 props를 전달합니다.

```jsx
import React from 'react';

const withEnhancement = (WrappedComponent) => {
// WrappedComponent는 HOC가 기능을 추가하거나 수정하려는 기본 컴포넌트
  return class extends React.Component {
   // 새로운 컴포넌트를 반환
    render() {
      return <WrappedComponent {...this.props} />;
      // 원래 컴포넌트를 렌더링하면서 props를 전달
    }
  };
};

export default withEnhancement;
```

- 코드를 캡슐화하여 목적에 맞는 코드의 가독성을 높이기 위한 한 방법으로 HOC를 활용한 예시 [➡️](https://blog.hwahae.co.kr/all/tech/11631)