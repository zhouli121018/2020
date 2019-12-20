<template>
  <div
    :style="{ 'min-height': c_height + 'px' }"
    style="background:#000;box-sizing:border-box;"
  >
    <div
      v-if="no_img"
      ref="imageWrapper"
      style="background:#000;box-sizing:border-box;padding:.5rem .53rem 0.2rem;"
    >
      <div class="center_box">
        <div class="flex">
          <div style="padding:0.5rem 0 .2rem .88rem;">
            <img src="~@/assets/img/user.png" style="width:1.71rem" alt />
          </div>
          <div
            class="flex_grow_1"
            style="text-align:right;padding-right:.67rem;"
          >
            <img src="~@/assets/img/2020.png" style="width:4.5rem;" alt />
          </div>
        </div>

        <div style="padding:0 .53rem;font-size:0;">
          <img src="~@/assets/img/xian.png" alt style="width:100%;" />
        </div>
        <div class="flex" style="padding:0 .2rem;">
          <img src="~@/assets/img/bp_l.png" alt style="width:1.35rem" />
          <div class="flex_grow_1 hf_box">
            <!-- <img src="~@/assets/img/hf.png" style="width:100%;" /> -->
            ￥928372849249.00
          </div>
          <img src="~@/assets/img/bp_r.png" alt style="width:1.35rem" />
        </div>

        <div
          style="color:#FFAB27;text-align:center;position:relative;top:-.8rem;"
        >
          <span style="font-size: 2.17rem;font-weight:bold;">9.9</span>
          <span style="font-size:1.05rem;">万</span>
        </div>
        <div style="padding:.1rem .53rem .2rem;">
          <img src="~@/assets/img/xian.png" alt style="width:100%;" />
        </div>
        <div class="flex">
          <div class="flex_grow_1" style="padding-left:.4rem;">
            <div class="desc_1">长按识别右边二维码</div>
            <div class="desc_2">看看你2020年能赚多少钱</div>
            <img src="~@/assets/img/bp.png" style="width:4.5rem;" alt />
          </div>
          <div style="padding-right:.8rem;">
            <img src="~@/assets/img/waleqrcode.png" style="width:2rem;" alt />
          </div>
        </div>
      </div>
    </div>

    <img v-if="!no_img" :src="dataURL" alt="" style="width:100%;" />
    <div class="share_box" style="background:#000;">
      长按图片保存后，可分享
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      c_height: 667,
      dataURL: "",
      no_img: true
    };
  },
  methods: {
    toImage() {
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      let _this = this;
      setTimeout(() => {
        html2canvas(this.$refs.imageWrapper, { backgroundColor: null }).then(
          canvas => {
            _this.dataURL = canvas.toDataURL();
            _this.no_img = false;
          }
        );
      }, 500);
      // html2canvas(this.$refs.imageWrapper, {}).then(canvas => {
      //   let dataURL = canvas.toDataURL("image/png");
      //   this.dataURL = dataURL;
      //   console.log(dataURL);
      //   this.no_img = false;
      // });
    }
  },
  created() {
    this.c_height = document.documentElement.clientHeight;
  },
  mounted() {
    this.$nextTick(() => {
      this.toImage();
    });
  },
  activated() {}
};
</script>

<style scoped lang="stylus">
body {
  background: #000;
}

.center_box {
  background: url('../../assets/img/bg_2.png') 100% 100% no-repeat #FCEADB;
  background-size: 100% 100%;
  min-height: 8rem;
  border-radius: 0.2rem;
  padding: 0.2rem 0 0.8rem;
}

.hf_box {
  background: url('../../assets/img/hf.png') no-repeat;
  background-size: 100%;
  height: 1.23rem;
  text-align: center;
  padding-top: 0.18rem;
  font-size: 0.45rem;
  color: #FCEADB;
}

.desc_1 {
  font-size: 0.43rem;
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  padding-left: 0.3rem;
  padding-top: 0.2rem;
}

.desc_2 {
  padding: 0.2rem 0 0.2rem 0.3rem;
  font-size: 0.32rem;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: rgba(128, 108, 91, 1);
}

.share_box {
  padding: 0.2rem 0 .4rem;
  text-align: center;
  width: 100%;
  font-size: 0.67rem;
  font-family: Alibaba PuHuiTi;
  font-weight: 400;
  color: rgba(254, 254, 254, 1);
}
</style>
