function add(x1,x2)
{
  const a=x1+x2;
  return a;
}
function sub(x1,x2)
{
  const b=x1-x2;
  return b;
}
function mul(x1,x2)
{
  const c=x1*x2;
  return c;
}
function div(x1,x2)
{
  const d=x1/x2;
  return d;
}
function mod(x1,x2)
{
  const e=x1%x2;
  return e;
}
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
let cmpn1=comparevalues(5,6);
console.log(cmpn1);


