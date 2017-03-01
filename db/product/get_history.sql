SELECT * FROM orders
JOIN products_in_order on orders.order_id = products_in_order.order_id
JOIN products on products_in_order.order_id=products.product_id
WHERE user_id = $1 and completed_date IS NOT NULL;