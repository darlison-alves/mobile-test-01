import React from "react";
import { ImageBackground, Text } from "react-native";
import { Container, Content, Thumbnail, List, ListItem } from "native-base";
import { sidebar } from "../assets/styles";



import img from "../assets/imgs/perfil-2.jpg";

export default class SideBar extends React.Component {

    redirect = (path) => {
        this.props.closeDrawer()
        this.props.history.push(path)
    }

    render() {
        return (
            <Container style={sidebar.sidebar_container} >
                <Content bounces >
                    <ImageBackground style={sidebar.imageBackground} >
                        <Thumbnail source={img} style={{ padding: 50, borderRadius: 50 }} />
                    </ImageBackground>
                    <List>
                        <ListItem icon last button style={sidebar.menuLine} onPress={()=> this.redirect('/main')} >
                            <Text> Main </Text>
                        </ListItem>
                        <ListItem icon last button style={sidebar.menuLine} onPress={() => this.redirect('/')} >
                            <Text> Logout </Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}