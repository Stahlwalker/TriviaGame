
// var timeleft = 600;
// var downloadTimer = setInterval(function(){
// timeleft--;
// document.getElementById("countdowntimer").textContent = timeleft;
// if(timeleft <= 0)
//     clearInterval(downloadTimer);
// },1000);

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        // if (timer === 0) {
        //     $("Sorry, you lost!").dialog();
        //     clearInterval(timer);
        //   }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector("#time");
    startTimer(fiveMinutes, display);
};



var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "What is Superman's birth name?", "Kal-El", "Clark Kent", "Barry Allen", "A" ],
    [ "Which X-Men uses playing cards for weapons?", "Beast", "Rogue", "Gambit", "C" ],
    [ "Who is Dick Grayson?", "Captian America", "Hulk", "Robin", "C" ],
    [ "Who can control metal?", "Super Girl", "Magneto", "Batman", "B" ],
    [ "Which superhero is nicknamed the Scarlett Speedster?", "Speedball", "The Flash", "The Thing", "B" ],
    [ "Who is the leader of the X-Men?", "Cyclops", "Wolverine", "Storm", "A" ],
    [ "What is Daredevil's real name?", "Scott Summers", "Matt Murdock", "Oliver Queen", "B" ],
    [ "Cyclops is married to which X-Men?", "Kitty Pryde", "Storm", "Jean Grey", "C" ],
    [ "Which avenger is Tony Stark?", "Iron Man", "Falcon", "Ant Man", "A" ],
    [ "Which Justice League member can talk to fish?", "Cyborg", "Martian Manhunter", "Aquaman", "C" ],
    [ "Who is Wade Wilson?", "Deadpool", "Bishop", "Cable", "A" ],
    [ "Who is Peter Quill?", "Groot", "Gamora", "Star Lord", "C" ],
    [ "Which villain is nicknamed Puddin?", "Penguin", "Joker", "Harley Quinn", "B" ],
    [ "Who kills Superman?", "Doomsday", "Lex Luthor", "Zod", "B" ],
    [ "Hal Jordan superhero identity?", "Sinestro", "Green Lantern", "Deadshot", "B" ],
    [ "The Green Arrow's real identity?", "Wally West", "John Stewart", "Oliver Queen", "C" ],
    [ "Who is the Red Hood?", "Jason Todd", "Luke Cage", "Pete Ross", "A" ],
    [ "Who is Thor's brother?", "Ultron", "Loki", "Killer Croc", "B" ],
    [ "Who is a member of The Fantastic Four?", "Human Torch", "Spider Man", "Hulk", "A" ],
    [ "Bruce Banner's superhero name?", "Martian Manhunter", "Hulk", "Thanos", "B" ],           
];

function _(x){
    return document.getElementById(x);
}

function renderQuestion(){
    test = _("test");
    if(pos >= questions.length){
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        _("test_status").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return fales; 
    }
    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer() '>Submit Answer</button>";
}

function checkAnswer(){
   choices = document.getElementsByName("choices");
   for(var i=0; i<choices.length; i++){
       if(choices[i].checked){
           choice = choices[i].value;
       }
   }
   if(choice == questions[pos][4]){
       correct++;
   }
   pos++;
   renderQuestion();
}

window.addEventListener("load", renderQuestion, false);



// window.onload=function() {

