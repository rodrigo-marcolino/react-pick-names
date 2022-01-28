export const NamePicker = ({ names }) => {
  return (
    <ul>
      {names.map((entry) => (
        <li key={entry.id} className={entry.sex}>
          <button>{entry.name}</button>
        </li>
      ))}
    </ul>
  )
}
