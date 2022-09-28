import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "./Quiz assets/QuizData";

const Quiz = ({ navigation, route }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const animalId = location.state.id;
  //const { questionList, dataFetchedImport } = getQuestions(animalId);
  const allQuestions = data;
  //const allQuestions = questionList;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]["correct_option"];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1);
    }
    // Show Next Button
    setShowNextButton(true);
    setShowExplanation(true);
  };

  const renderExplanation = () => {
    if (showNextButton) {
      return <p>{allQuestions[currentQuestionIndex].explanation}</p>;
    } else {
      return null;
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
      setShowExplanation(false);
    }
    /* Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(); */
  };
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    setShowExplanation(false);
    /* Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start(); */
  };

  const renderQuestion = () => {
    return (
      <div class="questionContainer">
        {/* Question Counter */}
        <div class="questionCounterContainer">
          <p>{currentQuestionIndex + 1}</p>
          <p>/ {allQuestions.length}</p>
        </div>

        {/* Question */}
        <p>{allQuestions[currentQuestionIndex]?.question}</p>
      </div>
    );
  };

  const shuffleOptions = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const renderOptions = () => {
    return (
      <div class="optionsContainer">
        {allQuestions[currentQuestionIndex]?.options.map((option) => (
          <button onClick={() => validateAnswer(option)}>
            <p>{option}</p>
          </button>
        ))}
      </div>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <button onClick={handleNext}>
          <p>Next</p>
        </button>
      );
    } else {
      return null;
    }
  };

  /* const [progress, setProgress] = useState(new Animated.Value(0)); */
  /*  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  }); */
  /* const renderProgressBar = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 10,
          borderRadius: 20,
          backgroundColor: "#00000020",
        }}
      >
        <Animated.View
          style={[
            {
              height: 10,
              borderRadius: 20,
              backgroundColor: "white",
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  }; */

  return (
    <div class="pageContainer">
      {/* <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} /> */}
      <div class="pageContainer2">
        {/* ProgressBar */}
        {/* {renderProgressBar()} */}
        <div class="quizSection">
          {/* Question */}
          {renderQuestion()}

          {/* Options */}
          {renderOptions()}

          {/* Next Button */}
          {renderNextButton()}
        </div>
        {/* Explanation */}
        {renderExplanation()}

        {/* Score Modal */}

        {/* Background Image */}
        {/* <Image
          source={require("./Quiz assets/images/DottedBG.png")}
          style={{
            width: SIZES.width,
            height: 130,
            zIndex: -1,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0.5,
          }}
          resizeMode={"contain"}
        /> */}
      </div>
    </div>
  );
};

export default Quiz;
