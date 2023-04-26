import { useState } from "react";

function Comp02({val, setfunc}){

  const [idnum, setIdnum] = useState(0);
  const [innerText, setInnerText] = useState("");

  const inputArr = () => {
    setfunc([
      ...val,
      {id : idnum, text: innerText}
    ])
  }

  const deleteArr = () => {
    setfunc(val.filter((item) => item.id !== idnum ))
  }

  const replaceArr = () => {
    const item = val.map(element => 
        (element.id === idnum) ? {id: element.id, text: innerText} : element
    );

    setfunc(item);
  }

  const onChangeId = (e) => {
    const {value} = e.target;
    const item = value.match(/^\d+$/) ? Number.parseInt(value) : 0;
    setIdnum(item);
  }

  const onChangeText = (e) => {
    const {value} = e.target;
    setInnerText(value);
  }

  return (
    <div>
      {val.map(obj => <p key={obj.id}>&nbsp;&nbsp;&nbsp;&nbsp;{obj.id}:{obj.text}</p>)}

      <input type="text" name="id" onChange={onChangeId} value={idnum}></input>
      <input type="text" name="text" onChange={onChangeText} value={innerText}></input>
      <button onClick={inputArr}>추가</button>
      <button onClick={deleteArr}>삭제</button>
      <button onClick={replaceArr}>수정</button>
    </div>
  )
} 

export default Comp02;