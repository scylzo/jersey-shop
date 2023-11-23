import React from "react";

const OrderDetails = ({ itemsInBag }) => {
  function calculateTotal() {
    let orderTotal = 0;
    itemsInBag.forEach((item) => (orderTotal += item.price * item.quantity));
    return orderTotal.toFixed(2);
  }
  return (
    <>
      <section className="summary">
        <strong>Order Details</strong>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {itemsInBag.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.quantity}x {item.name}
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <th>Total</th>
              <th>${calculateTotal()}</th>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default OrderDetails;
