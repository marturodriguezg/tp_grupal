import React from 'react'
import './CardGrid1.css'


export const CardGrid1 = () => {
  return (
        <section class="sneakers">
            <h2 class="text-center">SNEAKERS</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src="./assets/img/productos/snkr/Nike Blazer Mid '77 Vintage.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Unas zapas piolas</h5>
                            <p class="card-text">$99.999,99</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="./assets/img/productos/snkr/Nike Blazer Mid '77 Vintage.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Unas zapas piolas</h5>
                            <p class="card-text">$99.999,99</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="./assets/img/productos/snkr/Nike Blazer Mid '77 Vintage.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Unas zapas piolas</h5>
                            <p class="card-text">$99.999,99</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="./assets/img/productos/snkr/Nike Blazer Mid '77 Vintage.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Unas zapas piolas</h5>
                            <p class="card-text">$99.999,99</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        /*
        tal vez podemos usar este cardgrid

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
            {data.map(({id, title, text, img}) => (
                <div className='col'key={id}>
                    <div className='card'>
                        <img src={img} className='card-img-top' alt={title}/>
                        <div className='card-body'>
                            <h5 className='card-title'>{title}</h5>
                            <p className='card-text'>{text}</p>
                        </div>
                        <div className='card-footer'>
                            <BtnMain btnTxt={title} url={'#'} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <hr/>
        

        <section class="catalogo">
            
            
        </section>
        */
    )
}
