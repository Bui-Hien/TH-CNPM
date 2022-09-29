function areacn (){
    var a  = document.getElementById("erea_cn_a").value;
    var b  = document.getElementById("erea_cn_b").value;
    if ((a<0)||(b<0)) {
        alert("Bạn nhập đầu bài chưa chính xac")
    }else {
        document.getElementById("erea_cn_kq").value = a*b;

    }
}
function areav (){
    var a  = document.getElementById("erea_v-input").value;
    if (a<0) {
        alert("Bạn nhập đầu bài chưa chính xac")
    }else {
        document.getElementById("erea_v-output").value = a*a;
    }
}
function areat (){
    var a  = document.getElementById("erea_t-input-a").value;
    var b  = document.getElementById("erea_t-input-b").value;
    var c  = document.getElementById("erea_t-input-c").value;
    if (((a <=0)||(b<=0)||(c<=0))&&((a+b>c)||(a+c>b)||(b+c)>a)) {
        alert("Bạn nhập đầu bài chưa chính xac")
    }else {
        p = (a+b+c)/2;
        g = Math.pow((p*(p-a)*(p-b)*(p-c)),0.5)
        document.getElementById("erea_t-output").value = g;
    }
}