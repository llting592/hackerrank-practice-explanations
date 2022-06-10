function saveThePrisoner(n, m, s) {
    //n = # of prisoners
    //m = # of candy
    //s = where the distribution starts
    //m is a little misleading- it is mainly used to count how many rotations of chairs of the prisoners it goes through
    //also includes the starting chair as 1, so need to subtract 1
    //should do s+m (since it starts at s and rotates m number of times) minus 1 (for the starting position)
    //since n is the number of prisoners, we are looking for how many times it rotates, so look for the sum of m+s-1 divided by n
    var lastChair = ((m + s - 1) % n);
    if (lastChair == 0) {
        return n;
    }
    return lastChair;
}