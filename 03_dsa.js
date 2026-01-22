const row = 5;

for (let i = 0; i <= row; i++) {
    let line = " ";
    for (let j = 1; j <= i; j++) {
        line = line + '*'
    }
    console.log(line);
}