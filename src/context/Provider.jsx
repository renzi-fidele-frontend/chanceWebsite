import { createContext, useReducer } from "react";

const initialState = { idioma: "en" };
const reducer = (state, action) => {
   switch (action.type) {
      case "setIdioma":
         return { ...state, idioma: action.payload };
      default:
         return state;
   }
};

const Provider = ({ children }) => {
   const Context = createContext();
   const [estado, dispatch] = useReducer(reducer, initialState);

   return <Context.Provider value={{ estado, dispatch }}>{children}</Context.Provider>;
};

export default Provider;
