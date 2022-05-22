import React,{useState} from 'react';
import {SafeAreaView,StyleSheet,Text,View,ImageBackground,Dimensions,TouchableOpacity,ScrollView} from 'react-native';

function ResultScreen({route,navigation}) {
    const [correct_no,set_correct_no]=useState(0);
    const [wrong_no,set_wrong_no]=useState(0);

    const _check_answers = async () => {
        let c_answer = 0;
        let w_answer = 0;
        for (let index = 0; index < route?.params?.correctness?.length; index++) {
            if (route?.params?.correctness[index]===route?.params?.user_selected[index]) {
                c_answer+=1;
            }
            else{
                w_answer+=1;
            }
        }
        set_correct_no(c_answer);
        set_wrong_no(w_answer);
    }

    React.useEffect(() => {
        _check_answers();
    }, []);

    return (
        <SafeAreaView style={styles.mainframe}>
            <ImageBackground
                source={require("../Assets/Image/bg.jpg")}
                style={styles.mainframe}
            >
                <ScrollView style={styles.mainframe}>
                <View style={styles.card}>
                    <Text style={styles.headingFrame}>Total Number of Question : {route.params.total_no_of_qestion}</Text>
                    <Text style={styles.headingFrame}>Right Answer Given : {correct_no}</Text>
                    <Text style={styles.headingFrame}>Worng Answer Given : {wrong_no}</Text>
                    {
                        route?.params?.question?.map((item,index)=>{
                            return (
                                <View style={{marginVertical:25}} key={index}>
                                    <Text style={styles.questiontxt}>Question {index+1}. {item}</Text>
                                    <Text style={styles.anstxt}>Your Answer :- {route?.params?.user_selected[index]}</Text>
                                    <Text style={styles.ctxt}>Right Answer :-  {route?.params?.correctness[index]}</Text>
                                </View>
                            )       
                        })
                    }
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('HomeScreen')}>
                    <Text style={styles.btntxt}>Return Home</Text>
                </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    mainframe:{
        flex:1,
    },
    card:{
        width: Dimensions.get("window").width - 20,
        // height:400,
        backgroundColor: "rgba( 255, 255, 255, 0.25 )",
        alignSelf: "center",
        borderRadius: 12,
        marginVertical: 20,
        padding: 10
    },
    headingFrame:{
        fontSize:18,
        fontWeight:'bold',
    },
    questiontxt:{
        fontSize:20,
        fontWeight:'600',
    },
    anstxt:{
        fontSize:14,
        fontWeight:'600',
    },
    ctxt:{
        fontSize:18,
        fontWeight:'400',
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
})
export default ResultScreen;