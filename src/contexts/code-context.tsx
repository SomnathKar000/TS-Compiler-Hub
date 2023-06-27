import { createContext, useContext, useReducer } from "react";
import codeReducer, { codeState, codeAction } from "../reducers/code-reducer";

interface codeContextProps extends codeState {
  changeMode: () => void;
}

const codeContext = createContext<codeContextProps | null>(null);

const initialState: codeState = {
  code: "",
  error: false,
  errorMessage: "",
  output: "",
  computeTime: "",
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
  return (
    <codeContext.Provider value={{ ...state, changeMode }}>
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
