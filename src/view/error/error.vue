<template>
  <div>
    <div class="con">
        <img class="logo" src="../../assets/sandi-logo.png">
        <divider>欢迎使用三地微信报障系统</divider>
        <group>
          <x-input title="主题" type="text" v-model="item" name="item" placeholder="请输入主题"  ref="input01" is-type="china-name" required></x-input>
          <x-textarea title="描述" v-model="substance" max="1000" placeholder="请描述情况"></x-textarea>
        </group>
        <vue-core-image-upload
            class="btn btn-primary"
            :crop="false"
            @imageuploaded="imageuploaded"
            @imageuploading="imageuploading"
            @errorhandle="errorhandle"
            :max-file-size="5242880"
            url="http://101.198.151.190/api/upload.php" >
            
            <x-button plain type="primary uploadImg-btn">附件图片上传</x-button>
        </vue-core-image-upload>
        <div class="upload-box" v-show="showImgFlag">
            <img class="previewer-uploader-img" v-for="(item, index) in list" :src="item.src" @click="showImg(index)">
        </div>
        <div v-transfer-dom>
            <previewer :list="list" ref="previewer" :options="options"></previewer>
        </div>
        <x-button class="loginBtn" type="primary" @click.native="postWarning">提交</x-button>
        <toast v-model="showTipFlag" type="warn">请正确填写所有信息</toast>
        <loading v-model="loadingFlag" :text="text1"></loading>
    </div>
  </div>
</template>

<script>
import { XInput, XButton, Group, ToastPlugin, Toast, AjaxPlugin, XTextarea, Divider, LoadingPlugin, Loading, AlertPlugin, Previewer, TransferDom } from 'vux'
import VueCoreImageUpload from 'vue-core-image-upload'
export default {
  directives: {
    TransferDom
  },
  components: {
    XInput,
    XButton,
    Group,
    ToastPlugin,
    Toast,
    AjaxPlugin,
    XTextarea,
    Divider,
    LoadingPlugin,
    Loading,
    AlertPlugin,
    Previewer,
    'vue-core-image-upload': VueCoreImageUpload
  },
  data () {
    return {
      item: '测试',
      substance: '测试内容',
      showImgFlag: false,
      text1: 'loading',
      showTipFlag: false,
      loadingFlag: false,
      list: [{src: require('../../assets/upload.png'), w: 150, h: 150}],
      options: {
        getThumbBoundsFn (index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll('.previewer-uploader-img')[index]
          // get window scroll Y
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width, h: rect.height}
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    }
  },
  methods: {
    showImg (index) {
      this.$refs.previewer.show(index)
    },
    postWarning () {
      console.log(this.substance)
      if (this.$refs.input01.valid) {
        this.showTipFlag = false
        this.loadingFlag = true
        setTimeout(() => {
          this.loadingFlag = false
          this.$router.push({path: '/Succ'})
        }, 2000)
      } else {
        this.showTipFlag = true
      }
    },
    imageuploaded (res) {
      if (res.errcode === 0) {
        this.loadingFlag = false
        this.list[0].src = res.data.src
        var img = new Image()
        img.src = res.data.src
        this.list[0].w = img.width
        this.list[0].h = img.height
        this.showImgFlag = true
      }
    },
    imageuploading (res) {
      this.loadingFlag = true
      this.showImgFlag = false
    },
    errorhandle (res) {
      this.loadingFlag = true
      this.showImgFlag = false
      console.log(res)
      this.$vux.alert.show({
        title: res,
        content: this.$t(res)
      })
    }
  }
}
</script>

<style>
.logo {
  width: 120px;
}
.con {
  text-align: center;
  margin-bottom: 50px;
}
.con .loginBtn {
  position: fixed;
  bottom: 0px;
  border-radius: 0;
  line-height: 50px;
}
.upload-box{
  width:150px;
  height:150px;
  line-height: 138px;
  margin-left: auto;
  margin-right: auto;
  padding: 3px;
  border:1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
}
.upload-box img{
  width:100%;
  vertical-align: middle;
}
.con .uploadImg-btn{
  border-radius: 5px;
  margin-top: 10px;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
}
</style>
