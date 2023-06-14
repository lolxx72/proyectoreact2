import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({item}) => {
    const {addItem} = useCartContext()

    const onAdd = (contador) => {
        addItem(item, contador)
    }
    return (
        <div className='row g-0'>
            <div className="col-md-4">
                <img src={item.img} alt={`Imagen de ${item.nombre}`} className='img-fluid rounded-start' />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className='card-title'>{item.nombre}</h5>
                    <p className='card-text'>{item.marca}</p>
                    <p className='card-text'>${item.precio}</p>
                    <p className='card-text'>Disponibles: {item.stock}</p>
                    <ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd}/>
                </div>
            </div>
            
        </div>
    );
}

export default ItemDetail;
