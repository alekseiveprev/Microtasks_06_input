import react, { ChangeEvent, useState } from 'react';
type ButtonProsType={
  name:string,
  callBack:()=>void
}


export const Button = (props:ButtonProsType) => {
  const onClickButtonHandler = () => {
    props.callBack()
  };
  return (
    <div>
      <button onClick={onClickButtonHandler} >{props.name}</button>
    </div>
  );
};
