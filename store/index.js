import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import axios from "axios";
import thunk from "redux-thunk";

const axiosInstance = axios.create({
    baseURL: "/",
  });

export default createStore(
    reducers,
    window.INITIAL_STATE,
    compose(
      applyMiddleware(thunk.withExtraArgument(axiosInstance)),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );