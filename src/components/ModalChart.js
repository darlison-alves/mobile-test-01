import React, {Component} from 'react';
import { Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import { ChartForm } from './Forms/FormChart';

export class ModalChart extends Component {
  state = {
    modalVisible: false,
    titulo: ""
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const { visible = false, setState, titulo } = this.props
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View>
            <View>
              <Text>Novo Chart!</Text>

              <ChartForm/>
               
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
