import React, { FC, useReducer, ReactNode } from 'react'
import { EntriesContext, entriesReducer } from './';
import { Entry } from '@/interfaces';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
    entries: Entry [];  
}

interface EntriesProviderProps {
     children: ReactNode 
}


const Entries_INITIAL_STATE: EntriesState = {
      entries: [
        {
          _id: uuidv4(),
          description: 'Pendiente: dfwefwefwefewfgi',
          status: 'pending',
          createdAt: Date.now()
        },
        {
          _id: uuidv4(),
          description: 'En porgreso: lslslslsllsllslsl',
          status: 'in-progress',
          createdAt: Date.now() - 1000000  
        },
        {
          _id: uuidv4(),
          description: 'Terminadas: ndndndndndndnnddn',
          status: 'finished',
          createdAt: Date.now() - 1000000000
        },
           
      ] 
}


export const EntriesProvider:FC <EntriesProviderProps> = ({children}) => {

     const [state, dispatch] = useReducer(entriesReducer, 
           Entries_INITIAL_STATE)

     const addNewEntry = (description: string) => {
          
          const newEntry: Entry = {
               _id: uuidv4(),
               description: description,
               createdAt: Date.now(),
               status: 'pending'
          }

          dispatch({ type: '[Entry] Add-Entry', payload: newEntry})
     }

     return (
     <EntriesContext.Provider value={{
          ...state,

          // Methods
          addNewEntry
     }}>
          {children}
     </EntriesContext.Provider>
     )
}