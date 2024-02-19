import React from 'react'

const ImageHome = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Our incommon menu</h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Indulge in the aromatic allure of freshly brewed coffee, where every sip unveils a journey of flavor. At our café, we celebrate the artistry of coffee making, sourcing only the finest beans from around the globe. From the velvety smoothness of a latte to the bold intensity of an espresso shot, our menu offers an array of delights to satisfy every coffee enthusiast.</p>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/640px-Supreme_pizza.jpg" />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://ik.imagekit.io/awwybhhmo/satellite_images/japanese/beyondmenu/hero/16.jpg?tr=w-3840,q-50" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://www.bactrack.com/cdn/shop/articles/how-much-alcohol-in-drink.jpg?v=1530829813&width=2160" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://www.pnp.ru/upload/entities/2022/04/01/14/article/detailPicture/e8/b5/f4/7f/17ee889085fecff5e0365e86f5e470d2.jpg" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://gotovimop.com/wp-content/uploads/2021/07/salat-leto-s-tuncom.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageHome