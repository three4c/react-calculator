(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var u={};n.r(u),n.d(u,"onNumClick",function(){return f}),n.d(u,"onPlusClick",function(){return k}),n.d(u,"onMinusClick",function(){return E}),n.d(u,"onMultiplyClick",function(){return b}),n.d(u,"onDivideClick",function(){return d}),n.d(u,"onEqualClick",function(){return N}),n.d(u,"onClearClick",function(){return h});var a=n(0),l=n.n(a),r=n(5),c=n.n(r),o=(n(23),n(12)),i=n(13),s=n(16),p=n(14),m=n(17),V=n(6),C=n(3),f=function(e){return{type:"INPUT_NUMBER",number:e}},k=function(){return{type:"PLUS"}},E=function(){return{type:"MINUS"}},b=function(){return{type:"MULTIPLY"}},d=function(){return{type:"DIVIDE"}},N=function(){return{type:"EQUAL"}},h=function(){return{type:"CLEAR"}},w=function(e){var t=e.n,n=e.onClick;return l.a.createElement("button",{className:"number__btn",onClick:n},t)},v=function(e){var t=e.o,n=e.onClick;return l.a.createElement("button",{className:"operator__btn",onClick:n},t)},g=function(e){var t=e.result;return l.a.createElement("div",{className:"result__value"},t)},R=(n(28),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.calculator,n=e.actions;return console.log(t),console.log(n),l.a.createElement("div",null,l.a.createElement("div",{className:"result"},l.a.createElement(g,{result:t.showingResult?t.resultValue:t.inputValue})),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"container__number"},l.a.createElement("div",{className:"number"},l.a.createElement(w,{n:7,onClick:function(){return n.onNumClick(7)}}),l.a.createElement(w,{n:8,onClick:function(){return n.onNumClick(8)}}),l.a.createElement(w,{n:9,onClick:function(){return n.onNumClick(9)}})),l.a.createElement("div",{className:"number"},l.a.createElement(w,{n:4,onClick:function(){return n.onNumClick(4)}}),l.a.createElement(w,{n:5,onClick:function(){return n.onNumClick(5)}}),l.a.createElement(w,{n:6,onClick:function(){return n.onNumClick(6)}})),l.a.createElement("div",{className:"number"},l.a.createElement(w,{n:1,onClick:function(){return n.onNumClick(1)}}),l.a.createElement(w,{n:2,onClick:function(){return n.onNumClick(2)}}),l.a.createElement(w,{n:3,onClick:function(){return n.onNumClick(3)}})),l.a.createElement("div",{className:"number"},l.a.createElement(w,{n:0}),l.a.createElement("span",{className:"allClear"},l.a.createElement(v,{o:"AC",onClick:function(){return n.onClearClick()}})),l.a.createElement("span",{className:"equal"},l.a.createElement(v,{o:"=",onClick:function(){return n.onEqualClick()}})))),l.a.createElement("div",{className:"container__operator"},l.a.createElement(v,{o:"\xf7",onClick:function(){return n.onDivideClick()}}),l.a.createElement(v,{o:"\xd7",onClick:function(){return n.onMultiplyClick()}}),l.a.createElement(v,{o:"-",onClick:function(){return n.onMinusClick()}}),l.a.createElement(v,{o:"+",onClick:function(){return n.onPlusClick()}}))))}}]),t}(a.Component)),j=Object(V.b)(function(e){return{calculator:e.calculator}},function(e){return{actions:Object(C.a)(u,e)}})(R),O=n(1),y={inputValue:0,operator:"",resultValue:0,calculate:!1,showingResult:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUT_NUMBER":return Object(O.a)({},e,{inputValue:10*e.inputValue+t.number,showingResult:!1});case"PLUS":return!0===e.calculate?Object(O.a)({},e,{inputValue:0,operator:"+",resultValue:e.resultValue+e.inputValue,showingResult:!0}):Object(O.a)({},e,{inputValue:0,operator:"+",calculate:!0,resultValue:e.inputValue,showingResult:!0});case"MINUS":return!0===e.calculate?Object(O.a)({},e,{inputValue:0,operator:"-",resultValue:e.resultValue-e.inputValue,showingResult:!0}):Object(O.a)({},e,{inputValue:0,operator:"-",calculate:!0,resultValue:e.inputValue,showingResult:!0});case"MULTIPLY":return!0===e.calculate?Object(O.a)({},e,{inputValue:0,operator:"*",resultValue:e.resultValue*e.inputValue,showingResult:!0}):Object(O.a)({},e,{inputValue:0,operator:"*",calculate:!0,resultValue:e.inputValue,showingResult:!0});case"DIVIDE":return!0===e.calculate?Object(O.a)({},e,{inputValue:0,operator:"/",resultValue:e.resultValue/e.inputValue,showingResult:!0}):Object(O.a)({},e,{inputValue:0,operator:"/",calculate:!0,resultValue:e.inputValue,showingResult:!0});case"CLEAR":return{inputValue:0,operator:"",calculate:!1,resultValue:0,showingResult:!1};case"EQUAL":switch(e.operator){case"+":return{inputValue:e.resultValue+e.inputValue,operator:"",calculate:!1,resultValue:e.resultValue+e.inputValue,showingResult:!0};case"-":return{inputValue:e.resultValue-e.inputValue,operator:"",calculate:!1,resultValue:e.resultValue-e.inputValue,showingResult:!0};case"*":return{inputValue:e.resultValue*e.inputValue,operator:"",calculate:!1,resultValue:e.resultValue*e.inputValue,showingResult:!0};case"/":return{inputValue:e.resultValue/e.inputValue,operator:"",calculate:!1,resultValue:e.resultValue/e.inputValue,showingResult:!0};default:return e}default:return e}},_=Object(C.b)({calculator:U}),I=Object(C.c)(_);c.a.render(l.a.createElement(V.a,{store:I},l.a.createElement(j,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f97a755f.chunk.js.map