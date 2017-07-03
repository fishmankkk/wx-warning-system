<template>
  <div class="con2">
    <blur :blur-amount=40 url="https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg" :height=150>
       <p class="center"><img src="../../assets/sandi-logo.jpg"></p>
    </blur>  
    <divider>个人资料</divider>
    <marquee>
      <marquee-item v-for="i in 3" :key="i" @click.native="onClick(i)" class="align-middle">{{tipList[i].text}}</marquee-item>
    </marquee>
    <group>
        <x-input title="姓名" type="text" v-model="name" name="name" placeholder="请输入名字"  ref="input01" is-type="china-name" required></x-input>
        <x-input title="号码" name="number" v-model="tel" placeholder="请输入手机号码"  ref="input02" keyboard="number" is-type="china-mobile"></x-input>
        <x-input title="网点" type="text" v-model="site" name="site" placeholder="请输入网点"  ref="input03" required></x-input>
        <x-input title="Q Q" type="number" v-model="qqcode" name="qqcode" placeholder="请输入QQ号码"  ref="input04" keyboard="number" required></x-input>
    </group>
    <toast v-model="showTipFlag" type="warn">请正确填写所有信息</toast>
    <x-button class="loginBtn" type="primary" @click.native="updateData">确定</x-button>
  </div>
</template>

<script>
import { XInput, Group, XHeader, XButton, Blur, Toast, Marquee, MarqueeItem, Divider } from 'vux'
export default {
  components: {
    XInput,
    Group,
    XHeader,
    Blur,
    MarqueeItem,
    Marquee,
    Divider,
    Toast,
    XButton
  },
  mounted () {
    setTimeout(() => {
      this.asyncCount = 5
    }, 1000)
  },
  methods: {
    onClick (i) {
      console.log(i)
    },
    updateData () {
      if (this.$refs.input01.valid && this.$refs.input02.valid && this.$refs.input03.valid && this.$refs.input04.valid) {
        this.showTipFlag = false
        let personData = {
          name: this.name,
          tel: this.tel,
          site: this.site,
          qqcode: this.qqcode
        }
        var personDataStr = JSON.stringify(personData)
        localStorage.setItem('user', personDataStr)
        this.$router.push({path: '/PersonalCenter'})
      } else {
        this.showTipFlag = true
      }
    }
  },
  data () {
    return {

      userData: JSON.parse(this.$store.state.user),
      name: JSON.parse(localStorage.getItem('user')).name,
      tel: JSON.parse(localStorage.getItem('user')).tel,
      site: JSON.parse(localStorage.getItem('user')).site,
      qqcode: JSON.parse(localStorage.getItem('user')).qqcode,
      showTipFlag: false,
      tipList: [{text: ''},
                  {text: '欢迎使用三地微信报障系统'},
                  {text: '你的问题我们会及时处理'},
                  {text: '请您耐心等待'}]
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
.con2 .loginBtn {
  position: fixed;
  bottom: 0px;
  border-radius: 0;
  line-height: 50px;
}
</style>
