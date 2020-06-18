import React, { useState, useEffect } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListSong from '../../components/ListSong'
import { getPosts } from '../../request';
import $ from 'jquery'

function App() {
    const [items, setItems] = useState([])
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
        <div className="App" onClick={handleWrapClick} >
            <Container> 
                <ListSong 
                    iconMoreClick = {handleIconMoreClick}
                    rightClickItem = {handleRightClickItem}
                    isOpenDropDown = {isOpenDropDown}
                    styleDropdown = {styleDropdown}
                    songs={items} 
                />
            </Container>
        </div>
    );
}

export default App;