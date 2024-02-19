import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryFood } from '../../store/slice/categoryFood';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const { categories } = useSelector(store => store.catalog);
  const dispatch = useDispatch();
  const [displayedCategories, setDisplayedCategories] = useState([]);

  useEffect(() => {
    dispatch(fetchCategoryFood());
  }, [dispatch]);

  useEffect(() => {
    const updateDisplayedCategories = () => {
      if (window.innerWidth <= 700) {
        setDisplayedCategories(categories.slice(0, 3));
      } else {
        setDisplayedCategories(categories);
      }
    };

    updateDisplayedCategories();

    window.addEventListener('resize', updateDisplayedCategories);

    return () => {
      window.removeEventListener('resize', updateDisplayedCategories);
    };
  }, [categories]);

  if (!displayedCategories.length) {
    return <h1>Loading...</h1>;
  }

  console.log(displayedCategories, "-----------apppaaaaa");
  return (
    <section className="text-gray-600 body-font">
      <div id='products' className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {displayedCategories.map(el => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={el.id}>
              <Link to={`products/${el.id}`}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={el.avatar} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY :</h3>
                  <h2 className="text-gray-900 title-font text-xl font-medium">{el.name}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalog;
