import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native";

function QuizCard({ question, ans1, ans2, ans3, ans4, correct_answer, total_no_of_qestion, index,change_question,navigation }) {

    const [selected_ans, set_selected_ans] = useState('');
    const [correctness, set_correctness] = useState([]);
    const[question_arr,set_question_arr]=useState([]);
    const [user_selected, set_user_selected] = useState([]);

    const submit_answer = async () => {
        if (index + 1 === total_no_of_qestion) {
            let user_arr = user_selected;
            let ans = selected_ans === 'a' ? ans4 : selected_ans === 'b' ? ans1 : selected_ans === 'c' ? ans2 : selected_ans === 'd' ? ans3 : null;
            if (index === user_selected.length) {
                user_arr.push(ans);
                set_user_selected(user_arr);
                let temp1 = [];
                let temp2 = [];
                temp1 = correctness;
                temp1.push(correct_answer.toString());
                set_correctness(temp1);
                temp2= question_arr;
                temp2.push(question);
                set_question_arr(temp2);
                navigation.navigate("ResultScreen",{question:question_arr,user_selected:user_selected,correctness:correctness,total_no_of_qestion:total_no_of_qestion})
            }
        }
        else {
            let user_arr = user_selected;
            let ans = selected_ans === 'a' ? ans4 : selected_ans === 'b' ? ans1 : selected_ans === 'c' ? ans2 : selected_ans === 'd' ? ans3 : null;
            if (index === user_selected.length) {
                user_arr.push(ans);
                set_user_selected(user_arr);
                let temp1 = [];
                let temp2 = [];
                temp1 = correctness;
                temp1.push(correct_answer.toString());
                set_correctness(temp1);
                temp2= question_arr;
                temp2.push(question);
                set_question_arr(temp2);
                change_question();
            }
        }
    }

    React.useEffect(() => {
        set_selected_ans('');
    }, [index]);
    return (
        <View style={styles.cards}>
            <Text style={styles.questiontxt}>Q {index + 1 + ". "}{question}</Text>
            <TouchableOpacity style={[styles.optiontView, { backgroundColor: selected_ans === 'a' ? 'yellow' : 'white' }]} onPress={() => set_selected_ans(selected_ans !== 'a' ? 'a' : '')}>
                <Text style={styles.optionTxt}>(a). {ans4}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optiontView, { backgroundColor: selected_ans === 'b' ? 'yellow' : 'white' }]} onPress={() => set_selected_ans(selected_ans !== 'b' ? 'b' : '')}>
                <Text style={styles.optionTxt}>(b). {ans1}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optiontView, { backgroundColor: selected_ans === 'c' ? 'yellow' : 'white' }]} onPress={() => set_selected_ans(selected_ans !== 'c' ? 'c' : '')}>
                <Text style={styles.optionTxt}>(c). {ans2}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optiontView, { backgroundColor: selected_ans === 'd' ? 'yellow' : 'white' }]} onPress={() => set_selected_ans(selected_ans !== 'd' ? 'd' : '')}>
                <Text style={styles.optionTxt}>(d). {ans3}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => submit_answer()}>
                <Text style={styles.btntxt}>{index + 1 === total_no_of_qestion ? "Final Submit" : "Submit Answers"}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    cards: {
        width: Dimensions.get("window").width - 20,
        // height:400,
        backgroundColor: "rgba( 255, 255, 255, 0.25 )",
        alignSelf: "center",
        borderRadius: 12,
        marginVertical: 20,
        padding: 10
    },
    questiontxt: {
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 5,
        marginHorizontal: 5,
    },
    optionTxt: {
        fontSize: 15,
        marginVertical: 2.5,
        fontWeight: "400",
        color: 'black'
    },
    optiontView: {
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    },
    btn: {
        alignSelf: "center",
        marginVertical: 40,
        backgroundColor: "dodgerblue",
        borderRadius: 10,
        elevation: 50,
    },
    btntxt: {
        color: "white",
        fontSize: 20,
        padding: 10,
    },
});
export default QuizCard;
