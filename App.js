//import libraries to create components

import React from "react";
import {View, Text, StyleSheet} from "react-native";

//create a component that return some jsx / simple function
import LittleLemonHeader from "./Components/LittleLemonHeader";
import LittleLEmonFooter from "./Components/LittleLemonFooter";
export default function App()
{
   return (
<>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <LittleLemonHeader />
      </View>
      <View style={{ backgroundColor: '#495E57' }}>
        <LittleLEmonFooter />
      </View>
    </>
   );      
}


//create a stylesheet to style the component

const Styles = StyleSheet.create({
  textStyle:{ 
  color: "red",
  },
});

