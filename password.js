function generate(length) 
{
let password =""
passwordData='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
 for(var i=0; i<length; i++)
{
    let pos=Math.floor(Math.random()* passwordData.length)
    password+=passwordData[pos];
}
console.log(password);
}
generate(5);
generate(8);