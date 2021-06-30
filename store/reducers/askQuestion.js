import { ASK_QUESTION } from "../actions";

const initialState = {
    questions: ["Who is my daddy and "]
}

export default (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    };
  };