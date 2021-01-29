import React, { useState } from 'react';

const EventPracticeFunc = () => {
    const [ form, setForm ] = useState ({
        username: "",
        message: ""
    })
    const { username, message } = form
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        }
        setForm(nextForm)
    }
    //const [ username, setUsername ] = useState("");
    //const [ message, setMessage ] = useState("");
    //const onChangeUsername = e => setUsername(e.target.value);
    //const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + " : " + message);
        //setUsername("");
        //setMessage("");
        setForm({
            username: "",
            message: ""
        })
    };
    const onKeyPress = e => {
        if ( e.key === 'Enter' ) {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자 명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해주세요."
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPracticeFunc;