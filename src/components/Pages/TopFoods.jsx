import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const TopFoods = () => {
  const [topFoods, setTopFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://nexyn-foods-server.vercel.app/top-foods")
      .then((res) => {
        setTopFoods(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch top foods:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="px-4 py-12 rounded-3xl bg-base-200">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Top Selling Foods</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          Customer favorites, made with love and the finest ingredients.
        </p>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topFoods.map((food) => (
            <div
              key={food._id}
              className="card shadow-xl bg-base-100/60 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-red-400 hover:shadow-lg hover:bg-red-50/40"
            >
              <figure>
                <img
                  src={food.food_image}
                  alt={food.food_name}
                  className="h-60 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-2xl">{food.food_name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span
                    className="badge badge-lg border-none text-white"
                    style={{ backgroundColor: "#e7717d" }}
                  >
                    {food.food_category}
                  </span>
                  <span
                    className="text-lg font-semibold"
                    style={{ color: "#004952" }}
                  >
                    ${food.price}
                  </span>
                </div>
                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/foods/${food._id}`}
                    className="btn btn-sm text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="text-center mt-12">
        <Link
          to="/foods"
          className="btn btn-lg text-white bg-[#004952] border-none  hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300"
        >
          See All Foods
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
