import React from 'react';

const urlImage = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHoML_RWrNhS3xbZNeWhpj9jjsyG7Ex-43aw&usqp=CAU",
        name: "Pizza",
        title: "Indulge in the savory delight of our handcrafted pizzas, made with the finest ingredients and baked to perfection in our wood-fired oven."
    },
    {
        img: "https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/intro-1662064407.jpg",
        name: "Burger",
        title: "Sink your teeth into our juicy, hand-formed patties, grilled to perfection and nestled between soft, toasted buns."
    }
];
const urlImage2 = [
    {
        img: "https://culinary-holiday.ru/wp-content/uploads/2021/10/urok-25-salat-s-tyoplym-syrom-i-veshankami-i-ruletiki-iz-baklazhanov-1.jpg",
        name: "Salat",
        title: "At Imperia Food, we believe in the power of wholesome and nutritious ingredients to create salads that are as delicious as they are satisfying."
    },
    {
        img: "https://volshebnaya-eda.ru/wp-content/uploads/2021/12/zakuska-so-shpromtami-12.jpg",
        name: "Zakuska",
        title: "At Imperia Food, we celebrate the art of zakuska – the Russian tradition of small, savory bites enjoyed alongside drinks or as prelude to a meal."
    },
    {
        img: "https://i.notretemps.com/1400x787/smart/2022/03/29/plaques-de-chocolat.jpg",
        name: "Sladkoe",
        title: "At Imperia Food, we celebrate the timeless allure of chocolate, elevating it from a mere treat to an art form."
    }
]
const urlImage3 = [
    {
        img: "https://www.thespruceeats.com/thmb/iHmC1x1UNWoq4GP4i_81-xajw5g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/popular-screwdriver-variations-759820-hero-01-6f67f02622a54bbb8aeabd7eb65bb3a0.jpg",
        name: "Drink",
        title: "From refreshing mocktails bursting with fresh fruit flavors to expertly crafted cocktails infused with premium spirits, our menu offers a symphony of libations to tantalize your taste buds."
    },
    {
        img: "https://karakatizza.com/wp-content/uploads/2020/11/rolly-i-sushi-nikolaev.jpg",
        name: "Sushi",
        title: "Indulge in the savory delight of our handcrafted pizzas, made with the finest ingredients and baked to perfection in our wood-fired oven."
    }
]

const PopularFood = () => {
    const randomIndex = Math.floor(Math.random() * urlImage.length);
    const randomItem = urlImage[randomIndex];
    const random2Index = Math.floor(Math.random() * urlImage2.length);
    const randomItem2 = urlImage2[random2Index];
    const random3Index = Math.floor(Math.random() * urlImage3.length);
    const randomItem3 = urlImage3[random3Index];

    return (
        <div>
            <div style={{ marginTop: "-170px", marginBottom: "80px" }}></div>
            <section className="text-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-2/3 mx-auto">
                        <div className="flex flex-wrap w-full bg-gray-900 py-32 px-10 relative mb-4">
                            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={randomItem.img} />
                            <div className="text-center relative z-10 w-full">
                                <h2 className="text-2xl text-white font-medium title-font mb-2">{randomItem.name}</h2>
                                <p className="leading-relaxed text-white">{randomItem.title}</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-2">
                            <div class="px-2 w-1/2">
                                <div class="flex flex-wrap w-full bg-gray-900 sm:py-24 py-16 sm:px-10 px-6 relative">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={randomItem2.img} />
                                    <div class="text-center relative z-10 w-full">
                                        <h2 class="text-xl text-white font-medium title-font mb-2">{randomItem2.name}</h2>
                                        <p class="leading-relaxed text-white">{randomItem2.title}</p>
                                        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="px-2 w-1/2">
                                <div class="flex flex-wrap w-full bg-gray-900 sm:py-24 py-16 sm:px-10 px-6 relative">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={randomItem3.img} />
                                    <div class="text-center relative z-10 w-full">
                                        <h2 class="text-xl text-white font-medium title-font mb-2">{randomItem3.name}</h2>
                                        <p class="leading-relaxed text-white">{randomItem3.title}</p>
                                        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PopularFood;
