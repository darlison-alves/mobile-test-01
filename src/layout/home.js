import React from 'react'
import {Container, Content } from 'native-base';
import { common } from '../assets/styles';

import ActionButtonMenu from '../components/actionbutton';
import { HeaderComponent } from '../components/header';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        const { openDrawer } = this.props
        
        return(
            <Container style={common.bgWhite} >
                <HeaderComponent openDrawer={openDrawer}/>            
                <Content>
                    
                </Content>
                <ActionButtonMenu />
            </Container>
        )
    }
}
