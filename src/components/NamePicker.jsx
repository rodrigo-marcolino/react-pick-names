export const NamePicker = ({ names, searchName }) => {
  const filteredNames = names.filter((entry) => entry.name.toLowerCase().includes(searchName.toLowerCase()))
  return (
    <ul>
      {filteredNames.map((entry) => (
        <li key={entry.id} className={entry.sex}>
          <button>{entry.name}</button>
        </li>
      ))}
    </ul>
  )
}
