import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchProducts } from '../../store/slice/productReducer';

const Products = () => {
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    const { productsData } = useSelector(store => store.products);
    // const [selectedProduct, setSelectedProduct] = useState(null);
    const [showDescription, setShowDescription] = useState({}); 

    useEffect(() => {
        dispatch(fetchProducts(categoryId));
    }, [dispatch, categoryId]);

    // Переместим объявление переменной filteredProducts сюда, чтобы она была доступна во всей функции компонента
    const filteredProducts = productsData && productsData.length > 0
        ? productsData.filter(product => product.category && product.category.id === parseInt(categoryId))
        : [];

    console.log(productsData, "dfghjkl");
    console.log(filteredProducts);
    console.log(categoryId);


    return (
        <div>
            <section className="text-black body-font bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black ">Products</h1>
                            <div className="h-1 w-20 bg-black rounded"></div>
                        </div>
                    </div>

                    {productsData ? (
                        <div className="flex flex-wrap -m-4">
                            {filteredProducts.slice(1,13).map(product => (
                                console.log(filteredProducts, "gjhvlkjbo"),
                                <div key={product.id} className="xl:w-1/4 md:w-1/2 p-4">
                                    <div style={{border: "1px solid black"}} className="bg-white bg-opacity-40 p-6 rounded-lg">
                                        <Link to={`/product/${product.id}`}>
                                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={product.images} alt="content" />
                                        </Link>
                                        <h3 className="tracking-widest text-xs font-medium title-font">{product.category.name}</h3>
                                        <h2 className="text-lg text-black font-medium title-font mb-4">{product.title}</h2>
                                        <h2 className="text-lg text-black font-medium title-font mb-4">${product.price}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Products;