//  function Questions(divname) {
//     this.QText   = new Array(20); // The questions
//     this.QAnswer = new Array(20); // The correct answers
//     this.QChoice = new Array(80); // The possible multi-choice values
//     this.thisAns = new Array(10); // The answers for this page
//     this.Answer  = new Array(10); // The user's answers
//     this.anchor = document.getElementById(divname);
 
    // // OK, set the questions
    // this.QText[0] = "What is Superman's birth name";
    // this.QText[1] = "Which X-Men uses playing cards for weapons";
    // this.QText[2] = "Who is Dick Grayson";
    // this.QText[3] = "Who can control metal";
    // this.QText[4] = "Which superhero is nicknamed the Scarlett Speedster";
    // this.QText[5] = "Who is the leader of the X-Men";
    // this.QText[6] = "Daredevil's real name is";
    // this.QText[7] = "Cyclops is married to which X-Men";
    // this.QText[8] = "Which avenger is Tony Stark";
    // this.QText[9] = "Which Justice League member can talk to fish";
    // this.QText[10] = "Who is Wade Wilson";
    // this.QText[11] = "Who is Peter Quill";
    // this.QText[12] = "Which villain is nicknamed Puddin";
    // this.QText[13] = "Who kills Superman";
    // this.QText[14] = "Hal Jordan superhero identity";
    // this.QText[15] = "The Green Arrow's real identity";
    // this.QText[16] = "Who is the Red Hood";
    // this.QText[17] = "Who is Thor's brother";
    // this.QText[18] = "Who is a member of The Fantastic Four";
    // this.QText[19] = "Bruce Banner's real name";
 
    // // Now, set the possible choices
    // this.QChoice[0] = "Kal-El";
    // this.QChoice[1] = "Clark Kent";
    // this.QChoice[2] = "Barry Allen";
    // this.QChoice[3] = "Bruce Wayne";
    // this.QChoice[4] = "Beast";
    // this.QChoice[5] = "Rogue";
    // this.QChoice[6] = "Gambit";
    // this.QChoice[7] = "Storm";
    // this.QChoice[8] = "Hulk";
    // this.QChoice[9] = "Captian America";
    // this.QChoice[10] = "Robin";
    // this.QChoice[11] = "Batman";
    // this.QChoice[12] = "Super Girl";
    // this.QChoice[13] = "Magneto";
    // this.QChoice[14] = "Wonder Woman";
    // this.QChoice[15] = "Elastigirl";
    // this.QChoice[16] = "The Flash";
    // this.QChoice[17] = "Speedball";
    // this.QChoice[18] = "Stardust";
    // this.QChoice[19] = "The Thing";
    // this.QChoice[20] = "Gambit";
    // this.QChoice[21] = "Wolverine";
    // this.QChoice[22] = "Storm";
    // this.QChoice[23] = "Cyclops";
    // this.QChoice[24] = "Scott Summers";
    // this.QChoice[25] = "Matt Murdock";
    // this.QChoice[26] = "Oliver Queen";
    // this.QChoice[27] = "Lex Luther";
    // this.QChoice[28] = "Jubliee";
    // this.QChoice[29] = "Jean Grey";
    // this.QChoice[30] = "Kitty Pryde";
    // this.QChoice[31] = "Mystique";
    // this.QChoice[32] = "Iron Man";
    // this.QChoice[33] = "Falcon";
    // this.QChoice[34] = "Ant-Man";
    // this.QChoice[35] = "Spider-Man";
    // this.QChoice[36] = "Cyborg";
    // this.QChoice[37] = "Green Lantern";
    // this.QChoice[38] = "Aquaman";
    // this.QChoice[39] = "Martian Manhunter";
    // this.QChoice[40] = "Cable";
    // this.QChoice[41] = "She Hulk";
    // this.QChoice[42] = "Deadpool";
    // this.QChoice[43] = "Bishop";
    // this.QChoice[44] = "Star Lord";
    // this.QChoice[45] = "Drax";
    // this.QChoice[46] = "Groot";
    // this.QChoice[47] = "Gamora";
    // this.QChoice[48] = "Penguin";
    // this.QChoice[49] = "Joker";
    // this.QChoice[50] = "Bane";
    // this.QChoice[51] = "Mr. Freeze";
    // this.QChoice[52] = "Doomsday";
    // this.QChoice[53] = "Brainiac";
    // this.QChoice[54] = "Zod";
    // this.QChoice[55] = "Lois Lane";
    // this.QChoice[56] = "Killer Croc";
    // this.QChoice[57] = "Sinestro";
    // this.QChoice[58] = "Commisioner Gordon";
    // this.QChoice[59] = "Deadshot";
    // this.QChoice[60] = "Darkseid";
    // this.QChoice[61] = "Thanos";
    // this.QChoice[62] = "Wally West";
    // this.QChoice[63] = "Jason Todd";
    // this.QChoice[64] = "John Stewart";
    // this.QChoice[65] = "Black Widow";
    // this.QChoice[66] = "Luke Cage";
    // this.QChoice[67] = "Ultron";
    // this.QChoice[68] = "Loki";
    // this.QChoice[69] = "Thor";
    // this.QChoice[70] = "Captian Marvel";
    // this.QChoice[71] = "Black Panther";
    // this.QChoice[72] = "Dr. Strange";
    // this.QChoice[73] = "Human Torch";
    // this.QChoice[74] = "Angel";
    // this.QChoice[75] = "Iceman";
    // this.QChoice[76] = "Colossus";
    // this.QChoice[77] = "Karachi";
    // this.QChoice[78] = "Psylocke";
    // this.QChoice[79] = "Toad";
 
    // // Set the correct answers
    // this.QAnswer[0] = 0;
    // this.QAnswer[1] = 6;
    // this.QAnswer[2] = 10;
    // this.QAnswer[3] = 13;
    // this.QAnswer[4] = 16;
    // this.QAnswer[5] = 23;
    // this.QAnswer[6] = 25;
    // this.QAnswer[7] = 29;
    // this.QAnswer[8] = 32;
    // this.QAnswer[9] = 38;
    // this.QAnswer[10] = 42; 
    // this.QAnswer[11] = 44;
    // this.QAnswer[12] = 49;
    // this.QAnswer[13] = 52;
    // this.QAnswer[14] = 37;
    // this.QAnswer[15] = 26;
    // this.QAnswer[16] = 63;
    // this.QAnswer[17] = 69;
    // this.QAnswer[18] = 73;
    // this.QAnswer[19] = 8;
 
