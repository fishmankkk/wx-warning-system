<template>
  <div>
    <div class="con1">
        <icon type="success" is-msg></icon>
        <p style="margin-top: 30px;color: #666;">您的问题已经成功提交</p>
        <p style="margin-top: 10px;color: #666;margin-bottom: 60px;">请耐心等待，我们的工程师会在第一时间联系您</p>
        
        
    </div>
    <div class="colse-bottom">
        <x-button mini plain type="primary" class="close-button" @click.native="colseWx">完成</x-button>
    </div>
  </div>

</template>

<script>
import { Icon, XButton } from 'vux'
import wx from 'weixin-js-sdk'
export default {
  components: {
    Icon,
    XButton
  },
  methods: {
    colseWx () {
      wx.closeWindow()
    }
  }
}
</script>

<style>
.con1 {
  text-align: center;
  margin-top: 100px;
  position: relative;
  padding: 0 10px;
  box-sizing: border-box;
}
.colse-bottom {
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 100px;
}
.colse-bottom .close-button{
    padding: 0 2.32em;
    font-size: 15px;
}
</style>
