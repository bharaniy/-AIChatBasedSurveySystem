let index = 0;
const questions=
[
["Hello there, <br> Welcome to Chatbot <br>"],
    ["Whats your name?"],
    ["Whats your email?"],
    ["How does xyz teach?"],
["What can you change about his teaching?"],
    ["Thank you <a href='www.google.com'>Click here</a>"],
];
const answers=
[
    ["Hi"],
    ["Im from team 5"],
    ["I like his notes"]
];

function askQuestion(i) {
    if (typeof (questions[index]) === 'undefined') {
}
    else {
        setTimeout(function () {
            $(".chatbox").append('<span class="userName">Team 5 </span>\n' +
                '    <span class="userMessage">' + questions[i] + ' </span>');
      $(".chatbox").scrollTop($(".chatbox").prop('scrollHeight'));
        },2000);

    }
}
function chatInint() {
    askQuestion(index);
}
chatInint();

document.querySelector("#input").addEventListener('keypress',function (e) {
    let key= e.keyCode || e.which;
    if(key==13){
        sendMessage();
    }
});
function sendMessage() {
    let input  = $("#input").val();
    answers[index]=input;
    $(".chatbox").append('<span class="userName">You </span>\n' +
        '    <span class="userMessage">' + input + ' </span>');
    $(".chatbox").scrollTop($(".chatbox").prop('scrollHeight'));
    index++;
    askQuestion(index);
    $("#input").val('');
    $("#input").focus();
}