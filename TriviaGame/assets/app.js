$(document).ready(function () {




    //Array / questions / choices / answers //
    var questionOpt = [{
        question: "What is the color of the sky?",
        choice: ["red", "blue", "white", "yellow"],
        answer: 1,

    }, {
        question: "what is the color of grass?",
        choice: ["blue", "white", "yellow", "green"],
        answer: 3,

    }, {
        question: "What color is the sun?",
        choice: ["red", "blue", "white", "black"],
        answer: 3,

    }, {
        question: "what is the color of a ups Truck?",
        choice: ["brown", "red", "white", "yellow"],
        answer: 0,

    }, {
        question: "what is the color of the fedex truck?",
        choice: ["red", "blue", "white", "yellow"],
        answer: 0,

    }, {
        question: "what color is the pepsi logo?",
        choice: ["red", "blue", "white", "yellow"],
        answer: 0,

    }, {
        question: "what color is the cocacola logo?",
        choice: ["red", "blue", "white", "yellow"],
        answer: 0,

    }];
    console.log(questionOpt);

    // global properties
    var interval;
    var timer = 20;
    var timerRunn = false;
    var correct = [""];
    var incorrect = [""];
    var unanswered = [""];
    var pickedQ = [""];
    var pick = "";
    var customer = "";
    var cutomerGuess = [""];
    var hold = [];
    $("#reset").hide();

    $("#start").on("click", function () {
        $("#start").hide();
        displayQ();
        timerRunn();
        for (var i = 0; i < questionOpt.length; i++) {
            hold.push(questionOpt[i]);
        }
        // console.log(questionOpt);
    })

    function timerRunn() {
        if (!timerRunn) {
            interval = setInterval(decrement, 1000);
            timerRunn = true;

        }
    }


    function decrement() {
        $("#timer").text("<h2> Time : " + timer + "</h2> ");
        timer--;

        if (timer === 0) {
            unanswered++;
            stop();
            $("#answerSpace").text("<h3> You have ran out of time! The answer was" = pick.choice[pick.answer] + "</h3>");
            show();
        }
    }

    function stop() {
        running = false;
        clearInterval(interval);
    }


    function displayQ() {
        randomQ = Math.floor(math.random() * questionOpt.length);


        pickedQ = questionOpt[randomQ];
    }


    $("#questionSpace").text("<h2>" + pick.question + "</h2>");


    for (var i = 0; i < pick.choice.length; i++) {
        var customer = $("<div>");
        customer.addClass("customerGuess");
        customer.text(pick.choice[i]);
        customer.attre("cutomerGuess", i);
        $("#answerSpace").append(customer);

        pickedQ.push(randomQ);
    }

    $("answerSpace").on("click", function () {
        customer = parseInt(this).attr("customerGuess");
        if (customer === pick.answer) {
            stop();
            correct++;
            customer = "";
            $("#answerSpace").text("<p> Correct! Nice Job!</p>");

        } else {
            stop();
            incorrect++;
            customer = "";
            $("answerSpace").text("<p> Incorrect! The correct answer was:" + pick.choice[pick.answer] + "</p>");

            showPicked();
        }
    })
},



    function showpicked() {
        $("#answerSpace").append("<img src=" + pick + Image + ">");
        array.push(pick);
        setTimeout(function () {
            $("#answerSpace").empty();
            timer = 20;
            if ((correct + incorrect + unanswered) === questionContent) {
                $("#questionSpace").empty();
                $("#questionSpace").text("<h2> Game over!! </h2>");
                $("#answerSpace").append("Correct:" + correct + "</h2>");
                $("#answerSpace").append("<h2> Incorrrect:" + incorrect + "</h2>");
                $("#answerSpace").append("<h2> Unanswered:" + unanswered + "</h2>");
                $("#reset").show();
                correct = 0;
                incorrect = 0;
                unanswered = 0;

            } else {
                timerRunn();
                displayQ();
            }
        },


            $("#reset").on('click', function () {
                $('#reset').hide();
                $("#answerSpace").empty();
                $("#questionSpace").empty();
                for (var i = 0; i < hold.length; i++) {
                    questionsOpt.push(hold[i]);
                }
                timerRunn();
                displayQ();
            })
        )

    })
