import { List, Paper, styled  } from '@mui/material'
import { FC, useContext, useMemo, DragEvent } from 'react'

import EntryCard from './EntryCard'
import { EntryStatus } from '@/interfaces'

import { EntriesContext } from '@/context/entries'
import { UIContext } from '@/context/ui'

import Styles from './EntryList.module.css'


interface Props {
  status: EntryStatus
}

const EntryList: FC<Props> = ({ status }) => {

    const { isDragging, endDragging } = useContext(UIContext)
    const {entries, updateEntry} = useContext(EntriesContext)

   

    const entriesByStatus = useMemo( () => entries.filter(entry => entry.status === status), [entries, status])
   

    const allowDrop = ( event:DragEvent<HTMLDivElement> ) => {
        event.preventDefault()
    }

    const onDropEntry = ( event:DragEvent<HTMLDivElement> ) => {
        const id = event.dataTransfer.getData('text')

        // exclamación para que typeScript no de fallo al decir que puede ser de tipop undefined
        const entry = entries.find(e => e._id === id )! 
        entry.status = status
        updateEntry( entry )
        endDragging()
    }


  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? Styles.dragging : ''}
    >
      <Paper sx={{height: 'calc(100vh - 250px)', overflow: 'auto', backgroundColor: 'transparent', padding: '3px 5px'}}>
     

        <List sx={{opacity: isDragging ? 0.2 : 1, transition: 'all .3s'}}  >

          {
            entriesByStatus.map(entry => <EntryCard key={entry._id} entry={entry} />)
          }
            
        </List>

      </Paper>
    </div>
  )
}

export default EntryList

