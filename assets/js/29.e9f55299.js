(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{307:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"storage对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage对象"}},[t._v("#")]),t._v(" Storage对象")]),t._v(" "),s("blockquote",[s("p",[t._v("在HTML5提供了两种在客户端储存数据的新方法:"),s("code",[t._v("localStorage")]),t._v(" 和 "),s("code",[t._v("sessionStorage")]),t._v(".之前的储存功能由cookie来完成,但cookie不太适合大量数据的储存,因为每次向服务器请求都会将cookie带过去.")])]),t._v(" "),s("p",[s("code",[t._v("localStorage")]),t._v(" 和 "),s("code",[t._v("sessionStorage")]),t._v(" 这两个存储对象可以对网页数据进行增删改查操作.它们的区别在于前者可以持续性保存数据,即数据并没有过期时间,除非我们手动清除数据,而后者是将数据保存在当前会话中,关闭当前窗口或标签页后就会消失.它们都是挂载在 "),s("code",[t._v("window")]),t._v(" 对象上的.即 "),s("code",[t._v("window.localStorage === localStorage")]),t._v(".下面我们主要以 "),s("code",[t._v("localStorage")]),t._v(" 来介绍它们的用法.")]),t._v(" "),s("h2",{attrs:{id:"基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),s("h3",{attrs:{id:"检测兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检测兼容性"}},[t._v("#")]),t._v(" 检测兼容性")]),t._v(" "),s("p",[t._v("当我们在首次使用 "),s("code",[t._v("localStorage")]),t._v(" 的时候,我们需要判断下浏览器是否支持这个属性.该属性在IE8+浏览器上就已经支持了(IE是浏览器兼容性质检员,它都能支持,其他的基本也没啥问题),所以目前主流的浏览器都是支持这个属性的.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'当前浏览器不支持localStorage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'begin coding'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"保存数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保存数据"}},[t._v("#")]),t._v(" 保存数据")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("localStorage")]),t._v(" 可以创建一个本地存储的键值对,并存储在浏览器中 "),s("code",[t._v("Application")]),t._v(" 中的 "),s("code",[t._v("Local Storage")]),t._v(" 中.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhangsan'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9nLTEyNTcyMzM0MTcuY29zLmFwLW5hbmppbmcubXlxY2xvdWQuY29tL2FwcGxpY2F0aW9uX2xvY2FsU3RvcmFnZS5wbmc?x-oss-process=image/format,png",alt:"application_localStorage"}})]),t._v(" "),s("p",[t._v("从图中大家可以看到,当我们存进去的值是个对象的时候,它会变成 "),s("code",[t._v("[object Object]")]),t._v(".这是因为存进去的 "),s("code",[t._v("key/value")]),t._v(" 都是以"),s("strong",[t._v("字符串")]),t._v("的形式保存在浏览器中.当我们存进去一个对象的时候,它会调用对象的 "),s("code",[t._v("toStirng")]),t._v(" 方法,将其变成 "),s("code",[t._v("[object Object]")]),t._v(".因此当我们想要存储一个对象形式的值时,我们可以使用 "),s("code",[t._v("JSON.stringify")]),t._v(" 将其序列化.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhangsan'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("此时存进去的字符串就是原本我们对象的字符串形式了.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9nLTEyNTcyMzM0MTcuY29zLmFwLW5hbmppbmcubXlxY2xvdWQuY29tL2FwcGxpY2F0aW9uX2xvY2FsU3RvcmFnZTIucG5n?x-oss-process=image/format,png",alt:"application_localStorage"}})]),t._v(" "),s("h3",{attrs:{id:"获取键名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取键名"}},[t._v("#")]),t._v(" 获取键名")]),t._v(" "),s("p",[t._v("获取某个key名")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取储存对象中第n个键值对的键名")]),t._v("\n")])])]),s("h3",{attrs:{id:"获取数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取数据"}},[t._v("#")]),t._v(" 获取数据")]),t._v(" "),s("p",[t._v("获取某个特定key对应的value值")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// value1")]),t._v("\n")])])]),s("p",[t._v("同样的,但我们想要取到一个JSON字符串中某个键对应的值时,可以将其取出来后使用 "),s("code",[t._v("JSON.parse")]),t._v(" 反序列化")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhangsan'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// zhangsan")]),t._v("\n")])])]),s("h3",{attrs:{id:"删除数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除数据"}},[t._v("#")]),t._v(" 删除数据")]),t._v(" "),s("p",[t._v("删除某个特定的键值对")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"清除全部数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除全部数据"}},[t._v("#")]),t._v(" 清除全部数据")]),t._v(" "),s("p",[t._v("清除全部的键值对")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"获取整个storage对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取整个storage对象"}},[t._v("#")]),t._v(" 获取整个Storage对象")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Storage {key2: "value1", key1: "value1", length: 2}')]),t._v("\n")])])]),s("p",[t._v("从这里可以看出来, "),s("code",[t._v("localStorage")]),t._v(" 是个对象,因此还可以使用下面的方法保存,读取或删除数据.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value2'")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value3'")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// value2")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// value3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key3\n")])])]),s("h3",{attrs:{id:"获取键值对的数量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取键值对的数量"}},[t._v("#")]),t._v(" 获取键值对的数量")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])]),s("p",[t._v("因为 "),s("code",[t._v("Storage")]),t._v(" 是个对象,所以可以使用 "),s("code",[t._v("Object.keys()")]),t._v(" 来获取所有的键名,使用 "),s("code",[t._v("Object.values()")]),t._v(" 来获取所有的内容值")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ["key2", "key1"]')]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ["value2", "value1"]')]),t._v("\n")])])]),s("h2",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("p",[t._v("扩展了 "),s("code",[t._v("cookie")]),t._v(" 的 4k限制,它的存储量可以高达5M(值在不同的浏览器中有可能是不一样的).且此方法的兼容性还不错,甚至连IE8都支持."),s("code",[t._v("localStorage")]),t._v(" 也是遵循同源策略的,因此不同的网站之间是不相通的.")]),t._v(" "),s("p",[t._v("参考链接:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.im/post/6857315310908506119?utm_source=gold_browser_extension#heading-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/6857315310908506119?utm_source=gold_browser_extension#heading-3"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/st-leslie/p/5617130.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/st-leslie/p/5617130.html"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);