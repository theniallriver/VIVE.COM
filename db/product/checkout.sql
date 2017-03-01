update orders
set completed_date = 'true'
where order_id = $1;

;