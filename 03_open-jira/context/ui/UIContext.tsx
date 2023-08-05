import { createContext } from 'react';


interface ContextProps {
     SidemenuOpen: boolean;
}


export const UIContext = createContext({} as ContextProps )