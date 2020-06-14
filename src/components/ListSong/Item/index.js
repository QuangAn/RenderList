import React from 'react';
import { FaMicrophone, FaPlay, FaEllipsisH, FaRegHeart } from 'react-icons/fa';
import MoreDropdown from '../MoreDropdown';
import styles from './style.module.css';

Item.defaultProps = {
    duration: "00:00",
    id: 1,
    image: "https://anotherjavaduke.files.wordpress.com/2018/08/avataaars-2.png",
    singer: "Singer Name",
    sortReal: 0,
    title: "Song Title",
    viewed: "Viewed"
}

function Item(props) {
    const { iconMoreClick, rightClickItem, isOpenDropDown, styleDropdown } = props
    return (
        <li onContextMenu= {rightClickItem} key={props.id} className={styles.chartItem}>
            <div className={styles.detailSong}>
                <div className={styles.sort}>
                    <div className={styles.sortNumber}>
                        <span>{props.id}</span>
                    </div>
                    <div className={styles.sortReal}>
                        <span className={props.sortReal >= 0 ? styles.arrowUp : styles.arrowDown}></span>
                        <span className={styles.num}>{Math.abs(props.sortReal)}</span>
                    </div>
                </div>
                <div className={styles.thumb}>
                    <span className={styles.playIcon}><FaPlay color='white' /></span>
                    <img src={props.image} alt={props.title} />
                    <span className={styles.opac}></span>
                </div>
                <div className={styles.infoSong}>
                    <span className={styles.title}>{props.title}</span>
                    <span className={styles.artist}>{props.singer}</span>
                </div>
                <div className={styles.duration}>
                    <span>{props.duration}</span>
                </div>
                <div className={styles.extension}>
                    <ul className={styles.listButtons}>
                        <li><span><FaMicrophone /></span></li>
                        <li><span><FaRegHeart /></span></li>
                        <li><span className={'iconMore'} onClick={iconMoreClick}><FaEllipsisH /></span></li>
                    </ul>
                </div>
            </div>
            {isOpenDropDown && <MoreDropdown styleDropdown= {styleDropdown} />  }
        </li>
    )
}

export default Item;