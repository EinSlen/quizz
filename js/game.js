
//DEV GAME
var cont = 0;
var question = 9;

for(var i = 1; i <= 10; i++) {
    document.getElementById("question" + i).style.display = 'none';
    document.getElementById("content" + i).style.display = 'none';
}

document.getElementById("finish").style.display = 'none';
document.getElementById('re').style.display = 'none';

function initChoise1() {

    cont++;
    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element++');

    if(cont >= 20) {
        cont--;
    }

    document.getElementById('question').style.display = 'none';
    document.getElementById('content').style.display = 'none';

    document.getElementById('question2').style.display = 'block';
    document.getElementById('content2').style.display = 'block';
    console.log(question);
  
}


function initChoise2() {

       
        if(question >= 1){
            question--;
        }
        document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
        document.getElementById('rep').innerHTML = `Reste ${question} questions !`
        console.log('const element--');

        document.getElementById('question').style.display = 'none';
        document.getElementById('content').style.display = 'none';
    
        document.getElementById('question2').style.display = 'block';
        document.getElementById('content2').style.display = 'block';
        console.log(question);
      
}

function initChoise3() {

    cont++;
    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element++');

    if(cont >= 20) {
        cont--;
    }

    document.getElementById('question2').style.display = 'none';
    document.getElementById('content2').style.display = 'none';

    document.getElementById('question3').style.display = 'block';
    document.getElementById('content3').style.display = 'block';
    console.log(question);
  
}

function initChoise4() {

    
    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element--');

    document.getElementById('question2').style.display = 'none';
    document.getElementById('content2').style.display = 'none';

    document.getElementById('question3').style.display = 'block';
    document.getElementById('content3').style.display = 'block';
    console.log(question);
  
}

function initChoise5() {

    cont++;
    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element++');

    if(cont >= 20) {
        cont--;
    }

    document.getElementById('question3').style.display = 'none';
    document.getElementById('content3').style.display = 'none';

    document.getElementById('question4').style.display = 'block';
    document.getElementById('content4').style.display = 'block';
    console.log(question);
  
}

function initChoise6() {

    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element--');

    document.getElementById('question3').style.display = 'none';
    document.getElementById('content3').style.display = 'none';

    document.getElementById('question4').style.display = 'block';
    document.getElementById('content4').style.display = 'block';
    console.log(question);
  
  
}

function initChoise7() {

    cont++;
    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element++');

    if(cont >= 20) {
        cont--;
    }

    document.getElementById('question4').style.display = 'none';
    document.getElementById('content4').style.display = 'none';

    document.getElementById('question5').style.display = 'block';
    document.getElementById('content5').style.display = 'block';
    console.log(question);
  
}

function initChoise8() {

    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element--');

    document.getElementById('question4').style.display = 'none';
    document.getElementById('content4').style.display = 'none';

    document.getElementById('question5').style.display = 'block';
    document.getElementById('content5').style.display = 'block';
    console.log(question);
  
  
}

function initChoise9() {

    cont++;
    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element++');

    if(cont >= 20) {
        cont--;
    }

    document.getElementById('question5').style.display = 'none';
    document.getElementById('content5').style.display = 'none';

    document.getElementById('question6').style.display = 'block';
    document.getElementById('content6').style.display = 'block';
    console.log(question);
  
}

function initChoise10() {

    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element--');

    document.getElementById('question5').style.display = 'none';
    document.getElementById('content5').style.display = 'none';

    document.getElementById('question6').style.display = 'block';
    document.getElementById('content6').style.display = 'block';
    console.log(question);
  
}

function initChoise11() {

    cont++;
    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element++');

    if(cont >= 20) {
        cont--;
    }

    document.getElementById('question6').style.display = 'none';
    document.getElementById('content6').style.display = 'none';

    document.getElementById('question7').style.display = 'block';
    document.getElementById('content7').style.display = 'block';
    console.log(question);
  
}

function initChoise12() {

    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element--');

    document.getElementById('question6').style.display = 'none';
    document.getElementById('content6').style.display = 'none';

    document.getElementById('question7').style.display = 'block';
    document.getElementById('content7').style.display = 'block';
    console.log(question);

}

function initChoise13() {

    cont++;
    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element++');

    if(cont >= 20) {
        cont--;
    }

    document.getElementById('question7').style.display = 'none';
    document.getElementById('content7').style.display = 'none';

    document.getElementById('question8').style.display = 'block';
    document.getElementById('content8').style.display = 'block';
    console.log(question);
  
}

