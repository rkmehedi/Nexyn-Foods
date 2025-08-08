import React from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {

    const handleSubscribe = (event) => {
        event.preventDefault();
        const email = event.target.email.value;

        if (email) {
            Swal.fire({
                title: 'Thank You!',
                text: `You have successfully subscribed with ${email}.`,
                icon: 'success',
                confirmButtonText: 'Great!'
            });
            event.target.reset();
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter a valid email address.',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    };

    return (
        <div className="py-16 bg-base-200 rounded-3xl mb-12">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    Subscribe to our newsletter to receive the latest news, special offers, and exclusive recipes directly in your inbox.
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center max-w-lg mx-auto">
                    <input 
                        type="email" 
                        name="email"
                        placeholder="your.email@example.com" 
                        className="input input-bordered w-full rounded-r-none sm:rounded-r-none" 
                        required
                    />
                    <button 
                        type="submit"
                        className="btn rounded-l-none sm:rounded-l-none text-white border-none hover:bg-gradient-to-r hover:from-[#56B4D3] hover:to-[#02AAB0] transition-all duration-300" 
                        style={{ backgroundColor: '#004952' }}
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
