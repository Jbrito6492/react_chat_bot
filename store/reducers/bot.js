import { ENGLISH_BOT, SPANISH_BOT } from "../actions";
import englishThumbnail from "../../public/assets/inglesias.png";
import spanishThumbnail from "../../public/assets/table.png";
import englishBot from "../../public/assets/raul_english.png";
import spanishBot from "../../public/assets/raul_spanish.png";

const initialState = {
  currentBot: "Raul Inglesias",
  img: englishBot,
  thumbnail: englishThumbnail
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ENGLISH_BOT:
      return { ...state, currentBot: "Raul Inglesias", img: englishBot, thumbnail: englishThumbnail };
    case SPANISH_BOT:
      return { ...state, currentBot: "Raul Table", img: spanishBot , thumbnail: spanishThumbnail};
    default:
      return state;
  }
};
