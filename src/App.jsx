import { useEffect, useState } from "react"
import Tours from "./Tours"
import "./index.css"

const url = "https://www.course-api.com/react-tours-project"

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState(null)

  function removeTour(id) {
    setTours(tours.filter((tour) => tour.id !== id))
  }

  async function fetchData() {
    try {
      const responce = await fetch(url)
      const data = await responce.json()
      setTours(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return isLoading ? (
    <div className='loading' />
  ) : (
    <main>
      {tours[0] ? (
        <Tours tours={tours} removeTour={removeTour} />
      ) : (
        <div className='title'>
          <h2>no tours left</h2>
          <button
            className='btn'
            onClick={() => {
              setIsLoading(true)
              fetchData()
            }}
            style={{ marginTop: "2rem" }}
          >
            reload
          </button>
        </div>
      )}
    </main>
  )
}
App
