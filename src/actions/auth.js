import { SETLOGIN } from "../defaults/authAction";
import { Alert } from 'react-native'

const usuarios = [
    {
        email: 'darlison@gmail.com',
        senha: '123456'
    },
    {
        email: 'joao@gmail.com',
        senha: 'joao123'
    }
]


export const login = (email, senha, cb) => (
    dispatch => {
        let user = usuarios.filter(value => value.email === email && value.senha === senha)[0]
        if(user) {
            dispatch({ type: SETLOGIN, payload: user })
            cb('/main')
        } else {
            Alert.alert('Info', 'email ou senha invalido!')
        } 
    }
)