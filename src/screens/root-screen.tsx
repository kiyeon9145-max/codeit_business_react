import { useState } from "react";
import AuthScreen from "./auth-screen";
import { MemoScreen } from "./memo-screen";

const RootScreen = () => {
  const [me, setME] = useState(null);

  return (
    <div>
      {me === null ? <AuthScreen></AuthScreen> : <MemoScreen></MemoScreen>}
    </div>
  );
};

export default RootScreen;
