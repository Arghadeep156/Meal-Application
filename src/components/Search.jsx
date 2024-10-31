import { useState } from "react"
import { useGlobalContext } from "../context.jsx"

const Search = () => {
  const [text, setText] = useState('')
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext()

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (text) {
      setSearchTerm(text);
    }
  }

  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input className="form-input" type='text' value={text} placeholder='Enter your favourite meal here' onChange={handleChange}></input>
        <button type='submit' className='btn'>Search</button>
        <button type='button' className='btn btn-hipstet' onClick={handleRandomMeal} >Surprise Me!</button>
      </form>
    </header>
  )
}
export default Search
