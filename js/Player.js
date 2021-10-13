class Player{

  constructor(){
    this.index = null; 
    this.userId=null;
    this.grade=null;
    this.subject=null;
    this.password=null;
    this.lastQuestion=0;
  }
  
  update(){
    console.log(this.userId);
    var playerIndex = "players/"+this.userId;
    database.ref(playerIndex).set({
       grade : this.grade,
       password : this.password,
      subject: this.subject
    });
  }
   
  loadUser(){
    var playerRef="players/"+this.userId;
    database.ref(playerRef).on("value",(data)=>{
      console.log(data.val());
      questions.currentMath=data.val().currentMath;
      questions.currentLogic=data.val().currentLogic;
      this.grade=data.val().grade;
      this.subject=data.val().subject;
      console.log(this.grade)
    })
  }
  


}