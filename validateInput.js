function geeks_inner(value1, value2) {
    return 'hello ' + value1 + ' and ' + value2;
}
function geeks_outer(a,b, func) {
    const test = func(a,b);
    console.log(test)
}
 
geeks_outer('Geeks!','Geekette', geeks_inner);