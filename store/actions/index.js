export const ASK_QUESTION = "ask_question";
export const askQuestion = (question) => async (dispatch, getState, api) => {
  const { data } = await api.get("/get", { params: { message: question } });
  dispatch({
    type: ASK_QUESTION,
    payload: res,
  });
};


export const ENGLISH_BOT = "english_bot";
export const SPANISH_BOT = "spanish_bot";
export const selectEnglish = () => (dispatch, getState, api) => {
  dispatch({ type: ENGLISH_BOT });
};
export const selectSpanish = () => (dispatch, getState, api) => {
  dispatch({ type: SPANISH_BOT });
};
