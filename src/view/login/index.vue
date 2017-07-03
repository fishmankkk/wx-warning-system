<template>
  <div>
    <div class="con">
        <img class="logo" src="../../assets/sandi-logo.png">
        <group>
          <x-input title="姓名" type="text" v-model="name" name="name" placeholder="请输入名字"  ref="input01" is-type="china-name" required></x-input>

          <x-input title="号码" max="11" name="number" v-model="tel" placeholder="请输入手机号码"  ref="input02" keyboard="number" is-type="china-mobile"></x-input>

          <x-input title="网点" type="text" v-model="site" name="site" placeholder="请输入网点"  ref="input03" required></x-input>

          <x-input title="Q Q" type="number" v-model="qqcode" name="qqcode" placeholder="请输入QQ号码"  ref="input04" keyboard="number" required></x-input>
        </group>

        <x-button class="loginBtn" type="primary" @click.native="handleLogin">注册</x-button>
        <toast v-model="showTipFlag" type="warn">请正确填写所有信息</toast>
    </div>
  </div>

</template>

<script>
import { XInput, XButton, Group, ToastPlugin, Toast, AjaxPlugin } from 'vux'
export default {
  components: {
    XInput,
    XButton,
    Group,
    ToastPlugin,
    Toast,
    AjaxPlugin
  },
  data () {
    return {
      name: '黄晓铿',
      tel: '13632250648',
      site: '广州',
      qqcode: '609745278',
      showTipFlag: false
    }
  },
  methods: {
    handleLogin () {
      if (this.$refs.input01.valid && this.$refs.input02.valid && this.$refs.input03.valid && this.$refs.input04.valid) {
        this.showTipFlag = false
        this.$router.push({path: '/PersonalCenter'})
        let personData = {
          name: this.name,
          tel: this.tel,
          site: this.site,
          qqcode: this.qqcode
        }
        var personDataStr = JSON.stringify(personData)
        localStorage.setItem('user', personDataStr)
      } else {
        this.showTipFlag = true
      }
    //   this.$http.get('http://172.16.23.173:9003/quality/quality/getDictionaryData.action')
    //           .then((response) => {
    //             // 响应成功回调
    //             console.log(response)
    //           })
    //           .catch((reject) => {
    //             this.loading = false
    //             console.log(reject)
    //           })
    }
  }
}
</script>

<style>
.logo {
  width: 200px;
}
.con {
  text-align: center;
}
.con .loginBtn {
  position: fixed;
  bottom: 0px;
  border-radius: 0;
  line-height: 50px;
}
</style>
