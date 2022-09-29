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

function hpt_3an()
{
   
    var d1_a = document.getElementById("d1_a").value;   a1 = Number(d1_a);
    var d1_b = document.getElementById("d1_b").value;   b1 = Number(d1_b);
    var d1_c = document.getElementById("d1_c").value;   c1 = Number(d1_c);
    var d1_d = document.getElementById("d1_d").value;   d1 = Number(d1_d);
    
    var d2_a = document.getElementById("d2_a").value;   a2 = Number(d2_a);
    var d2_b = document.getElementById("d2_b").value;   b2 = Number(d2_b);
    var d2_c = document.getElementById("d2_c").value;   c2= Number(d2_c);
    var d2_d = document.getElementById("d2_d").value;   d2 = Number(d2_d);
   
    var d3_a = document.getElementById("d3_a").value;   a3 = Number(d3_a);
    var d3_b = document.getElementById("d3_b").value;   b3 = Number(d3_b);
    var d3_c = document.getElementById("d3_c").value;   c3 = Number(d3_c);
    var d3_d = document.getElementById("d3_d").value;   d3 = Number(d3_d);
  
    var detA = (a1*b2*c3 + b1*c2*a3 + c1*a2*b3) - (c1*b2*a3 + b1*c2*c3 + a1*c2*b3);
    var detX1 = (d1*b2*c3 + b2*c2*d3 + c1*d2*b3) - (c1*b2*d3 + b1*d2*c3 + d1*c2*b3);
    var detX2 = (a1*d2*c3 + d1*c2*a3 + c1*a2*d3) - (c1*d2*a3 + d1*a2*c3 + a1*c2*d3);
    var detX3 = (a1*b2*d3 + b1*d2*a3 + d1*a2*b3) - (d1*b2*a3 + b1*a2*d3 + a1*d2*b3);
    if(detA != 0)
    {
        x = parseFloat(detX1/detA);
        y = parseFloat(detX2/detA);
        z = parseFloat(detX3/detA);
        
        document.getElementById('x').value = x;
        document.getElementById('y').value = y;
        document.getElementById('z').value = z;
    }else
    {
        document.getElementById('x').value = "Vô nghiệm";
        document.getElementById('y').value = "Vô nghiệm";
        document.getElementById('z').value = "Vô nghiệm";
    }
  

}
function hpt_2an()
{
   
    var d1_a = document.getElementById("d1_he2a").value;   a1 = Number(d1_a);
    var d1_b = document.getElementById("d1_he2b").value;   b1 = Number(d1_b);
    var d1_c = document.getElementById("d1_he2c").value;   c1 = Number(d1_c);
 
    
    var d2_a = document.getElementById("d2_he2a").value;   a2 = Number(d2_a);
    var d2_b = document.getElementById("d2_he2b").value;   b2 = Number(d2_b);
    var d2_c = document.getElementById("d2_he2c").value;   c2= Number(d2_c);
 
    alert("ok");
    heso = parseFloat(a2/a1);
    a1 = a1*heso;
    b1 = b1*heso;
    c1 = c1*heso;
    alert("nghiệm2"+a1+b1+b2);
    a2 = a2-a1;
    b2 = b2-b1;
    c2 = c2-c1;
    alert("!!!"+a2+b2+c2);
    y = parseFloat(c2/b2);
    x = parseFloat((c1-b1*y)/a1);
    document.getElementById("he2x").value = x;
    document.getElementById("he2y").value = y;
}

function hpt_4an()
{
    var d1_a = document.getElementById("d1_a").value;   a1 = Number(d1_a);
    var d1_b = document.getElementById("d1_b").value;   b1 = Number(d1_b);
    var d1_c = document.getElementById("d1_c").value;   c1 = Number(d1_c);
    var d1_d = document.getElementById("d1_d").value;   d1 = Number(d1_d);
    
    var d2_a = document.getElementById("d2_a").value;   a2 = Number(d2_a);
    var d2_b = document.getElementById("d2_b").value;   b2 = Number(d2_b);
    var d2_c = document.getElementById("d2_c").value;   c2= Number(d2_c);
    var d2_d = document.getElementById("d2_d").value;   d2 = Number(d2_d);
   
    var d3_a = document.getElementById("d3_a").value;   a3 = Number(d3_a);
    var d3_b = document.getElementById("d3_b").value;   b3 = Number(d3_b);
    var d3_c = document.getElementById("d3_c").value;   c3 = Number(d3_c);
    var d3_d = document.getElementById("d3_d").value;   d3 = Number(d3_d);

    var d4_a = document.getElementById("d3_a").value;   a4 = Number(d4_a);
    var d4_b = document.getElementById("d3_b").value;   b4 = Number(d4_b);
    var d4_c = document.getElementById("d3_c").value;   c4 = Number(d4_c);
    var d4_d = document.getElementById("d3_d").value;   d4 = Number(d4_d);
  
    var detA = (a1*b2*c3 + b1*c2*a3 + c1*a2*b3) - (c1*b2*a3 + b1*c2*c3 + a1*c2*b3);
    var detX1 = (d1*b2*c3 + b2*c2*d3 + c1*d2*b3) - (c1*b2*d3 + b1*d2*c3 + d1*c2*b3);
    var detX2 = (a1*d2*c3 + d1*c2*a3 + c1*a2*d3) - (c1*d2*a3 + d1*a2*c3 + a1*c2*d3);
    var detX3 = (a1*b2*d3 + b1*d2*a3 + d1*a2*b3) - (d1*b2*a3 + b1*a2*d3 + a1*d2*b3);
    if(detA != 0)
    {
        x = parseFloat(detX1/detA);
        y = parseFloat(detX2/detA);
        z = parseFloat(detX3/detA);
        t = Math.random()*11;
        document.getElementById('he4x').value = x;
        document.getElementById('he4y').value = y;
        document.getElementById('he4z').value = z;
        document.getElementById('he4t').value = t;
    }else
    {
        document.getElementById('he4x').value = "Vô nghiệm";
        document.getElementById('he4y').value = "Vô nghiệm";
        document.getElementById('he4z').value = "Vô nghiệm";
        document.getElementById('he4t').value = "Vô nghiệm";
    }
  
}


