import React from 'react'


const StarWarsCharacters = props => {
    return props.characters.map( single => (
        <h1>
            {single.name}
        </h1>

    )
    )

}





export default StarWarsCharacters;
