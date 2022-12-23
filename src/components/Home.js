import React from 'react'
import useSWR from 'swr'

const Home = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('http://localhost:3001', fetcher)
  
    if (error) return <div>Failed to fetch users.</div>
    if (isLoading) return <h2>Loading...</h2>
    return (
      <>
        <div>
          {
            data.map((user, index) => {
             return <h2 key={index}>{user.name}</h2>
            })
          }
        </div>
      </>
    )
}

export default Home
