import styles from './List.module.css'
import React from 'react'

const List = (props) => {
    const [listActive, setListActive] = React.useState(0);

    console.log(listActive);
    
    return(
        <div>
            <h2>Choose your hero</h2>
            <ul className={styles.list}>
                {props.cars.map((value,id) => (
                    <li key={id} onClick={() =>{setListActive(id)}} className={listActive == id ? ([styles.list__item, styles.active].join(" ")) : styles.list__item}>{value}</li> 
                ))}
                {/* */}
                
            </ul>
        </div>
    )


}
export default List;