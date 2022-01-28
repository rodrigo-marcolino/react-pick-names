import { SearchName } from './components/SearchName'
import { NamePicker } from './components/NamePicker'

function App({ names }) {
  return (
    <>
      <SearchName /> <NamePicker names={names} />
    </>
  )
}

export default App
