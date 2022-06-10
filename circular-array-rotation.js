function circularArrayRotation(a, k, queries) {
    //k=number of rotations on a, queries = list of indices to report, a = array
    //want us to return the value of the indices of queries
    //ex: queries = [1,2], a after rotations is [4,5,3], so a[1] and a[2] are 5 and 3
    //multiple steps- need to create a new array based on rotations and then look for queries
    //one way is to use unshift

    //for loop for rotation- start i at 1 and make it less than or equal to k since that is the number of rotations

    for (let i = 1; i <= k; i++) {
        //this is the typical way to rotate an array using unshift and pop 
        a.unshift(a.pop());
    }
    //now use map snce we are trying to match the values of queries with the indices of a-> set a new variable and return it
    let queryValue = queries.map(i => a[i]);
    return queryValue;
    //another way to write it without making a new variable:
    // return queries.map(value => {
    //     return a[value];
    // })
}
