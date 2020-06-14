import React from 'react';
import styles from './style.module.css';

const MoreDropdown = props => {
    const { styleDropdown } = props
    return (
        <div tabIndex="0" id="dropdownContent" style={styleDropdown} className={styles.dropdownContent}>
	        <a href="https://reactjs.org/">Thêm vào danh sách phát</a>
	        <a href="https://reactjs.org/">Bình luận</a>
	        <a href="https://reactjs.org/">Tải xuống</a>
	        <a href="https://reactjs.org/">Sao chép link</a>
	        <a href="https://reactjs.org/">Thông tin</a>
	    </div>
    )
}
export default MoreDropdown;