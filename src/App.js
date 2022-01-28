function App({ names }) {
  return (
    <ul>
      {names.map((entry) => (
        <li key={entry.id} className={entry.sex}>{entry.name}</li>
      ))}
    </ul>
  )
}

export default App
