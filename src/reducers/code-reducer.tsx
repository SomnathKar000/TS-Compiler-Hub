import { PaletteMode } from "@mui/material";

export interface codeState {
  code: string;
  error: boolean;
  errorMessage: string;
  output: string;
  computeTime: string;
  loading: boolean;
  mode: PaletteMode;
  startTime: number;
}
export interface codeAction {
  type: string;
  payload: any;
}

const codeReducer = (state: codeState, action: codeAction): codeState => {
  if (action.type === "CHANGE_MODE") {
    let mode: PaletteMode = "light";
    if (state.mode === "light") {
      mode = "dark";
    }
    return { ...state, mode: mode };
  }

  if (action.type === "CODE_COMPUTE") {
    const output: string = action.payload;
    const endTime: number = Date.now();
    return {
      ...state,
      output: output,
      loading: false,
      computeTime: ((endTime - state.startTime) / 1000).toFixed(4),
    };
  }

  if (action.type === "START_TIME") {
    const startTime: number = Date.now();
    return { ...state, startTime: startTime, loading: true };
  }

  if (action.type === "CODE_CHANGE") {
    const code: string = action.payload;
    return { ...state, code: code };
  }

  if (action.type === "NEW_PROGRAM") {
    const code: string = `console.log("Hello world");`;
    const output: string = "Click on RUN button to see the output";
    const computeTime: string = "";
    return { ...state, code: code, output: output, computeTime: computeTime };
  }

  return { ...state };
};

export default codeReducer;
