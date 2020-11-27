const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street},Nº: ${order.address.number}, AP: ${order.address.apartment}.`);
  }
  
  customerInfo(order);
  
  order.name1 = 'Luiz Silva';
  order.payment.total = 50;
  order.order.pizza.muzzarella = 'muzzarella';
  order.order.pizza.calabrezza = 'calabrezza';
  order.order.drinks.coca = 'Coca-Cola Zero'

  const orderModifier = (order) => {
   console.log(`Olá ${order.name1}, o total do seu pedido de ${order.order.pizza.muzzarella}, ${order.order.pizza.calabrezza} e ${order.order.drinks.coca} é R$ ${order.payment.total},00.`);
  
  }
  
  orderModifier(order);