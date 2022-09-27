import React, { Component } from 'react';
import Cards from "../components/Cards"
import { Form, Row, Button, Container, Col, Dropdown } from "react-bootstrap"
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            search: '',

            response: '',
        }
    }
    handleSearch = () => {

        const keyword = this.state.search
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`, {
            method: 'GET',
            headers: {
                'X-API-KEY': '6f766208-59a3-4936-82de-91511b56455d',
                'Content-Type': 'application/json',

            },



        })
            .then(response => response.json())
            .then(data => this.setState({response: data.films}))
            .catch(err => console.log(err))

            
    }
   componentDidMount() {
    
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=сума&page=1`, {
            method: 'GET',
            headers: {
                'X-API-KEY': '6f766208-59a3-4936-82de-91511b56455d',
                'Content-Type': 'application/json',

            },



        })
            .then(response => response.json())
            .then(data => {
                console.log(data.films)
                this.setState({response: data.films})})
            .catch(err => console.log(err))

            
    }
   

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }
   
    
    render() {
        const { search } = this.state

        return (
            <>
            <Container>

                <Row >
                    <Col md={4}>
                        <Form className="d-flex">
                            <Form.Control
                                name="search"
                                type="text"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={search}
                                onChange={this.handleChange}
                            />
                            <Button
                                onClick={this.handleSearch}
                                variant="outline-success">Search</Button>
                        </Form>
                    </Col>
                    <Col md={{ span: 1, offset: 1 }}>
                        <ToggleButtonGroup
                            type="radio"
                            defaultValue={1}
                            name='searchType'>
                            <ToggleButton
                                type="radio"
                                name='searchType'
                                variant="secondary"
                                id="tbg-btn-1"
                                onChange={this.handleChange}
                                value='movies'
                                checked={false}>

                                Movie
                            </ToggleButton>
                            <ToggleButton
                                type="radio"
                                name='searchType'
                                variant="secondary"
                                id="tbg-btn-2"
                                onChange={this.handleChange}
                                value='mult'
                            >
                                Mult
                            </ToggleButton>
                            <ToggleButton
                                type="radio"
                                name='searchType'
                                variant="secondary"
                                id="tbg-btn-3"
                                onChange={this.handleChange}
                                value='serial'
                            >

                                Serial
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
                                <Dropdown.Item eventKey="2">Popular</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Raiting</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                
            </Container >
            {
                (this.state.response) ? (<Cards films={this.state.response}/>) : (<h5>Loading..</h5>)
            }
            </>
            
        )
    }
}
