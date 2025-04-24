# java 기초(2)

Created by: 박예분
Created time: 2024년 2월 29일 오후 7:14

### super 키워드

- 조상 클래스에 접근할 때 사용
    
    ```java
    // Person > Spiderman (Spider) 세 개의 클래스에 모두 jump라는 메서드가 존재할 경우,
    // Spiderman 클래스 내부 에서 나머지 두 클래스에 접근 할 때
    
    	this.jump()                    // 스스로의 메서드를 호출할 때
    	super.jump()                   // 조상의 메서드를 호출할 때
    	Spider.jump()                  // 포함관계에 있는 메서드를 호출할 때
    ```
    
    - 해당하는 범위에 찾는 객체가 없을 경우 조상까지 순차적으로 거슬러 올라가 해당하는 객체를 찾아냄

### annotation(주석)

- Deprecated 더이상 사용하지 않을 때
- Override 오버라이드가 잘 되었는지 검증

## 일반적인 클래스의 구조

![Untitled](java%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9(2)%20752038d5b0d64b8d995e51defbf18063/Untitled.png)

- 패키지 선언은 한번만
- 클래스 선언은 틀만 만들어지는 과정(호출을 해야 안의 객체에 접근 가능)

## 제한자

캡슐화

- singleton 디자인 패턴

다형성