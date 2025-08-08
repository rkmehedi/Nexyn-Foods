import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";


const AllFood = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://nexyn-foods-server.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch foods:", error);
        setLoading(false);
      });
  }, []);

  const filteredFoods = foods.filter((food) =>
    food.food_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      <div className="hero h-37">
        
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-3 text-5xl font-bold text-[#004952]">
              All Our Foods
            </h1>
            <p className="mb-3 text-lg text-[#004952]">
              Explore our diverse menu, featuring dishes from around the world.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-center mb-12">
          <div className="form-control w-full max-w-lg">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for a food item..."
                className="input input-bordered w-full pr-16"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="btn absolute top-0 right-0 rounded-l-none text-white"
                style={{ backgroundColor: "#004952" }}
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFoods.map((food) => (
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
                    <p className="text-gray-500">
                      Available Quantity: {food.quantity}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="badge badge-outline">
                        {food.food_category}
                      </span>
                      <span
                        className="text-lg font-semibold"
                        style={{ color: "#004952" }}
                      >
                        ${food.price} BDT
                      </span>
                    </div>
                    <div className="card-actions justify-center mt-4">
                      <Link
                        to={`/foods/${food._id}`}
                        className="btn btn-sm w-full text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] hover:text-white transition-all duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFoods.length === 0 && (
              <div className="text-center py-16">
                <p className="text-2xl font-semibold">
                  No food items match your search.
                </p>
                <p className="text-gray-500 mt-2">
                  Try searching for something else!
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllFood;
