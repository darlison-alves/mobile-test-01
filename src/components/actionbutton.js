import React from 'react'
import ActionButton from 'react-native-action-button'
import { buttonAction } from '../assets/styles';
import { View, Icon } from 'native-base';
import { HighCharts } from './charts/Highcharts';

export default class ActionButtonMenu extends React.Component {
    render() {
        const { children } =this.props
        return(
            <View style={{flex: 1}} >
                {children}
                <ActionButton buttonColor="rgba(216,211,211,1)" >
                    <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                        <Icon name="md-create" style={buttonAction.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        )
    }
}