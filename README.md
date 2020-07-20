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

- 부무 ⇒ 자식으로 넘겨주는 값을 **props** 라고 부른다.
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

---

### LifeCycle API 사용법
