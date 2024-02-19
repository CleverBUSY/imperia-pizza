import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slice/productReducer';
import { setCurrentPage } from '../../store/slice/paginationReducer';

const ProductsPage = () => {
    const dispatch = useDispatch();
    const { productsData } = useSelector(store => store.products);
    const { currentPage, productsPerPage } = useSelector(store => store.pagination);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (!productsData) {
        return <div>Loading...</div>;
    }

    const totalPages = Math.ceil(productsData.length / productsPerPage);

    // Функция для фильтрации продуктов по названию
    const filteredProducts = productsData.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayedProducts = filteredProducts.slice(startIndex, endIndex);

    const goToPage = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };

    const renderVisiblePages = () => {
        const visiblePages = [];
        const maxVisiblePages = 4; 
        const startPage = Math.max(currentPage - 1, 1);
        const endPage = Math.min(currentPage + 1, totalPages);

        for (let i = startPage; i <= endPage; i++) {
            visiblePages.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    disabled={currentPage === i}
                    style={{ margin: '0 5px' }}
                >
                    {i}
                </button>
            );
        }

        return visiblePages;
    };

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div style={{justifyContent: "space-between"}} className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All PRODUCTS</h1>
                            <div className="h-1 w-20 bg-black rounded"></div>
                        </div>
            <input
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '20px', padding: '5px', border: "1px solid black", borderRadius: "4px" }}
            />
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {displayedProducts.map(product => (
                            <div key={product.id} className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={product.images} alt="content"/>
                                    <h3 style={{ color: "#DC780B" }} className="tracking-widest text-xs font-medium title-font">{product.category.name}</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{product.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div style={{ marginTop: '20px', textAlign: 'center', display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", paddingBottom: "30px" }}>
                <button style={{ fontSize: "30px"}} onClick={goToPreviousPage} disabled={currentPage === 1}>
                    {'‹'}
                </button>
                <p>
                    {renderVisiblePages()}
                </p>
                <button style={{ fontSize: "30px"}} onClick={goToNextPage} disabled={currentPage === totalPages}>
                    {'›'}
                </button>
            </div>
        </div>
    );
};

export default ProductsPage;
