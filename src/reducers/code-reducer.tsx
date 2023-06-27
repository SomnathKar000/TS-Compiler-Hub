import { PaletteMode } from "@mui/material";

export interface codeState {
  code: string;
  error: boolean;
  errorMessage: string;
  output: string;
  computeTime: string;
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
  return { ...state };
};

export default codeReducer;
