# React.js

- **리엑트**란? 컴포넌트에 집중되어 있는 라이브러리다.
- **Webpack**란? 프로젝트 소스 파일들을 bundling작업을 통해 하나로 묶어주는 역할.
- **Babel**란? ES6 이상의 구문 ⇒ ES5 구문으로 변환시켜주는 자바스크립트 변환 도구.
- **JSX**란?

    리엑트에서 사용하는 HTML과 비슷하지만, 지켜야 할 규칙이 몇가지 있다.

    1. 꼭 닫혀야 하는 태그.
    2. 감싸져있는 엘리먼트.

        ```jsx
        class App extends Component {
          render() {
            return (
        			<div>
        				<div>안녕하세요 리엑트!</div>
        				<div>안녕하세요 리엑트!</div>	
        			</div>
        		);
          }
        }

        // 16.X 버전부터 나온 Fragment를 이용하면 div로 감싸지 않아도 엘리먼트 리턴 가능.
        import React, { Component, Fragment } from "react";
        			<Fragment>
        				<div>안녕하세요 리엑트!</div>
        				<div>안녕하세요 리엑트!</div>	
        			</Fragment>
        ```

    3. JSX 안에 자바스크립트 값 사용하기

        ```jsx
        class App extends Component {
          render() {
        		const name = 'react';
            return (
        				<div>
        					hello {name}!
        				</div>
        		);
          }
        }
        ```

    4. IF 구문 사용하기

        ```jsx
        class App extends Component {
          render() {
            const name = "react";
            return (
              <div>
                {
                  name === 'react' && <div>정답입니다!</div>
                }
              </div>
            );
          }
        }

        // IIFE 즉시 실행 함수 사용을 통한 조건 활용법.
        class App extends Component {
          render() {
            const value = 1;
            return (
              <div>
                {
                  function() {
                    if (value === 1) return <div>1이다!</div>
                    if (value === 2) return <div>2이다!</div>
                    if (value === 3) return <div>3이다!</div>
                    return <div>없다</div>
                  }()
                }
              </div>
            );
          }
        }
        ```

    5. JSX에서 style 사용하기
        - Camel표기법을 써야한다.

        ```jsx
        class App extends Component {
          render() {
            const style = {
              backgroundColor: "red",
              padding: "16px",
              color: "white",
              fontSize: "36px"
            };
            return <div style={style}>안녕하세요!</div>;
          }
        }
        ```

    6. JSX에서 class 사용하기

        ```jsx
        // class 대신 className을 사용한다.
        class App extends Component {
          render() {
            return <div className="App">안녕하세요!</div>;
          }
        }
        ```

    7. JSX에서 주석 사용달기

        ```jsx
        class App extends Component {
          render() {
            return (
              <div>
                {/* 멀티라인도 예외가 아니다! */}
                <h1>안녕하세요!</h1>
              </div>
            );
          }
        }
        ```

---

### Props 사용법

- 부모 ⇒ 자식으로 넘겨주는 값을 **props** 라고 부른다. ( **읽기 전용 값** )

    ![React%20js%207c730744087e4b63b51a086cba038ccd/Untitled.png](React%20js%207c730744087e4b63b51a086cba038ccd/Untitled.png)

- 하위 컴포넌트 예제

    ```jsx
    class MyName extends Component {
      /*
         props 의 default value 설정하기.
        1) 새로운 방법 (new)
      */
      static defaultProps = {
        name: "기본이름"
      };
      
      render() {
        return (
          <div>
            안녕하세요! 제 이름은 <b>{this.props.name}</b>이에요!
          </div>
        );
      }
    }

    // 2) 이전 방법 (old)
    MyName.defaultProps = {
      name: "koko haseyo"
    };

    export default MyName;
    ```

- 상위 컴포넌트 예제

    ```jsx
    import React, { Component } from "react";
    // 1) 하위 컴포넌트를 import
    import MyName from "./MyName";

    // 2) 랜더링 과정에 하위 컴포넌트를 선언 -> value값 지정.
    class App extends Component {
      render() {
        return <MyName name="넘어갈 값입니다." />;
      }
    }

    export default App;
    ```

