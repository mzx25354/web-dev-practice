const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('请输入一个数组',function(input) {
    let myArray = input.split(',').map(item => {
	item = item.trim();
	item = Number(item);
	return(item);		
    });
    console.log(myArray);
    rl.close();
});

