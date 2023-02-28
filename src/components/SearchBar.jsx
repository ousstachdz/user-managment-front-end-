import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function SearchBar({ setResult }) {
  const [hometown, setHometown] = useState('')
  const [gander, setGander] = useState('')
  const [maxAge, setMaxAge] = useState(99)
  const [minAge, setMinAge] = useState(0)
  useEffect(() => {
    setResult(null)
    if (hometown != '') {
      search()
    }
    return () => {}
  }, [hometown, gander, maxAge, minAge])

  const search = () => {
    const data = {
      hometown: hometown,
      gander: gander,
      max_age: maxAge,
      min_age: minAge,
    }

    axios.post('http://127.0.0.1:8000/users/search', data).then((response) => {
      setResult(response.data)
    })
  }
  return (
    <form>
      <label htmlFor='hometown'>
        hometown
        <input
          id='hometown'
          type='text'
          value={hometown}
          onChange={(e) => {
            setHometown(e.target.value)
          }}
        />
      </label>

      <label htmlFor='gander'>
        gander
        <select
          name='gander'
          id='gander'
          value={gander}
          onChange={(e) => {
            setGander(e.target.value)
          }}
        >
          <option value=''>both</option>
          <option value='male'>male</option>
          <option value='female'>female</option>
        </select>
      </label>

      <div>
        <label htmlFor='max_age'>
          max age
          <input
            type='number'
            name='max_age'
            id='max_age'
            min={minAge}
            max={99}
            onChange={(e) => {
              setMaxAge(e.target.value)
            }}
            defaultValue={maxAge}
          />
        </label>
        <label htmlFor='min_age'>
          min age
          <input
            type='number'
            name='min_age'
            id='min_age'
            min={0}
            max={maxAge}
            onChange={(e) => {
              setMinAge(e.target.value)
            }}
            defaultValue={minAge}
          />
        </label>
      </div>
      <div className='btn-container'>
        <button
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          search
        </button>
      </div>
    </form>
  )
}