- props로 간단한 값만 넘기는 경우 **함수형 컴포넌트**를 사용한다.
    - 함수형 컴포넌트는 초기 로딩속도가 빠르다.
    - 불필요한 메모리 자원을 낭비하지 않는다.

    ```jsx
    import React from "react";

    const MyName = ({ name }) => {
      return <div>안녕하세요! 제 이름은 {name} 입니다.</div>;
    };

    MyName.defaultProps = {
      name: "koko"
    };

    export default MyName;
    ```

---

### State 사용법

- props와 다르게, **컴포넌트 자신이 처음부터 들고있는 값**이다.

    → state는 내부에서 변경 할 수 있다.

    → 변경 할 때는 언제나 setState 라는 함수를 이용한다.

    ![React%20js%207c730744087e4b63b51a086cba038ccd/Untitled%201.png](React%20js%207c730744087e4b63b51a086cba038ccd/Untitled%201.png)

- state 예제

    ```jsx
    import React, { Component } from "react";

    class Counter extends Component {
      /*
        반드시 state는 객체여야 한다.
      */
      state = {
        number: 0
      };

      /*
        [ 에로우 펑션을 사용하지 않을 경우 ]
        constructor => 컴포넌트가 만들어질때마다 만들어지는 함수
        this의 객체안에 커스텀한 메서드를 선언하여 등록.
      */
      constructor(props) {
        super(props);
        this.handelIncrease = this.handelIncrease.bind(this);
        this.handelDecrease = this.handelDecrease.bind(this);
      }

      /*
        [ 에로우 펑션을 사용 할 경우 ] => 추천하는 방법
        state값을 변화시키기 위한 Custom Method 생성.
        업데이트를 하기 위해서는 반드시 this.setState() 함수를 이용해야 한다.
        this.setState를 참조하기 위해 function을 () => {} 에로우 함수로 선언 하였다.
      */
      handelIncrease = () => {
        this.setState({
          number: this.state.number + 1
        });
      };

      handelDecrease() {
        this.setState({
          number: this.state.number - 1
        });
      }

      render() {
        return (
          <div>
            <h1>카운터</h1>
            <div>값: {this.state.number}</div>
            <button onClick={this.handelIncrease}>+</button>
            <button onClick={this.handelDecrease}>-</button>
          </div>
        );
      }
    }

    export default Counter;
    ```

---

### LifeCycle API 사용법

