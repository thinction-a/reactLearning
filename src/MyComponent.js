import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '홍길동',
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteColor: PropTypes.string.isRequired
    };
    render () {
        const { name, children, favoriteColor } = this.props;
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다.<br/>
                Children값은 {children}입니다.<br/>
                가장 좋아하는 색상은 <span style={{color: favoriteColor, fontWeight: '700', fontSize: 50}}>{favoriteColor}</span>입니다.
            </div>
        );
    }
};

export default MyComponent;