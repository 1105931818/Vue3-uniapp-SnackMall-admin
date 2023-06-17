"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "commodity",
  setup(__props) {
    const change = common_vendor.ref(0);
    const Change = (index) => {
      change.value = index;
    };
    const arr = common_vendor.reactive([
      {
        name: "膨化食品"
      },
      {
        name: "坚果炒货"
      },
      {
        name: "肉干海味"
      },
      {
        name: "糖巧果冻"
      },
      {
        name: "果干果蔬"
      },
      {
        name: "素食山珍"
      },
      {
        name: "乳品烘焙"
      },
      {
        name: "水果鲜花"
      },
      {
        name: "蛋糕奶茶"
      }
    ]);
    const hei = common_vendor.index.getSystemInfoSync().windowHeight - 55;
    const gotoSort = () => {
      common_vendor.index.navigateTo({
        url: "/subpackage/sort-admin/sort-admin"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(arr, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: index,
            c: change.value === index ? 1 : "",
            d: common_vendor.o(($event) => Change(index), index)
          };
        }),
        b: common_vendor.s("height:" + hei + "px"),
        c: common_vendor.s("height:" + hei + "px"),
        d: common_vendor.o(gotoSort)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/houleidai.jqlai/工作/HBuilderX/SnackMall-admin/pages/commodity/commodity.vue"]]);
wx.createPage(MiniProgramPage);
