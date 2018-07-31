var Crypto33 = {
    setEncrypt: function(source,destination,passcode) {
        document.getElementById(destination).innerText = this.encryptCodes(document.getElementById(source).value,document.getElementById(passcode).value);
    },
    setDecrypt: function() {
                document.getElementById('decryptedContent').innerText = this.decryptCodes(document.getElementById('originalContent').value,document.getElementById('passcode').value);
    },
    encryptCodes: function(content,passcode) {
        var result = []; var passLen = passcode.length ;
        for(var i = 0  ; i < content.length ; i++) {
            var passOffset = i%passLen ;
            var calAscii = (content.charCodeAt(i)%passcode.charCodeAt(passOffset))+33;
            result.push(calAscii);
        }
        return JSON.stringify(result) ;
    },
    decryptCodes: function(content,passcode) {
        var result = [];var str = '';
        var codesArr = JSON.parse(content);var passLen = passcode.length ;
        for(var i = 0  ; i < codesArr.length ; i++) {
            var passOffset = i%passLen ;
            var calAscii = (codesArr[i]%passcode.charCodeAt(passOffset))-33+passcode.charCodeAt(passOffset);
            result.push(calAscii) ;
        }
        console.log(result);
        for(var i = 0 ; i < result.length ; i++) {
            var ch = String.fromCharCode(result[i]); str += ((ch.length == 0)?' ':ch) ;
        }
        return str ;
    }
}
