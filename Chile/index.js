const fs = require('fs');
var jslrs = jslrs || {};

fs.readFile('level15.txt', 'utf8', function (err, data) {
    console.log(jslrs.lrs(data));
});

/*
* Extraído de https://github.com/cschen1205/js-longest-repeated-substring
*/
jslrs.threeWaysStringQuickSort = function(a) {
    jslrs._sort(a, 0, a.length-1, 0);    
};

jslrs.exchange = function(a, i, j){
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
};

jslrs._charAt = function(a, d) {
    if(a.length <= d) {
        return -1;
    }  
    return a.charCodeAt(d);
};

jslrs._sort = function(a, lo, hi, d) {
    if(lo >= hi) return;
    
    var i = lo, lt = lo, gt = hi;
    var c = jslrs._charAt(a[lo], d);
    while(i <= gt) {
        var cmp = jslrs._charAt(a[i], d) - c;
        if(cmp < 0) {
            jslrs.exchange(a, i++, lt++);
        } 
        else if(cmp > 0) {
            jslrs.exchange(a, i, gt--);
        }
        else {
            i++;
        }
    }
    
    jslrs._sort(a, lo, lt-1, d);
    jslrs._sort(a, lt, gt, d+1);
    jslrs._sort(a, gt+1, hi, d);
};

jslrs.lcs = function(s1, s2) {
    var len = Math.min(s1.length, s2.length);
    for(var i=0; i < len; ++i) {
        if(jslrs._charAt(s1, i) != jslrs._charAt(s2, i)){
            return s1.substring(0, i);
        }
    }
    return s1.substring(0, len-1);
};

jslrs.lrs = function(s) {
    var N = s.length;
    var a = [];
    for(var i = 0; i < N; ++i){
        a.push(s.substring(i, N));
    }
    
    jslrs.threeWaysStringQuickSort(a);
    
    var result = "";
    for(var i=0; i < N-1; ++i) {
        var lcs = jslrs.lcs(a[i], a[i+1]);
        if(lcs.length > result.length) {
            result = lcs;
        }
    }
    
    return result;
};