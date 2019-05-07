import { StyleSheet } from 'react-native';
import { width } from 'react-native-dimension';

/*******************************
CORES
*******************************/
export const COLOR_PRIMARY = '#006ed1';
export const COLOR_SUCCESS = '#e6e6e6';
export const COLOR_WARNING = '#f0ad4e';
export const COLOR_DANGER = '#dc3545';
export const COLOR_INFO = '#62B1F6';
export const COLOR_WHITE = '#ffffff';
export const COLOR_BLUE = '#007bff';
export const COLOR_TEAL = '#78ba87';
export const COLOR_GRAY = '#444444';
export const COLOR_GRAY_SMALL = '#e6e6e6'
export const COLOR_MEDIUM_GRAY = '#999999';
export const COLOR_LIGHT_GRAY = '#eeeeee';

/*******************************
COMMON STYLES
*******************************/
export const common = StyleSheet.create({    
    bgPrimary: {
        backgroundColor: COLOR_PRIMARY
    },
    bgSuccess: {
        backgroundColor: COLOR_SUCCESS
    },
    bgWarning: {
        backgroundColor: COLOR_WARNING
    },
    bgDanger: {
        backgroundColor: COLOR_DANGER
    },
    bgInfo: {
        backgroundColor: COLOR_INFO
    },
    bgBlue: {
        backgroundColor: COLOR_BLUE
    },
    bgWhite: {
        backgroundColor: COLOR_WHITE
    },
    bgLightGray: {
        backgroundColor: COLOR_LIGHT_GRAY
    },
    textPrimary: {
        color: COLOR_PRIMARY
    },
    textSuccess: {
        color: COLOR_SUCCESS
    },
    textWarning: {
        color: COLOR_WARNING
    },
    textDanger: {
        color: COLOR_DANGER
    },
    textInfo: {
        color: COLOR_INFO
    },
    textBlue: {
        color: COLOR_BLUE
    },
    textWhite: {
        color: COLOR_WHITE
    },
    textGray: {
        color: COLOR_GRAY
    },    
    textLightGray: {
        color: COLOR_LIGHT_GRAY
    },
    textDisabled: {
        color: COLOR_MEDIUM_GRAY
    },
    textCenter: {
        textAlign: 'center'
    },
    textLeft: {
        textAlign: 'left'
    },
    textRight: {
        textAlign: 'right'
    },
    tinyText: {
        fontSize: 11,
        color: COLOR_MEDIUM_GRAY
    },
    textStrike: {
        textDecorationLine: 'line-through',
        color: '#006ed1'
    }
});

/*******************************
LOADING
*******************************/
export const loading = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


/*******************************
MENSAGEM DE TELA VAZIA
*******************************/
export const mensagemVazia = StyleSheet.create({
    container: {
        padding: 30,
    },
    image: {
        width: 120,
        height: 120,
    },
    text: {
        fontSize: 18,
        color: '#777777',
        marginTop: 10
    }
});

/*******************************
LOGIN
*******************************/
export const login = StyleSheet.create({
    logo_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR_WHITE
    },
    login_background: {
        backgroundColor: '#0056a9',
        flex: 1,
        width: null,
        height: null,
        //resizeMode: 'cover'
    },
    form_container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLOR_WHITE
    },
    input_wrapper: {
        marginVertical: 5,
        backgroundColor: COLOR_WHITE,
    },
    input: {
        width: width(100),
        color: '#666666',
    },
    enter_button: {
        marginVertical: 5,
        borderRadius: 0,
        backgroundColor: COLOR_LIGHT_GRAY
    },
    footer: {
        backgroundColor: COLOR_WHITE
    },
    footer_button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer_text: {
        color: '#444444',
    }
});

/*******************************
SIDEBAR
*******************************/
export const sidebar = StyleSheet.create({
    imageBackground: {
        borderRadius: 100,
        height: 200,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    menuHeaderProfile: {
        justifyContent: 'center',
    },
    nome: {
        color: COLOR_WHITE,
        fontSize: 19
    },
    email: {
        color: COLOR_WHITE,
        fontSize: 13
    },
    plano: {
        color: COLOR_WHITE,
        fontSize: 12,
        marginHorizontal: 20
    },
    saldoWrapper: {
        backgroundColor: COLOR_BLUE,
        paddingVertical: 15
    },
    menuLine: {
        paddingVertical: 20,
        textAlign: 'left'        
    },
    menuLabels: {
        fontSize: 15,
        color: '#636e72'
    },
    menuLabelIcon: {
        color: '#444444',
        fontSize: 20,
    },
    sidebar_container: {
        backgroundColor: COLOR_WHITE
    }
});


/**********************************
 BUTTON ACTION
**********************************/
export const buttonAction = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      }
})


/*******************************
LOJA APAGAR
*******************************/
export const loja = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        borderRightWidth: 1,
        borderColor: '#eee'
    },
    priceWrapper: {
        flex: 1.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        borderRightWidth: 1,
        borderColor: '#eee'
    },
    infoWrapper: {
        flex: 4,
        alignContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10
    },
    tipo: {
        fontSize: 11,
        color: '#aaa'
    },
    texto: {
        fontSize: 13,
        color: '#888'
    },
    icone: {
        fontSize: 13,
        color: '#777'
    },
    btnWrapper: {
        width: 54,
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#28a745'
    }
});

/*******************************
 FILTROS DA LOJA
 *******************************/
export const filtro = StyleSheet.create({
    item: {
        flex: 0,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#d6d7da',
        marginLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
    },
    icon_wrapper: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 72,
        height: 72,
        padding: 10,
        borderRightWidth: 1,
        borderRightColor: '#d6d7da',
    },
    item_content: {
        fontSize: 14
    },
    icon: {
        fontSize: 26,
        color: COLOR_PRIMARY,
        textAlign: 'center'
    },
    iconText: {
        textAlign: 'center',
        fontSize: 11,
        color: COLOR_PRIMARY
    },
    list_wrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#000'
    },
});

/*******************************
 MINHAS LEADS
 *******************************/
export const minhaLead = StyleSheet.create({
    cliente_detalhes_nome: {
        color: '#ffffff',
        marginBottom: 10,
    },
    picker_de_negativacao: {
        marginTop: 10,
    },
    botao_de_negativacao_wrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    botao_de_negativacao: {
        marginTop: 10,
    }
});

/*******************************
PERFIL
*******************************/
export const perfil = StyleSheet.create({
    headerBackground: {
        height: 270,
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 80,
        paddingBottom: 30,
        zIndex: 0
    },
    nome: {
        color: COLOR_WHITE,
        fontSize: 20
    },
    cpf: {
        color: COLOR_WHITE,
        fontSize: 13,
        marginVertical: 3
    },
    plano: {
        color: COLOR_WHITE,
        fontSize: 12,
        marginHorizontal: 20
    },
});

/*******************************
SOBRE
*******************************/
export const sobre = StyleSheet.create({
    titulo: {
        color: COLOR_PRIMARY,
        marginBottom: 10,
        textAlign: 'center'
    },
    paragrafo: {
        color: COLOR_GRAY,
        marginBottom: 5
    }
});