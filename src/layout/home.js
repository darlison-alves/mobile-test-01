import React from 'react'
import { ScrollView } from 'react-native'
import {Container, View } from 'native-base';
import { common, COLOR_BLUE } from '../assets/styles';

import ActionButtonMenu from '../components/actionbutton';
import { HeaderComponent } from '../components/header';
import { HighCharts } from '../components/charts/Highcharts';
import { BarChart } from '../components/charts/BarChart';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        const { openDrawer } = this.props
        
        return(
            <Container style={common.bgWhite} >
                <HeaderComponent openDrawer={openDrawer}/>
                
                <ActionButtonMenu>
                    <View>
                        <ScrollView>
                            <HighCharts />

                            <BarChart />
                        </ScrollView>
                    </View>
                </ActionButtonMenu>
            </Container>
        )
    }
}
