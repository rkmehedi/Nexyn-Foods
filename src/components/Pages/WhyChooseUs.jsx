import React from "react";
import { FaUtensils, FaShippingFast, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="bg-base-200 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose Nexyn Foods?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6">
            <FaUtensils
              className="text-5xl mx-auto mb-4"
              style={{ color: "#e7717d" }}
            />
            <h3 className="text-2xl font-semibold mb-2">Quality Ingredients</h3>
            <p>
              We source only the freshest, highest-quality ingredients to create
              dishes that are both healthy and delicious.
            </p>
          </div>
          <div className="p-6">
            <FaShippingFast
              className="text-5xl mx-auto mb-4"
              style={{ color: "#e7717d" }}
            />
            <h3 className="text-2xl font-semibold mb-2">Fast Delivery</h3>
            <p>
              Enjoy your favorite meals from the comfort of your home with our
              reliable and speedy delivery service.
            </p>
          </div>
          <div className="p-6">
            <FaHeadset
              className="text-5xl mx-auto mb-4"
              style={{ color: "#e7717d" }}
            />
            <h3 className="text-2xl font-semibold mb-2">24/7 Support</h3>
            <p>
              Our customer support team is always here to help with any
              questions or concerns you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
