import React, { useState, useEffect } from 'react';


const Info = () => {

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log('effect');
        return ()=>{
            console.log('unmount');
        }        
    },[]);

    const onChangeName = (e) => {
        setName(e.target.value);

    }

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }


    return (
        <div>
            <input name="name" value={name} onChange={onChangeName}></input>
            <input name="nickname" value={nickname} onChange={onChangeNickname}></input>
            <div>
                <b>name: {name}</b>
                <div>
                    <b>nickname: {nickname}</b>
                </div>
            </div>
        </div>
    )
}


export default Info;

