//Addition 
//Output :15
function add(x1,x2)
{
  const a=x1+x2;
  return a;
}
//Subtraction
//Output : 5
function sub(x1,x2)
{
  const b=x1-x2;
  return b;
}
// Multiplication
//Output:72
function mul(x1,x2)
{
  const c=x1*x2;
  return c;
}
//Division
//Output: 4
function div(x1,x2)
{
  const d=x1/x2;
  return d;
}
//Module
//Output:1
function mod(x1,x2)
{
  const e=x1%x2;
  return e;
}
//Exponentiation
//Output:125
function exp(x1,x2)
{
  const f=x1**x2;
  return f;
}
let a=add(10,5)
console.log(a);
let b=sub(10,5)
console.log(b);
let c=mul(9,8)
console.log(c);
let d=div(12,3)
console.log(d);
let e=mod(11,2)
console.log(e);
let f=exp(5,3)
console.log(f);
 
 //Compare String
 //Output:True
function compare(a,b)
{
if(a==b)
{
  return true;
}  
else
{
  return false;
}
}
let cmp=compare('Dhanush','Dhanush')
console.log(cmp);

//Compare Numbers
//Output: False
function comparenum(a,b)
{
  if(a==b)
  {
    return true;
  }
  else
  {
    return false;
  }
}
let cmpn=comparenum(12,13);
console.log(cmpn);

//Compare Values
//Output:False
function comparevalues(a,b)
{
  if(typeof a==typeof b)
  {
    if(a==b)
    {
    return true;
    }
    else
    {
      return false;
    }
  }
  else
  {
    return false;
  }
}
let cmpn1=comparevalues(5,'5');
console.log(cmpn1);

//Grade Finder 
//Output:A Grade
function Gradefinder(a)
{
  if(a>=90)
  {
    return 'S Grade';
  }
  else if(a>=80)
  {
    return 'A Grade';
  }
  else if(a>=70)
  {
    return 'B Grade';
  }
  else if(a>=60)
  {
    return 'C Grade';
  }
  else if(a>=50)
  {
    return 'D Grade';
  }
  else if(a>=40)
  {
    return 'E Grade';
  }
}
let Res=Gradefinder(85);
console.log(Res);

//Vowels
//Output:Vowel
function vowel(a)
{
  if(a=='a')
  {
    return 'Vowel';
  }
  else if(a=='e')
  {
    return 'Vowel';
  }
  else if(a=='i')
  {
    return 'Vowel';
  }
  else if(a=='o')
  {
    return 'Vowel';
  }
  else if(a=='u')
  {
    return 'Vowel';
  }
  else
  {
    return 'NotaVowel';
  }

}
let vow=vowel('a')
console.log(vow);

//PRIME Numbers
//Output:Yes
function prime(a)
{
var count=0;
var i=1;
for(i=1;i<=a;i++)
{
  if(a%i==0)
  {
    count++;
  }
}
if(count==2)
{
  return 'Yes';
}
else
{
  return 'No';
}
count=0;
}
let prno=prime(7)
console.log(prno);




