import { FC, useState } from 'react';
import { FullInput } from './components/FullInput';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
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
      {/* <div>
        <input />
        <button>+</button>
      </div> */}
      <FullInput addMessage={addMessage} />
      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
    </div>
  );
};
