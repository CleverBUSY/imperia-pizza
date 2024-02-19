// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCategoryFood } from '../../store/slice/categoryFood';

// const Catalog = () => {
//   const { categories, loading, error } = useSelector(store => store.catalog); // Добавляем loading и error
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchCategoryFood());
//   }, [dispatch]);  

//   // Если данные загружаются, показываем индикатор загрузки
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Если возникла ошибка при загрузке данных, показываем сообщение об ошибке
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h2>Categories</h2>
//       <ul>
//         {categories.map(category => (
//           <li key={category.id}>{category.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Catalog;
