import { useState } from 'react'
export const SearchName = () => {
  const [searchName, setSearchName] = useState('')
  const handleChange = (e) => {
    setSearchName(e.target.value)
  }
  return (
    <header>
      <input onChange={handleChange} type="text" placeholder="Type a name..." value={searchName} />
      <pre>Name: {searchName}</pre>
    </header>
  )
}
