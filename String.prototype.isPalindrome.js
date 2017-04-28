'use strict'

function isPalindrome(str) {
    var replStr = str.replace(/[.,"'\/#!$%\^&\*;:{}=\-_`~()\s]/g, "").toLowerCase();
    var revStr = replStr.split('').reverse().join('');
    //console.log(replStr);
    //console.log(revStr);
    if (replStr === revStr) {
        return true;
        } else {
            return false;
        }
    };
        
String.prototype.isPalindrome = String.prototype.isPalindrome || isPalindrome;
        