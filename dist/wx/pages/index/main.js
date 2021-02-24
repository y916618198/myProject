require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('SearchBar', {
    attrs: {
      "disabled": "",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "onClick": _vm.onSearchBarClick
    }
  }), _vm._v(" "), _c('HomeCard', {
    attrs: {
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('HomeBanner', {
    attrs: {
      "img": "http://www.youbaobao.xyz/book/res/bg.jpg",
      "title": "mpvue2.0实战多端小程序",
      "subTitle": "立即体验",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "onClick": _vm.onBannerClick
    }
  }), _vm._v(" "), _c('div', [_c('HomeBook', {
    attrs: {
      "title": "分类查询",
      "row": 2,
      "col": 2,
      "data": _vm.data,
      "mode": "category",
      "btn-text": "更多",
      "eventid": '2',
      "mpcomid": '3'
    },
    on: {
      "onMoreClick": _vm.onBookMoreClick,
      "onBookClick": _vm.onHomeBookClick
    }
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5eca2e54", esExports)
  }
}

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_ImageView_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3852a9a7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_ImageView_vue__ = __webpack_require__(58);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(56)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3852a9a7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_ImageView_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3852a9a7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_ImageView_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/base/ImageView.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ImageView.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3852a9a7", Component.options)
  } else {
    hotAPI.reload("data-v-3852a9a7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(46);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5eca2e54_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(110);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(47)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5eca2e54"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5eca2e54_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5eca2e54", Component.options)
  } else {
    hotAPI.reload("data-v-5eca2e54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_SearchBar__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_HomeCard__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_HomeBanner__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_HomeBook__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_index__ = __webpack_require__(71);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import组件






/* harmony default export */ __webpack_exports__["a"] = ({
  // 注册组件
  components: {
    SearchBar: __WEBPACK_IMPORTED_MODULE_0__components_home_SearchBar__["a" /* default */],
    HomeCard: __WEBPACK_IMPORTED_MODULE_1__components_home_HomeCard__["a" /* default */],
    HomeBanner: __WEBPACK_IMPORTED_MODULE_2__components_home_HomeBanner__["a" /* default */],
    HomeBook: __WEBPACK_IMPORTED_MODULE_3__components_home_HomeBook__["a" /* default */]
  },
  data: function data() {
    return {
      hotSearch: '',
      shelf: [],
      banner: {},
      recommend: [],
      freeRead: [],
      hotBook: [],
      category: []
    };
  },
  mounted: function mounted() {
    console.log(this.getHomeData());
  },

  methods: {
    getHomeData: function getHomeData() {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_4__api_index__["a" /* getHomeData */])({ openId: '1234' }).then(function (response) {
        var _response$data$data = response.data.data,
            keyword = _response$data$data.hotSearch.keyword,
            shelf = _response$data$data.shelf,
            banner = _response$data$data.banner,
            recommend = _response$data$data.recommend,
            freeRead = _response$data$data.freeRead,
            hotBook = _response$data$data.hotBook,
            category = _response$data$data.category;

        console.log(keyword, shelf, banner, recommend, freeRead, hotBook, category);
        _this.hotSearch = keyword;
        _this.shelf = shelf;
        _this.banner = banner;
        _this.recommend = recommend;
        _this.freeRead = freeRead;
        _this.hotBook = hotBook;
        _this.category = category;
      });
    },
    onBookMoreClick: function onBookMoreClick() {
      console.log('more click');
    },
    onHomeBookClick: function onHomeBookClick() {
      console.log('book click');
    },
    onSearchBarClick: function onSearchBarClick() {
      // 跳转到搜索页面
    },
    onBannerClick: function onBannerClick() {
      console.log('banner click');
    }
  }
});

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_SearchBar_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_d5157740_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_SearchBar_vue__ = __webpack_require__(52);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(50)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d5157740"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_SearchBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_d5157740_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_SearchBar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/home/SearchBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SearchBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d5157740", Component.options)
  } else {
    hotAPI.reload("data-v-d5157740", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 50:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    focus: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 50
    },
    hotSearch: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      searchWord: ''
    };
  },

  methods: {
    onSearchBarClick: function onSearchBarClick() {
      this.$emit('onClick');
    },
    onClearClick: function onClearClick() {
      this.searchWord = '';
      this.$emit('onClear');
    },
    onChange: function onChange(e) {
      var value = e.mp.detail.value;

      this.$emit('onchange', value);
    },
    onConfirm: function onConfirm(e) {
      var value = e.mp.detail.value;

      this.$emit('onConfirm', value);
    },
    setValue: function setValue(v) {
      this.searchWord = v;
    },
    getValue: function getValue() {
      return this.searchWord;
    }
  }
});

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search-bar",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.onSearchBarClick
    }
  }, [_c('div', {
    staticClass: "search-bar-wrapper"
  }, [_c('van-icon', {
    staticClass: "search",
    attrs: {
      "name": "search",
      "size": "16px",
      "color": "#858C96",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchWord),
      expression: "searchWord"
    }],
    staticClass: "search-bar-input",
    attrs: {
      "focus": _vm.focus,
      "disabled": _vm.disabled,
      "maxlength": _vm.limit,
      "placeholder": _vm.hotSearch.length === 0 ? '搜索' : _vm.hotSearch,
      "confirm-type": "search",
      "placeholder-style": "color: #ADB4BE; font-size: 15px;",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.searchWord)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.searchWord = $event.target.value
      }, _vm.onChange],
      "confirm": _vm.onConfirm
    }
  }), _vm._v(" "), (_vm.searchWord.length > 0) ? _c('van-icon', {
    staticClass: "clear",
    attrs: {
      "name": "clear",
      "size": "16px",
      "color": "#ccc",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.onClearClick
    }
  }) : _vm._e()], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d5157740", esExports)
  }
}

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_HomeCard_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_ca25abec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_HomeCard_vue__ = __webpack_require__(60);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(54)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ca25abec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_HomeCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_ca25abec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_HomeCard_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/home/HomeCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HomeCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ca25abec", Component.options)
  } else {
    hotAPI.reload("data-v-ca25abec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 54:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_ImageView__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_dialog_dialog__ = __webpack_require__(59);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    ImageView: __WEBPACK_IMPORTED_MODULE_0__base_ImageView__["a" /* default */]
  },
  props: {
    data: Object,
    hasSign: {
      type: Boolean,
      default: false
    },
    signDay: {
      type: Number,
      default: 0
    }
  },
  methods: {
    gotoShelf: function gotoShelf() {},
    onBookClick: function onBookClick() {},
    sign: function sign() {},
    onFeedBackClick: function onFeedBackClick() {
      __WEBPACK_IMPORTED_MODULE_1_vant_weapp_dist_dialog_dialog__["a" /* default */].confirm({
        title: '反馈',
        message: 'Are you OK?',
        confirmButtonText: '是',
        cancelButtonText: '否'
      }).then(function () {
        console.log('点击是之后的事件');
      }).catch(function () {
        console.log('点击否之后的事件');
      });
    }
  }
});

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    src: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'widthFix'
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: 'auto'
    }
  },
  watch: {
    src: function src(newValue, preValue) {}
  },
  data: function data() {
    return {
      isLoading: true,
      error: false
    };
  },

  methods: {
    onClick: function onClick() {
      this.$emit('onClick');
    },
    onLoad: function onLoad() {
      this.isLoading = false;
      this.error = false;
      // console.log('onload')
    },
    onError: function onError() {
      this.error = true;
      this.isLoading = false;
      // console.log('onerror')
    }
  }
});

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "image-view",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.onClick
    }
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isLoading && !_vm.error),
      expression: "!isLoading && !error"
    }],
    class: _vm.round ? 'round image' : ' image ',
    style: ({
      height: _vm.height
    }),
    attrs: {
      "src": _vm.src,
      "mode": _vm.mode,
      "lazy-load": _vm.lazyLoad,
      "eventid": '0'
    },
    on: {
      "load": _vm.onLoad,
      "error": _vm.onError
    }
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isLoading || _vm.error),
      expression: "isLoading || error"
    }],
    class: _vm.round ? 'round image' : ' image ',
    style: ({
      height: _vm.height
    }),
    attrs: {
      "src": "https://www.youbaobao.xyz/book/img/loading2.ae9e5924.jpeg",
      "mode": _vm.mode,
      "lazy-load": _vm.lazyLoad
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3852a9a7", esExports)
  }
}

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home-card"
  }, [_c('div', {
    staticClass: "home-card-inner"
  }, [_c('div', {
    staticClass: "user-info"
  }, [_c('div', {
    staticClass: "avatar-wrapper"
  }, [_c('ImageView', {
    attrs: {
      "src": "https://www.youbaobao.xyz/mpvue-res/logo.jpg",
      "round": "",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "nickname"
  }, [_vm._v(_vm._s('米老鼠'))]), _vm._v(" "), _c('div', {
    staticClass: "shelf-text"
  }, [_vm._v("书架共有" + _vm._s(3) + "本好书")]), _vm._v(" "), _c('div', {
    staticClass: "round-item"
  }), _vm._v(" "), _c('div', {
    staticClass: "shelf-text"
  }, [_vm._v("特别精选")])]), _vm._v(" "), _c('div', {
    staticClass: "book-info"
  }, [_c('div', {
    staticClass: "book-wrapper"
  }, [_c('div', {
    staticClass: "book-img-wrapper"
  }, [_c('ImageView', {
    attrs: {
      "src": "https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg",
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "book-img-wrapper"
  }, [_c('ImageView', {
    attrs: {
      "src": "https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg",
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "book-img-wrapper"
  }, [_c('ImageView', {
    attrs: {
      "src": "https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg",
      "mpcomid": '3'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "shelf-wrapper"
  }, [_c('div', {
    staticClass: "shelf"
  }, [_vm._v("书架")]), _vm._v(" "), _c('van-icon', {
    staticClass: "arrow",
    staticStyle: {
      "margin-left": "4.5px"
    },
    attrs: {
      "name": "arrow",
      "size": "11px",
      "color": "#828489",
      "mpcomid": '4'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "feedback-wrapper",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.onFeedBackClick
    }
  }, [_c('span', [_vm._v("反馈")])])]), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '5'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-ca25abec", esExports)
  }
}

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_HomeBanner_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6efd2fa6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_HomeBanner_vue__ = __webpack_require__(64);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(62)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6efd2fa6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_HomeBanner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6efd2fa6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_HomeBanner_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/home/HomeBanner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HomeBanner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6efd2fa6", Component.options)
  } else {
    hotAPI.reload("data-v-6efd2fa6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 62:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    title: String,
    subTitle: String,
    img: String
  },
  computed: {
    bgImage: function bgImage() {
      return 'url(' + this.img + ')';
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('onClick');
    }
  }
});

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home-banner",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.onClick
    }
  }, [_c('div', {
    staticClass: "bg-img",
    style: ({
      backgroundImage: _vm.bgImage
    })
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "sub-title"
  }, [_vm._v(_vm._s(_vm.subTitle))])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6efd2fa6", esExports)
  }
}

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_HomeBook_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_12e75563_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_HomeBook_vue__ = __webpack_require__(70);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(66)
  __webpack_require__(67)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-12e75563"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_HomeBook_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_12e75563_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_HomeBook_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/home/HomeBook.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HomeBook.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12e75563", Component.options)
  } else {
    hotAPI.reload("data-v-12e75563", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 66:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_const__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_ImageView_vue__ = __webpack_require__(24);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: { ImageView: __WEBPACK_IMPORTED_MODULE_1__base_ImageView_vue__["a" /* default */] },
  mounted: function mounted() {
    console.log(this.bookData);
  },

  props: {
    title: String,
    data: {
      type: Array,
      default: []
    },
    btnText: String,
    row: {
      type: Number,
      default: 0
    },
    col: {
      type: Number,
      default: 1
    },
    mode: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_0__utils_const__["b" /* HOME_BOOK_MODE */].ROW
    },
    showTitle: {
      type: Boolean,
      defaullt: true
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    LinearBg: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    HOME_BOOK_MODE: function HOME_BOOK_MODE() {
      return __WEBPACK_IMPORTED_MODULE_0__utils_const__["b" /* HOME_BOOK_MODE */];
    },
    bookData: function bookData() {
      var data = this.data,
          row = this.row,
          col = this.col;

      if (data && data.length > 0) {
        data.forEach(function (book) {
          book.text = __WEBPACK_IMPORTED_MODULE_0__utils_const__["a" /* CATEGORY */][book.categoryText.toLowerCase()];
        });
        var number = row * col;
        var _bookData = data.slice(0, number);
        var _bookDataRow = [];
        var _row = 0;
        while (_row < row) {
          _bookDataRow.push(_bookData.slice(_row * col, _row * col + col));
          _row++;
        }
        return _bookDataRow;
      } else {
        return [];
      }
    }
  },
  methods: {
    onMoreClick: function onMoreClick() {
      this.$emit('onMoreClick');
    },
    onBookClick: function onBookClick() {
      this.$emit('onBookClick');
    }
  }
});

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HOME_BOOK_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORY; });
var HOME_BOOK_MODE = {
  ROW: 'row',
  COL: 'col',
  CATEGORY: 'category'
};

var CATEGORY = {
  computerscience: '计算机科学',
  socialsciences: '社会科学',
  economics: '经济学',
  education: '教育学',
  engineering: '工程学',
  environment: '环境学',
  geography: '地理学',
  history: '历史学',
  laws: '法学',
  lifesciences: '生命科学',
  literature: '文学',
  biomedicine: '生物医学',
  businessandmanagement: '工商管理',
  earthsciences: '地球科学',
  materialsscience: '材料科学',
  mathematics: '数学',
  medicineandpublichealth: '公共卫生',
  philosophy: '哲学',
  physics: '物理',
  politicalscienceandinternationalrelations: '国际关系',
  psychology: '心理学',
  statistics: '统计学'
};

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home-book"
  }, [_c('div', {
    staticClass: "home-book-header"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "home-book-content"
  }, _vm._l((_vm.bookData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "home-book-row"
    }, _vm._l((item), function(book, bookIndex) {
      return _c('div', {
        key: bookIndex,
        staticClass: "home-book-col",
        style: ({
          flex: '0 0 ' + (100 / _vm.col) + '%'
        })
      }, [(_vm.mode === _vm.HOME_BOOK_MODE.COL || _vm.mode === _vm.HOME_BOOK_MODE.ROW) ? _c('div', {
        staticClass: "book-wrapper",
        style: ({
          flexDirection: _vm.mode === _vm.HOME_BOOK_MODE.COL ? 'column' : 'row'
        }),
        attrs: {
          "eventid": '0_' + index + '-' + bookIndex
        },
        on: {
          "click": _vm.onBookClick
        }
      }, [_c('ImageView', {
        attrs: {
          "src": book.cover,
          "mpcomid": '0_' + index + '-' + bookIndex
        }
      }), _vm._v(" "), (_vm.mode === _vm.HOME_BOOK_MODE.COL) ? _c('div', {
        staticClass: "book-title-wrapper book-title-col"
      }, [_c('div', {
        staticClass: "book-title"
      }, [_vm._v(_vm._s(book.title))])]) : _c('div', {
        staticClass: "book-title-wrapper book-title-row"
      }, [_c('div', {
        staticClass: "book-title"
      }, [_vm._v(_vm._s(book.title))]), _vm._v(" "), _c('div', {
        staticClass: "book-title-author-wrapper"
      }, [_c('div', {
        staticClass: "book-title book-author"
      }, [_vm._v(_vm._s(book.author))]), _vm._v(" "), _c('div', {
        staticClass: "book-title book-author"
      }, [_vm._v(_vm._s(book.categoryText))])])])], 1) : _c('div', {
        staticClass: "category-wrapper"
      }, [_c('div', {
        staticClass: "category-text"
      }, [_vm._v(_vm._s(book.text))]), _vm._v(" "), _c('div', {
        staticClass: "category-num"
      }, [_vm._v(_vm._s(book.num) + "本书")]), _vm._v(" "), _c('div', {
        staticClass: "category-img-wrapper"
      }, [_c('div', {
        staticClass: "category-img1"
      }, [_c('ImageView', {
        attrs: {
          "src": book.cover,
          "mpcomid": '1_' + index + '-' + bookIndex
        }
      })], 1), _vm._v(" "), _c('div', {
        staticClass: "category-img2"
      }, [_c('ImageView', {
        attrs: {
          "src": book.cover2,
          "mpcomid": '2_' + index + '-' + bookIndex
        }
      })], 1)])])])
    }))
  })), _vm._v(" "), (_vm.showBtn) ? _c('div', {
    staticClass: "home-book-footer",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.onMoreClick
    }
  }, [_c('van-button', {
    attrs: {
      "round": "",
      "custom-class": "home-book-btn",
      "mpcomid": '3'
    }
  }, [_vm._v(_vm._s(_vm.btnText))])], 1) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-12e75563", esExports)
  }
}

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getHomeData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(72);


var API_URL = 'https://test.youbaobao.xyz:18081';

function getHomeData(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* get */])(API_URL + '/book/home/v2', params);
}

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = get;
/* unused harmony export post */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

function createFly() {
  if (mpvuePlatfrom === 'wx') {
    var Fly = __webpack_require__(109);
    return new Fly();
  }
  return null;
}

function handleError(err) {
  console.log(err);
}

function get(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var fly = createFly();
  if (fly) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      fly.get(url, params).then(function (response) {
        if (response && response.data && response.data.error_code === 0) {
          resolve(response);
        } else {
          reject(err);
        }
      }).catch(function (err) {
        handleError(err);
        reject(err);
      });
    });
  }
}

function post(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var fly = createFly();
  if (fly) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      fly.post(url, params).then(function (response) {
        console.log(response);
        resolve(response);
      }).catch(function (err) {
        console.log(err);
        handleError(err);
        reject(err);
      });
    });
  }
}

/***/ })

},[45]);