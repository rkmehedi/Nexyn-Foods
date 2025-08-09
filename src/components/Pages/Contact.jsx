import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Contact = () => {

    const handleSendMessage = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        if (name && email && message) {
            Swal.fire({
                title: 'Thank You!',
                text: 'Your message has been sent successfully. We will get back to you soon!',
                icon: 'success',
                confirmButtonText: 'Great!'
            });
            form.reset();
        }
    };

    return (
        <div>
            <div className="hero h-20">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
                        <p className="mb-5 text-lg">We'd love to hear from you! Reach out with any questions or feedback.</p>
                    </div>
                </div>
            </div>

            <div className="py-18 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Have a question or want to place a large order? Send us a message or give us a call. Our team is ready to assist you.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <FaMapMarkerAlt className="text-2xl" style={{ color: '#004952' }} />
                                <div>
                                    <h4 className="font-semibold">Our Location</h4>
                                    <p className="text-gray-500">Rampura,Dhaka,Bangladesh</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaPhoneAlt className="text-2xl" style={{ color: '#004952' }} />
                                <div>
                                    <h4 className="font-semibold">Phone Number</h4>
                                    <p className="text-gray-500">(+880) 1912-716966</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaEnvelope className="text-2xl" style={{ color: '#004952' }} />
                                <div>
                                    <h4 className="font-semibold">Email Address</h4>
                                    <p className="text-gray-500">astermehedi@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSendMessage} className="card-body">
                            <div className="form-control">
                                <label className="label pb-1"><span className="label-text font-semibold">Your Name:</span></label>
                                <input type="text" name="name" placeholder="John Doe" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label pb-1"><span className="label-text font-semibold">Your Email:</span></label>
                                <input type="email" name="email" placeholder="your.email@example.com" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label pb-1"><span className="label-text font-semibold">Your Message:</span></label>
                                <textarea name="message" className="textarea textarea-bordered h-32" placeholder="Write your message here..." required></textarea>
                            </div>
                            <div className="form-control w-full mt-6">
                                <button className="btn w-full text-white bg-[#004952] border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
