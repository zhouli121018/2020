<template>
  <div>
    <div class v-if="false">
      <van-nav-bar
        title="鸿运四码"
        :left-text="left_text"
        right-text="关于"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <span slot="title" @click="gethome">
          鸿运四码
          <!-- <van-icon name="replay" /> -->
        </span>
      </van-nav-bar>
    </div>

    <!-- <div id="login">
        <img alt="1" src="~@/assets/waleqrcode.png" class="img-responsive">
    </div>-->
    <div style="padding:.67rem .2rem 0">
      <img src="~@/assets/img/bg_1.png" alt style="width:100%;" />
    </div>
    <div class="flex">
      <img src="~@/assets/img/dl_1.png" alt style="width:1rem" />
      <div class="flex_grow_1 flex">
        <img src="~@/assets/img/dash.png" style="width:1.5rem;height:.04rem;" />
        <div class="flex_grow_1" style="padding:0 .1rem;">
          <img src="~@/assets/img/btn.png" @click="go_test" alt style="width:100%;" />
        </div>
        <img src="~@/assets/img/dash.png" style="width:1.5rem;height:.04rem;" />
      </div>
      <img src="~@/assets/img/dl_2.png" alt style="width:1rem" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    go_test() {
      this.$router.push("/home/test");
    }
  },
  created() {},
  activated() {}
};
</script>

<style scoped lang="stylus"></style>
