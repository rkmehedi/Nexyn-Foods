import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import pageTitleBg from '../../assets/login-bg.jpg';
import axios from 'axios';

const MyFoods = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myFoods, setMyFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const url = `https://nexyn-foods-server.vercel.app/my-foods/${user?.email}`;

    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            const token = localStorage.getItem('access-token');
            if (!token) {
                setLoading(false);
                logOut();
                navigate('/login');
                return;
            }

            axios.get(url, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                setMyFoods(res.data);
                setLoading(false);
            })
            .catch(error => {
                if (error.response?.status === 401 || error.response?.status === 403) {
                    logOut();
                    navigate('/login');
                }
                setLoading(false);
            });
        }
    }, [url, user, navigate, logOut]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const token = localStorage.getItem('access-token');
                axios.delete(`https://nexyn-foods-server.vercel.app/foods/${id}`, {
                    headers: {
                        authorization: `Bearer ${token}`
                    },
                    data: {
                        email: user.email
                    }
                })
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        toast.success('Your food item has been removed.');
                        const remaining = myFoods.filter(food => food._id !== id);
                        setMyFoods(remaining);
                    } else {
                        toast.error(res.data.message || 'Could not delete the item.');
                    }
                })
                .catch(() => {
                    toast.error('An error occurred while deleting the item.');
                });
            }
        });
    };

    if (loading) {
        return <div className="flex justify-center items-center min-h-[70vh]"><span className="loading loading-spinner loading-lg"></span></div>;
    }

    return (
        <div
      className="w-full bg-cover bg-center bg-no-repeat  rounded-3xl"
      
    >
            <div className="hero h-37" >
                
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-[#004952] ">My Food Items</h1>
                        <p className="mb-5 text-lg text-[#004952]">Manage the delicious items you've added.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                {myFoods.length > 0 ? (
                    <div>
                        <div className="overflow-x-auto hidden md:block">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Food Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th className="text-center">Quantity</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myFoods.map(food => (
                                        <tr key={food._id} className="hover">
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-16 h-16">
                                                        <img src={food.food_image} alt={food.food_name} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td><div className="font-bold">{food.food_name}</div></td>
                                            <td>{food.food_category}</td>
                                            <td>${food.price}</td>
                                            <td className="text-center">{food.quantity}</td>
                                            <td className="text-center">
                                                <div className="flex justify-center space-x-2">
                                                    <Link to={`/foods/${food._id}`} className="btn btn-sm bg-blue-500 text-white border-none hover:bg-blue-600 transition-colors duration-300">Details</Link>
                                                    <Link to={`/update/${food._id}`} className="btn btn-sm text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300">Update</Link>
                                                    <button onClick={() => handleDelete(food._id)} className="btn btn-sm btn-error text-white border-none hover:bg-red-600 transition-colors duration-300">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:hidden">
                            {myFoods.map(food => (
                                <div key={food._id} className="card bg-base-100 shadow-xl">
                                    <div className="card-body p-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="avatar">
                                                <div className="w-20 h-20 rounded-lg">
                                                    <img src={food.food_image} alt={food.food_name} />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h2 className="card-title text-lg">{food.food_name}</h2>
                                                <p className="text-xs text-gray-500">{food.food_category}</p>
                                            </div>
                                        </div>
                                        <div className="divider my-2"></div>
                                        <div className="space-y-1 text-sm">
                                            <div className="flex justify-between">
                                                <span className="font-semibold text-gray-600">Price:</span>
                                                <span>${food.price}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="font-semibold text-gray-600">Quantity:</span>
                                                <span>{food.quantity}</span>
                                            </div>
                                        </div>
                                        <div className="card-actions justify-end mt-3 space-x-2">
                                            <Link to={`/foods/${food._id}`} className="btn btn-xs bg-blue-500 text-white border-none hover:bg-blue-600">Details</Link>
                                            <Link to={`/update/${food._id}`} className="btn btn-xs text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0]">Update</Link>
                                            <button onClick={() => handleDelete(food._id)} className="btn btn-xs btn-error text-white border-none hover:bg-red-600">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <h2 className="text-3xl font-bold">You haven't added any food items yet!</h2>
                        <p className="text-gray-500 mt-2 mb-8">Share your culinary creations with our community.</p>
                        <Link 
                            to="/add-food"
                            className="btn rounded-lg text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Add Your First Food Item
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyFoods;
