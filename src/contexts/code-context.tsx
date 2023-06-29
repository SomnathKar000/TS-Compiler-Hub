import { createContext, useContext, useReducer } from "react";
import codeReducer, { codeState, codeAction } from "../reducers/code-reducer";
import * as ts from "typescript";

interface codeContextProps extends codeState {
  changeMode: () => void;
  codeCompute: () => void;
  codeChange: (code: string) => void;
  createNewProgram: () => void;
}

const codeContext = createContext<codeContextProps | null>(null);

const initialState: codeState = {
  code: `console.log("Hello world");`,
  error: false,
  errorMessage: "",
  output: "Click on RUN button to see the output",
  computeTime: "",
  startTime: 0.0,
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
    const logs: string[] = [];

    const originalLog = console.log;
    console.log = (...args: any[]) => {
      logs.push(args.map((arg) => String(arg)).join(" "));
    };

    startTime();
    try {
      const transpiledCode = ts.transpileModule(state.code, {
        compilerOptions: { module: ts.ModuleKind.CommonJS },
      });

      const jsCode = transpiledCode.outputText.replace(
        /^["']use strict["'];\s*/,
        ""
      );

      const codeFunction = new Function(jsCode);
      codeFunction();

      const payload: codeAction = {
        type: "CODE_COMPUTE",
        payload: logs,
      };
      dispatch(payload);
    } catch (error) {
      const payload: codeAction = {
        type: "CODE_COMPUTE",
        payload: logs,
      };
      dispatch(payload);
    } finally {
      console.log = originalLog;
    }
  };

  const codeChange = (code: string) => {
    const payload: codeAction = { type: "CODE_CHANGE", payload: code };
    dispatch(payload);
  };

  const createNewProgram = () => {
    const payload: codeAction = { type: "NEW_PROGRAM", payload: {} };
    dispatch(payload);
  };

  return (
    <codeContext.Provider
      value={{
        ...state,
        changeMode,
        codeCompute,
        codeChange,
        createNewProgram,
      }}
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
