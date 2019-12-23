import React, {Component} from 'react';
import { connect } from 'react-redux'
import MmjSpinner from '../components/UI/mmj-spinner'
import Switcher from './switcher';


class Main  extends Component{

    render() {
            const {loading, user, role} = this.props;

            if(loading){
                return <MmjSpinner />
            }
            return <Switcher user={user} role={role} />
        }

}

const mapStateToProps = (state) => {
    return {
        user:state.authReducer.user,
        role:state.authReducer.role,
        loading:state.commonReducer.loading,
    }
}

export default connect(mapStateToProps,null)(Main)

