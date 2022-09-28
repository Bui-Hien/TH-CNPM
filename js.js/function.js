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
