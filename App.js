import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback,
   TouchableOpacity, SafeAreaView, Image, Alert, Button,
    Platform, StatusBar } from 'react-native';

//safeareaview adds a bit of padding on top to make sure the text can be seen properly
//to enable remote debugging on your phone shake your phone then select debug remote js when done disable
//in IOS View -> UIView
//in android View -> AndroidView
export default function App() {
  //the log statement will help kno if the app is working okay
  // console.log("App Executed");
  //const hanldlePress = () => console.log("Text pressed");
  //console.log(require("./assets/icon.png")) used for static images
  return (
    <SafeAreaView style={styles.container}>
      {/* setting of color on a single element or inline styling
      <SafeAreaView style={{backgroundColor:"orange"}}>
      setting style differently
      <SafeAreaView style={containerStyle}>
      const containerStyle = {backgroundColor:"orange"};
      safeareaview only works for ios

      //<Text numberOfLines={1}> onPress{handlePress}/>
       used to make sure that the text is kept in 1 line and doesnt automatically
      go to another line if the text is too long 
      onPress used to make te text if clicked and then shows the cosole.log message

      <Image source={require('./assets/icon')}
      //for images from the net
      thouchablewithoutfeedback doesnt give any feedback when image is pressed but shows the log message on the terminal
      Touchablewithoutfeedback can be replaced with touchableopacity so that when image is pressed its opacity gets reduced so that we can see the backgrounf
      TouchableHighlight when image gets pressed the background gets dark for some seconds
      TH works better with views that have color
      <TouchableWithoutFeedback onPress={() =>console.log("Image Tapped")}>
      <Image source={{ width:200, height:300, uri: "https://picsum.photos/200/300",}}
      </TouchableWithoutFeedback>
      for local images you dont have to specify the styling but for images from the net you have to

      <Button color="orange" title="Clik me" 
      0nPress={() => console.log("Button Pressed")}
      to show an alert when button is pressed
      onPress{() => alert("Button tapped")} 
      to style the alert box
      onPress={() => Alert.alert("My Title", "My Message"
      [{text :"yes", onPress: ()=> console.log("Yes selected")},
      {text: "no", onPress: ()=> console.log("No selected")}])}
      alert method in this there wil be a textinput in the alert message (only works on iphones)
      onPress{() => Alert.prompt("My title", "My message", text=> console.log(text))}>
      
      Platform only works for android and does the same thing safeareaview does by making sure the
       text is below th notification part on the screen . It helps if you remove justify content and align items
       paddingTop : Platform.OS === "android" ? 20:0,
       instead of 20 you can use status bar which properly adds padding on top
      const styles = StyleSheet.create({
      container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop : Platform.OS === "android" ? StatusBar.currentHeight:0,
      },*/}

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
     alignItems: 'center',
     justifyContent: 'center',
  },
});
