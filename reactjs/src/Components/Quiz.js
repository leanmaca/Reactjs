import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "./Quiz assets/QuizData";
import "./css/quizScreen.css";

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
          <p>
            {currentQuestionIndex + 1} / {allQuestions.length}
          </p>
        </div>

        {/* Question */}
        <p class="questionText">
          {allQuestions[currentQuestionIndex]?.question}
        </p>
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
          <button
            class="optionButton"
            onClick={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            style={{
              borderColor:
                option == correctOption
                  ? "#668d3c"
                  : option == currentOptionSelected
                  ? "#c4391d"
                  : "#668d3c",
              backgroundColor:
                option == correctOption
                  ? "#668d3c"
                  : option == currentOptionSelected
                  ? "#c4391d"
                  : "#fff",
            }}
          >
            <p
              class="optionText"
              style={{
                color:
                  option == correctOption
                    ? "#FFF"
                    : option == currentOptionSelected
                    ? "#FFF"
                    : "#668d3c",
              }}
            >
              {option}
            </p>
          </button>
        ))}
      </div>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <button class="nextButton" onClick={handleNext}>
          <p class="nextText">Next</p>
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

  const backToAnimalPage = () => {
    navigate("/animalview", {
      state: {
        id: animalId,
      },
    });
  };

  const QuizResultModal = () => {
    return (
      <div class="quizResult" id="modalId">
        <div class="firstModal-content">
          <span class="closeBtn" id="closeBtn">
            &times;
          </span>
          <div class="modaltitle">
            <p>Elephants</p>
          </div>
          <div class="modaldescription">
            <p>
              elephant, the largest living land animal, characterized by its
              long trunk (elongated upper lip and nose), columnar legs, and huge
              head with temporal glands and wide, flat ears.
            </p>
          </div>
          <div class="seeAnimalsBtnDiv">
            <button class="retryQuizButton" onClick={restartQuiz}>
              Retry Quiz
            </button>
            <button class="retryQuizButton" onClick={backToAnimalPage}>
              Back to Animal Page
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div class="screen">
      <div class="pageContainer">
        {/* <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} /> */}
        <div class="pageContainer2">
          {/* ProgressBar */}
          {/* {renderProgressBar()} */}
          <div class="quizSection">
            {/* Question */}
            {renderQuestion()}
            <div class="optionsContainer">
              {/* Options */}
              {renderOptions()}

              {/* Next Button */}
              {renderNextButton()}
            </div>
          </div>
          {/* Explanation */}
          {renderExplanation()}

          {/* Score Modal */}
          {showScoreModal && <QuizResultModal />}
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
    </div>
  );
};

export default Quiz;
