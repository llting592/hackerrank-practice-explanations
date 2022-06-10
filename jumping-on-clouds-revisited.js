function jumpingOnClouds(c, k) {
    //for this one, had to look at the discussion board- need to use do...while loop
    //set up variables
    let i = 0;
    let e = 100;
    let n = c.length;
    //set up do...while loop
    do {
        //set new i based on what the question gave: (i+k) % n
        var newI = (i + k) % n;
        //if value of the cloud is 0, subtract 1 from e
        if (c[newI] == 0) {
            e--
            // if value of the cloud is 1, subtract 3 from e (technically e-1-2)
        } else if (c[newI] == 1) {
            e -= 3;
        }
        //set i to be newI after do part
        i = newI
    } while (newI != 0);
    return e

}