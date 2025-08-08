import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const handleAddFood = (event) => {
    event.preventDefault();
    const form = event.target;

    const newFood = {
      food_name: form.food_name.value,
      food_image: form.food_image.value,
      food_category: form.food_category.value,
      quantity: parseInt(form.quantity.value),
      price: parseFloat(form.price.value),
      food_origin: form.food_origin.value,
      description: form.description.value,
      added_by: {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      },
    };

    const token = localStorage.getItem("access-token");

    axios
      .post("https://nexyn-foods-server.vercel.app/foods", newFood, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Food item added successfully.",
            icon: "success",
            confirmButtonText: "Awesome!",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Failed to add food item.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="">
      <div>
        <div className="hero h-37">
          
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-auto">
              <h1 className="mb-3 text-5xl font-bold text-[#004952]">
                Add a New Food Item
              </h1>
              <p className="mb-3 text-lg text-[#004952]">
                Share your culinary creations with the world.
              </p>
            </div>
          </div>
        </div>

        <div className="pb-16 px-4">
          <div className="card w-full max-w-4xl mx-auto shadow-2xl bg-base-100/60">
            <form onSubmit={handleAddFood} className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text font-semibold">Food Name:</span>
                  </label>
                  <input
                    type="text"
                    name="food_name"
                    placeholder="Enter food name e.g., Biriyani"
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
                    placeholder="http://example.com/image.jpg"
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
                    placeholder="e.g., Bangoli, Italian, Mexican"
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
                    placeholder="e.g., 50"
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
                    placeholder="e.g., 399"
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
                    placeholder="e.g., Bangladesh, Italy"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text font-semibold">Added By:</span>
                  </label>
                  <input
                    type="text"
                    value={user?.displayName}
                    className="input input-bordered w-full bg-base-200"
                    readOnly
                  />
                </div>

                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text font-semibold">
                      Creator Email:
                    </span>
                  </label>
                  <input
                    type="email"
                    value={user?.email}
                    className="input input-bordered w-full bg-base-200"
                    readOnly
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
                  className="textarea textarea-bordered h-24"
                  placeholder="Describe the ingredients, making procedure, etc."
                  required
                ></textarea>
              </div>

              <div className="form-control w-full mt-8">
                <button className="btn w-full text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300">
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
