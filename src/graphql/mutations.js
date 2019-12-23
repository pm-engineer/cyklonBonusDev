/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const registerUser = `mutation RegisterUser($input: CreateUserInput!) {
  registerUser(input: $input) {
    id
    name
    discount
    levelDiscount
    totalSpent
    carWashes
    email
    phone_number
    birthday
    cars {
      items {
        id
        carType
        carColor
        carModel
        carTires
      }
      nextToken
    }
    messages {
      items {
        id
        text
      }
      nextToken
    }
    orders {
      items {
        id
        total
        createdAt
        economy
        discount
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    discount
    levelDiscount
    totalSpent
    carWashes
    email
    phone_number
    birthday
    cars {
      items {
        id
        carType
        carColor
        carModel
        carTires
      }
      nextToken
    }
    messages {
      items {
        id
        text
      }
      nextToken
    }
    orders {
      items {
        id
        total
        createdAt
        economy
        discount
      }
      nextToken
    }
  }
}
`;
export const createCar = `mutation CreateCar($input: CreateCarInput!) {
  createCar(input: $input) {
    id
    carType
    carColor
    carModel
    carTires
    user {
      id
      name
      discount
      levelDiscount
      totalSpent
      carWashes
      email
      phone_number
      birthday
      cars {
        nextToken
      }
      messages {
        nextToken
      }
      orders {
        nextToken
      }
    }
  }
}
`;
export const updateCar = `mutation UpdateCar($input: UpdateCarInput!) {
  updateCar(input: $input) {
    id
    carType
    carColor
    carModel
    carTires
    user {
      id
      name
      discount
      levelDiscount
      totalSpent
      carWashes
      email
      phone_number
      birthday
      cars {
        nextToken
      }
      messages {
        nextToken
      }
      orders {
        nextToken
      }
    }
  }
}
`;
export const deleteCar = `mutation DeleteCar($input: DeleteCarInput!) {
  deleteCar(input: $input) {
    id
    carType
    carColor
    carModel
    carTires
    user {
      id
      name
      discount
      levelDiscount
      totalSpent
      carWashes
      email
      phone_number
      birthday
      cars {
        nextToken
      }
      messages {
        nextToken
      }
      orders {
        nextToken
      }
    }
  }
}
`;
export const registerManager = `mutation RegisterManager($input: CreateManagerInput!) {
  registerManager(input: $input) {
    id
    name
    orders {
      items {
        id
        total
        createdAt
        economy
        discount
      }
      nextToken
    }
    services
  }
}
`;
export const updateManager = `mutation UpdateManager($input: UpdateManagerInput!) {
  updateManager(input: $input) {
    id
    name
    orders {
      items {
        id
        total
        createdAt
        economy
        discount
      }
      nextToken
    }
    services
  }
}
`;
export const createService = `mutation CreateService($input: CreateServiceInput!) {
  createService(input: $input) {
    id
    title
    price
    orders {
      items {
        id
        total
        createdAt
        economy
        discount
      }
      nextToken
    }
  }
}
`;
export const updateService = `mutation UpdateService($input: UpdateServiceInput!) {
  updateService(input: $input) {
    id
    title
    price
    orders {
      items {
        id
        total
        createdAt
        economy
        discount
      }
      nextToken
    }
  }
}
`;
export const deleteService = `mutation DeleteService($input: DeleteServiceInput!) {
  deleteService(input: $input) {
    id
    title
    price
    orders {
      items {
        id
        total
        createdAt
        economy
        discount
      }
      nextToken
    }
  }
}
`;
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
    total
    createdAt
    economy
    discount
    user {
      id
      name
      discount
      levelDiscount
      totalSpent
      carWashes
      email
      phone_number
      birthday
      cars {
        nextToken
      }
      messages {
        nextToken
      }
      orders {
        nextToken
      }
    }
    manager {
      id
      name
      orders {
        nextToken
      }
      services
    }
    service {
      id
      title
      price
      orders {
        nextToken
      }
    }
  }
}
`;
export const updateOrder = `mutation UpdateOrder($input: UpdateOrderInput!) {
  updateOrder(input: $input) {
    id
    total
    createdAt
    economy
    discount
    user {
      id
      name
      discount
      levelDiscount
      totalSpent
      carWashes
      email
      phone_number
      birthday
      cars {
        nextToken
      }
      messages {
        nextToken
      }
      orders {
        nextToken
      }
    }
    manager {
      id
      name
      orders {
        nextToken
      }
      services
    }
    service {
      id
      title
      price
      orders {
        nextToken
      }
    }
  }
}
`;
export const deleteOrder = `mutation DeleteOrder($input: DeleteOrderInput!) {
  deleteOrder(input: $input) {
    id
    total
    createdAt
    economy
    discount
    user {
      id
      name
      discount
      levelDiscount
      totalSpent
      carWashes
      email
      phone_number
      birthday
      cars {
        nextToken
      }
      messages {
        nextToken
      }
      orders {
        nextToken
      }
    }
    manager {
      id
      name
      orders {
        nextToken
      }
      services
    }
    service {
      id
      title
      price
      orders {
        nextToken
      }
    }
  }
}
`;
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    id
    text
    user {
      id
      name
      discount
      levelDiscount
      totalSpent
      carWashes
      email
      phone_number
      birthday
      cars {
        nextToken
      }
      messages {
        nextToken
      }
      orders {
        nextToken
      }
    }
  }
}
`;
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
    id
    text
    user {
      id
      name
      discount
      levelDiscount
      totalSpent
      carWashes
      email
      phone_number
      birthday
      cars {
        nextToken
      }
      messages {
        nextToken
      }
      orders {
        nextToken
      }
    }
  }
}
`;
export const deleteMessage = `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
    id
    text
    user {
      id
      name
      discount
      levelDiscount
      totalSpent
      carWashes
      email
      phone_number
      birthday
      cars {
        nextToken
      }
      messages {
        nextToken
      }
      orders {
        nextToken
      }
    }
  }
}
`;
export const createSettings = `mutation CreateSettings($input: CreateSettingsInput!) {
  createSettings(input: $input) {
    id
    discount {
      id
      step
      disc
    }
  }
}
`;
export const updateSettings = `mutation UpdateSettings($input: UpdateSettingsInput!) {
  updateSettings(input: $input) {
    id
    discount {
      id
      step
      disc
    }
  }
}
`;
export const deleteSettings = `mutation DeleteSettings($input: DeleteSettingsInput!) {
  deleteSettings(input: $input) {
    id
    discount {
      id
      step
      disc
    }
  }
}
`;
export const createDiscount = `mutation CreateDiscount($input: CreateDiscountInput!) {
  createDiscount(input: $input) {
    id
    step
    disc
  }
}
`;
export const updateDiscount = `mutation UpdateDiscount($input: UpdateDiscountInput!) {
  updateDiscount(input: $input) {
    id
    step
    disc
  }
}
`;
export const deleteDiscount = `mutation DeleteDiscount($input: DeleteDiscountInput!) {
  deleteDiscount(input: $input) {
    id
    step
    disc
  }
}
`;
