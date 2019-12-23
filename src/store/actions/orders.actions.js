import {API, graphqlOperation} from 'aws-amplify';
import { createOrder } from '../../graphql/mutations'


export const getManager = `query GetManager($id: ID!) {
  getManager(id: $id) {
    id
    name
    orders(sortDirection:DESC) {
      items {
        id
        total
        createdAt
        user{
          name
          phone_number
        }
        service{
         title
        }
      }
      nextToken
    }
    services
  }
}
`;

export const getUserInfo = `query GetUser($id: ID!) {
  getUser(id: $id) {
    carWashes
    totalSpent
    discount
    levelDiscount
  }
}
`;

export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    carWashes
    totalSpent
    discount
  }
}
`;

export const getDiscounts = `query ListDiscounts{
  listDiscounts {
    items {
      step
      disc
    }
  }
}
`;

const reduxCreateOrder = (managerId, userId, serviceId, total) => {
    return async (dispatch) => {
        try {
            dispatch({
                type:'LOADING_START'
            })

            const carWashesId = "7ff10ece-b7d3-4e9f-aa4a-72494cedfd45"
            const userInfo = await API.graphql(graphqlOperation(getUserInfo,{id:userId}))
            const userDiscount = userInfo.data.getUser.discount
            let economyTotal = 0
            console.log('type of total',typeof(total));
            //If carWashes
            if(serviceId === carWashesId){

                console.log('is auto wash');

                let newCarWashes = ''
                if(userInfo.data.getUser.carWashes < 10 ){
                    newCarWashes = userInfo.data.getUser.carWashes + 1
                }else{
                    newCarWashes = 0
                }
                const updateInputUser = {
                    id: userId,
                    carWashes:newCarWashes
                }

                //Update user carWashes
                const resCarWash = await API.graphql(graphqlOperation(updateUser,{input:updateInputUser}))

                console.log('car wash updated',resCarWash);

            }


            ///////Discount system START////////


            let totalSpent = userInfo.data.getUser.totalSpent

            totalSpent = totalSpent + total

            const updateInputUser = {
                id: userId,
                totalSpent
            }

            //Update user totalSpent
            await API.graphql(graphqlOperation(updateUser, {input: updateInputUser}))

            const serverResponse = await API.graphql(graphqlOperation(getDiscounts))

            const settingsDiscounts = serverResponse.data.listDiscounts.items

            let discount = ''

            const sortedSettingsDiscountsByStep = settingsDiscounts.sort(function(a,b){
                return a.step - b.step;
            });


            let userLevelDiscount = userInfo.data.getUser.levelDiscount

            sortedSettingsDiscountsByStep.map((item,index)=>{
                console.log('settingsDiscounts',sortedSettingsDiscountsByStep);
                console.log('totalSpent',totalSpent);
                console.log('sortedSettingsDiscountsByStep[index+1]',sortedSettingsDiscountsByStep[index]);
                if(totalSpent >= item.step && totalSpent < sortedSettingsDiscountsByStep[index+1].step && userLevelDiscount === index){
                    console.log('works');
                    discount = item.disc + userDiscount
                    userLevelDiscount = index + 1
                }

            })
            console.log('userLevelDiscount',userLevelDiscount);

            if(discount) {
                const updateInputUser = {
                    id: userId,
                    discount,
                    levelDiscount:userLevelDiscount
                }

                //Update user discount
                await API.graphql(graphqlOperation(updateUser, {input: updateInputUser}))
                console.log('has new discount totalSpent >= item.step',discount);
            }else{
                discount = userDiscount
                console.log('has old discount',discount);
            }




            if(serviceId !== carWashesId) {

                economyTotal = (total / 100) * userDiscount
                total = total - economyTotal
                console.log('not car wash, economyTotal', total);
            }


            console.log('user total spent',totalSpent);
            ///////Discount system END/////////

            const createOrderInput = {
                orderManagerId:managerId,
                orderUserId:userId,
                orderServiceId:serviceId,
                total,
                economy:economyTotal,
                discount
            }

            await API.graphql(graphqlOperation(createOrder,{input:createOrderInput}))

            const managersOrders = await API.graphql(graphqlOperation(getManager,{id:managerId}))


            dispatch({
                type:'SET_ORDERS',
                payload:managersOrders.data.getManager.orders.items
            })

            dispatch({
                type:'LOADING_STOP'
            })

        } catch (e) {
            console.log('eee',e);
            dispatch({
                type:'LOADING_START'
            })
            dispatch({
                type:'ERROR_MESSAGE',
                payload:e
            })
            dispatch({
                type:'LOADING_STOP'
            })


        }
    }
}

export {
    reduxCreateOrder
}
