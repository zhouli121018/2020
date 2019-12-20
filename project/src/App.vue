<template>
  <div id="app">
    <a :href="apkurl" download v-show="false" id="download_btn">1</a>
    <router-view />
    <div class="full_sc" v-show="loading">
      <rise-loader class="custom-class" color="#8adff4" :loading="loading" :size="15" sizeUnit="px"></rise-loader>
    </div>
    <!-- <audio id="myaudio" preload="load" :src="dingdong" controls="controls" :loop="false" v-show="false"></audio> -->
    <!-- <van-button @click="test">dingdong</van-button> -->
  </div>
</template>

<script>
import { Dialog } from "vant";
import { getkjring, gethome } from "@/api/home";
export default {
  data() {
    return {
      is_qqorwx: false,
      endtime: "",
      curtime: "",
      dingdong: "http://sscby.cn/zzh/dingdong.mp3",
      timer: null,
      timer_arr: [],
      curtime_arr: [],
      last_ring_time: null,
      getring_timer_arr: [],
      settimeout_timer: null
    };
  },
  methods: {},
  created() {},
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    apkurl() {
      return this.$store.getters.apkurl;
    }
  },
  watch: {
    loading(nv, ov) {
      const root = document.documentElement;
      if (nv) {
        root.classList.add("_fc");
      } else {
        root.classList.remove("_fc");
      }
    }
  }
};
</script>

<style lang='stylus'>
body {
  background: #fceadb;
}

.van-nav-bar__arrow {
  font-size: 0.32rem;
}

.van-nav-bar {
  height: 1.3rem;
  line-height: 1.3rem;
}

.left_width_box .van-nav-bar__left {
  left: 0;
  width: 1.5rem;
}

.orange_btn {
  background: #FC7953;
  color: #fff;
}

.left_border_ori {
  /* border-left:0.1rem solid #FC7953; */
  display: inline-block;
  /* padding:0; */
  /* padding-left:0.2rem; */
  /* font-size:0.4rem; */
  /* color:#7D7D7D; */
  background: #87ac55;
  width: 0.08rem;
  height: 0.4rem;
  position: relative;
  top: 0.08rem;
  margin-right: 0.1rem;
}

.dis_flex {
  display: flex;
}

.dis_flex .flex_grow_1 {
  flex-grow: 1;
}

.full_sc {
  background-color: rgba(25, 25, 25, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
}

.custom-class {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.max_width_100 {
  max-width: 100%;
}

.van-tab .van-ellipsis {
  overflow: visible;
}

.no_border_btn {
  border: none;
  color: #438CEB;
  text-decoration: underline;
}

.ellipsis_box .van-cell__title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.flex_box {
  display: flex;
  align-items: center;
}

.flex_grow_1 {
  flex-grow: 1;
}

.van-tab--active {
  color: #e4393c;
}

.container {
  padding-top: 1.35rem !important;
  box-sizing: border-box;
}

.title_box.van-nav-bar .van-icon, .title_box .van-nav-bar__text:active, .fixed_title .van-nav-bar__text:active {
  background: none;
}

.no_bottom_border .van-tabs__line {
  background: none;
}

.van-tab span {
  white-space: nowrap;
}

body {
  font-family: PingFang-SC-Medium;
}

.van-field--disabled .van-field__control, .van-field__right-icon {
  color: #333;
}

.rank_item .van-button--small {
  padding: 0 0.1rem;
}

.van-button {
  white-space: nowrap;
}

textarea:disabled {
  background-color: #fff;
}

img {
  vertical-align: middle;
}

.van-button.main_color_btn {
  background: #87ac55 !important;
  color: #fff !important;
  border-radius: 0.1rem;
}

.mian_color {
  color: #87ac55;
}

.mian_bgcolor {
  background: #87ac55 !important;
  color: #fff !important;
}

// 抓码专家样式
.for_more {
  margin: 0.2rem auto;
  text-align: center;

  button {
    font-size: 0.36rem;
  }
}

.rednumber {
  font-size: 0.5rem !important;
  color: #ff0b60;
}

.exp_box {
  .orange_btn {
    border-radius: 0.6rem;
    background: #ffc131;
    color: #ff3858;
    height: 1rem;
    line-height: 1rem;
    padding: 0 0.4rem;
    font-size: 0.36rem;
    border: none !important;
    letter-spacing: 0.05rem;
  }

  .type_box {
    justify-content: space-between;
    padding: 0.4rem 0.3rem;

    >div {
      width: 48%;

      button {
        height: 1rem;
        line-height: 1rem;
        border: 1px solid #bcbcbc;
        font-size: 0.45rem;
      }
    }
  }

  .fangan_box {
    padding: 0.2rem;
    flex-wrap: wrap;

    >div {
      width: 25%;
      box-sizing: border-box;
      padding: 0.2rem 0.1rem;

      button {
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.4rem;
      }
    }
  }

  .explist_box {
    pdding: 0 0.3rem;

    .exp_top {
      margin: 0.4rem 0.3rem 0;
      padding-bottom: 0.2rem;
      border-bottom: 1px solid #e5e5e5;
      color: #999999;
      font-size: 0.42rem;

      .issue {
        padding-right: 0.8rem;
      }
    }

    .exp_bottom {
      padding: 0.2rem 1.2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      >div {
        width: 48%;
        font-size: 0.42rem;
        padding: 0.2rem 0;
      }

      >div.kong {
        width: 100%;
        padding: 0.4rem 0;
        text-align: center;
      }
    }
  }
}
</style>
