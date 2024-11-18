import React, { useState } from "react";
import { SlSocialSpotify } from "react-icons/sl";
import axios from "axios";

export default function Card() {
  const [URL, setURL] = useState("");

  const handleURL = (e) => {
    e.preventDefault();
    setURL(e.target.value);
  };

  const handleDownload = async () => {
    const options = {
      method: "GET",
      url: "https://spotify-downloader9.p.rapidapi.com/downloadSong",
      params: {
        songId: `${URL}`, // Corrected template literal
      },
      headers: {
        "x-rapidapi-key": "88bfa7aa86msh037f2929f66feddp1b4247jsn6f626ecf1b78",
        "x-rapidapi-host": "spotify-downloader9.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      //console.log(response.data.data.downloadLink);
      window.location.href = response.data.data.downloadLink;
    } catch (error) {
      console.error("Error downloading song:", error);
    }
  };

  return (
    <div
      className="App m-5 p-1 flex items-center flex-col gap-x-2 justify-center
      rounded-3xl border-3 h-1/2 w-2/3 border-green-950 
      bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gray-300 via-emerald-600 to-green-500"
 >
      <div className="flex items-center justify-center font-bold italic text-xl">
        <SlSocialSpotify size={30} />
        <p>Spotify Downloader !!</p>
      </div>
      <div className="border-3 rounded-full m-1 p-1 shadow border-dark-green">
        <input
          type="url"
          className="h-10 w-[500px] mr-3 bg-yellow-100 shadow-md outline-none border-none px-5 italic font-bold rounded-full"
          value={URL}
          onChange={handleURL}
        />
        <button
          className="bg-gradient-black-green p-1 hover:text-black px-4 text-white font-bold rounded-full border-3 border-black"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
}
