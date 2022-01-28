import { useRef, useEffect } from 'react'

export const SearchName = ({ searchName, setSearchName }) => {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  const handleChange = (e) => {
    setSearchName(e.target.value)
  }
  return (
    <header>
      <input ref={inputRef} onChange={handleChange} type="text" placeholder="Type a name..." value={searchName} />
      <pre>Name: {searchName}</pre>
    </header>
  )
}
