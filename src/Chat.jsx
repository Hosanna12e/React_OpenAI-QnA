import React, { useState } from 'react';
import { get_gpt_3_response } from '../index'; 


const Chat = () => {
    const [response, setResponse] = useState('');

    const buttonclicked = async () => {
        const prompt = document.getElementById("prompt").value
        const resp = await get_gpt_3_response(prompt);
        setResponse(resp);
    };

    return <div>
        Ask me anything
        <br /> <br />
        👇👇👇👇👇👇👇👇
        <br /> <br />
        <textarea id="prompt" cols="50" rows="5"></textarea>
        <br /> <br />
        <button className="btn" onClick={buttonclicked}>Answer</button>
        <br /> <br />
        <div>{response}</div>
    </div>
};

export default Chat;