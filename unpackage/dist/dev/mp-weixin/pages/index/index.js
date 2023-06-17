"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const Top = common_vendor.index.getMenuButtonBoundingClientRect();
    const hei = Top.top + Top.height;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.s("height:" + common_vendor.unref(Top).top + "px"),
        b: common_vendor.s("height:" + common_vendor.unref(Top).height + "px;"),
        c: common_vendor.s("line-height:" + common_vendor.unref(Top).height + "px;"),
        d: common_vendor.s("height:" + hei + "px;")
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/houleidai.jqlai/工作/HBuilderX/SnackMall-admin/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
