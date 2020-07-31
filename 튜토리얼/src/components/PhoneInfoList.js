import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    // props로 넘어오는 데이터가 없을 경우 예외처리 (1).
    static defaultProps = {
        data: []
    }
    render() {
        // 비구조화 할당으로 props로 넘어오는 값 할당.
        const { data, onRemove, onUpdate } = this.props;

        console.log('rendering list');

        // props로 넘어오는 데이터가 없을 경우 예외처리 (2).
        // if (!data) return null;

        /*
            컴포넌트 바인딩간에 key 설정을 해야하는 이유??

            key ? 컴포넌트를 여러개 렌더링 하게 될 때
            고유 값을 지정함으로써 업데이트 성능을 향상시킴.
        */
        const list = data.map(
            info => (
                <PhoneInfo
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                    info={info}
                    key={info.id}
                />)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;
