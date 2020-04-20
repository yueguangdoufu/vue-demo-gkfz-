<template>
  <div class="login_container">
    <div class="login_box">
      <!--头像区-->
      <div class="avatar_box">
        <img src=" https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585819886544&di=558b481277071ef206e2cd81c7792815&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F76%2F07%2F5a360b0cc64f8_610.jpg" alt />
      </div>
      <!-- 登录表单区域 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login_from" label-width="0px">
        <!-- 用户名 -->
        <el-form-item>
          <el-input v-model="userData.empUser" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input v-model="userData.empPass" type="password" prefix-icon="iconfont icon-mima" @keyup.enter.native="login"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-select v-model="select" placeholder="请选择" style="width: 90px" @change="optionChange">
                      <el-option label="用户" value="1"></el-option>
                      <el-option label="管理员" value="2"></el-option>
                    </el-select>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary" @click="zhuce">注册</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      select: '',
      // 这是登录的数据绑定对象
      loginForm: {
        username: '',
        password: ''
      },
      // 表单的验证规则
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      },
      searchUrls: [
        '/login', '/login_g'
      ],
      searchUrl: '/login',
      userData: {
        empUser: '',
        empPass: '',
        empId: '',
        role: '',
        wenli: '',
        fenshu: ''
      }
    }
  },
  methods: {
    // 点击重置按钮，重置表单
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    optionChange (selVal) {
      var j = parseInt(selVal)
      this.searchUrl = this.searchUrls[j - 1]
      // console.log(this.searchUrl)
    },
    login () {
      const _this = this
      this.$axios({
        method: 'post',
        url: _this.searchUrl,
        contentType: 'application/json;charset=UTF-8',
        data: _this.userData
      })
        .then(response => {
          if (response != null) {
            _this.userData = response.data
          }

          if (response.data.Status === 'ok') {
            // alert(response.data.Text)
            sessionStorage.setItem('empUser', _this.userData.empUser)
            sessionStorage.setItem('empPass', _this.userData.empPass)
            sessionStorage.setItem('role', _this.userData.role)
            sessionStorage.setItem('wenli', _this.userData.wenli)
            sessionStorage.setItem('fenshu', _this.userData.fenshu)
            sessionStorage.setItem('empId', _this.userData.empId)
            this.$router.push('/index')
          } else {
            alert(response.data.Text)
          }
          console.log(response.data)
          // console.log(_this.tableData[0].xdiqu)
        })
        .catch(error => {
          console.log(error)
        })
    },
    zhuce () {
      this.$router.replace('/zhuce')
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_from{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns{
  display: flex;
  justify-content: flex-end;
}
</style>
