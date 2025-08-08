import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import Swal from 'sweetalert2';
import moment from 'moment';
import { FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';

const MyOrders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const url = `https://nexyn-foods-server.vercel.app/orders/${user?.email}`;

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
                setOrders(res.data);
                setLoading(false);
            })
            .catch(error => {
                if (error.response.status === 401 || error.response.status === 403) {
                    logOut();
                    navigate('/login');
                }
                setLoading(false);
            });
        }
    }, [url, user, navigate, logOut]);

    const handleDelete = id => {
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
                axios.delete(`https://nexyn-foods-server.vercel.app/orders/${id}`, {
                    headers: {
                        authorization: `Bearer ${token}`
                    },
                    data: {
                        email: user.email
                    }
                })
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire('Deleted!', 'Your order has been removed.', 'success');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
                .catch(() => {
                    Swal.fire('Error!', 'Could not delete the order.', 'error');
                });
            }
        });
    };

    if (loading) {
        return <div className="flex justify-center items-center min-h-[70vh]"><span className="loading loading-spinner loading-lg"></span></div>;
    }

    return (
        <div>
            <div className="hero h-37">
                
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-[#004952]">My Orders</h1>
                        <p className="mb-5 text-lg text-[#004952]">A history of all your delicious purchases.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                {orders.length > 0 ? (
                    <div>
                        <div className="overflow-x-auto hidden md:block">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Food Name</th>
                                        <th>Food Owner</th>
                                        <th>Price</th>
                                        <th className="text-center">Quantity</th>
                                        <th>Order Date</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map(order => (
                                        <tr key={order._id} className="hover">
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-16 h-16">
                                                        <img src={order.food_image} alt={order.food_name} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td><div className="font-bold">{order.food_name}</div></td>
                                            <td>{order.food_owner?.name || 'N/A'}</td>
                                            <td>${order.price}</td>
                                            <td className="text-center">{order.purchase_quantity}</td>
                                            <td>{moment(order.buying_date).format('MMMM Do YYYY, h:mm a')}</td>
                                            <td className="text-center">
                                                <button 
                                                    onClick={() => handleDelete(order._id)}
                                                    className="btn btn-ghost btn-sm text-red-500 hover:bg-red-500 hover:text-white"
                                                >
                                                    <FaTrashAlt className="text-lg" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:hidden">
                            {orders.map(order => (
                                <div key={order._id} className="card bg-base-100 shadow-xl">
                                    <div className="card-body p-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="avatar">
                                                <div className="w-20 h-20 rounded-lg">
                                                    <img src={order.food_image} alt={order.food_name} />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h2 className="card-title text-lg">{order.food_name}</h2>
                                                <p className="text-xs text-gray-500">Owner: {order.food_owner?.name || 'N/A'}</p>
                                            </div>
                                        </div>
                                        <div className="divider my-2"></div>
                                        <div className="space-y-1 text-sm">
                                            <div className="flex justify-between">
                                                <span className="font-semibold text-gray-600">Price:</span>
                                                <span>${order.price}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="font-semibold text-gray-600">Quantity:</span>
                                                <span>{order.purchase_quantity}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="font-semibold text-gray-600">Date:</span>
                                                <span>{moment(order.buying_date).format('MMM Do YYYY, h:mm a')}</span>
                                            </div>
                                        </div>
                                        <div className="card-actions justify-end mt-3">
                                            <button 
                                                onClick={() => handleDelete(order._id)}
                                                className="btn btn-xs btn-outline btn-error"
                                            >
                                                <FaTrashAlt /> Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <h2 className="text-3xl font-bold">You haven't ordered anything yet!</h2>
                        <p className="text-gray-500 mt-2 mb-8">Explore our menu and find your next favorite meal.</p>
                        <Link 
                            to="/foods"
                            className="btn rounded-lg text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Go to All Food Menu
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
