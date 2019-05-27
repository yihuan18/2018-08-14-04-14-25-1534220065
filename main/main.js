module.exports = function main(sequences) {
    var prints = [  
                    ['._.','|.|','|_|'],
                    ['...','..|','..|'],
                    ['._.','._|','|_.'],
                    ['._.','._|','._|'],
                    ['...','|_|','..|'],
                    ['._.','|_.','._|'],
                    ['._.','|_.','|_|'],
                    ['._.','..|','..|'],
                    ['._.','|_|','|_|'],
                    ['._.','|_|','..|']
                ];

    var chars = sequences.split("");
    var length = chars.length;
    var nums = new Array(length);
    for(var i = 0 ; i < length ; i++){
        nums[i] = parseInt(chars[i]);
    }
    var ret = "";
    for(var i = 0 ; i < 3 ; i++){
        for(var j = 0 ; j < length ; j++){
            ret += prints[nums[j]][i];
            if(j != length - 1)
                ret += " ";
        }
        ret += "\n";
    }

    return ret;
    
};