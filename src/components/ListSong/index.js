import React from 'react';
import styles from './style.module.css';
import Item from '../../components/ListSong/Item'
const ListSong = props => {
    const { songs, iconMoreClick, rightClickItem, isOpenDropDown, styleDropdown } = props
    return (
        <ul className={styles.listSong}>
            {
                songs && songs.map(({id, ...theRest}) => (
                    <Item 
                        iconMoreClick = {iconMoreClick}
                        rightClickItem = {rightClickItem}
                        isOpenDropDown = {isOpenDropDown}
                        styleDropdown = {styleDropdown}
                        key={id} 
                        id={id}
                        {...theRest} 
                    />
                ))
            }
        </ul>
    )
}
export default ListSong;