import React, { useState } from 'react'
import ingredients from "../../ingredients/ingredients"

const IngredientPost = () => {
    const [data1, setData1] = useState({
        title: "",
        name: "",
        images: "",
        ingredient: "",
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

        if (name === "name" || name === "id") {
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
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Post ingredient</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        write the ingredients here, add everything you need but don’t write too much</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="title" className="leading-7 text-sm text-gray-600">ingredient name</label>
                                <input onChange={onChange1} type="title" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="images" className="leading-7 text-sm text-gray-600">ingredient image url</label>
                                <input onChange={onChange1} type="url" id="images" name="images" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">ingredient category name</label>
                                <input onChange={onChange1} type="name" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="id" className="leading-7 text-sm text-gray-600">ingredient category id 1..7</label>
                                <input onChange={onChange1} type="id" id="id" name="id" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="ingredient" className="leading-7 text-sm text-gray-600">ingredient list</label>
                                <textarea onChange={onChange1} id="ingredient" name="ingredient" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button onClick={submit1} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">post ingredient</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IngredientPost