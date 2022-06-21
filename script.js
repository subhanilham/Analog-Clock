function start(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let degree_s = 0;
    let degree_m = 0;
    let degree_h = 0;
    for(let second = 0; second<=s;second++){
        document.getElementById('sec').style.transform = 'rotate(' + degree_s + 'deg)';
        degree_s = degree_s + 6;
        if(s == 5){
            document.getElementById("one").style.backgroundColor = "#2088f0";
        }
        else{
            document.getElementById("one").style.backgroundColor = "#020202";
        }
        if(s == 10){
            document.getElementById("two").style.backgroundColor = "#2088f0";
        }
        else{
            document.getElementById("two").style.backgroundColor = "#020202";
        }
        if(s == 15){
            document.getElementById("three").style.backgroundColor = "#2088f0";
        }
        else{
            document.getElementById("three").style.backgroundColor = "#020202";
        }
        if(s == 20){
            document.getElementById("four").style.backgroundColor = "#2088f0";
        }
        else{
            document.getElementById("four").style.backgroundColor = "#020202";
        }
        if(s == 25){
            document.getElementById("five").style.backgroundColor = "#2088f0";
        }
        else{
            document.getElementById("five").style.backgroundColor = "#020202";
        }
        if(s == 30){
            document.getElementById("six").style.backgroundColor = "#2088f0";
        }
        else{
            document.getElementById("six").style.backgroundColor = "#020202";
        }
        if(s == 35){
            document.getElementById("seven").style.backgroundColor = "#2088f0";
        }
        else{
            document.getElementById("seven").style.backgroundColor = "#020202";
        }if(s == 40){
            document.getElementById("eight").style.backgroundColor = "#2088f0";
        }
        else{
            document.getElementById("eight").style.backgroundColor = "#020202";
        }
        if(s == 45){
            document.getElementById("nine").style.backgroundColor = "#2088f0";
        }
        else{
            document.getElementById("nine").style.backgroundColor = "#020202";
        }
        if(s == 50){
            document.getElementById("ten").style.backgroundColor = "#2088f0";
        }
        else{
            document.getElementById("ten").style.backgroundColor = "#020202";
        }
        if(s == 55){
            document.getElementById("elv").style.backgroundColor = "#2088f0";
        }
        else{
            document.getElementById("elv").style.backgroundColor = "#020202";
        }
        if(s == 0){
            document.getElementById("tw").style.backgroundColor = "#2088f0";
        }
        else{
            document.getElementById("tw").style.backgroundColor = "#020202";
        }
    }
    for(let minute = 0; minute<=m;minute++){
        document.getElementById('minut').style.transform = 'rotate(' + degree_m + 'deg)';
        degree_m = degree_m + 6;
    }
    for(let hour = 0; hour<=h;hour++){
        document.getElementById('hour').style.transform = 'rotate(' + degree_h + 'deg)';
        degree_h = degree_h + 30;
    }
    setTimeout(start, 1000);
}
