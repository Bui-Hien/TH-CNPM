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

