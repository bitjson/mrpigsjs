'use strict';

angular.module('mrpigsApp')
    .controller('CourseCtrl', function ($scope, $http, $location) {

        var correctAnswers = []; //2D array || 0 (undefined) = answer not guessed, 1 = correct, 2 = false
        var currentSlideIndex = 0;
        var currentAnswerIndex = 0;
        $scope.readyForQuestion = false;

        //get course data
        $http.get('scripts/econ101.json').then(function (res) {
            $scope.slides = res.data;

            for (var i = 0; i < $scope.slides.length; i++) {
                correctAnswers[i] = [];
                if (typeof $scope.slides[i].questions !== 'undefined')
                    for (var qi = 0; qi < $scope.slides[i].questions.length; qi++) correctAnswers[i].push(true);
            }

        });

        $scope.forwardSlide = function () {
            if(currentSlideIndex+1 >= $scope.slides.length) $location.path('/about');
            else return currentSlideIndex++;

        };
        $scope.backSlide = function () {
            return currentSlideIndex--;
        };
        $scope.canGoBack = function () {
            return (currentSlideIndex > 0);
        };

        $scope.getCurrentSlide = function () {
            return currentSlideIndex + 1;
        };

        $scope.showOrHide = function ($index) {
            if ($index == currentSlideIndex) return "visible";
            if ($index !== currentSlideIndex) return "hide";
        };

        var activeChoice;

        $scope.userPicks = function (question, choice) {
            if (question.status == "correct") return;
//            activeChoice = choice;
            if (choice == question.correctAnswer) question.status = "correct";
            else {
                question.status = "wrong";
                wrongExplain();
            }

//            if(choice == question.correctAnswer)correctAnswers[currentSlideIndex][currentAnswerIndex] = 1; //correct > 1
//            else correctAnswers[currentSlideIndex][currentAnswerIndex] = 1; //wrong > 2

        };

        $scope.gotAnswerCorrect = function (question) {

            if (question.status == "correct") return true;
            return false;

//            if(correctAnswers[currentSlideIndex][answerIndex] == 1) return true;
//            return false;
        };

        $scope.gotAnswerWrong = function (question) {

            if (question.status == "wrong") return true;
            return false;

//            if(correctAnswers[currentSlideIndex][answerIndex] == 2) return true;
//            return false;

        };

        var wrongExplain = function () {
            $scope.wrongExplain = ["Not quite", "I'm afraid that isn't the answer", "Sorry, that's not correct", "I'm afraid not"][Math.floor(Math.random() * 4)] +
                ['- ', '; ', '... '][Math.floor(Math.random() * 3)] +
                ["please try again.", "how about another?", "let's try that again."][Math.floor(Math.random() * 3)];
        };

        var answeredCurrentQuestions = function () {
            if (typeof $scope.slides[currentSlideIndex].questions !== 'undefined') {
                var questions = $scope.slides[currentSlideIndex].questions;
                for (var i = 0; i < $scope.slides[currentSlideIndex].questions.length; i++) if ($scope.slides[currentSlideIndex].questions[i].status !== "correct") return false;
                return true;
            }
            return true;
        };

        $scope.canAdvance = function () {
            if (answeredCurrentQuestions()) return true;
            return false;
        };

//       $scope.highlightActiveChoice = function (choice) {
//           if(choice == activeChoice) return "highlighted-choice";
//           return false;
//       };
/*
        $scope.test = function () {
            console.log($scope);
            console.log($scope.slides.length);
        };
 */
        wrongExplain();

        $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma' ];


    });
