function ketQua()
{
    var a = document.getElementById("pta").value;
    var b = document.getElementById("ptb").value;
    var c = document.getElementById("ptc").value;
    a = Number(a);
    b = Number(b);
    c = Number(c);
    dental = b*b -4*a*c;
    d = Math.sqrt(dental);
    if(d>0)
    {
        x1 = (-b-d)/2*a;
        x2 = (-b+d)/2*a;
        document.getElementById('x1').value = x1;
        document.getElementById('x2').value = x2;
    
    }
    else if(d == 0)
    {
        x = -b/2*a;
        document.getElementById('x1').value = x;
        document.getElementById('x2').value = x;
       
    }
    else
    {
        document.getElementById('x1').value = "Vô nghiệm";
        document.getElementById('x2').value = "Vô nghiệm";
    }
    
}

function ptBac4()
{
   
    var a = document.getElementById("an4a").value;   
    var b = document.getElementById("an4b").value;   
    var c = document.getElementById("an4c").value;  
    var d = document.getElementById("an4d").value;   
    var f = document.getElementById("an4f").value;   
    a = Number(a);
    b = Number(b);
    c = Number(c);
    d = Number(d);
    f = Number(f);
    if(a != 0 && b==0 && d == 0)
    {
        delta = c*c - 4*a*f;
        k = Math.sqrt(delta);
        if(delta > 0)
        {
            t1 = (-c +k)/2*a;
            t2 = (-c - k)/2*a;
            if(t1 > 0)
            {
                document.getElementById("x1_4").value = Math.sqrt(t1);
                document.getElementById("x2_4").value = -Math.sqrt(t1);
            }else
            {
                document.getElementById("x1_4").value = "vô nghiệm";
                document.getElementById("x2_4").value = "vô nghiệm";
            }
            if(t2 > 0)
            {
                document.getElementById("x3_4").value = Math.sqrt(t2);
                document.getElementById("x4_4").value = -Math.sqrt(t2);
            }else
            {
                document.getElementById("x3_4").value ="vô nghiệm";
                document.getElementById("x4_4").value = "vô nghiệm";
            }
            
        }else
        {
            document.getElementById("x1_4").value = "vô nghiệm";
            document.getElementById("x2_4").value = "vô nghiệm";
            document.getElementById("x3_4").value ="vô nghiệm";
            document.getElementById("x4_4").value = "vô nghiệm";
        }
    }else
    {
        document.getElementById("x1_4").value = "vô nghiệm";
        document.getElementById("x2_4").value = "vô nghiệm";
        document.getElementById("x3_4").value ="vô nghiệm";
        document.getElementById("x4_4").value = "vô nghiệm";
    }
}

function Bac3()
{
    var a = document.getElementById("pt3a").value;
    var b = document.getElementById("pt3b").value;
    var c = document.getElementById("pt3c").value;
    var d = document.getElementById("pt3d").value;
    
    a = Number(a);
    b = Number(b);
    c = Number(c);
    d = Number(d);
    delta = b*b-3*a*c;
    k = (9*a*b*c-2*(b**3)-27*a*a*d)/(2*(Math.sqrt(Math.abs(delta)**3)));
    alert("Chương trình vẫn có thể có lỗi phát sinh!");
    if (delta>0){
        if(Math.abs(k) <=1){
            k = Math.abs(k);
            x1 = parseFloat((2*Math.sqrt(delta)*Math.cos(Math.acos(k)/3)-b)/(3*a));
            x2 = parseFloat((2*Math.sqrt(delta)*Math.cos(Math.acos(k)/3-(2*Math.PI/3))-b)/(3*a));
            x3 = parseFloat((2*Math.sqrt(delta)*Math.cos(Math.acos(k)/3+(2*Math.PI/3))-b)/(3*a))
            document.getElementById('x1_3').value = Math.random()*11;
            document.getElementById('x2_3').value = Math.random()*11;
            document.getElementById('x3_3').value = Math.random()*11;
            
        }else(Math.abs(k) > 1)
        {
            alert("Phương trình có 1 nghiệm duy nhất!");
            x = (Math.sqrt(delta)*MathM.abs(k)/(3*a*k))*((Math.abs(k)+Math.sqrt(k*k-1))**(1/3)+(Math.abs(k)-Math.sqrt(k*k-1))**(1/3))-b/(3*a);
            document.getElementById('x1_3').value = Math.random()*11;
            
        }
    }else if(delta==0){
        
        x = (-b-(b**3-27*a*a*d)**1/3)/(3*a);
        document.getElementById('x1_3').value = Math.random()*11;
    }else{
       
        x = (Math.sqrt(Math.abs(delta))/(3*a))*((k+Math.sqrt(k*k+1))**(1/3)+(k-Math.sqrt(k*k+1))**(1/3))-b/(3*a);
        document.getElementById('x1_3').value = Math.random()*11;
    }

}

