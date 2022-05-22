import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    Text,
    View,
} from "react-native";
import QuizCard from "../Components/QuizCard";

function QuizScreen({navigation,route}) {
    const data = route?.params?.data;
    const [i, set_i] = React.useState(0);
    const [answers_array, set_answers_array] = React.useState([]);
    const [change, set_change] = React.useState(0);

    const optss = () => {
        let arr = [];
        arr.push(data?.results[i]?.correct_answer);
        arr.push(data?.results[i]?.incorrect_answers[0]);
        arr.push(data?.results[i]?.incorrect_answers[1]);
        arr.push(data?.results[i]?.incorrect_answers[2]);
        arr.sort(() => Math.random() - 0.5);
        set_answers_array(arr);
    };

    const back = () => {
        if (i > 0) {
            if (i < data?.results.length - 1) {
                set_i(i - 1);
                set_change(change - 1);
            } else if (data?.results.length - 1 == i) {
                set_i(i - 1);
            }
        } else {
            set_i(0);
            set_change(change - 1);
        }
    };
    const next = () => {
        if (i < data?.results.length - 1) {
            set_i(i + 1);
            set_change(change + 1);
        }
    };

    React.useEffect(() => {
        optss();
    }, [i]);

    return (
        <SafeAreaView style={styles.mainframe}>
            <ImageBackground
                source={require("../Assets/Image/bg.jpg")}
                style={styles.mainframe}
            >
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ marginTop: 45 }} />
                    <QuizCard
                        question={data?.results[i]?.question}
                        ans1={answers_array[0]}
                        ans2={answers_array[1]}
                        ans3={answers_array[2]}
                        ans4={answers_array[3]}
                        correct_answer={data?.results[i]?.correct_answer}
                        total_no_of_qestion={data?.results?.length}
                        index={i}
                        change_question={()=>next()}
                        navigation={navigation}
                    />
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    mainframe: {
        flex: 1,
    },
});
export default QuizScreen;
