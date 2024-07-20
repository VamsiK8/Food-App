import React from 'react'

const Recipe = ({data}) => {
  return (
    <div>
        <div className="row">
        {data.map(data=>
            <div className="col-md-4">
                <div class ="card" style={{"width":"18rem"}}>
                    <img class="card-img-top" src={data.recipe.image} alt="card-img" />
                    <div class="card-body">
                        <center>
                        <h4 class="card-title">{data.recipe.label}</h4>
                        <p class="card-text">Total Amount of Calories: {Math.round(data.recipe.calories)}</p>
                        <a href={data.recipe.url} class="btn btn-primary">Get Recipe</a>
                        </center>
                    </div>
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default Recipe;
