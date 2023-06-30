import { PaletteMode } from "@mui/material";

export interface codeState {
  code: string;
  output: string;
  loading: boolean;
  mode: PaletteMode;
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
    return {
      ...state,
      output: output,
      loading: false,
    };
  }

  if (action.type === "START_TIME") {
    return { ...state, loading: true };
  }

  if (action.type === "CODE_CHANGE") {
    const code: string = action.payload;
    return { ...state, code: code };
  }

  if (action.type === "NEW_PROGRAM") {
    const code: string = `console.log("Hello world");`;
    const output: string = "Click on RUN button to see the output";
    return { ...state, code: code, output: output };
  }

  return { ...state };
};

export default codeReducer;
