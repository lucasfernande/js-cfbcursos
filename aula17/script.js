const nums = [15, 2, 8, 10, 4, 7]

for (i in nums) { // i -> índice
    console.log(nums[i]);
}
console.log('-------------')

for (item of nums) { // item -> o elemento em si, não é necessário o índice
    console.log(item);
}