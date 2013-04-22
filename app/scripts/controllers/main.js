'use strict';

angular.module('mrpigsApp')
  .controller('MainCtrl', function ($scope, $http) {

    //get course data
    $http.get('courses/econ101.json').then(function(res){
       $scope.slides = res.data;
        console.log($scope.slides);
//parser for first JSON file
//        $scope.slides = [];
//        var unparsedSlides = [];
//        for(var i=0; i < unparsedSlides.length; i++){
//
//            var slide = {};
//
//            slide.slideTitle = unparsedSlides[i].slideTitle;
//            slide.content = unparsedSlides[i].content;
//
//            //if questions exist, place question objects in slide.questions[]
//            //question objects have prompt, choices[], correctAnswer, explanation
//            if(unparsedSlides[i].question1 !== ""){
//                slide.questions = [];
//                var question1 = {};
//                question1.prompt = unparsedSlides[i].question1;
//                question1.choices = unparsedSlides[i].answers1;
//                question1.correctAnswer = unparsedSlides[i].cAnswer1;
//                question1.explanation = unparsedSlides[i].qExplained1;
//                slide.questions.push(question1);
//
//                if(unparsedSlides[i].question2 !== ""){
//                    var question2 = {};
//                    question2.prompt = unparsedSlides[i].question2;
//                    question2.choices = unparsedSlides[i].answers2;
//                    question2.correctAnswer = unparsedSlides[i].cAnswer2;
//                    question2.explanation = unparsedSlides[i].qExplained2;
//                    slide.questions.push(question2);
//                }
//            }
//            $scope.slides.push(slide);
//        }
    });

    //init
    var currentSlideIndex = 0;



    $scope.getCurrentSlide = function(){ return currentSlideIndex + 1; }


    $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma' ];




  });
