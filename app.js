import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, Dimensions } from 'react-native';
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {

  //passes the dimensions of phone being used
  //const {landscape} = useDeviceOrientation;

  return (
    // <SafeArea style={styles.container}>
    //flex is like the amount that the view will take on the screen if its  flex: 1, it will tak eup full screen
    //flex direction is the direction you want the flex to take
    // e.g. flexDirection : "row-reverse" or "column-reverse" or "row" or "column"
    <View style={{
      backgroundColor:'white',
      flex: 1,
      flexDirection : "row",
      justifyContent: "center",
      //flex-end, flex-start, space-around (puts space btwn the 3 views), space-evenly, space-between
      alignItems:"center", //baseline, flex-end, center, stretch(seen only if height is removed), flex-start
      //alignContent:"center", only works if there is wrapping
      //flexWrap: "wrap", wraps the views 
    }}>
      <View style = {{
        backgroundColor: 'dodgerblue',
        // flexBasis: 100, //is equivalent to setting the width to 100 , can map to width or height
        // flexGrow: 1, //makes the view fill out the available space left, almost works as flex
        //flexShrink: 1, //if sth is overflowing it gets shrunk so others can fit also same as flex: -1,
        width:100,
        height:100,
        //top: 20(goes down) -20(goes up),//move this view without changing the dimensions
        //right: 20,
        //left:20,
        //alignSelf: "flex-start", //this aligns only this view
        //position:"reltive" or "absolute", //whencombined with left the view moves to top left
        //for absolute the other views move and for relative only this view moves
      }}
      />
      <View style = {{
        backgroundColor: 'orange',
        width:100,
        height:100,
      }}
      />
       <View style = {{
        backgroundColor: 'gold',
        width:100,
        height:100,
      }}
      />
       <View style = {{
        backgroundColor: 'grey',
        width:100,
        height:100,
      }}
      />     
        <View style = {{
        backgroundColor: 'greenyellow',
        width:100,
        height:100,
      }}
      />
    </View> 
      // <StatusBar style="auto" />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: Platform.OS ==="android" ? StatusBar.currentHeight : 0,
  },
});
