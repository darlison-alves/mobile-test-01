import React from 'react'
import { StatusBar } from "react-native";
import { Header  } from 'react-native-elements';
import { common } from '../assets/styles';

export class HeaderComponent extends React.Component {
    render() {
        const { openDrawer } = this.props
        return(
            <>
                <StatusBar barStyle = "default" hidden={true} />
                <Header
                    leftComponent={{ icon: 'menu', color: '#000', onPress:(() => openDrawer()) }}
                    centerComponent={{ text: 'Main', style: { color: '#000' } }}                
                    backgroundColor={common.bgLightGray.backgroundColor}
                />
            </>
        )
    }
}