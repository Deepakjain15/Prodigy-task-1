import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const response = await fetch(`/api/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).token}`,
        },
      });
      const data = await response.json();
      setOrder(data);
    };
    fetchOrder();
  }, [id]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Order {order._id}</h1>
      <div>
        <h2>Shipping</h2>
        <p>
          <strong>Name: </strong> {order.user.name}
        </p>
        <p>
          <strong>Email: </strong> <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
        </p>
        <p>
          <strong>Address: </strong> {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
          {order.shippingAddress.postalCode}, {order.shippingAddress.country}
        </p>
      </div>
      <div>
        <h2>Order Items</h2>
        {order.orderItems.map((item, index) => (
          <div key={index}>
            <div>
              <img src={item.image} alt={item.name} />
              <span>{item.name}</span>
            </div>
            <div>
              {item.qty} x ${item.price} = ${item.qty * item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
