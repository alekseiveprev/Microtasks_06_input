import { FC, useState } from 'react';
import { Button } from './components/Button';
import { FullInput } from './components/FullInput';
import { Input } from './components/Input';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  // выполняет роль сервера
  let [message, setMessage] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' },
  ]);

  let [title, setTitle] = useState('');
  //console.log(title);

  const addMessage = (title: string) => {
    let newMessage = { message: title };
    setMessage([newMessage, ...message]);
    // console.log(title);
  };

  const callBackButtonHandler = () => {
    addMessage(title);
    setTitle('');
  };

  return (
    <div className={'App'}>   
      <Input setTitle={setTitle} title={title} />
      <Button name={'+'} callBack={callBackButtonHandler} />

      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
    </div>
  );
};

// ВАРИАНТ 1
/* export const App: FC<{ name: string }> = ({ name }) => {
  // выполняет роль сервера
  let [message, setMessage] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' },
  ]);

  const addMessage = (title: string) => {
    let newMessage = { message:title };
    setMessage([ newMessage,...message,]);
    // console.log(title);
  };

  return (
    <div className={'App'}>      
      <FullInput addMessage={addMessage} />
      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
    </div>
  );
}; */
