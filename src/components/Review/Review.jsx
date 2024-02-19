import React, { useState } from 'react';
import reviwPost from '../../reviewPost';

const Review = () => {
  const [data, setData] = useState({
    name: "",
    avatar: "",
  });

  const [rating, setRating] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submit = async () => {
    console.log(data, "------data-------");
    // Assuming "star" is the field to store the rating in your API
    const postData = {
      ...data,
      star: rating,
    };

    const res = await reviwPost.post("/Rewiev", postData);
    console.log(res);

    // Reset data and close modal after submission
    setData({
      name: "",
      avatar: "",
    });
    setRating(0);
    setShowModal(false);
  };

  const delet = async () => {
    console.log(data, "------data-------");
    const res = await reviwPost.delete("/Rewiev", data);
    console.log(res);

    // Reset data after deletion
    setData({
      name: "",
      avatar: "",
    });
  };

  const handleStarClick = (stars) => {
    setRating(stars);
    setShowModal(false);
  };

  return (
    <div>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-black">
          Full Name
        </label>
        <input
          onChange={onChange}
          type="text"
          id="name"
          name="name"
          value={data.name}
          className="w-full bg-gray-900 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <label htmlFor="avatar" className="leading-7 text-sm text-black">
          Avatar
        </label>
        <input
          onChange={onChange}
          type="text"
          id="avatar"
          name="avatar"
          value={data.avatar}
          className="w-full bg-gray-900 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Submit
      </button>
      <button
        onClick={delet}
        className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Delete
      </button>

      {showModal && (
        <div className="modal">
          <p>Select rating:</p>
          <div>
            {[1, 2, 3, 4, 5].map((stars) => (
              <span key={stars} onClick={() => handleStarClick(stars)}>
                {stars} stars
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
