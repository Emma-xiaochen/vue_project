<template>
  <div id="login">
    <div class="title">登录</div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="用户名">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="密码">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <a class="forget" href="#">忘记密码?</a>
        <Button class="submitBtn" type="dashed" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请您输入账号！', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请您输入密码！', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度要超过6位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            // 验证通过
            this.$Message.success('登录成功!');
            // 跳转到首页
            this.$router.push('/home')
          } else {
            // 验证失败
            this.$Message.error('登录失败!');
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  html {
    height: 100%;
  }

  body {
    background-repeat: repeat-x;
    background-size: 400%;
    height: 80%;
    animation: bganimation 15s infinite;
    position: relative;
  }

  @keyframes bganimation {
      0%{
        background-image: -webkit-linear-gradient(top,white,LightSteelBlue,MediumSlateBlue);
      }
      50%{
        background-image: -webkit-linear-gradient(top,white,Thistle,BlueViolet);
      }
      100%{
        background-image: -webkit-linear-gradient(top,white,Thistle,plum);
      }
    }

  #login {
    width: 350px;
    height: 290px;
    background: rgba(0, 0, 0, .3);
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
    padding: 0 25px;

    .title {
      font-size: 30px;
      color: #fff;
      margin-top: 25px;
      margin-bottom: 25px;
    }

    .ivu-input-group .ivu-input {
      width: 275px;
    }

    .forget {
      float: right;
      color: #fff;
      font-size: 12px;
      margin-top: -25px;
    }

    .submitBtn {
      width: 304px;
      background: unset;
      color: #fff;
    }

    .submitBtn:hover {
      color: #57a3f3;
    }
  }
</style>