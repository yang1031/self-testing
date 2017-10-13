//eq  -1 倒数第一个元素
$.fn.myEq = function (i) {
    var len = this.length,
        j = +i + (i < 0 ? len : 0);
    console.log(this);
    // this 指向 $(".m-div")
    return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
};
$(".m-div").myEq(1).css("color", "red");

/*
 *   end 返回上一个对象
 *   $('.a').find('p').end()  = $('.a')
 */

$.fn.myEnd = function () {
    return this.prevObject || this.constructor();  // ?constructor 不是很懂
};

// even 偶数项 0,2,4
//  没什么想法，因为even使用方法不是直接.even 而是:出现
// 这些伪类元素先暂时放着


// attr
// Sizzle.myAttr = function (attr, setVal) {
    // if (!!setVal) {
    //     console.log(this);
    //     return this.setAttribute(attr, setVal);
    // } else {
    //     console.log(this);
    //     return this.getAttribute(attr);
    // }
// };
console.log($(".m-div")[0]);
console.log($(".m-div").eq(0));
console.log(setDocument("title"));
// console.log($(".m-div")[0].myAttr('title', 'aa'));  错误的错误的
/*
 * line-1554
 * ownerDocument  返回对应的文档节点
  *  */