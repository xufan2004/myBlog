(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{312:function(t,e,a){"use strict";a.r(e);var n=a(13),o=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"with语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#with语法"}},[t._v("#")]),t._v(" with语法")]),t._v(" "),e("blockquote",[e("p",[t._v("这两天在干活的时候,遇到了这么一个业务场景.就是后台接口返回的数据中有不少字段是我不需要的,而我只想保留几个我想要的数据字段,不想要整个对象赋值.")])]),t._v(" "),e("p",[t._v("我们假设后台返回的数据如下:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "code" : "200",\n  "msg" : "操作成功",\n  "data" : {\n    "name": "zhangsan",\n    "age": 12,\n    "job": "FE developer",\n    "like": "football"\n  },\n  "hasError" : false\n}\n')])])]),e("p",[t._v("按照以前的做法,管它三七二十一,全给我拿来.直接把整个对象赋值给"),e("code",[t._v("myData")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("aInterface().then(res => {\n    this.myData = res.data.data\n})\n")])])]),e("p",[t._v("然后在模板中使用:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<div>\n    <ul>\n      <li v-for="prop in myData">\n        {{prop}}\n      </li>\n    </ul>\n</div>\n')])])]),e("p",[t._v("而我现在只想要 "),e("code",[t._v("name")]),t._v("  和 "),e("code",[t._v("age")]),t._v(" 这两个字段,上面的做法会将所有的属性值全部打印出来.所以,我采用的赋值方法一般是")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("aInterface().then(res => {\n    const data = res.data.data\n    this.myData.name = data.name\n    this.myData.age = data.age\n})\n")])])]),e("p",[t._v("但是这样的写法就显得有点繁琐了,每次都要写 "),e("code",[t._v("this.myData")]),t._v(" 这个变量了.此时想起了以前看到过的有个叫 "),e("code",[t._v("with")]),t._v(" 的语句,语法是这样的:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const obj = {\n  name:'zhangsan',\n  age:12\n}\nconsole.log(obj)  // {name: \"zhangsan\", age: 12}\n\nobj.name = 'lisi'\nobj.age = 15\nconsole.log(obj)  // {name: \"lisi\", age: 15}\n\nwith(obj){\n  name = 'wangwu'\n  age = 18\n  job = 'fe'\n}\nconsole.log(obj)  // {name: \"wangwu\", age: 18}\n")])])]),e("p",[e("code",[t._v("obj.a = 11")]),t._v(" 这种是我们最常见的给对象里面属性赋值的方式,而 "),e("code",[t._v("with")]),t._v(" 后面跟了一个表达式 "),e("code",[t._v("obj")]),t._v(" , 花括号里面的语句就只需要 "),e("code",[t._v("a = 111")]),t._v(" 这样的赋值方式,感觉是可以少写一点代码了. 那么我们可以看出,其实 "),e("code",[t._v("with")]),t._v(" 关键字改变了里面语句的作用域,在 "),e("code",[t._v("with")]),t._v(" 代码块内部,变量会先被认为是一个局部变量,如果某个变量名与表达式 "),e("code",[t._v("obj")]),t._v(" 中的一个属性名是一样的,那么这个局部变量就会指向 "),e("code",[t._v("obj")]),t._v(" 对象中同名属性.但假如 "),e("code",[t._v("obj")]),t._v(" 中没有一个属性名是与代码块中的局部变量的名字是一样的,那么此时就会发生污染全局变量的现象.不知道小伙伴们是否注意到了,上面的代码中,在代码块的最后,我加了 "),e("code",[t._v("job = 'fe'")]),t._v(" 这样的一句语句.但是,console 控制台打印出来的 "),e("code",[t._v("obj")]),t._v(" 中并没有包含这个属性.\b这就是因为此时的 "),e("code",[t._v("job")]),t._v(" 这个变量已经泄漏到了全局作用域中了,我们可以继续在控制台执行下面代码")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("console.log(job === window.job)  // true\n")])])]),e("p",[t._v("会发现结果是 "),e("code",[t._v("true")]),t._v(" ,证明此时 "),e("code",[t._v("job")]),t._v(" 已经是全局变量了.这就是 "),e("code",[t._v("with")]),t._v(" 的其中一个弊端,容易数据泄漏,污染全局.而 "),e("code",[t._v("with")]),t._v(" 的另外一个缺点就是会导致性能下降.我们来运行如下代码,然后在控制台查看运行结果:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function test(){\n  console.time('test')\n  const obj = {\n    a:1\n  }\n  for(let i = 0;i < 99999; i++){\n    const tmp = obj.a\n  }\n  console.timeEnd('test')\n}\ntest()  // test: 1.2958984375ms\n\nfunction testWith(){\n  console.time('testWith')\n  const obj = {\n    a:1\n  }\n  with(obj){\n    for(let i = 0;i < 99999; i++){\n      const tmp = a\n    }\n  }\n  \n  console.timeEnd('testWith')\n}\ntestWith()  // testWith: 12.7939453125ms\n")])])]),e("p",[e("strong",[t._v("注意:")]),t._v(" "),e("code",[t._v("console.time()")]),t._v(" 方法是作为计算器的起始方法, "),e("code",[t._v("console.timeEnd()")]),t._v("方法作为计算器的结束方法 . 两个方法配合使用,一般是用来测试一段程序执行的时长.所以,这里两个函数的运行结果很可能是每次都不一样的,但是每次偏差应该都不会相差太大.由此,我们可以看出使用了 "),e("code",[t._v("with")]),t._v(" 语句的代码所需要的时间更长.是没有使用with语句的好多倍.这是因为JavaScript引擎在编译阶段就进行一些性能优化,比如在执行之前就确定了一些变量的定义位置,然后在代码真正的执行过程中可以快速的找到标识符,而使用了 "),e("code",[t._v("with")]),t._v(" 之后,因为无法知道传递到"),e("code",[t._v("with")]),t._v(" 中的对象是哪个,所以JavaScript引擎它也会很懵逼,然后选择放弃,不做优化.")]),t._v(" "),e("p",[e("strong",[t._v("总结:")]),t._v("\n我们代码中尽量不推荐使用 "),e("code",[t._v("with")]),t._v(" 语句,并且在ES5严格模式中已经禁止该标签.但假如真的很想要用它的话,那么在 "),e("code",[t._v("with")]),t._v(" 代码块的语句中,尽量使用指定对象的属性作为变量名,至少我们要保证尽量的不污染全局.")])])}),[],!1,null,null,null);e.default=o.exports}}]);