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

const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)



return (
 <EntriesContext.Provider value={{
      ...state
 }}>
      {children}
  </EntriesContext.Provider>
  )
}