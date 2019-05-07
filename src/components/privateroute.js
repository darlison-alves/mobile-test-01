import React from 'react'
import {Route, Redirect} from 'react-router-native'
export default class PrivateRoute extends React.Component {

    render(){
        const {component: Component, ...rest} = this.props 
        return(
            <Route
                {...rest}
                render={props => 
                    true ? (<Component { ...props } openDrawer={() => rest.openDrawer()} />)
                    : (
                        <Redirect 
                            to={{
                                    pathname: '/',
                                    state: { from : props.location}
                                }}
                        />
                    )
                }
            />
        )
    }

}