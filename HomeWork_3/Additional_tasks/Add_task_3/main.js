let nums = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
let a = 0;
while (a < nums.length){
    console.log(nums[a]);
    a++;
}
console.log("");

// 2. перебрати його циклом for
for (let b=0; b<nums.length; b++) {
    console.log(nums[b]);
}
console.log("");

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let c = 0;
while (c < nums.length){
    if (c % 2 !== 0){
    console.log(nums[c]);}
    c++;
}
console.log("");

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for(let d=0; d<nums.length; d++){
    if (d % 2 !== 0){
        console.log(nums[d]);
    }
}
console.log("");

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let e = 0;
while (e < nums.length){
    if (e % 2 === 0){
        console.log(nums[e]);}
    e++;
}
console.log("");

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for(let f=0; f<nums.length; f++){
    if (f % 2 === 0){
        console.log(nums[f]);
    }
}
console.log("");

// 7. замінити кожне число, кратне 3, на слово “okten”
for(let g=0; g<nums.length; g++){
    if (nums[g] % 3 === 0){
        nums[g] = "okten";
    }
}
console.log("");

// 8. вивести масив у зворотньому порядку.
let i = nums.length - 1;
while (i >= 0){
    console.log(nums[i]);
    i--;
}
console.log("");
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
// -------------------------------------------------------
// 1. перебрати його циклом while
let aa = nums.length - 1;
while (aa >= 0){
    console.log(nums[aa]);
    aa--;
}
console.log("");

// 2. перебрати його циклом for
for (let bb= nums.length - 1; bb >= 0; bb--) {
    console.log(nums[bb]);
}
console.log("");

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let cc = nums.length - 1;
while (cc >= 0){
    if (cc % 2 !== 0){
        console.log(nums[cc]);}
    cc--;
}
console.log("");

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for(let dd= nums.length - 1; dd >= 0; dd--){
    if (dd % 2 !== 0){
        console.log(nums[dd]);
    }
}
console.log("");

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let ee = nums.length - 1;
while (ee = 0){
    if (ee % 2 === 0){
        console.log(nums[ee]);}
    e--;
}
console.log("");

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for(let ff=nums.length - 1; ff >= 0; ff--){
    if (ff % 2 === 0){
        console.log(nums[ff]);
    }
}
console.log("");

// 7. замінити кожне число, кратне 3, на слово “okten”
for(let gg=nums.length - 1; gg >= 0; gg--){
    if (nums[gg] % 3 === 0){
        nums[gg] = "okten";
    }
}