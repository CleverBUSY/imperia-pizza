import React, { useState } from 'react';
import axios from '../../axios';
import ingredients from "../../ingredients/ingredients"
import IngredientPost from '../../components/IngredientPost/IngredientPost';

const Admin = () => {
  const [data1, setData1] = useState({
    title: "",
    name: "",
    images: "",
    ingredient: "" ,
    category: [
      {
        name: "",
        id: ""
      }
    ]
  });

  const onChange1 = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);

    if (name === "name"|| name === "id") {
      setData1((prevData) => ({
        ...prevData,
        category: [
          {
            ...prevData.category[0],
            [name]: value
          }
        ]
      }));
    } else {
      setData1((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const submit1 = async () => {
    try {
      console.log(data1, "------data1-------");
      const res = await ingredients.post("/ingredients", data1);
      console.log(res);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const [data, setData] = useState({
    title: "",
    price: "",
    images: "",
    category: "",  
  });

  const onChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submit = async () => {
    try {
      console.log(data, "------data-------");
      const res = await axios.post("/food", data);
      console.log(res);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Post product</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">you can publish your products here, we advise you to fill out all the boxes</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="title" className="leading-7 text-sm text-gray-600">Name product</label>
                <input onChange={onChange} type="title" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="price" className="leading-7 text-sm text-gray-600">Price product</label>
                <input onChange={onChange} type="price" id="price" name="price" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="image" className="leading-7 text-sm text-gray-600">image url product</label>
                <input onChange={onChange} type="url" id="image" name="image" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
              <div className="p-2 w-full">
                <button onClick={submit} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">post products</button>
              </div>
          </div>
        </div>
      </div>
    </section>
    <IngredientPost/>
    </>
  );
};

export default Admin;
