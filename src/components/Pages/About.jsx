import React from 'react';
import { FaBullseye, FaHistory } from 'react-icons/fa';
import aboutBg from '../../assets/about-us-bg.jpg';
import chef1 from '../../assets/chef1.jpg';
import chef2 from '../../assets/chef3.jpg';
import chef3 from '../../assets/chef2.jpg';

const About = () => {
    return (
        <div>
            <div className="hero h-20 mb-12">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                        <p className="mb-5 text-lg">
                            Learn the story behind Nexyn Foods and the passion that drives us.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-16 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src={aboutBg} alt="Our Restaurant" className="rounded-lg shadow-lg h-170 w-full" />
                    </div>
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-center">Our Story</h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed lg:text-lg">
                            Founded in 2023, Nexyn Foods began with a vision to bring exceptional culinary experiences to our community.
                            What started as a humble kitchen has grown into a beloved destination for food lovers. Our team is committed 
                            to fresh ingredients, bold flavors, and hospitality that feels like home.
                        </p>
                        <div className="space-y-4 pt-4">
                            <div className="flex items-start space-x-4">
                                <FaBullseye className="text-3xl mt-1 flex-shrink-0" style={{ color: '#004952' }} />
                                <div>
                                    <h4 className="font-bold text-2xl mb-2">Our Mission</h4>
                                    <p className="text-gray-500">
                                        Our mission is simple yet powerful: to create meals that do more than just satisfy hunger — they bring people together. 
                                        We believe food should evoke memories, spark conversation, and celebrate life’s everyday moments. 
                                        Every dish we serve is thoughtfully prepared with fresh, high-quality ingredients and a genuine love for the craft.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <FaHistory className="text-3xl mt-1 flex-shrink-0" style={{ color: '#004952' }} />
                                <div>
                                    <h4 className="font-bold text-2xl mb-2">Our Vision</h4>
                                    <p className="text-gray-500">
                                        We envision a place where guests feel at home from the moment they walk in. 
                                        A restaurant known not only for exceptional food, but also for the warmth of our hospitality and the care in every detail. 
                                        Our goal is to grow with our community and become a trusted name people return to — again and again.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-12">Meet Our Culinary Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="card bg-base-100 shadow-xl text-center">
                            <figure>
                                <img
                                    src={chef1}
                                    alt="Chef Marco Rossi"
                                    className="h-68 w-full"
                                />
                            </figure>
                            <div className="card-body items-center">
                                <h3 className="card-title text-2xl">Marco Rossi</h3>
                                <p className="text-gray-500">Executive Chef</p>
                                <p className="text-sm mt-2">
                                    With two decades of experience, Chef Marco leads our kitchen with precision and creativity, inspired by classic European techniques.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl text-center">
                            <figure>
                                <img
                                    src={chef2}
                                    alt="Chef Alejandro Garcia"
                                    className="h-68 w-full"
                                />
                            </figure>
                            <div className="card-body items-center">
                                <h3 className="card-title text-2xl">Alejandro Garcia</h3>
                                <p className="text-gray-500">Pastry Chef</p>
                                <p className="text-sm mt-2">
                                    Alejandro’s expertise in artisanal desserts adds a unique and elegant finish to every meal served at Nexyn.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl text-center">
                            <figure>
                                <img
                                    src={chef3}
                                    alt="Chef David Kim"
                                    className="h-68 w-full"
                                />
                            </figure>
                            <div className="card-body items-center">
                                <h3 className="card-title text-2xl">David Kim</h3>
                                <p className="text-gray-500">Sous Chef</p>
                                <p className="text-sm mt-2">
                                    David brings energy and detail to our kitchen, ensuring consistency and excellence in every plate that leaves the pass.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
