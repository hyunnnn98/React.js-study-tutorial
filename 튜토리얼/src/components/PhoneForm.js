import React, { Component } from 'react';

class PhoneForm extends Component {
    // [IF] React.createRef 를 사용할 경우
    input = React.createRef();
    // [ELSE]
    // input = null;

    state = {
        name: '',
        phone: '',
    }
    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault();
        /*
            부모 -> 자식으로 데이터 전송.
            부모 컴포넌트에 선언한 onCreate를
            this.props로 타고 올라가 데이터를 전달해주는 방식이다.
        */
        this.props.onCreate(this.state)
        // inpt box의 입력 된 값 초기화.
        this.setState({
            name: '',
            phone: '',
        });
        // [IF] React.createRef 를 사용할 경우
        this.input.current.focus();
        // [ELSE]
        // this.input.focus();
    }
    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <input
                    name="name"
                    placeholder="이름"
                    type="text"
                    onChange={this.handelChange}
                    value={this.state.name}
                    
                    // [IF] React.createRef 를 사용할 경우
                    ref={this.input}
                    // [ELSE] ref={ref => this.input = ref}
                />
                <input
                    name="phone"
                    placeholder="전화번호"
                    type="text"
                    onChange={this.handelChange}
                    value={this.state.phone}
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;