import React from 'react';
import { useCart } from '../context/CartContext';
import { Package, Calendar, CheckCircle } from 'lucide-react';

const Orders = () => {
  const { orders } = useCart();

  if (orders.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-200">
        <Package className="mx-auto text-gray-300 mb-4" size={48} />
        <h2 className="text-xl font-bold text-gray-800">No orders found</h2>
        <p className="text-gray-500">You haven't placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Order History</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 p-4 flex justify-between items-center border-b">
              <div className="flex gap-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Order ID</p>
                  <p className="font-mono text-sm">#{order.id}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold flex items-center gap-1">
                    <Calendar size={12} /> Date
                  </p>
                  <p className="text-sm font-medium">{order.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-semibold">
                <CheckCircle size={16} /> {order.status}
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded shadow-sm" />
                      <div>
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-indigo-600">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t mt-4 pt-4 flex justify-between items-center">
                <p className="text-sm font-bold text-gray-800">Total Amount</p>
                <p className="text-lg font-bold text-gray-900">${order.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