- 라이프 사이클 종류

    ![React%20js%207c730744087e4b63b51a086cba038ccd/Untitled%202.png](React%20js%207c730744087e4b63b51a086cba038ccd/Untitled%202.png)

    [*자세히 보기](http://react-anyone.vlpt.us/05.html)

- 컴포넌트 초기 생성
    - **componentDidMount**

        ⇒ 컴포넌트가 화면에 나타나게 됐을 때 호출된다.

        ```jsx
        componentDidMount() {
        	/*
        			외부 라이브러리 연동 : D3, masonry, etc
        			컴포넌트에서 필요한 데이터 요청 : Ajax, GraphQL, etc
        			DOM 에 관련된 작업 : 스크롤 설정, 크기 읽어오기 등
        	*/
        }
        ```

- 컴포넌트 업데이트
    - **static getDerivedStateFromProps**

        ```jsx
        	/*
            getDerivedStateFromProps 는 static값으로 넣어야 한다.
        		여기서는 setState 를 하는 것이 아니라
        		특정 props 가 바뀔 때 설정하고 싶은 state 값을 리턴하는 형태로 사용된다.		

            nextProps : 다음으로 가져올 Props값을 가져오는 역할.
            prevState : 현재 업데이트 되기 전의 상태를 가져오는 역할.
          */
          static getDerivedStateFromProps(nextProps, prevState) {
            if (prevState.value !== nextProps.value) {
              return {
                value: nextProps.value
              };
            }
            return null;   // null 을 리턴하면 따로 업데이트 할 것은 없다는 의미가 된다.
          }
        ```

    - **shouldComponentUpdate**

        ```jsx
        	/*
            shouldComponentUpdate ( defalutValue : true )
            특정 조건에 따라 랜더링(업데이트)를 막아주는 함수 ( 최적화를 위해 )

        		false 인 경우 랜더링이 Virtual DOM 에 리렌더링 X. PASS의 개념.
          */
          shouldComponentUpdate(nextProps, nextState) {
            if (nextProps.value === 10) return false;
            return true;
          }
        ```

    - **getSnapshotBeforeUpdate**

        이 API 가 발생하는 시점은 다음과 같다.

        1. render()
        2. **getSnapshotBeforeUpdate()**
        3. 실제 DOM 에 변화 발생
        4. componentDidUpdate

        [ getSnapshotBeforeUpdate ] 를 통해서, DOM 변화가 일어나기 직전의 DOM 상태를 가져오고,

        여기서 리턴하는 값은 componentDidUpdate 에서 3번째 파라메터로 받아올 수 있다.

        ```jsx
        getSnapshotBeforeUpdate(prevProps, prevState) {
            /* 
               DOM 업데이트가 일어나기 직전의 시점입니다.
               새 데이터가 상단에 추가되어도 스크롤바를 유지해보겠습니다.
               scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
               scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데, 
               이미 구현이 되어있다면 처리하지 않도록 하기 위함입니다.
        		*/
            if (prevState.array !== this.state.array) {
              const {
                scrollTop, scrollHeight
              } = this.list;

              /*
        				 여기서 반환 하는 값은 componentDidMount 에서
        				 snapshot 값으로 받아올 수 있습니다.
        			*/
              return {
                scrollTop, scrollHeight
              };
            }
          }

          componentDidUpdate(prevProps, prevState, **snapshot**) {
            if (snapshot) {
              const { scrollTop } = this.list;
        			// 기능이 이미 구현되어있다면 처리하지 않습니다.
              if (scrollTop !== snapshot.scrollTop) return;
              const diff = this.list.scrollHeight - snapshot.scrollHeight;
              this.list.scrollTop += diff;
            }
          }
        ```

    - **componentDidUpdate**

        컴포넌트에서 render() 를 호출하고난 다음에 발생하게 된다.

        이 시점에는 this.props 와 this.state 가 바뀌어 있다.

        그리고, 파라메터를 통해 이전 값인 preProps 와 preState 를 조회할 수 있다.

        +&) getSnapshotBeforeUpdate 에서 반환한 snapshot 값은 세번째 값으로 받아온다.

        ```jsx
        	// DOM 업데이트 이후 시점.
          componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.props.value !== prevProps.value) {
              console.log("value 값이 바뀌었다!", this.props.value);
            }
          }
        ```

- 컴포넌트 제거
    - **componentWillUnmount**

        여기서는 주로 등록했었던 이벤트를 제거하고,

        if) setTimeout 을 걸은 것이 있다면, clearTimeout 을 통하여 제거하자.

        +&) 외부 라이브러리를 사용한게 있고 해당 라이브러리에 dispose(=처분) 기능이 있다면 여기서 호출하면 된다.

        ```jsx
        	// DOM에서 컴포넌트가 제거 될 시점.
          componentWillUnmount() {
            console.log("Good Bye");
          }
        ```

- 컴포넌트에 에러 발생
    - **componentDidCatch**

        +&) componentDidCatch 를 선언한 컴포넌트 자신의 에러는 캐치하지 못한다.

        ```jsx
        	/*
           에러를 잡으려면 해당 자식이 아닌 
           부모에서 에러를 잡아야 한다.
           ( 실수로 잡지 못한 버그들을 캐치 작업 )
          */
          componentDidCatch(error, info) {
            console.log(error);
            console.log(info);
            this.setState({
              error: true
            });
            // API 를 통하여 서버로 오류 내용 날리기
          }
        ```
