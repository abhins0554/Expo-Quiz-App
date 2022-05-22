import React,{useState} from 'react';
import { SafeAreaView,StyleSheet,ImageBackground,Text,ScrollView,View,Dimensions,TouchableOpacity,} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { FetchQuestionAPI } from '../Services/FetchQuestionAPI';

function HomeScreen({navigation}) {
    const [category,set_category]=useState("");
    const [difficulty,set_difficulty]=useState("");
    const [counter,set_counter]=useState(10);

    const _get_quiz_data = async () => {
        if (category&&difficulty) {
            FetchQuestionAPI(category,difficulty,counter).then(response=>{
                if(response?.data?.results?.length!==0){
                    navigation.navigate("QuizScreen",{data:response.data});
                }
                else{
                    alert("Question Unavailable Change Category, Difficulty or Number of Question");
                }
            })
            .catch(error=>{
                alert("Network Error");
            })
        }
        else{
            console.log("No Data");
        }
    }

    return (
        <SafeAreaView style={styles.mainframe}>
            <ImageBackground source={require("../Assets/Image/bg.jpg")} style={styles.mainframe}>
                <ScrollView style={{flex:1}}>
                    <Text style={styles.heading}>Take a Quiz</Text>
                    <View style={styles.cards}>
                        <Text style={styles.categoryHeading}>Select Category</Text>
                        <Picker mode='dropdown' style={styles.pickerStyle} selectedValue={category} onValueChange={(e)=>set_category(e)}>
                            <Picker.Item label="Select Category" />
                            <Picker.Item label="General Knowledge" value="9" />
                            <Picker.Item label="Entertainment: Books" value="10" />
                            <Picker.Item label="Entertainment: Film" value="11" />
                            <Picker.Item label="Entertainment: Music" value="12" />
                            <Picker.Item label="Entertainment: Musicals & Theatres" value="13" />
                            <Picker.Item label="Entertainment: Television" value="14" />
                            <Picker.Item label="Entertainment: Video Games" value="15" />
                            <Picker.Item label="Entertainment: Board Games" value="16" />
                            <Picker.Item label="Science & Nature" value="17" />
                            <Picker.Item label="Science: Computers" value="18" />
                            <Picker.Item label="Science: Mathematics" value="19" />
                            <Picker.Item label="Mythology" value="20" />
                            <Picker.Item label="Sports" value="21" />
                            <Picker.Item label="Geography" value="22" />
                            <Picker.Item label="History" value="23" />
                            <Picker.Item label="Politics" value="24" />
                            <Picker.Item label="Art" value="25" />
                            <Picker.Item label="Celebrities" value="26" />
                            <Picker.Item label="Animals" value="27" />
                            <Picker.Item label="Vehicles" value="28" />
                            <Picker.Item label="Entertainment: Comics" value="29" />
                            <Picker.Item label="Science: Gadgets" value="30" />
                            <Picker.Item label="Entertainment: Japanese Anime & Manga" value="31" />
                            <Picker.Item label="Entertainment: Cartoon & Animations" value="32" />
                        </Picker>
                        <Text style={styles.categoryHeading}>Select Difficulty</Text>
                        <Picker mode='dropdown' style={styles.pickerStyle} selectedValue={difficulty} onValueChange={(e)=>set_difficulty(e)}>
                            <Picker.Item label="Select Difficulty"/>
                            <Picker.Item label="Easy" value="easy" />
                            <Picker.Item label="Medium" value="medium" />
                            <Picker.Item label="Hard" value="hard" />
                        </Picker>
                        <Text style={styles.categoryHeading}>No of Question</Text>
                        <View style={{flexDirection:'row',alignSelf:"center"}}>
                            <TouchableOpacity style={styles.contersupdaterview} onPress={()=>{counter>5?set_counter(counter-1):null}}>
                                <Text style={styles.countertxt}>-</Text>
                            </TouchableOpacity>
                            <View style={{borderWidth:1,padding:10,borderColor:"grey"}}>
                                <Text style={styles.countertxt}>{counter}</Text>
                            </View>
                            <TouchableOpacity style={styles.contersupdaterview} onPress={()=>{counter<30?set_counter(counter+1):null}}>
                                <Text style={styles.countertxt}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.btn} onPress={()=> _get_quiz_data()}>
                            <Text style={styles.btntxt}>Start Quiz</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    mainframe:{
        flex:1,
    },
    heading:{
        fontSize:30,
        color:'white',
        marginTop:20,
        textShadowColor:'black',
        textAlign:'center'
    },
    cards:{
        width:Dimensions.get('window').width-20,
        // height:400,
        backgroundColor:'rgba( 255, 255, 255, 0.25 )',
        alignSelf:'center',
        borderRadius:12,
        marginVertical:20,
    },
    pickerStyle:{
        width:"90%",
        backgroundColor:"white",
        alignSelf:"center",
        padding:10,
    },
    categoryHeading:{
        marginHorizontal:"5%",
        marginVertical:15,
        fontSize:20,
    },
    btn:{
        alignSelf:"center",
        marginVertical:40,
        backgroundColor:"dodgerblue",
        borderRadius:10,
        elevation:50,
    },
    btntxt:{
        color:"white",
        fontSize:20,
        padding:10,
    },
    countertxt:{
        color:'white',
        padding:5,
        fontSize:25
    },
    contersupdaterview:{
        backgroundColor:'dodgerblue',
        padding:10,
    },
})
export default HomeScreen;