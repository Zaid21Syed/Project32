class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput ("Enter Answer Here")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3')
    this.answer1 = createElement('h4')
    this.answer2 = createElement('h4')
    this.answer3 = createElement('h4')
    this.answer4 = createElement('h4')

    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    this.question.html("Which of these is a fruit?")
    this.question.position(350, 100);
    this.answer1.html("Carrot")
    this.answer1.position(350, 120);
    this.answer2.html("Banana")
    this.answer2.position(350, 140);
    this.answer3.html("Potato")
    this.answer3.position(350, 160);
    this.answer4.html("Corn")
    this.answer4.position(350, 180);
    //Create html() and position() for each question, input and answers.




    this.input1.position(150, 130);
    this.input2.position(400, 300);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    if (mousePressed(this.button)){
      this.display(this.message)
    }
    })


  }
}
