import React from 'react'
import { Drawer } from 'native-base';

import { NativeRouter, Route, withRouter } from "react-router-native";
import Home from './layout/home';
import SideBar from './components/sidebar';
import PrivateRoute from './components/privateroute';
import LoginContainer from './layout/containers/loginContainer';

export default class Router extends React.Component {
    
    closeDrawer() {
        this.drawer._root.close()
    }

    openDrawer() {
        this.drawer._root.open()
    }

    render() {

        const SideBarCustom = withRouter(
            ({history}) => (
                <SideBar closeDrawer={() =>  this.closeDrawer()} history={history} />
            )
        )

        return (
          <NativeRouter>
            <Drawer
                ref={ref => this.drawer = ref}
                content={<SideBarCustom />}
                onClose={() => this.closeDrawer()}
            >
                <Route exact path="/"  component={LoginContainer} />                
                <PrivateRoute path='/main' component={Home} openDrawer={() => this.openDrawer()} />                
            </Drawer>
            </NativeRouter>
        )
    }
}


