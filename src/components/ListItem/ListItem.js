import React from 'react'
import { Link } from 'react-router-dom';
import styles from './ListItem.module.css'

const ListItem = () => {

  const { listContainer_item } =styles;  

  return (
    <div className={listContainer_item}>
        <img />
        <div>
            <h5>Cardtitle</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nihil.</p>
            <Link to='/'>
                <button>Ver detalle</button>
            </Link>
        </div>
    </div>
  )
}

export default ListItem