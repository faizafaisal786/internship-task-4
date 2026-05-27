import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Checkout = () => {
  const { cart, addOrder } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock payment delay
    setTimeout(() => {
      const order = {
        id: Math.random().toString(36).substr(2, 9).toUpperCase(),
        date: new Date().toLocaleDateString(),
        items: [...cart],
        total: subtotal,
        status: 'Delivered'
      };
      addOrder(order);
      setLoading(false);
      setSuccess(true);
      
      setTimeout(() => {
        navigate('/orders');
      }, 3000);
    }, 2000);
  };

  if (success) {
    return (
      <div className="text-center py-20">
        <div className="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
        <p className="text-gray-500 mb-8">Your order has been placed successfully. Redirecting to your history...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Truck className="text-indigo-600" size={20} /> Shipping Details
            </h2>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              <input type="email" placeholder="Email Address" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              <input type="text" placeholder="Shipping Address" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="City" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                <input type="text" placeholder="ZIP Code" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <CreditCard className="text-indigo-600" size={20} /> Payment Method
            </h2>
            <div className="space-y-4">
              <div className="relative">
                <input type="text" placeholder="Card Number" required className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                <CreditCard className="absolute left-3 top-3.5 text-gray-400" size={18} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                <input type="text" placeholder="CVC" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-sm text-gray-600">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {loading ? 'Processing...' : `Pay $${subtotal.toFixed(2)}`}
            </button>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
              <ShieldCheck size={14} /> Secure Encrypted Transaction
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
