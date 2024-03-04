import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetchHook from '../hooks/useFetchHook';
import useForm from '../hooks/useForm';
import { Link } from 'react-router-dom';
import PageNumber from '../components/PageNumber'
import UlCard from "../components/CardList";
import Form from 'react-bootstrap/Form'
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import Pagination from 'react-bootstrap/Pagination'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

const Home = () => {
  //paginación
  const [number, setNumber] = useState(1)

  let urlApi = `https://swapi.dev/api/planets/?page=${number}`

  const { planetList, loadingSpinner } = useFetchHook(urlApi)

  let pages = [1, 2, 3, 4, 5, 6]

//búsqueda
  const [searchParams, setSearchParams] = useSearchParams({
    keyword: ""
  });

  const [{ keyword }, handleInputChange] = useForm({
    keyword: searchParams.get('keyword')
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getSearch = (keyword = "") => {
    if (keyword === "") {
      return []
    }
    return planetList.filter(planeta => planeta.name.toLowerCase().includes(keyword.toLowerCase()))
  }

  const planetFiltered = useMemo(() => getSearch(searchParams.get('keyword')), [getSearch, searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    keyword !== "" && setSearchParams({ keyword })

  }

  return (
    <>
    <main>
      <div className='background '>
        <h1 className="mb-3 mt-4 blinkRed">Star Wars Planets</h1>
        <React.Fragment>
          <Container >
            <Form onSubmit={handleSubmit} className="d-flex  mb-4">
              <Form.Control
                name="keyword"
                value={keyword}
                onChange={handleInputChange}
                type="search"
                placeholder="Find a planet"
                className="me-1"
                aria-label="Search"
              />
              <Button type='submit' variant="outline-light">
                <FontAwesomeIcon icon={fas.faSearch} />
              </Button>
            </Form>
          </Container>
            {
             planetFiltered.length !== 0 ?
                (
            <Container >
                  <div className="d-flex justify-content-center">

              <h4 className='mt-4 me-4'>Search result: </h4>
              <hr />
                {
                  planetFiltered.map((item, index) => (
                    <Card style={{ width: "18rem" }} key={index + item.url} className="m-2 border border-white border-4 list">

                      <Card.Body >
                        <Card.Title><h3>{item.name}</h3></Card.Title>
                        <UlCard
                          diameter={item.diameter}
                          climate={item.climate}
                          terrain={item.terrain}
                          name={item.name}
                        />
                      </Card.Body>
                    </Card>
                  ))

                }
                  </div>
                    <Nav.Item>

                    <Nav.Link as={Link} to="/" eventKey="link-1" className='text-light links navBarLink' onClick={keyword.replace('')}>
                    <FontAwesomeIcon size="lg" icon={fas.faArrowCircleLeft} />
                      Go Back
                    </Nav.Link>

                    </Nav.Item>

          </Container>

              )
              : (

          <Container>
                  <Row lg={2} className='mt-4 d-flex justify-content-center'>
              {
                loadingSpinner ?
                  (
                    <Spinner animation="grow" variant='light' />
                  )
                  : (

              planetList.map((item, index) => {
                return (
                  <Card style={{ width: "18rem" }} key={index + item.url} className="m-2 border border-white border-4 list">

                    <Card.Body >
                      <Card.Title><h3>{item.name}</h3></Card.Title>
                       <UlCard
                        diameter={item.diameter}
                        climate={item.climate}
                        terrain={item.terrain}
                        name={item.name}
                      />
                    </Card.Body>
                  </Card>
                );
              })
                  )
              }
            </Row>


          <div className='mt-4 d-flex justify-content-center'>
          <Pagination size='lg' >
            <Pagination.Item className=" bg-light">
            {
              pages.map((pages, index) => <PageNumber key={index} num={pages} setNumber={setNumber} />)

            }
            </Pagination.Item>
          </Pagination>
          </div>
          </Container>

              )
          }

        </React.Fragment>
      </div>
    </main>
    <Footer/>
</>
  );

}

export default Home;
