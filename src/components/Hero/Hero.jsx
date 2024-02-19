import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleScrollToCategories = () => {
        const categoriesSection = document.getElementById('categories');
        if (categoriesSection) {
            categoriesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleScrollToProducts = () => {
        const categoriesSection = document.getElementById('products');
        if (categoriesSection) {
            categoriesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id='header' style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1154731746/photo/cheeseburger-with-cola-and-french-fries.jpg?s=612x612&w=0&k=20&c=DfuI7KyMDIF8_JH66oAhIZLOgL4RRXulfv24PQ5vTEo=')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: "relative",
            backgroundPosition: 'center',
            color: "white",
        }} className={`text-gray-600 body-font section-container ${isVisible ? 'fade-in-left' : ''}`}>
            <div style={{ position: 'relative' }} className={`container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ${isVisible ? 'fade-in-left' : ''}`}>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4NpGEpaoBsPW558jxgbB9I7HCmUMq8VGzOnaQ0gpBXlxopWp"
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 text-white md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Before they sold out
                        <br className="hidden lg:inline-block" />
                        readymade gluten
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                        plant cold-pressed tacos poke beard tote bag. Heirloom echo park
                        mlkshk tote bag selvage hot chicken authentic tumeric truffaut
                        hexagon try-hard chambray.
                    </p>
                    <div className="flex justify-center">
                        <button style={{
                            border: "none",
                            backgroundColor: "#DC780B",
                            color: "white",
                            borderRadius: "3px"
                        }} className="inline-flex text-white border-0 py-2 px-6 focus:outline-none text-lg" onClick={handleScrollToCategories}>
                            connect with us
                        </button>
                        <button style={{
                            border: "none",
                            backgroundColor: "#DC780B",
                            color: "white",
                            borderRadius: "3px"
                        }} onClick={handleScrollToProducts} className="ml-4 inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none  text-lg">
                            go to products
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
