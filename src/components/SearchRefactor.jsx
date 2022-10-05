import React, { useState, useEffect} from 'react';
import Cards from "../components/Cards"
import { Form, Row, Button, Container, Col, Dropdown } from "react-bootstrap"
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Preloader from './Preloader';

export default function Search() {


    const [search, setSearch] = useState('');
    const [searchType, setSearchType] = useState('');
    const [response, setResponse] = useState('');
    const [sortBy, setSortBy] = useState('rating.kp');
    const [loading, setLoading] = useState(true);

    const handleSearch = (event) => {
        event.preventDefault();
        searching()


    }
    const searching = () => {

        setLoading(true);
        fetch(`https://api.kinopoisk.dev/movie/?token=BN0Y7AB-HDXMEB8-HT1R2T6-2T1RKXF&search=${search}&field=name&isStrict=false&sortField=${sortBy}&sortType=-1&limit=6${(searchType.length) ? (searchType) : ''}`, {
            method: 'GET',


        })
            .then(response => response.json())
            .then(data => {
                
                setResponse(data.docs);
                
                setLoading(false);
            })
            .catch(err => console.log(err))
    }


    const addSearch = (event) => {
        setSearch(event.target.value)
    }

    const changeSortBy = (event) => {
        setSortBy(event.target.attributes.value.value);
        
    }

    const changeSearchType = (event) => {
        setSearchType(event.target.attributes.value.value);
        
    }
    
    useEffect(() => {
        setLoading(true);
        fetch(`https://api.kinopoisk.dev/movie/?token=BN0Y7AB-HDXMEB8-HT1R2T6-2T1RKXF&search=&field=name&isStrict=false&sortField=${sortBy}&sortType=-1&limit=6${(searchType.length) ? (searchType) : ''}`, {
            method: 'GET',


        })
            .then(response => response.json())
            .then(data => {
                
                setResponse(data.docs);
                
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [sortBy, searchType]);


    return (
        <>
            <Container>

                <Row >
                    <Col md={4}>
                        <Form
                            className="d-flex"
                            onSubmit={handleSearch}
                        >
                            <Form.Control
                                name="search"
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={search}
                                onChange={addSearch}
                            />
                            <Button
                                onClick={handleSearch}
                                variant="outline-success">Search</Button>
                        </Form>
                    </Col>
                    <Col md={{ span: 1, offset: 1 }}>
                        <ToggleButtonGroup
                            type="radio"
                            name='searchType'>
                            <ToggleButton
                                type="radio"
                                name='searchType'
                                variant="secondary"
                                id="tbg-btn-1"
                                onChange={changeSearchType}
                                value=''
                                checked={searchType === ""}
                            >

                                All
                            </ToggleButton>
                            <ToggleButton
                                type="radio"
                                name='searchType'
                                variant="secondary"
                                id="tbg-btn-2"
                                onChange={changeSearchType}
                                value='&search=1&field=typeNumber'
                                checked={searchType === "&search=1&field=typeNumber"}
                            >

                                Movie
                            </ToggleButton>
                            <ToggleButton
                                type="radio"
                                name='searchType'
                                variant="secondary"
                                id="tbg-btn-3"
                                onChange={changeSearchType}
                                value='&search=3&field=typeNumber'
                                checked={searchType === "&search=3&field=typeNumber"}
                            >
                                Mult
                            </ToggleButton>
                            <ToggleButton
                                type="radio"
                                name='searchType'
                                variant="secondary"
                                id="tbg-btn-4"
                                onChange={changeSearchType}
                                value='&search=2&field=typeNumber'
                                checked={searchType === "&search=2&field=typeNumber"}
                            >

                                Series
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                    <Col md={{ span: 3, offset: 3 }}>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                Sort by
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Header>Sort by</Dropdown.Header>
                                <Dropdown.Item
                                    name="sortBy"
                                    eventKey="votes.kp"
                                    value="votes.kp"
                                    onClick={changeSortBy}
                                >Popular</Dropdown.Item>
                                <Dropdown.Item
                                    name="sortBy"
                                    eventKey="3"
                                    value="rating.kp"
                                    onClick={changeSortBy}
                                >Raiting</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>

            </Container >
            {
                (!loading) ? ((response.length) ? (<Cards films={response} />) : (<h3>Ничего не найдено</h3>)) : (<Preloader />)
            }
        </>

    )
}
