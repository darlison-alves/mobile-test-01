import React from 'react'
import { View, Text, KeyboardAvoidingView, Image } from "react-native";

import logoImg from '../assets/imgs/img-login.png'
import { login, COLOR_GRAY } from '../assets/styles';
import { Form, Item, Spinner, Button } from 'native-base';

import { Input } from 'react-native-elements'

export default class LoginAuth extends React.Component {
    state = {
        LoggedIn: false,
        email: '',
        senha: ''
    }

    static navigationOptions = {
        title: 'Login',
    }

    submit = () => {
        this.props.login(this.state.email, this.state.senha, this.props.history.push)
    }

    render() {
                
        return(
            <>
            <View style={login.logo_container}>
                <Image source={logoImg}/>
            </View>
            <KeyboardAvoidingView
                behavior='height'
                style={login.form_container}
            >
                {
                    this.state.LoggedIn ? <Spinner color={COLOR_GRAY} size={50} />

                    :
                    <Form style={login.form_container}>
                        <Item regular style={login.input_wrapper}>                        
                        <Input
                            style={login.input}
                            keyboardType="email-address"
                            placeholder="Email"
                            onChangeText={email => this.setState({email})}
                        />
                        </Item>

                        <Item regular style={login.input_wrapper}>
                        <Input
                            style={login.input}
                            secureTextEntry={true}
                            placeholder="Password"
                            onChangeText={senha => this.setState({senha})}
                        />
                        </Item>

                        <Button
                            block
                            warning
                            style={login.enter_button}
                            onPress={() =>  this.submit() }
                            accessibilityLabel="Learn more about this purple button"
                        >
                        <Text>Login</Text>
                        </Button>
                        <Text >forgot password</Text>
                    </Form>

                }
            </KeyboardAvoidingView>
            </>
        )
    }
}