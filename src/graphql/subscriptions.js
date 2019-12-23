/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCar = `subscription OnCreateCar {
  onCreateCar {
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
export const onUpdateCar = `subscription OnUpdateCar {
  onUpdateCar {
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
export const onDeleteCar = `subscription OnDeleteCar {
  onDeleteCar {
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
export const onCreateManager = `subscription OnCreateManager {
  onCreateManager {
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
export const onUpdateManager = `subscription OnUpdateManager {
  onUpdateManager {
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
export const onCreateService = `subscription OnCreateService {
  onCreateService {
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
export const onUpdateService = `subscription OnUpdateService {
  onUpdateService {
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
export const onDeleteService = `subscription OnDeleteService {
  onDeleteService {
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
export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
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
export const onUpdateOrder = `subscription OnUpdateOrder {
  onUpdateOrder {
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
export const onDeleteOrder = `subscription OnDeleteOrder {
  onDeleteOrder {
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
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
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
export const onUpdateMessage = `subscription OnUpdateMessage {
  onUpdateMessage {
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
export const onDeleteMessage = `subscription OnDeleteMessage {
  onDeleteMessage {
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
export const onCreateSettings = `subscription OnCreateSettings {
  onCreateSettings {
    id
    discount {
      id
      step
      disc
    }
  }
}
`;
export const onUpdateSettings = `subscription OnUpdateSettings {
  onUpdateSettings {
    id
    discount {
      id
      step
      disc
    }
  }
}
`;
export const onDeleteSettings = `subscription OnDeleteSettings {
  onDeleteSettings {
    id
    discount {
      id
      step
      disc
    }
  }
}
`;
export const onCreateDiscount = `subscription OnCreateDiscount {
  onCreateDiscount {
    id
    step
    disc
  }
}
`;
export const onUpdateDiscount = `subscription OnUpdateDiscount {
  onUpdateDiscount {
    id
    step
    disc
  }
}
`;
export const onDeleteDiscount = `subscription OnDeleteDiscount {
  onDeleteDiscount {
    id
    step
    disc
  }
}
`;
