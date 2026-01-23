const row = 5;

// for (let i = 0; i <= row; i++) { 
//     let line = " ";
//     // line = line + '*' // this step gives error 🤣 reason
//     for (let j = 1; j <= i; j++) {
//         // line = line + '*'
//         line = "*";
//     }
//     console.log(line);
// }

//here in this loop I put i at 0 and j at 1 and if I put j with value 0 it will print 6 stars
//so heres the logic :
/*
1. We start with 1st loop. The i value is 0 and i is less then row which value is 5. Then i++ will make i value 1
and the line with empty strings we declared is filled with empty value.

2.  Then we made another loop same codition as 1st loop with litle modifications. we initialised the line variable
with line + '*' means the line value which is empty value will be added with star.

3. So when loop starts i value 0, then i less then equal to 5 is true, i value will 0 to 1 cause of i++
and the the line will have value but it will not print reason we did not add any symbol but it will take the space.
then in 2nd loop the line we declared again with line + * will gonna add into more stars until the value of i becomes false to make condtion stop
*/

for (let i = 0; i <= row; i++) { 
    let line = " ";
    for (let j = 5; j >= i; j--) {
        // line = line + '*'
        line += "*";
    }
    console.log(line);
}

