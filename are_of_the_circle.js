const PI = 3.14;
const arguman = process.argv;

const calculateArea = (r) => {
  const area = PI * r * r;
  console.log(`
    Yarıçapı ${r} olan dairenin alanı: ${area} 
  `)
}

calculateArea(arguman[2])