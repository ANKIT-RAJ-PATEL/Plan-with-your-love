import Card from './Card'

function Tours({tours,removeTour}) {
    return(
        <div className='container'>
            <div>
                <h2 className='title'>Plan with your Love</h2>
            </div>

            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card> /*jab v map wala function use krna component ke sath tb key with
                                                                        their id jarur bnana aur agr unique idntifier ni hai to id ke jgh index pass kr dena */
                    })
                }
            </div>
        </div>
    )

}

export default Tours;