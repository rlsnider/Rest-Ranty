const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div>
                {data.place.pic}
            </div>
            <div>
                <h2>Ratings</h2>
                <p>No Ratings yet</p>
            </div>
            <div>
                <h2>Description</h2>
                <p>Located in {data.place.city}, {data.place.state} serving {data.place.cuisines}</p>
            </div>
            <div>
                <h2>Comments</h2>
                <p>No Comments yet</p>
            </div>
            <a href="" className="btn btn-warning"> 
                Edit
            </a>  
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
                Delete
            </button>
        </form>     

          </main>
        </Def>
    )
}

module.exports = show

