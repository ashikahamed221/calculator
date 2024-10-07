// append the values
function appendto(value)
{
    var append = document.getElementById('result');
    append.value+=value;
}
// clear the values
function clearscreen()
{
    document.getElementById('result').value="";
}
//compute the value
function compute()
{
   
   var cal=document.getElementById('result').value;
   var cal2=eval(cal);
   document.getElementById('result').value=cal2;
}
// backspace
function del()
{
    var de=document.getElementById('result').value;
    const result = de.slice(0, -1);
    document.getElementById("result").value = result;
}