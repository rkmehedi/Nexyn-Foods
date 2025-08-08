import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { FaEnvelope, FaGlobe, FaCube, FaInfoCircle } from "react-icons/fa";
import noPhoto from "../../assets/default.jpg";
import ErrorSmall from "./ErrorSmall";

const SingleFood = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://nexyn-foods-server.vercel.app/foods/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (!data) {
          setFood(null);
        } else {
          setFood(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch single food item:", error);
        setFood(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!food) {
    return (
      <ErrorSmall message="The food item you are looking for does not exist or could not be loaded." />
    );
  }

  return (
    <div className="bg-base-200 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-base-100 shadow-2xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={food.food_image}
                alt={food.food_name}
                className="w-full h-full object-cover min-h-[300px] md:min-h-[500px]"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {food.food_name}
              </h1>
              <div className="mb-4">
                <span className="font-semibold text-gray-500">Category:</span>
                <span
                  className="badge badge-lg ml-2 border-none text-white"
                  style={{ backgroundColor: "#e7717d" }}
                >
                  {food.food_category}
                </span>
              </div>
              <div className="mb-6">
                <span className="font-semibold text-gray-500">Price:</span>
                <p
                  className="text-3xl font-bold inline ml-2"
                  style={{ color: "#004952" }}
                >
                  ${food.price}
                </p>
              </div>
              <div className="mb-6">
                <span className="font-semibold text-gray-500">
                  Description:
                </span>
                <p className="text-gray-600 leading-relaxed mt-1">
                  {food.description}
                </p>
              </div>
              <div className="mt-auto pt-5 border-t">
                <Link
                  to={`/purchase/${food._id}`}
                  className="btn w-full text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300 text-lg"
                >
                  Purchase Food
                </Link>
              </div>
            </div>
          </div>

          <div className="p-8 border-t border-base-300">
            <h3 className="text-2xl font-bold mb-6">Food Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <FaCube className="text-2xl" style={{ color: "#e7717d" }} />
                <div>
                  <p className="text-sm text-gray-500">Quantity Available</p>
                  <p className="font-semibold text-lg">{food.quantity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaGlobe className="text-2xl" style={{ color: "#e7717d" }} />
                <div>
                  <p className="text-sm text-gray-500">Country of Origin</p>
                  <p className="font-semibold text-lg">{food.food_origin}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaInfoCircle
                  className="text-2xl"
                  style={{ color: "#e7717d" }}
                />
                <div>
                  <p className="text-sm text-gray-500">Times Purchased</p>
                  <p className="font-semibold text-lg">
                    {food.purchase_count || 0}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-base-200 p-8">
            <h3 className="text-2xl font-bold mb-4">Added By</h3>
            <div className="flex items-center space-x-4">
              <div className="avatar">
                <div
                  className="w-16 rounded-full ring ring-offset-base-100 ring-offset-2"
                  style={{ ringColor: "#004952" }}
                >
                  <img
                    src={food.added_by?.photoURL || noPhoto}
                    alt={food.added_by?.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = noPhoto;
                    }}
                  />
                </div>
              </div>
              <div>
                <p className="font-bold text-xl">{food.added_by?.name}</p>
                <div className="flex items-center space-x-2 text-gray-500 mt-1">
                  <FaEnvelope />
                  <span>{food.added_by?.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
