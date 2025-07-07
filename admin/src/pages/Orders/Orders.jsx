import { useEffect, useState } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets, url, currency } from '../../assets/assets';

const Order = () => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data.reverse());
      } else {
        toast.error("Failed to fetch orders.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      toast.error("Server error while fetching orders.");
    }
  };

  const statusHandler = async (event, orderId) => {
    const status = event.target.value;
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status,
      });
      if (response.data.success) {
        toast.success("Order status updated.");
        await fetchAllOrders();
      } else {
        toast.error("Failed to update status.");
      }
    } catch (err) {
      console.error("Status update error:", err);
      toast.error("Server error while updating status.");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.length === 0 ? (
          <p>No orders available.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id || Math.random()} className='order-item'>
              <img src={assets.parcel_icon} alt="Parcel Icon" />
              <div>
                <p className='order-item-food'>
                  {order.items.map(item => `${item.name} x ${item.quantity}`).join(', ')}
                </p>
                <p className='order-item-name'>
                  {order.address.firstName} {order.address.lastName}
                </p>
                <div className='order-item-address'>
                  <p>{order.address.street},</p>
                  <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                </div>
                <p className='order-item-phone'>{order.address.phone}</p>
              </div>
              <p>Items: {order.items.length}</p>
              <p>{currency}{order.amount}</p>
              <select
                onChange={(e) => statusHandler(e, order._id)}
                value={order.status}
                name="orderStatus"
                id={`order-status-${order._id}`}
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Order;
