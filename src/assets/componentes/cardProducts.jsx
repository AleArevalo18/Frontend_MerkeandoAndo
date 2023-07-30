import React from 'react';
import styles from './styles.css?inline'

const ProductList = ({ products }) => {
    return (
        <>
            <h2 className='font-weight-bold text-uppercase text-center my-5'> Conoce nuestras vadiedad de productos </h2>

            <div className="container">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-3 mb-4 mx-3" key={product.id}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={product.imagen} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Producto: {product.nombre}</h5>
                                    <p className="card-text">Marca: {product.marca}</p>
                                    <p className="card-text">Presentación: {product.presentacion}</p>
                                    <p className="card-text">Precio: ${product.precio}</p>
                                    <a href="#" className="btn btn-primary">
                                        Agregar
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductList;