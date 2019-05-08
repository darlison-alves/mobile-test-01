import React from 'react'
import { ScrollView } from 'react-native'
import {Container, View } from 'native-base';
import { common, COLOR_BLUE } from '../assets/styles';

import ActionButtonMenu from '../components/actionbutton';
import { HeaderComponent } from '../components/header';
import BarChartContainer from '../components/charts/BarChartContainer';
import { ModalChart } from '../components/ModalChart';

export default class Home extends React.Component {
    state = {
        visible : false
    }

    static navigationOptions = {
        title: 'Home',
    };
    render() {
        const { openDrawer } = this.props
        
        return(
            <Container style={common.bgWhite} >
                <HeaderComponent openDrawer={openDrawer}/>
                
                <ActionButtonMenu setState={(visible) => this.setState({visible}) } >
                    <View>                        
                        <ScrollView>
                            <ModalChart visible={this.state.visible} setState={(visible) => this.setState({visible})} />
                            <BarChartContainer />
                        </ScrollView>
                    </View>
                </ActionButtonMenu>
            </Container>
        )
    }
}
