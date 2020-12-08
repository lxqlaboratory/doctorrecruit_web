<template>
  <div class="prologin-container">
    <div class="header">

      <!--标题图-->
      <!--能源动力-->
      <img style="width: 263px;height: 82px;" src="/vue/login/logo.png">
      <!--软件-->
      <!--<img style="width: 350px;height: 82px;" src="http://www.sc.sdu.edu.cn/images/logo.png">-->
      <span style="margin-left:15px;font-size: 36px;font-weight: bold;color: white">临床博士招生管理系统</span>
    </div>
    <div class="main-content">
      <div class="login-box">
        <div class="input-form">
          <div style="width: 100%;">
            <div style="text-align: center;font-size: 25px; ">请输入您的账号对应信息：</div>
            <div style="position: relative;width: 100%;margin-top: 15px;">
              <span class="svg-container">
                身份证号:
              </span>
              <input v-model="perIdCard" class="login-form-input" style="width: 45%">
            </div>

            <div v-if="showResult">
            <div style="position: relative;width: 100%;margin-top: 15px;">
              <span class="svg-container">
                账号名:
              </span>
              <input v-model="loginName" type="text" class="login-form-input" style="width: 45%">
            </div>

            <div style="position: relative;width: 100%;margin-top: 15px;">
              <span class="svg-container">
                密码:
              </span>
              <input v-model="password" type="text" class="login-form-input" style="width: 45%">
            </div>

            </div>
            <div style="width: 100%;margin-top: 10px;" v-if="!showResult">
              <el-row>
                <el-col>
                  <el-button class="loginBtn" style=" width: 50%;  background: #409EFF;color: white;" :loading="loading" @click="handleLogin">找回密码</el-button>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <div>
        <!--背景更换-->
        <!--能源动力-->
        <img class="bgflux" src="/vue/login/back1.png">
        <!--软件-->
        <!--<img class="bgflux" src="@/assets/login/rjxyBackground.jpg">-->
      </div>

    </div>

    <div class="notice">
      <div style="width: 75%;background-color: gainsboro;height: 1px;" />

      <!--文字更换-->
      <div class="notice-title">修改密码</div>
      <!--<div class="notice-title">软件学院本科实践教学网络平台</div>-->

      <span style="color: gray;font-size: 14px;line-height: 200%;">
        <dd />
        <dd />
      </span>
    </div>
    <div class="login-bottom">Copyright © 2018.Shandong university.    支持邮箱 doctorrecruit@email.sdu.edu.cn</div>
  </div>
</template>

<script>
  import { retrievePassword } from '@/api/login'
  export default {
    name: 'forgetPassword',
    data() {
      return {
        loginName: '',
        perIdCard: '',
        password: '',
        showResult: false,
        identifyCode: ''
      }
    },
    created() {

    },
    methods: {
      handleLogin() {

        retrievePassword({
          'perIdCard' : this.perIdCard
        }).then(res => {
           if(res.re == -1){
             this.$message({
               type: 'error',
               message: res.data
             })
           }else if(res.re == 1){
             this.showResult = true
             this.loginName = res.data.loginName
             this.password = res.data.password
           }

        })
      }
    }
  }
</script>

<style lang="scss">

  .el-input__inner{
    height: 40px !important;
  }
  .top_distance{
    margin-top: 40px;
  }
  .el-input-group__prepend{
    width: 120px !important;
    text-align: center;
  }

  .noPadding{
    .el-input__inner{
      padding-right: 0px !important;
    }

  }

</style>
<style lang="scss" scoped>
  $topicColor:#409EFF;

  .el-checkbox__input.is-checked.el-checkbox__inner{
    background-color: #409EFF;
    border-color: #409EFF;
  }
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #409EFF;
    border-color: #409EFF;
  }

  .input-form {
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .login-form-input {
    width: 100%;
    padding: 5px;
    border-bottom: 2px solid gainsboro;
    font-size: 14px;

    &:focus {
      outline: none;
      border: 2px solid #409EFF;
    }
  }

  $topcicolor: #409EFF;
  .prologin-container {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    .notice{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-top:2vh;

      .notice-title{
        margin-top: 1vh;
        padding: 5px 15px 5px 15px;
        border-left: 6px solid #409EFF;
        font-weight: bold;
        width: 60%;
        text-align: left;
      }
    }
    .login-bottom{
      color: white;
      font-size: 13px;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 6vh;
      background-color: #409EFF;
      text-align: center;
      line-height: 6vh;
    }
    .header {
      min-width:100%;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
      border-bottom: 1px solid gainsboro;
      box-shadow:  0px 0px 4px gainsboro;
      padding: 2vh 0 2vh 15%;
      margin-bottom: 2px;
      background: #409EFF;
    }
    .main-content {
      position: relative;
      min-height: 30vw;
      width: 100%;
      .bgflux{
        position: absolute;
        top: 0;
        left: 0;
        height: 30vw;
        width: 100vw;
      }
      .login-box {
        position: absolute;
        right: 35%;
        top: 15vh;
        z-index: 99;
        padding: 20px;
        width: 600px;
        height: 300px;
        background-color: #fff;
        box-sizing: border-box;
        border-radius: 5px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.14);
      }
      .loginBtn{
        height: 35px;
        /*line-height: 15px;*/
        vertical-align: middle;
        margin-left: 160px;

      }
    }

  }
  .login-code{
    cursor: pointer;
  }
  .svg-container {
    color: #2b2f3a;
    width: 30%;
    text-align: right;
    display: inline-block;
  }

</style>


