EXPORT class Order {
  constructor(price, city, type) {
    this.id = (Math.random()).toString();
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = 0;
    this.dateConfirmed = false;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
    }
    this.dateConfirmed = new Date();
  }

  isValidType() {
    return (this.type === 'Buy' || this.type === 'Sell');
  }
}

const newBuy = new Order(100000, 'Odessa', 'Buy');
console.log(newBuy);