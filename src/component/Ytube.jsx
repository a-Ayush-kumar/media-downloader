import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import axios from "axios";

export default function Ytube() {
  const [URL, setURL] = useState("");

  const handleURLY = (e) => {
    e.preventDefault();
    setURL(e.target.value);
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://youtube-media-downloader.p.rapidapi.com/v2/channel/videos",
      params: {
        id: URL,
      },
      headers: {
        "x-rapidapi-key": process.env.REACT_API_KEY,
        "x-rapidapi-host": "youtube-data8.p.rapidapi.com",
        "content-type": "application/json",
      },
    };
    try {
      const res = await axios.request(options);
      console.log(res);
      // console.log(res?.data?.formats[Number(0)]?.url);
      // window.location.href = res?.data?.formats[Number(0)]?.url;
    } catch (error) {
      console.log(error);
    }
  };
  console.log(URL);
  return (
    <div
      className="App m-5 p-1 flex items-center flex-col gap-x-2 justify-center
      rounded-3xl border-3 h-1/2 w-2/3 border-green-950 
      bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gray-300 via-pink-400 to-red-800"
    >
      <div className="flex items-center justify-center font-bold italic text-xl">
        <FaYoutube size={30} />
        <p>Youtube Video Downloader !!</p>
      </div>
      <div className="m-1 p-1">
        <input
          type="url"
          className="h-10 w-[80%] mr-3 bg-yellow-100 shadow-md outline-none border-none px-5 italic font-bold rounded-full"
          value={URL}
          onChange={handleURLY}
        />
        <button
          className="bg-gradient-red-black p-1 hover:text-black px-4 text-white font-bold rounded-full border-3 border-black"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
}
