function deserializeStr(input){

    let result = []

    let curCommand = input.shift()
    while(curCommand != 'end'){

        let [char, indexes] = curCommand.split(':')
        indexes = indexes.split('/')
        indexes.forEach(x => {
            result[x] = char
        })
        curCommand = input.shift()
    }
    console.log(result.join(''));
}

deserializeStr(['a:0/2/4/6',
                'b:1/3/5',
                'end'])

deserializeStr(['a:0/3/5/11',
                'v:1/4',
                'j:2',
                'm:6/9/15',
                's:7/13',
                'd:8/14',
                'c:10',
                'l:12',
                'end'])