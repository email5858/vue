(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{643:function(s,t,a){"use strict";a.r(t);var n=a(11),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("ol",[a("li",[a("p",[s._v("服务器端直接apt install subversion安装svn")])]),s._v(" "),a("li",[a("p",[s._v("假设要把项目 store 部署在/home/wwwwroot/svn 目录下，打开，然后svnadmin create store")])]),s._v(" "),a("li",[a("p",[s._v("store 目录下打开conf文件夹")])]),s._v(" "),a("li",[a("p",[s._v("编辑authz文件, 例如用户为test, 组为admin")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[groups]\nadmin = test\n\n[/]\ntest = rw\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("编辑passwd文件, 例如authz的用户为test的, 设置密码为123456")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[users]\ntest=123456\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("编辑svnserve.conf文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n### anon-access = read\n\n### auth-access = write\n\n### password-db = passwd\n\n### authz-db = authz\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("把### (此处有个空格)删掉(切记4, 5, 6步骤完成后记得保存)，至此设置完毕")])]),a("ol",{attrs:{start:"7"}},[a("li",[a("p",[s._v("在个人电脑(window系统)上传文件右键svn checkout，提示输入账号密码，然后svn commit")])]),s._v(" "),a("li",[a("p",[s._v("返回服务器端，打开 /home/wwwwroot，例如你的项目叫 test，svn co svn://ip地址/test, 然后输入密码，用户名密码后再yes确定")])]),s._v(" "),a("li",[a("p",[s._v("在服务器端可以看到上传的文件啦！！！下次再更新的时候，例如项目是 store，打开 /home/wwwwroot/store ，然后svn update就可以了")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);