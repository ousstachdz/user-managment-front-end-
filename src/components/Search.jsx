import React, { useState } from 'react'
import SearchBar from './SearchBar'
import UserCard from './UserCard'

export default function Search() {
  const [result, setResult] = useState(null)

  return (
    <main>
      <SearchBar setResult={setResult} />
      <div>
        {result?.length > 0
          ? result.map((user) => {
              return <UserCard key={user.id} user={user} />
            })
          : null}
      </div>
    </main>
  )
}
