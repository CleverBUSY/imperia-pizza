import React from 'react'

const Contact = () => {
  return (
    <>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-gray-900">You can ask your question here</h1>
          <p class="leading-relaxed mt-4">We are always ready to answer your questions, accept feedback and help you with any questions. Do not hesitate to contact us!
          </p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Сonnect with us</h2>
          <form action="https://formsubmit.co/eldarruslanov791@gmail.com" method="POST">

          <div class="relative mb-4">
            <label for="text" class="leading-7 text-sm text-gray-600">text</label>
            <input type="text" id="text" name="text" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button type='submit' style={{backgroundColor: "#DC780B"}} class="text-white border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SEND</button>
          </form>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font relative">
    <div style={{width: "100%", height: "400px"}} class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Philharmonia%20Kyrgyzstan%20Bishkek&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </div>
  </section>
    </>
  )
}

export default Contact