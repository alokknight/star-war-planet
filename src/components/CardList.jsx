import React from 'react'
import { useDispatch } from 'react-redux'
import { favoriteAdd } from "../actions/data"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";

const UlCard = ({name, diameter, climate, terrain}) => {
  const dispatch = useDispatch()



  const handleAddFavorite = () => {
    dispatch(favoriteAdd({ name, climate, terrain, diameter }))
   alert('Favorite added')

  }



  return (
    <ListGroup >
      <ListGroup.Item className="list text-white fs-6">Diameter: {diameter}</ListGroup.Item>
      <ListGroup.Item className="list text-white fs-6">Climate:{climate}</ListGroup.Item>
      <ListGroup.Item className="list text-white fs-6">Ground:{terrain}</ListGroup.Item>
      <ListGroup.Item className="list text-white fs-6 " >
        <Button className='buttonFav' onClick={handleAddFavorite}>
          <FontAwesomeIcon className="heart" icon={fas.faHeart} /> Add to Favourites
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default UlCard;
