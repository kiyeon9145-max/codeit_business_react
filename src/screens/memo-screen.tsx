import { useState } from "react";
import InputFieldComponent from "../components/input-field-component";
import { MemoComponent } from "../components/memo-component";


export const MemoScreen = () => {
  const [ memoTitle, setMemoTitle] = useState("");
  const onMemoTitleInputChange = (e) => {
    setMemoTitle(() => e.target.value);
  };


  const memos = [
    { title: "오늘의 일기1", content: "js 배움" },
    { title: "오늘의 일기2", content: "ts 배움" },
  ];

  return (
    <div>
      <h1>메모화면</h1>
      <InputFieldComponent
        id="memo-title-input"
        labelText="메모 제목 입력"
        type="text"
        value={memoTitle}
        onChange={onMemoTitleInputChange}
        isValidate={(memoTitle) => (memoTitle === "" || memoTitle.length > 1 ? true : false)}
        warningMessage="제목은 1글자 이상입니다."
      />
      {memos.map((memo) => (
        <MemoComponent title={memo.title} content={memo.content} />
      ))}
    </div>
  );
};
