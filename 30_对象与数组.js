var arr = [
    {
        id: 1,
        name: 'xiaoming',
        age: '18',
        sex:"男",
        score : [
           {math: '90'},
           {english :'69'}
        ]
    },
    {
        id: 2,
        name: 'lihua',
        age: '22',
        sex:"男",
        score : [
            {math: '100'},
            {english :'89'}
         ]
    },
    {
        id: 3,
        name: 'xiaomei',
        age: '12',
        sex:"女",
        score : [
            {math: '55',
            english :'78'}
         ]
    }
  
]

console.log(arr[1].name);
console.log(arr[2].score[0].math);

