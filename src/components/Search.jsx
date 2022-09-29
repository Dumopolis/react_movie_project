import React, { Component } from 'react';
import Cards from "../components/Cards"
import { Form, Row, Button, Container, Col, Dropdown } from "react-bootstrap"
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Preloader from './Preloader';

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            searchType: '',
            response: '',
            sortBy: 'rating.kp',
            loading: true
        }
    }
    handleSearch = (event) => {
        event.preventDefault();
        this.search()


    }
    search = () => {
        const keyword = this.state.search;
        const type = this.state.searchType;
        const sortBy = this.state.sortBy
        this.setState({ loading: true })
        fetch(`https://api.kinopoisk.dev/movie/?token=BN0Y7AB-HDXMEB8-HT1R2T6-2T1RKXF&search=${keyword}&field=name&isStrict=false&sortField=${sortBy}&sortType=-1&limit=6${(type.length) ? (type) : ''}`, {
            method: 'GET',


        })
            .then(response => response.json())
            .then(data => this.setState({ response: data.docs, loading: false }))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.search()
    }

    addSearch = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.attributes.value.value }, () => this.search());
        console.log(event.target.name,);

    }


    render() {
        const { search, searchType } = this.state

        return (
            <>
                <Container>

                    <Row >
                        <Col md={4}>
                            <Form
                                className="d-flex"
                                onSubmit={this.handleSearch}
                            >
                                <Form.Control
                                    name="search"
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    value={search}
                                    onChange={this.addSearch}
                                />
                                <Button
                                    onClick={this.handleSearch}
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
                                    onChange={this.handleChange}
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
                                    onChange={this.handleChange}
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
                                    onChange={this.handleChange}
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
                                    onChange={this.handleChange}
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
                                        onClick={this.handleChange}
                                    >Popular</Dropdown.Item>
                                    <Dropdown.Item
                                        name="sortBy"
                                        eventKey="3"
                                        value="rating.kp"
                                        onClick={this.handleChange}
                                    >Raiting</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>

                </Container >
                {
                    (!this.state.loading) ? ((this.state.response.length) ? (<Cards films={this.state.response} />) : (<h3>Ничего не найдено</h3>)) : (<Preloader />)
                }
            </>

        )
    }
}
