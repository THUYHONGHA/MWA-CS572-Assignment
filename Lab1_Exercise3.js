const item = {
    name: 'Avocado',
    type: 'fruit',
    category: 'Food',
    price: 200
}

const applyCoupon = item =>
                    discount =>
                        item.price - (item.price*discount)/100;

console.log(applyCoupon(item)(10));