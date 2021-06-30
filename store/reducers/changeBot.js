import { ENGLISH_BOT, SPANISH_BOT } from "../actions";
import englishBot from "../../public/assets/inglesias.png";
import spanishBot from "../../public/assets/table.png";

const initialState = {
  currentBot: "english",
  img: englishBot,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ENGLISH_BOT:
      return { ...state, currentBot: "Raul Iglesias", img: englishBot };
    case SPANISH_BOT:
      return { ...state, currentBot: "Raul Table", img: spanishBot };
    default:
      return state;
  }
};
