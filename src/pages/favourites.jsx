import React from 'react'
import { useSelector } from 'react-redux'
import CardFavorite from '../components/CardFavorite'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";

function Favourites() {

  const { favourites } = useSelector(state => state.reducersFavorites)

  return (
    <main>
      <h1 className="mb-3 mt-4">Favourites
      <FontAwesomeIcon className="blinkRed" icon={fas.faHeart}/>
      </h1>
      <div className="container-card">
        <div className="row">
          {
            favourites.length !== 0 ?
              (

            favourites.map((item, index) =>
              <CardFavorite key={index}
                name={item.name}
                diameter={item.diameter}
                climate={item.climate}
                terrain={item.terrain}
              />
            )

              )
              : (
                <p className="alert alert-danger" role="alert">There are no saved favourites.</p>

)
          }
        </div>

        < Nav.Item >

          <Nav.Link as={Link} to="/" eventKey="link-1" className='text-light links navBarLink'>
            <FontAwesomeIcon size="lg" icon={fas.faArrowCircleLeft} />
            Go Back
          </Nav.Link>

      </Nav.Item>


    </div>

    </main >
  )
}

export default Favourites