function initChoise14() {

    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element--');

    document.getElementById('question7').style.display = 'none';
    document.getElementById('content7').style.display = 'none';

    document.getElementById('question8').style.display = 'block';
    document.getElementById('content8').style.display = 'block';
    console.log(question);

}

function initChoise15() {

    cont++;
    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element++');

    if(cont >= 20) {
        cont--;
    }

    document.getElementById('question8').style.display = 'none';
    document.getElementById('content8').style.display = 'none';

    document.getElementById('question9').style.display = 'block';
    document.getElementById('content9').style.display = 'block';
    console.log(question);
  
}

function initChoise16() {

    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element--');

    document.getElementById('question8').style.display = 'none';
    document.getElementById('content8').style.display = 'none';

    document.getElementById('question9').style.display = 'block';
    document.getElementById('content9').style.display = 'block';
    console.log(question);

}

function initChoise17() {

    cont++;
    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element++');

    if(cont >= 20) {
        cont--;
    }

    document.getElementById('question9').style.display = 'none';
    document.getElementById('content9').style.display = 'none';

    document.getElementById('question10').style.display = 'block';
    document.getElementById('content10').style.display = 'block';
    console.log(question);
  
}

function initChoise18() {

    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element--');

    document.getElementById('question9').style.display = 'none';
    document.getElementById('content9').style.display = 'none';

    document.getElementById('question10').style.display = 'block';
    document.getElementById('content10').style.display = 'block';
    console.log(question);

}

function initChoise19() {

    cont++;
    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element++');

    if(cont >= 20) {
        cont--;
    }

    document.getElementById('question10').style.display = 'none';
    document.getElementById('content10').style.display = 'none';
    high();

    document.getElementById('finish').style.display = 'block';
    document.getElementById('re').style.display = 'block';
    console.log(question);

    if(question === 0) {

        var fh2 = document.getElementById('result');
    
        if(cont >= 0) {
            fh2.innerHTML = 'Ahhhh va falloir travailler dur !';
        }
    
        if(cont >= 3) {
            fh2.innerHTML = "tu pourras avoir d'avantage !";
        }
    
        if(cont >= 5) {
            fh2.innerHTML = 'la moyenne !';
        }
    
        if(cont >= 8) {
            fh2.innerHTML = 'très bien joué !';
        }
    
        if(cont >= 10) {
            fh2.innerHTML = 'tu es imbattable !';
        }
    }
  
}

function initChoise20() {

    if(question >= 1){
        question--;
    }
    document.getElementById('top').innerHTML = `Votre score : ${cont}/10`;
    document.getElementById('rep').innerHTML = `Reste ${question} questions !`
    console.log('const element--');

    document.getElementById('question10').style.display = 'none';
    document.getElementById('content10').style.display = 'none';
    high();

    document.getElementById('finish').style.display = 'block';
    document.getElementById('re').style.display = 'block';
    console.log(question);

    if(question === 0) {

        var fh2 = document.getElementById('result');
    
        if(cont >= 0) {
            fh2.innerHTML = 'Ahhhh va falloir travailler dur !';
        }
    
        if(cont >= 3) {
            fh2.innerHTML = "tu pourras avoir d'avantage !";
        }
    
        if(cont >= 5) {
            fh2.innerHTML = 'la moyenne !';
        }
    
        if(cont >= 8) {
            fh2.innerHTML = 'très bien joué !';
        }
    
        if(cont >= 10) {
            fh2.innerHTML = 'tu es imbattable !';
        }
    }

}

function reset() {
    if(question == 0) {
        question = 9;
        cont = 0;
        console.log(question + " " + cont)

        for(var i = 1; i <= 10; i++) {
        document.getElementById("question" + i).style.display = 'none';
        document.getElementById("content" + i).style.display = 'none';
    }
        document.getElementById("finish").style.display = 'none';

        document.getElementById('re').style.display = 'none';

        document.getElementById('score').style.display = 'block';
        document.getElementById('content').style.display = 'block';
        document.getElementById('question').style.display = 'block';
        document.getElementById('rep').style.display = 'block';

        document.getElementById('top').innerHTML = `Votre score : 0/10`;
        document.getElementById('rep').innerHTML = `Reste 9 questions !`

    }
}

function high() {

    document.getElementById('rep').style.display = 'none';
    document.getElementById('re').style.display = 'block';
    document.getElementById('result').style.display = 'block';

}
