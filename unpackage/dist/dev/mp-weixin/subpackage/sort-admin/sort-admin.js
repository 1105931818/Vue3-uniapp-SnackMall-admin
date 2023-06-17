"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "sort-admin",
  setup(__props) {
    const isShow = common_vendor.ref(false);
    const change = () => {
      isShow.value = true;
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(arr, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: index
          };
        }),
        b: isShow.value,
        c: common_vendor.o(change)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ef429404"], ["__file", "/Users/houleidai.jqlai/工作/HBuilderX/SnackMall-admin/subpackage/sort-admin/sort-admin.vue"]]);
wx.createPage(MiniProgramPage);
