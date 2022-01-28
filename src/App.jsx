import { useState } from 'react'
import { SearchName } from './components/SearchName'
import { NamePicker } from './components/NamePicker'

function App({ names }) {
  const [searchName, setSearchName] = useState('')

  return (
    <>
      <SearchName searchName={searchName} setSearchName={setSearchName} />{' '}
      <NamePicker searchName={searchName} names={names} />
    </>
  )
}

export default App
