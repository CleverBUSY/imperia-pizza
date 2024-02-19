import React from 'react';
import Video1 from "../../assets/video.mp4";
import Video2 from "../../assets/pizza.mp4";

const VideoCategory = () => {
  return (
    <section  style={{marginTop: "-85px"}} className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <video autoPlay loop muted className="object-cover object-center h-full w-full">
                <source src={Video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Ingredients</h2>
            <p className="leading-relaxed text-base">our dishes are prepared with the most common dry ingredients to learn what ingredients are being cooked. Our dishes can be pressed on a button and you can see all the ingredients.</p>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">See ingredients</button>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <video autoPlay loop muted className="object-cover object-center h-full w-full">
                <source src={Video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Pizza</h2>
            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoCategory;
