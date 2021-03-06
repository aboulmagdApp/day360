﻿'use strict';

function Days360(sd, fd, m) {
    var d1 = new Date(sd);
    var d2 = new Date(fd);
    var d1_1 = d1;
    var d2_1 = d2;
    var method = m || false;
    var d1_y = d1.getFullYear();
    var d2_y = d2.getFullYear();
    var dy = 0;
    var d1_m = d1.getMonth();
    var d2_m = d2.getMonth();
    var dm = 0;
    var d1_d = d1.getDate();
    var d2_d = d2.getDate();
    var dd = 0;
    if (method) {
        // euro
        if (d1_d == 31) d1_d = 30;
        if (d2_d == 31) d2_d = 30;
    } else {
        // american NASD
        if (d1_d == 31) d1_d = 30;
        if (d2_d == 31) {
            if (d1_d < 30) {
                if (d2_m == 11) {
                    d2_y = d2_y + 1;
                    d2_m = 0;
                    d2_d = 1;
                } else {
                    d2_m = d2_m + 1;
                    d2_d = 1;
                }
            } else {
                d2_d = 30;
            }
        }
    }
    dy = d2_y - d1_y;
    dm = d2_m - d1_m;
    dd = d2_d - d1_d;
    return parseFloat(dy * 360 + dm * 30 + dd);
}

/*
    var sd1 = new Date(2014, 9, 29);
    var fd1 = new Date(2014, 9, 31);
    console.assert(Days360(sd1, fd1) == 2, "1 NeOk");

    var sd2 = new Date(2014, 9, 30);
    var fd2 = new Date(2014, 9, 31);
    console.assert(Days360(sd2, fd2) == 0, "2 NeOk");

    var sd3 = new Date(2014, 9, 31);
    var fd3 = new Date(2014, 10, 1);
    console.assert(Days360(sd3, fd3) == 1, "3 NeOk");

    var sd4 = new Date(2014, 9, 31);
    var fd4 = new Date(2014, 10, 1);
    console.assert(Days360(sd4, fd4) == 1, "4 NeOk");

    var sd5 = new Date(2014, 10, 1);
    var fd5 = new Date(2014, 10, 1);
    console.assert(Days360(sd5, fd5) == 0, "5 NeOk");

    var sd6 = new Date(2014, 10, 1);
    var fd6 = new Date(2014, 10, 2);
    console.assert(Days360(sd6, fd6) == 1, "6 NeOk");

    var sd7 = new Date(2014, 10, 1);
    var fd7 = new Date(2014, 10, 3);
    console.assert(Days360(sd7, fd7) == 2, "7 NeOk");
*/
/*
American
29.10.2014       2  // 1
31.10.2014       
         
30.10.2014       0  // 2
31.10.2014       
         
30.10.2014       1  // 3
01.11.2014       
         
31.10.2014       1  // 4
01.11.2014       
         
01.11.2014       0  // 5
01.11.2014       
         
01.11.2014       1  // 6
02.11.2014       
         
01.11.2014       2  // 7
03.11.2014       
*/

