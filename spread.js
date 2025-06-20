a=[10,20,[30,40]]
// b=a
// a.push(50)

// b= a.slice()
b = structuredClone(a)

a[2].push(50)
console.log(a);
console.log(b);