//  }
 
//  Questions.prototype.generateQuiz = function() {
//     var QCount = 0;
//     var QNumber = 0;
 
//     // Initialise the "questions available" table
//     var QUsed = new Array(20);
//     for (QCount=0; QCount<20; QCount++) {
//        QUsed[QCount] = 1; // Marked as available
//     }
 
//     // Delete any existing questions
//     //this.nukeExistingQuiz();
//     this.anchor.innerHTML = "";
 
//     var HTMLBlob = "<table>";
 
//     // Build up the questions
//     for (QCount=0; QCount<10; ) {
//        QNumber = Math.floor(20 * Math.random());
//        if (1 == QUsed[QNumber]) { // Still available?
//       HTMLBlob += this.AddQuestion(QNumber, QCount);
//       QCount++;
//           QUsed[QNumber] = 0; // Marked as unavailable
//        }
//     }
//     HTMLBlob += "</table>";
//     this.anchor.innerHTML = HTMLBlob;
//  }
 
//  // This removes any existing quiz on the page
//  Questions.prototype.nukeExistingQuiz = function() {
//     if (null != this.anchor && null != this.anchor.childCount) {
//        while (this.anchor.childCount > 0) {
//           this.anchor.removeChild(this.anchor.childNodes[0]);
//        }
//     }
//  }
 
//  // Add this to the DOM
//  Questions.prototype.AddQuestion = function(QNum, EntryNum) {
//     // This is really naughty: you should use DOM stuff, and not
//     // non-standard innerHtml ...
//     var Ix;
//     var HTMLBlob = "<tr><td><input type=\"checkbox\" id=\"check" + EntryNum + "\" checked=\"checked\"></td><td>"
//                         + "Question #" + QNum + ":</td><td>"
//                         + "<strong>" + this.QText[QNum] + "</strong></td><td><select id=\"answer" + EntryNum + "\" size=\"1\">"
//                         + "<option selected=\"selected\" value=\"0\">-- Select an answer --</option>"
//     for (Ix=0; Ix<4; Ix++) {
//        HTMLBlob = HTMLBlob + "<option value=\"" + Ix + "\">" + this.QChoice[QNum*4+Ix] + "</option>";
//     }
//     HTMLBlob = HTMLBlob + "</select></td></tr>";
    
//     this.thisAns[EntryNum] = this.QAnswer[QNum];
//     return HTMLBlob;
//  }
 
 
//  // Verify that all questions have been answered
//  Questions.prototype.AreQuestionsAnswered = function() {
//     var unanswered = 0;
//     for (var Ix=0; Ix<10; Ix++) {
//        this.Answer[Ix] = document.getElementById("answer" + Ix).selectedIndex;
//        if (this.Answer[Ix] == 0) {
//           unanswered++;
//        }
//     }
//     return unanswered;
//  }
 
//  // Score the results
//  Questions.prototype.ScoreIt = function() {
//     var count = this.AreQuestionsAnswered();
//     if (count > 0) {
//        alert("You didn't answer " + count + " questions. Please try again.");
//        count = 0;
//     } else {
//        for (var Ix=0; Ix<10; Ix++) {
//           if (this.Answer[Ix] == this.thisAns[Ix]) {
//              document.getElementById("check" + Ix).checked = false;
//              count++;
//           } else {
//              document.getElementById("check" + Ix).checked = true;
//           }
//        }
//        alert("You got " + count + " correct.");
//     }
//     return count;
//  }
// }
