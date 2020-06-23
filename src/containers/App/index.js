import React, { useState, useEffect } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListSong from '../../components/ListSong'
import data from "../../data/db.json";
import { getPosts } from '../../request';
import $ from 'jquery'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import Nav from './Nav';

function App() {
    const [items, setItems] = useState(data.items)
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const [positionX, setPositionX] = useState();
    const [positionY, setPositionY] = useState();

    useEffect(() => {
        getPosts().then(result => setItems(result.data));
    }, [])

    function setPositionDropdown(x, y) {
        setPositionX(x);
        setPositionY(y);
        setIsOpenDropDown(!isOpenDropDown);
    }

    function handleIconMoreClick(e) {
        setPositionDropdown(e.pageX - 200, e.pageY + 30);
    }

    function handleRightClickItem(e) {
        e.preventDefault();
        setPositionDropdown(e.pageX, e.pageY)
    }

    function handleWrapClick(e) {
        if ($(e.target).closest("#dropdownContent,.iconMore").length === 0) {
            setIsOpenDropDown(false);
        }
    }
    const styleDropdown = {
        left: positionX,
        top: positionY
    }
    return (
        <Router>
            <div className="App" onClick={handleWrapClick} >
                <Nav />
                <Container> 
                    <Route path="/ListSong">
                        <ListSong 
                            iconMoreClick = {handleIconMoreClick}
                            rightClickItem = {handleRightClickItem}
                            isOpenDropDown = {isOpenDropDown}
                            styleDropdown = {styleDropdown}
                            songs={items} 
                        />
                    </Route>
                </Container>
            </div>
        </Router>
    );
}

export default App;