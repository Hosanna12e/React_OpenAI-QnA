# React + OpenAI QnA Application

## Getting Secret API Key from OpenAI
•	Sign-up in [OpenAI Platform](https://platform.openai.com/docs/introduction)
•	Click on API Keys and create a new secret key.
 
•	Copy the secret key and store it somewhere.
## Migrating OpenAI Codebase to 1.0.0

•	Open command prompt and run the command wsl –install
•	WSL and Ubuntu will be installed into your system.
•	Restart your pc after installation. 
•	Now navigate to your project directory.
•	Example path: cd /mnt/c/Users/Myself/my/code/
•	OpenWSL and run the following commands.
curl -fsSL https://docs.grit.io/install | bash
grit install
grit apply openai 
## Project setup:
•	Open VS code and open a new terminal.
•	Readymade react template (Vite): npm create vite OpenAI-QnA -- --template react
•	After creating and entering into our project workspace install the dependencies
npm i 
•	Install openai into our project: npm i openai
•	Now our project setup is done.

•	Clear App.jsx, main.jsx, index.css, app.css
## After clearing:
main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

App.jsx
function App() {
  return <div>

  </div>
}

export default App

## Connecting to OpenAI API.
•	Create a file index.js outside the src folder corresponding to Project folder hierarchy.
•	Import OpenAI into the file.
import { OpenAI } from 'openai'

•	connecting to OpenAI API using API Key 
•	create an instance user and connect it using API key.
const user = new OpenAI({apiKey : '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',
  dangerouslyAllowBrowser: true
})

•	dangerouslyAllowBroswe: true -> Suggesting that the code will run in a browser environment.

•	writing a function to get response from OpenAI.
export async function get_gpt_3_response(prompt) {
  const resp = await user.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  return resp.choices[0].message.content
}

•	Create a component Chat.jsx in the src folder.
const Chat = () => {

    return (
        <div>

        </div>
    );
};

export default Chat;

•	Create UI for interacting. 

        <div>
            Ask me anything
            <textarea cols="30" rows="10"></textarea>
            <button> </button>
        </div>


•	Add the Chat component to App component.

import Chat from "./Chat"

function App() {
  return <div className="container">
    <h2> React + OpenAI QnA </h2>
        <Chat/>
  </div>
}

export default App

•	Run the project to see ouput. 
npm run dev 
 
•	In Chat.jsx add a div to display the response received from OpenAI. 
•	Give id to textarea element and button element. 
•	Give space and make beautification to the UI.
•	Add a function buttonclicked to button when clicked.

const Chat = () => {

    return (
        <div>
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
    );
};

export default Chat;

 
•	Use useState for response as it updates when button is clicked.
import React, { useState } from 'react';

const [response, setResponse] = useState('');

## Styling 
•	In App.jsx give a className to the div. 
return <div className="container">

•	In index.css style the class container class and body. 
.container{
  text-align: center;
}

body{
  background-color: aliceblue;
}


 

•	Adding functionality to the button. 
import { get_gpt_3_response } from '../index'; 

const buttonclicked = async () => {
        const prompt = document.getElementById("prompt").value
        const resp = await get_gpt_3_response(prompt);
        setResponse(resp);
    };

## Final Codes
Chat.jsx
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

index.js
import { OpenAI } from 'openai'

const user = new OpenAI({apiKey : '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',
  dangerouslyAllowBrowser: true
})

export async function get_gpt_3_response(prompt) {
  const resp = await user.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  return resp.choices[0].message.content
}

main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

App.jsx
import Chat from "./Chat"

function App() {
  return <div className="container">
    <h2> React + OpenAI QnA </h2>
        <Chat/>
  </div>
}

export default App

index.css
.container{
  text-align: center;
}

body{
  background-color: aliceblue;
}


 
