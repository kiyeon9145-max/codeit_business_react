import { MemoComponent } from "../components/memo-component";

export const MemoScreen = () => {
  const memos = [
    { title: "오늘의 일기1", content: "js 배움" },
    { title: "오늘의 일기2", content: "ts 배움" },
  ];
  return (
    <div>
      <h1>메모화면</h1>
      <MemoComponent
        title={memos[0].title}
        content={memos[0].content}
      ></MemoComponent>
    </div>
  );
};
