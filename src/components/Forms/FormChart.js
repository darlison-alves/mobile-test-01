import React from "react";
import { Formik, FieldArray, Field, Form } from "formik";
import { View, TextInput, Button, Text } from 'react-native'


var vehicles = [
    'car',
    'motorcycle',
    'airplane',
    'rocket'
 ];

export const ChartForm = props => {
    
    const form = ['First Name', 'Last Name', 'Phone', 'Email', 'Etc']
    

    return ( 
    <Formik
      initialValues={{ titulo: 'hhhhhh', dados:[]  }}
      onSubmit={values => console.log(values)}
    >
      {props => (
        <View>
          <TextInput
            onChangeText={props.handleChange('titulo')}
            onBlur={props.handleBlur('titulo')}
            value={props.values.titulo}
          />            
            
            { form.map((type, index)=> <TextInput placeholder={type} value={props.values.dados[index]} onChangeText={props.handleChange(`dados[${index}]`)} />) }

          <Button onPress={props.handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
    )
};
