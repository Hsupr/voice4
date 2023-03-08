url = "https://teachablemachine.withgoogle.com/models/fmMNFm5ya/model.json"
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier(url,modelready);
}
function modelready(){
    console.log("model complete")
    classifier.classify(got_Results);
}
function got_Results(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random1 = Math.floor(Math.random() * 255) + 1;
        random2 = Math.floor(Math.random() * 255) + 1;
        random3 = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_lable").innerHTML = 'I can hear -' + results[0].label;
       
        img = document.getElementById('ear');
      

        if (results[0].label == "cat") {
            img.src = 'https://petsreporter.com/wp-content/uploads/2020/11/Weird-Cat-Behaviors-Explained-6-1.jpg';
          } else if (results[0].label == "dog") {
            img.src = 'https://tse3.mm.bing.net/th?id=OIP.tElFepxu28-xmNB1Cxe3PwHaE8&pid=Api&P=0';
      
            
        
          }}}