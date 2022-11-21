import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CardGrid.css'


// Este componente recibe los datos dentro de la propiedad {data} la cual es enviada desde Home.js
export const CardGrid = ({data}) => {
    
    const { addItemToCart, deleteItemToCart} = useContext(CartContext)
  return (
    <>
        <div className='container'>
            <div className='row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5'>
                {/* inicio del .map */}
                {data.map((product, i) => (      /* filtrado por categoria si es posible */
                    <div key={i} className='col'>
                        <div className='card'>
                            <img src={product.img} alt={product.title} />
                            <div className='card_div text-center'>
                                <p>
                                {product.title} - ${product.price}
                                </p>
                                <button className='btn btn-primary buy' onClick={()=> addItemToCart(product)}>Comprar</button>
                                <button class='btn border3 border33 btnposition' onClick={()=> deleteItemToCart(product)}>X</button>
                            </div>
                        </div>  
                    </div>
                ))}
                {/* fin del .mpa */}
            </div>
        </div>  
    </>
    )
}
