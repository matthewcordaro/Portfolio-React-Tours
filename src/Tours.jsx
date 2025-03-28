import Tour from "./Tour"
export default function Tours({ tours, removeTour }) {
  return (
    <div className='title'>
      <h2>Our Tours</h2>
      <div className='title-underline' />
      <div className='tours'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </div>
  )
}
