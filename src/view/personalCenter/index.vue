<template>
  <div class="con2">
    <blur :blur-amount=40 url="https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg" :height=150>
       <p class="center"><img src="../../assets/sandi-logo.jpg"></p>
    </blur>  
    <divider>个人资料</divider>
    <marquee>
      <marquee-item v-for="i in 3" :key="i" @click.native="onClick(i)" class="align-middle">{{tipList[i].text}}</marquee-item>
    </marquee>
    <form-preview header-label="姓名" :header-value="name" :body-items="list" :footer-buttons="buttons1"></form-preview>
  </div>
</template>

<script>
import { XHeader, Blur, Marquee, MarqueeItem, Divider, FormPreview } from 'vux'
export default {
  components: {
    XHeader,
    Blur,
    MarqueeItem,
    Marquee,
    Divider,
    FormPreview
  },
  mounted () {
    setTimeout(() => {
      this.asyncCount = 5
    }, 1000)
  },
  methods: {
    onClick (i) {
      console.log(i)
    }
  },
  data () {
    return {
      name: JSON.parse(localStorage.getItem('user')).name,
      tipList: [{text: ''},
                  {text: '欢迎使用三地微信报障系统'},
                  {text: '你的问题我们会及时处理'},
                  {text: '请您耐心等待'}],
      list: [ {label: '号码', value: JSON.parse(localStorage.getItem('user')).tel},
              {label: '性别', value: '男'},
              {label: '网点', value: JSON.parse(localStorage.getItem('user')).site},
              {label: 'Q Q', value: JSON.parse(localStorage.getItem('user')).qqcode},
              {label: '地区', value: '广东省-广州市-天河区'}],
      buttons1: [ {style: 'default', text: '修改资料', link: '/Edit'},
                  {style: 'primary', text: '报障', link: '/Warning'}]
    }
  }
}
</script>

<style>
.con2{
    text-align: center;
}
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
</style>
