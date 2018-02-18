import React from"react";import PropTypes from"prop-types";var classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},inherits=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},possibleConstructorReturn=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},Store=function(){function t(e){classCallCheck(this,t),this.storeData=_extends({},e),this.subscribers=[]}return createClass(t,[{key:"subscribe",value:function(t){this.subscribers.push(t)}},{key:"data",set:function(t){this.storeData=_extends({},this.storeData,t),this.subscribers.forEach(function(t){return t()})},get:function(){return this.storeData}}]),t}(),Provider=function(t){function e(t){classCallCheck(this,e);var r=possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.store=new Store(_extends({},r.props.machine.data)),r.props.machine.addSubscriber(function(t,e){r.store.data=e}),r}return inherits(e,t),createClass(e,[{key:"getChildContext",value:function(){return{is:this.props.machine.is,do:this.props.machine.do,store:this.store}}},{key:"render",value:function(){return this.props.children}}]),e}(React.Component);Provider.childContextTypes={is:PropTypes.func,do:PropTypes.func,store:PropTypes.object};var connect=function(t,e){return function(r){return function(n){var o=function(o){function s(){var r,o,c;classCallCheck(this,s);for(var i=arguments.length,u=Array(i),a=0;a<i;a++)u[a]=arguments[a];return o=c=possibleConstructorReturn(this,(r=s.__proto__||Object.getPrototypeOf(s)).call.apply(r,[this].concat(u))),c.buildProps=function(){return _extends({},n,{do:c.context.do,is:c.context.is,subscribe:function(t){return c.context.store.subscribe(function(){return t.forceUpdate()})}},t?t(c.context.store.data):c.context.store.data,e?e(c.context.do):{})},c.childProps=c.buildProps(),possibleConstructorReturn(c,o)}return inherits(s,o),createClass(s,[{key:"componentDidMount",value:function(){var t=this;this.context.store.subscribe(function(){return t.forceUpdate()})}},{key:"componentWillUpdate",value:function(t,e){this.childProps=this.buildProps()}},{key:"render",value:function(){return React.createElement(r,this.childProps)}}]),s}(React.Component);return o.contextTypes={is:PropTypes.func,do:PropTypes.func,store:PropTypes.object},React.createElement(o,null)}}};export{Provider,connect};
