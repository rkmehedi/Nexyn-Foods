import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isHandled = false;
    setLoading(true);
    axios
      .get(`https://nexyn-foods-server.vercel.app/foods/${id}`)
      .then((res) => {
         if (!isHandled) {
        if (user?.email !== res.data.added_by.email) {
          toast.error("You are not authorized to edit this item.");
          isHandled = true;
          navigate("/my-foods");
          return;
        }
        setFood(res.data);
        setLoading(false);
      }})
      .catch((error) => {
        if (!isHandled) {
        console.error("Failed to fetch food item for update:", error);
        setLoading(false);
      }});
       return () => {
    isHandled = true;
  };
  }, [id, user?.email, navigate]);

  const handleUpdateFood = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedFoodData = {
      food_name: form.food_name.value,
      food_image: form.food_image.value,
      food_category: form.food_category.value,
      quantity: parseInt(form.quantity.value),
      price: parseFloat(form.price.value),
      food_origin: form.food_origin.value,
      description: form.description.value,
    };

    const token = localStorage.getItem("access-token");

    axios
      .put(
        `https://nexyn-foods-server.vercel.app/foods/${id}`,
        { ...updatedFoodData, email: user.email },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Food item updated successfully.");
          navigate("/my-foods");
        } else {
          toast.info(
            res.data.message || "No changes were made to the food item."
          );
        }
      })
      .catch((error) => {
        console.error("Update error:", error);
        toast.error("Failed to update food item.");
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!food) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">
          Food item not found or you do not have permission to edit it.
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-base-200">
      <div
        className="hero h-30  "
        
      >
        
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-[#004952]">
              Update Food Item
            </h1>
            <p className="mb-5 text-lg text-[#004952]">
              Refine the details of your delicious creation.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-base-200 py-16 px-4">
        <div className="card w-full max-w-4xl mx-auto shadow-2xl bg-base-100/60">
          <form onSubmit={handleUpdateFood} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text font-semibold">Food Name:</span>
                </label>
                <input
                  type="text"
                  name="food_name"
                  defaultValue={food.food_name}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text font-semibold">
                    Food Image URL:
                  </span>
                </label>
                <input
                  type="text"
                  name="food_image"
                  defaultValue={food.food_image}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text font-semibold">
                    Food Category:
                  </span>
                </label>
                <input
                  type="text"
                  name="food_category"
                  defaultValue={food.food_category}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text font-semibold">Quantity:</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={food.quantity}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text font-semibold">Price:</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="price"
                  defaultValue={food.price}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text font-semibold">
                    Food Origin (Country):
                  </span>
                </label>
                <input
                  type="text"
                  name="food_origin"
                  defaultValue={food.food_origin}
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <label className="label pb-1">
                <span className="label-text font-semibold">
                  Short Description:
                </span>
              </label>
              <textarea
                name="description"
                defaultValue={food.description}
                className="textarea textarea-bordered h-24"
                required
              ></textarea>
            </div>

            <div className="form-control w-full mt-8">
              <button className="btn w-full text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300">
                Confirm Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
