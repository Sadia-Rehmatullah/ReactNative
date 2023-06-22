import * as React from 'react';
import {View, Text} from 'react-native';

export default function LittleLEmonFooter()
{
    return(
        <View style={{marginBottom:10, backgroundColor: '#F4CE14' }}>
            <Text style= {{padding: 40, fontSize: 20, color: 'black'}}>
                     All Rights Reserved by Little Lemon, 2022
            </Text>

        </View>
    );
}