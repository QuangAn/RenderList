import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,

    Route
} from "react-router-dom";
import ListSong from '../../components/ListSong';
import SongDetail from '../../components/SongDetail';
import data from "../../data/db.json";
import { getPosts } from '../../request';
import './App.css';
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
                    <Route path="/Song/:id" component={SongDetail} />
                </Container>
            </div>
        </Router>
    );
}

export default App;