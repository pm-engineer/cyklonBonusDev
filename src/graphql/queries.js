/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCar = `query GetCar($id: ID!) {
  getCar(id: $id) {
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
export const listCars = `query ListCars($filter: ModelCarFilterInput, $limit: Int, $nextToken: String) {
  listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
    }
    nextToken
  }
}
`;
export const getManager = `query GetManager($id: ID!) {
  getManager(id: $id) {
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
export const listManagers = `query ListManagers(
  $filter: ModelManagerFilterInput
  $limit: Int
  $nextToken: String
) {
  listManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      orders {
        nextToken
      }
      services
    }
    nextToken
  }
}
`;
export const getService = `query GetService($id: ID!) {
  getService(id: $id) {
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
export const listServices = `query ListServices(
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      price
      orders {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getOrder = `query GetOrder($id: ID!) {
  getOrder(id: $id) {
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
export const listOrders = `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
      manager {
        id
        name
        services
      }
      service {
        id
        title
        price
      }
    }
    nextToken
  }
}
`;
export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
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
export const listMessages = `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
    }
    nextToken
  }
}
`;
export const getSettings = `query GetSettings($id: ID!) {
  getSettings(id: $id) {
    id
    discount {
      id
      step
      disc
    }
  }
}
`;
export const listSettingss = `query ListSettingss(
  $filter: ModelSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listSettingss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      discount {
        id
        step
        disc
      }
    }
    nextToken
  }
}
`;
export const getDiscount = `query GetDiscount($id: ID!) {
  getDiscount(id: $id) {
    id
    step
    disc
  }
}
`;
export const listDiscounts = `query ListDiscounts(
  $filter: ModelDiscountFilterInput
  $limit: Int
  $nextToken: String
) {
  listDiscounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      step
      disc
    }
    nextToken
  }
}
`;
