import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  // id값은 랜더링 할 필요가 없어서, state에 추가하지 않고 전역에 설정함.
  id = 3;

  state = {
    informantion: [
      {
        id: 0,
        name: '홍길동',
        phone: '000-0000-0001',
      },
      {
        id: 1,
        name: '조승현',
        phone: '000-0000-0001',
      },
      {
        id: 2,
        name: '코코',
        phone: '000-0000-0001',
      },
    ],
    keyword: '',
  }

  // 문자열 변경 감지 함수
  handelChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
  }

  // 불변성을 유지하는 이유?? 
  // 라이프 사이클 간의 data의 값을 비교하기 위해서 단계를 나눠서 비교하기 위해!!
  handelCreate = (data) => {
    console.log(data);
    const { informantion } = this.state;
    this.setState({

      // 데이터의 불변성을 지키면서 
      // 배열의 DATA에 VALUE 입력 작업간 concat을 사용.
      informantion: informantion.concat({
        ...data,
        id: this.id++,
      })
    });
  }

  handelRemove = (id) => {
    const { informantion } = this.state;
    // 데이터의 불변성을 지키면서 
    // 배열의 DATA에 VALUE 삭제 작업간 filter를 사용.
    this.setState({
      informantion: informantion.filter(info => info.id !== id)
    });
  }

  handelUpdate = (changedId, data) => {
    const { informantion } = this.state;
    this.setState({
      informantion: informantion.map(
        info => {
          if (info.id === changedId) {
            return {
              changedId,
              ...data,
            };
          }
          return info;
        }
      )
    });
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handelCreate} />
        <input
          type="text"
          value={this.state.keyword}
          onChange={this.handelChange}
          placeholder="검색..."
        />
        <PhoneInfoList
          // filter 로 직접 접근하여 검색 데이터 서치 후 바인딩.
          data={this.state.informantion.filter(
            info => info.phone.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handelRemove}
          onUpdate={this.handelUpdate}
        />
      </div>
    );
  }
}

export default App;