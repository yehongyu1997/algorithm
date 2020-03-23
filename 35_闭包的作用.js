// 两个作用；偏函数和变量私有化
// function  fun(){
//     var a = 10 ;
//     return function(){
//         console.log(a);
        
//     }
// }
// var inn = fun();
// inn();

// -------------------------------------------
// 偏函数
// function fun(){
//     var a = 10;
//     return function(b){
//         console.log(a+b);
        
//     }
// }
// var inn =fun();
// inn(6);

// ---------------------------------------------
// 发烧线问题
// function fun(a){
//     return function(b){
//         if(b>a ){
//             console.log('体温过高');
//         }else{
//             console.log('体温正常');   
//         }
//     }
// }
// var biaozhun = fun(37.2);
// biaozhun(40);

// -------------------------------------------
// 变量私有化
function fun (){
    var a = 10 ;
    // 此处返回为对象
    return {
        getA : function(){
            console.log(a);
        },
        add : function(){
            a++;
        },
        pingfang : function(){
            a*=a;
        }

    }
}
var inn = fun();
// 用对象的调用方法
inn.getA();
//无法改变a 的值，只能通过内部定义函数的方法来实现a值的变化
inn.add();
inn.getA();
inn.pingfang();
inn.getA();
