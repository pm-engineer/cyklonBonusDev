import {API, graphqlOperation} from 'aws-amplify';
import {listServices} from '../../graphql/queries'
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

export const getUserCarWashes = `query GetUser($id: ID!) {
  getUser(id: $id) {
    carWashes
  }
}
`;

export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    carWashes
  }
}
`;

const reduxManagerData = (managerServices) => {
    return async (dispatch) => {
        try {
            dispatch({
                type:'LOADING_START'
            })

            const res = await API.graphql(graphqlOperation(listServices))
            const services = res.data.listServices.items

            const filteredServices = services.filter(item => {
                return managerServices.includes(item.id)
            })


            dispatch({
                type:'SET_SERVICES',
                payload: filteredServices
            })

            dispatch({
                type:'SET_MANAGER_SERVICES',
                payload: managerServices
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
    reduxManagerData

}
