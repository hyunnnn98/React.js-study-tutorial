import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: '',
    }

    // shouldComponentUpdate 를 통한 컴포넌트 최적화 => scu
    // return type => boolean
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState) {
            return true;
        }
        // 현재 props 다음 props 의 data value 비교 후, 
        // 일치하지 않으면 true(= re-rendering), 일치하면 false (= render() 함수를 호출하지 않는다.)
        return this.props.info !== nextProps.info;
    }

    handelRemove = () => {
        // 상위 컴포넌트로 props로 받은 데이터( 값, 함수) 바인딩 후
        // 해당 컴포넌트에서 원하는 작업 실행.
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handelToggleEdit = () => {
        /* 
            [IF] true -> false 
                => onUpdate
            [ELSE] false -> true
                => state 에 info 값 바인딩.
        */
       const { info, onUpdate } = this.props;
       if (this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })
       } else {
            this.setState({
                name: info.name,
                phone: info.phone,
            })
       }
        this.setState({
            editing: !this.state.editing,
        });
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { name, phone } = this.props.info;
        const { editing } = this.state;

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        }

        console.log(name);

        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div>
                                <input
                                    name="name"
                                    onChange={this.handelChange}
                                    value={this.state.name}
                                />
                            </div>
                            <div>
                                <input
                                    name="phone"
                                    onChange={this.handelChange}
                                    value={this.state.phone}
                                />
                            </div>
                        </Fragment>
                    ) : (
                            <Fragment>
                                <div><b>{name}</b></div >
                                <div>{phone}</div>
                            </Fragment >
                        )
                }
                <button onClick={this.handelRemove}>삭제</button>
                <button onClick={this.handelToggleEdit}>
                    {editing ? '적용' : '수정'}
                </button>
            </div>
        );
    }
}

export default PhoneInfo;