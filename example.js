var game = prompt ("單人or雙人");
 if (game == "單人"){
     var user = prompt("剪刀，石頭，布");
     var computer = Math.random();
     if (computer < 0.33){
         computer = "剪刀";
     }
     else if (computer <= 0.67){
         computer = "石頭"
     }
     else {
         computer = "布"; 
     }
     alert ("電腦出" + computer);
     if ( user == computer){
         alert ("平手");
     }
     else if (user == "剪刀"){
         if (computer == "石頭"){
             alert ("電腦贏了");
         }
         else {
             alert ("你贏了");
         }
     }
     else if (user == "石頭"){
         if (computer == "布"){
             alert ("電腦贏了");
         }
         else {
             alert ("你贏了");
         }
     }
     else if (user == "布"){
         if (computer == "剪刀"){
             alert ("電腦贏了");
         }
         else {
             alert ("你贏了");
         }
     }
     else {
         alert("你會不會玩啊，猜拳才沒這東西");
     }
 }
else if (game == "雙人"){
    var user1 = prompt("玩家1請出剪刀，石頭，布");
    var user2 = prompt("玩家2請出剪刀，石頭，布");
        if ( user1 == user2){
        alert ("平手");
    }
    else if (user1 == "剪刀"){
        if (user2 == "石頭"){
            alert ("玩家2贏了");
        }
        else {
            alert ("玩家1贏了");
        }
    }
    else if (user1 == "石頭"){
        if (user2 == "布"){
            alert ("玩家2贏了");
        }
        else {
            alert ("玩家1贏了");
        }
    }
    else if (user1 == "布"){
        if (user2 == "剪刀"){
            alert ("玩家2贏了");
        }
        else {
            alert ("玩家1贏了");
        }
    }
    else {
        alert("你會不會玩啊，猜拳才沒這東西");
    }
}
else {
    alert("不好意思我們只有單人跟雙人");
}