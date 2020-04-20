<template>
  <div class="login_container">
    <div class="zc_box">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="yonghuming">
          <el-input v-model="userData.empUser" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文理" prop="wenli">
          <el-select v-model="userData.wenli" placeholder="请选择文理科" >
            <el-option label="文科" value="文科"></el-option>
            <el-option label="理科" value="理科"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="userData.empPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="成绩" prop="chengji">
          <el-input v-model.number="userData.fenshu"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    var checkChengji = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('成绩不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 0) {
            callback(new Error('必须成绩0以上'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var checkYonghuming = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        chengji: '',
        yonghuming: '',
        wenli: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        chengji: [{ validator: checkChengji, trigger: 'blur' }],
        yonghuming: [{ validator: checkYonghuming, trigger: 'blur' }],
        wenli: [{ required: true, message: '请选择文理科', trigger: 'change' }]
      },
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
    submitForm (formName) {
      const _this = this
      this.$axios({
        method: 'post',
        url: '/insert_huiyuan',
        contentType: 'application/json;charset=UTF-8',
        data: _this.userData
      })
        .then(response => {
          if (response != null) {
            _this.userData = response.data
          }

          if (response.data.Status === 'ok') {
            // alert(response.data.Text)
            sessionStorage.clear()
            alert(response.data.Text)
            _this.$router.push('/login')
          } else {
            alert('失败')
          }
          console.log(response.data)
          // console.log(_this.tableData[0].xdiqu)
        })
        .catch(error => {
          console.log(error)
        })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
  padding-top: 60px;
}
.zc_box {
  width: 600px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  padding-top: 40px;
  padding-right: 40px;
  margin-left: 400px;
}
</style>
