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
// console.log($(".m-div")[0].myAttr('title', 'aa'));  错误的错误的
/*
 * 研究下Sizzle line-754  该方法主要用于:
 * 1、对于单一选择器，且是ID、Tag、Class三种类型之一，则直接获取并返回结果
 * 2、对于支持querySelectorAll方法的浏览器，通过执行querySelectorAll方法获取并返回匹配的DOM元素
 * 3、除上之外则调用select方法获取并返回匹配的DOM元素
 *
 * function Sizzle( selector, context, results, seed ) {}
 * @param : 对参数的解释
 * @param selector 选择器字符串
 * @param context 执行匹配的最初的上下文（即DOM元素集合）。若context没有赋值，则取document。
 * @param results 已匹配出的部分最终结果。若results没有赋值，则赋予空数组。
 * @param seed 初始集合
 *
 * attr( elem, name)
 *
 * ownerDocument  返回对应的文档节点
 * setDocument  line-1108
 *   根据当前文档设置文档相关的变量，参数element or document，返回current document
 *   主要任务是测试浏览器对相关函数的支持，从而写出兼容的ID，TAG，CLASS的find和filter函数
 *  */