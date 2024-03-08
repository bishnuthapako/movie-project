import React from "react";

const Card = ({ movie }) => {
  const genres = movie.Genre ? movie.Genre.split(", ") : [];

  // console.log(genre.split(" "));
  return (
    <main className="flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="w-1/3 shadow-lg pr-4 lg:p-1">
          <img src={movie.Poster} alt="" className="w-52" />
        </div>
        <div className="w-[50%] px-4 flex flex-col gap-2 justify-center items-center">
          <div>
            <p className=" font-extrabold px-2 text-slate-100">{movie.Title}</p>
          </div>
          <div className="flex flex-row gap-3 py-4">
            <div className=" text-slate-50">
              <ion-icon name="star"></ion-icon>
            </div>
            <div className=" text-slate-50">{movie.imdbRating}</div>
          </div>
          <div className="flex gap-2 lg:gap-4  text-slate-300">
            <p className=" border">{movie.Rated}</p>
            <p>{movie.Year}</p>
            <p>{movie.Runtime}</p>
          </div>
          <figcaption className="flex lg:flex-row flex-col gap-2 lg:mt-3">
            {genres.map((genre, id) => (
              <div key={id}>
                <p className="rounded bg-slate-300 p-1 border border-indigo-600 outline-1">
                  {genre.toLowerCase()}
                </p>
              </div>
            ))}
          </figcaption>
        </div>
      </div>
      {/* down column */}
      <div className="lg:px-6 py-4">
        <div className="font-bold text-xl mb-2 text-slate-100">Plot:</div>
        <p className=" text-gray-400 text-base">{movie.Plot}</p>
      </div>
      <div className="px-6 py-4 pb-7">
        <div className="font-bold text-xl mb-2 text-slate-100">Cast:</div>
        <p className=" text-gray-400 text-base">{movie.Writer}</p>
      </div>
    </main>
  );
};

export default Card;
