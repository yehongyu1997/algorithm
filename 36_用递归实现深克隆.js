var arr1 = [1, 2, 3, 4, { 'm': 6 }];
function deepClone(o) {
        if (Array.isArray(o)) {
            // 如果这个东西是个数组
            // 准备一个空数组
            var result = [];
            // 遍历传进来的这个数组，进行浅克隆，但是每项都要重新经过deepClone函数，放到结果数组中
            for (let i = 0; i < o.length; i++) {
                // 下面这行代码，一个字，美！
                result.push(deepClone(o[i]));
            }
        } else if (typeof o == 'object') {
            // 否则如果这个东西是个对象
            var result = {};
            // 每项都要重新经过deepClone函数，放到空对象中！
            for (var k in o) {
                // 下面这行代码，一个字，美！
                result[k] = deepClone(o[k]);
            }
        } else {
            // 这个东西是普通值，就是数字、字符串、布尔
            // result就是它自己，就不用递归了
            var result = o;
        }
        return result;
    }
    console.log(result);
    