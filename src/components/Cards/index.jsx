import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function Card(){

    const arrayItems = [
        {title: 'Filé a Parmegiana', description: 'filé a parmegiana com grandes pedaços de carne e vários macarrão', price: 'R$ 20,50', image: 'https://admin.pechinchou.com.br/static/assets/img/Pechinchou.png'},
        {title: 'X-Tudo', description: 'filé a parmegiana com grandes pedaços de carne e vários macarrão', price: 'R$ 130,20', image: 'https://admin.pechinchou.com.br/static/assets/img/Pechinchou.png'},
        {title: 'Picanha Assada', description: 'filé a parmegiana com grandes pedaços de carne e vários macarrão', price: 'R$ 72,50', image: 'https://admin.pechinchou.com.br/static/assets/img/Pechinchou.png'},
        {title: 'Feijoada', description: 'filé a parmegiana com grandes pedaços de carne e vários macarrão', price: 'R$ 40,80', image: 'https://admin.pechinchou.com.br/static/assets/img/Pechinchou.png'},
        {title: 'Arroz Branco', description: 'filé a parmegiana com grandes pedaços de carne e vários macarrão', price: 'R$ 10,99', image: 'https://admin.pechinchou.com.br/static/assets/img/Pechinchou.png'},
        {title: 'Arroz Branco', description: 'filé a parmegiana com grandes pedaços de carne e vários macarrão', price: 'R$ 10,99', image: 'https://admin.pechinchou.com.br/static/assets/img/Pechinchou.png'},
        {title: 'Arroz Branco', description: 'filé a parmegiana com grandes pedaços de carne e vários macarrão', price: 'R$ 10,99', image: 'https://admin.pechinchou.com.br/static/assets/img/Pechinchou.png'},
        {title: 'Arroz Branco', description: 'filé a parmegiana com grandes pedaços de carne e vários macarrão', price: 'R$ 10,99', image: 'https://admin.pechinchou.com.br/static/assets/img/Pechinchou.png'},
        {title: 'Arroz Branco', description: 'filé a parmegiana com grandes pedaços de carne e vários macarrão', price: 'R$ 10,99', image: 'https://admin.pechinchou.com.br/static/assets/img/Pechinchou.png'},
        {title: 'Arroz Branco', description: 'filé a parmegiana com grandes pedaços de carne e vários macarrão', price: 'R$ 10,99', image: 'https://admin.pechinchou.com.br/static/assets/img/Pechinchou.png'},
        {title: 'Arroz Branco', description: 'filé a parmegiana com grandes pedaços de carne e vários macarrão', price: 'R$ 10,99', image: 'https://admin.pechinchou.com.br/static/assets/img/Pechinchou.png'},
        {title: 'Arroz Branco', description: 'filé a parmegiana com grandes pedaços de carne e vários macarrão', price: 'R$ 10,99', image: 'https://admin.pechinchou.com.br/static/assets/img/Pechinchou.png'},
        {title: 'Arroz Branco', description: 'filé a parmegiana com grandes pedaços de carne e vários macarrão', price: 'R$ 10,99', image: 'https://admin.pechinchou.com.br/static/assets/img/Pechinchou.png'},
    ];

    return (
        <FlatList
        style={styles.list}
        data={arrayItems}
        ItemSeparatorComponent={() => <View style={{width: 12}}></View> }
        renderItem={({item, index}) => {
            return (
                <View style={styles.container}>
                    <Image style={styles.image} source = {{ uri: item.image,}} />
                    <View style={styles.detailView}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                </View>
            )
        }}
        />
    )
}

const styles = StyleSheet.create({

    title: {
        fontWeight: 'bold',
        fontSize: 17
    },  

    container: {
        maxWidth: 350,
        height: 122,
        display: 'flex',
        borderWidth: 0.2,
        marginTop: 20,
        borderRadius: 8,
        
    },  

    list: {
        marginTop: 120,
        left: 36,
        maxWidth: 330,
        borderRadius: 80
    },

    image: {
        width: 100,
        height: 120,
        borderRadius: 15,
    },

    detailView: {
        top: -110,
        marginLeft: 120,

    },

    description: {
        color: '#979797',

    },

    price: {
        color: '#F9B233',
        top: 5,
        fontSize: 18,
        fontWeight: 'bold'

    }

});