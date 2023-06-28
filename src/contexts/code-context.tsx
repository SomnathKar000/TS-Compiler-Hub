import { createContext, useContext, useReducer } from "react";
import codeReducer, { codeState, codeAction } from "../reducers/code-reducer";

interface codeContextProps extends codeState {
  changeMode: () => void;
  codeCompute: () => void;
  codeChange: (code: string) => void;
}

const codeContext = createContext<codeContextProps | null>(null);

const initialState: codeState = {
  code: `console.log("Hello world");`,
  error: false,
  errorMessage: "",
  output: "",
  computeTime: "",
  startTime: 0,
  loading: false,
  mode: "dark",
};

export const CodeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(codeReducer, initialState);

  const changeMode = () => {
    const payload: codeAction = { type: "CHANGE_MODE", payload: {} };
    dispatch(payload);
  };
  const startTime = () => {
    const payload: codeAction = { type: "START_TIME", payload: {} };
    dispatch(payload);
  };

  const codeCompute = () => {
    startTime();
    const payload: codeAction = { type: "CODE_COMPUTE", payload: {} };
    dispatch(payload);
  };

  const codeChange = (code: string) => {
    const payload: codeAction = { type: "CODE_CHANGE", payload: code };
    dispatch(payload);
  };

  return (
    <codeContext.Provider
      value={{ ...state, changeMode, codeCompute, codeChange }}
    >
      {children}
    </codeContext.Provider>
  );
};

export const useCodeContext = () => {
  const context = useContext(codeContext);
  if (!context) {
    throw new Error("useCodeContext must be used within CodeContextProvider");
  }
  return context;
};
