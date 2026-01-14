import React, { useRef, useState } from "react";
import YouTube from "react-youtube";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const trendingMovies = [
  {
    id: 1,
    title: "Stranger Things",
    img: "https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXMlNt8lRlEH5nkoYUHkzaYFsKJJvQq-3wQ4-DyYWQmKlxu9qrynyD5cNZEHPowiQL9IPEPbTSBM9B-id8nR8QPVfL1P_CQjPOqe5ZsDbekwH5AVJbhS3v4gSBXhZb4qdcE6.webp?r=e8a",
    youtube_link: "https://youtu.be/AfQ13jsLDms?si=u14Uiutqc_N9ctTR",
  },
  {
    id: 2,
    title: "De De Pyaar De 2",
    img: "https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRyZw5hVzYNlj5cnTUlbq5EqtdSdsAsspntVAHNzTW-VaxaTK4A5d_0pDxPjmoxcs7O51dpWAhCpvB-1r6tBUotO4OHGYteFQzA.webp?r=32c",
    youtube_link: "https://www.youtube.com/watch?v=59aIp7SfIIk",
  },
  {
    id: 3,
    title: "The Great Indian Kapil Show",
    img: "https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABbpz3fsxM5TGqoYWiTnA2kq-R3waycUueAZUPtvenIk-bUE4jym2ydzTl439bqrqic5kUV_rcZ-IsPqsE_KrwleXWadirj7aJAlgQKLxbXCD_jfhmh5St1tNMtsifA0gjBW1.webp?r=14f",
    youtube_link: "https://www.youtube.com/watch?v=HVuhuQWLBew",
  },
  {
    id: 4,
    title: "Akhanda 2",
    img: "https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVeIHiYaDJJIysNwDA2dgsHF3DpeFf1lXUwfmyaYJGvJxptKGrreOWRiosLCEviE_yZybYWhxEPSmyxoSVNhCycRblBIR_sH38c.webp?r=902",
    youtube_link: "https://youtu.be/qlCBzdZSnlY?si=Oq3t2PNsPVXuSCND",
  },
  {
    id: 5,
    title: "Jolly LLB 3",
    img: "https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTJf3e14TtZ2Z3216UaphDq5nf1SaFyC-0R59wDCSyGdNROqYPTHg8g8SU0kbcn61BMumEkghBN8r11S6_bhQvNJ4oQD4oECM-M.webp?r=e5d",
    youtube_link: "https://youtu.be/ajIBn8vaNq0?si=gCl-mGnqIYeIyZZt",
  },
  {
    id: 6,
    title: "Haq",
    img: "https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABd-hr2-TdXUEamf_D6vpIxJwKZnueEgjHxa05fdGIYTOXwYvXtkrUhfvtySeRKLFhR7MDZG5cNAtmb52qROa-ZKOftFckYIuFKo.webp?r=4a4",
    youtube_link: "https://youtu.be/-x-e2evh3-c?si=HREwsIsj0Tzg3ZSp",
  },
  {
    id: 7,
    title: "People We Meet on Vacation",
    img: "https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABc5jC1Atre6lcqsaU8r8MZX1LPuW54mSWUAGZgVF_k8rPN12IyFvBsuUEd5VU-Egs1DR2Qhjg0ow5cr4W-fd5z5w43hN3_AjLr7VljUo5N22b3hDgp1LCJh0StiNOgEtkozR.webp?r=9fe",
    youtube_link: "j6fK7Y0R_X8",
  },
  {
    id: 8,
    title: "Eko",
    img: "https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABbYO2gjJ1FS1sOclm-qxujj4AMMEnOQXvLRyAxUhpecdfWiICDz2zBlM31jFAdOU2lfZ57ZhXdTP5VfvwyoBE_SDTG4AuVN7XaE.webp?r=1f1",
    youtube_link: "R2S6p6fS8-A",
  },
  {
    id: 9,
    title: "Dude",
    img: "https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQFmi2qrQTOShMevIIgOcMdy2h-nqU5swZHnjzJZJbnfTO_oJnzTZp4B8KKOEPMq0DzI2z5-XE4bjchCAQYlPvWR1jBzggTo3sM.webp?r=960",
    youtube_link: "J5q_z_S7BwE",
  },
  {
    id: 10,
    title: "The Girlfriend",
    img: "https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTELBclTkAkJgPaHohb86tSczXpMkZ5Xm0gaL2SgOH9fV5qJEBJsRVyWJgxYba7AnGM4u-MWP3HXAh8lA_H5IZS24mvCNyq65YI.webp?r=24f",
    youtube_link: "O6T_P9W_p8w",
  },
];

export default function TrendingNow() {
  const scrollRef = useRef(null);
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [trailerId, setTrailerId] = useState("");

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -400, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const getYouTubeVideoId = (url) => {
    if (!url) return "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
  };

  const handleClick = (movie) => {
    if (user) {
      const videoId = getYouTubeVideoId(movie.youtube_link);
      setTrailerId(videoId);
    } else {
      navigate("/login");
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="bg-black py-10 px-4 md:px-10 lg:px-20 overflow-hidden">
      <h2 className="text-white text-2xl font-bold mb-6">Trending Now</h2>

      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-0 z-40 w-12 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white cursor-pointer"
        >
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="m8.414 12 7.293 7.293-1.414 1.414-8-8a1 1 0 0 1 0-1.414l8-8 1.414 1.414z" />
          </svg>
        </button>

        <ul
          ref={scrollRef}
          className="flex gap-2 md:gap-4 overflow-x-auto overflow-y-hidden scroll-smooth no-scrollbar py-6"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {trendingMovies.map((movie, index) => (
            <li
              key={movie.id}
              onClick={() => handleClick(movie)}
              className="relative shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer
                         w-[calc((100%-48px)/7)] md:w-[calc((100%-96px)/7)]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-2/3 flex items-end">
                <div className="relative z-10 w-[80%] ml-auto h-full rounded-sm overflow-hidden shadow-md">
                  <img
                    src={movie.img}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className="absolute left-2 bottom-0 text-[6vw] md:text-[8vw] font-black leading-none text-black select-none z-20 pointer-events-none"
                  style={{
                    WebkitTextStroke: "1px #fff",
                    filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))",
                    fontFamily: "sans-serif",
                  }}
                >
                  {index + 1}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-0 z-40 w-12 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white cursor-pointer"
        >
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="m15.586 12-7.293 7.293 1.414 1.414 8-8a1 1 0 0 0 0-1.414l-8-8-1.414 1.414z" />
          </svg>
        </button>
      </div>

      {trailerId && (
        <div className="mt-8 relative pt-[56.25%] bg-black">
          <button
            onClick={() => setTrailerId("")}
            className="absolute top-[-40px] right-0 text-white text-xl font-bold cursor-pointer"
          >
            Close ✕
          </button>
          <div className="absolute top-0 left-0 w-full h-full">
            <YouTube videoId={trailerId} opts={opts} className="w-full h-full" containerClassName="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
}
