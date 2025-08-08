import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const Buyfood = () => {
  const { id } = useParams();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://nexyn-foods-server.vercel.app/foods/${id}`)
      .then((res) => {
        setFood(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch food item:", error);
        setLoading(false);
      });
  }, [id]);

  const handlePurchase = (event) => {
    event.preventDefault();

    if (food.added_by.email === user.email) {
      Swal.fire("Error!", "You cannot purchase an item you added.", "error");
      return;
    }

    if (purchaseQuantity > food.quantity) {
      Swal.fire(
        "Error!",
        `You cannot purchase more than the available quantity of ${food.quantity}.`,
        "error"
      );
      return;
    }

    const order = {
      foodId: food._id,
      food_name: food.food_name,
      food_image: food.food_image,
      price: food.price,
      purchase_quantity: parseInt(purchaseQuantity),
      buyer_name: user.displayName,
      buyer_email: user.email,
      buyer_photoURL: user.photoURL,
      food_owner: {
        name: food.added_by.name,
        email: food.added_by.email,
        photoURL: food.added_by.photoURL,
      },
    };

    const token = localStorage.getItem("access-token");

    axios
      .post("https://nexyn-foods-server.vercel.app/purchase", order, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.orderResult?.insertedId) {
          Swal.fire(
            "Success!",
            "Your order has been placed successfully!",
            "success"
          );
          navigate("/my-orders");
        } else {
          Swal.fire(
            "Error!",
            res.data.message || "Failed to place order.",
            "error"
          );
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.response?.status === 401 || error.response?.status === 403) {
          logOut();
          navigate("/login");
        }
        Swal.fire(
          "Error!",
          "An error occurred while placing your order.",
          "error"
        );
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
        <h2 className="text-3xl font-bold">Food item not found.</h2>
      </div>
    );
  }

  const isPurchaseDisabled =
    food.quantity === 0 || food.added_by.email === user.email;

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${food?.food_image})` }}
    >
      <div>
        <div className="hero h-37">
          <div className="hero-overlay"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">
                Purchase Food Now
              </h1>
              <p className="mb-5 text-lg text-white/90">
                Complete your order for: {food.food_name}
              </p>
            </div>
          </div>
        </div>

        <div className="py-16 px-4">
          <div className="card w-full max-w-2xl mx-auto shadow-2xl bg-base-100/60">
            <form onSubmit={handlePurchase} className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text font-semibold">Food Name:</span>
                  </label>
                  <input
                    type="text"
                    value={food.food_name}
                    className="input input-bordered w-full bg-base-200"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text font-semibold">Price:</span>
                  </label>
                  <input
                    type="text"
                    value={`$${food.price}`}
                    className="input input-bordered w-full bg-base-200"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text font-semibold">
                      Buyer Name:
                    </span>
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
                      Buyer Email:
                    </span>
                  </label>
                  <input
                    type="email"
                    value={user?.email}
                    className="input input-bordered w-full bg-base-200"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text font-semibold">
                      Seller Name:
                    </span>
                  </label>
                  <input
                    type="text"
                    value={food.added_by?.name}
                    className="input input-bordered w-full bg-base-200"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text font-semibold">
                     Quantity Available :
                    </span>
                  </label>
                  <input
                    type="text"
                    value={food.quantity} 
                    className="input input-bordered w-full bg-base-200"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text font-semibold">
                      Buying Date:
                    </span>
                  </label>
                  <input
                    type="text"
                    value={new Date().toLocaleDateString()}
                    className="input input-bordered w-full bg-base-200"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label pb-1">
                    <span className="label-text font-semibold">
                      Purchase Quantity:
                    </span>
                  </label>
                  <input
                    type="number"
                    name="purchase_quantity"
                    defaultValue="1"
                    min="1"
                    max={food.quantity}
                    onChange={(e) => setPurchaseQuantity(e.target.value)}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-8">
                <button
                  type="submit"
                  className="btn w-full text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300 disabled:bg-gray-400"
                  disabled={isPurchaseDisabled}
                >
                  {isPurchaseDisabled
                    ? food.quantity === 0
                      ? " Item is not available"
                      : "Cannot Purchase Own Item"
                    : "Confirm Purchase"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyfood;
