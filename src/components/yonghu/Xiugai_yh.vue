
<template>
  <div class="index_container">
    <!-- 总容器 -->
    <el-container>
      <!-- header -->
      <el-header height="150px">
        <Header />
      </el-header>
      <!-- 侧栏容器 -->
      <el-container>
        <el-aside width="200px">
          <AsideMenu :op="opf" />
          <!--把本组件data里的opf，传给子组件props里的op-->
        </el-aside>
        <!-- main -->
        <el-container>
          <el-main>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>用户</el-breadcrumb-item>
              <el-breadcrumb-item>修改信息</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="xg_from">
              <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="新用户名" prop="xinyonghuming">
                  <el-input v-model="userData.empUser" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="文理" prop="wenli">
                  <el-select v-model="userData.wenli" placeholder="请选择文理科">
                    <el-option label="文科" value="文科"></el-option>
                    <el-option label="理科" value="理科"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="新密码" prop="pass">
                  <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" prop="checkPass">
                  <el-input type="password" v-model="userData.empPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="新成绩" prop="xinchengji">
                  <el-input v-model.number="userData.fenshu"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-main>
          <!-- footer -->
          <el-footer height="150px">
            <Footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </div>
</template>

<script>
import Header from '../all_com/Header'
import Footer from '../all_com/Footer'
import AsideMenu from '../all_com/AsideMenu'
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
      input: '',
      select: '',
      currentPage: 1,
      pageSize: 10,
      opf: { op: ['2'], opa: '/xiugai_yh' },
      ruleForm: {
        pass: '',
        checkPass: '',
        chengji: '',
        yonghuming: '',
        wenli: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        chengji: [
          { validator: checkChengji, trigger: 'blur' }
        ],
        yonghuming: [
          { validator: checkYonghuming, trigger: 'blur' }
        ],
        wenli: [
          { required: true, message: '请选择文理科', trigger: 'change' }
        ]
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
  mounted () {
    this.addData()
  },
  methods: {
    formatter (row, column) {
      return row.like
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
    },
    addData () {
      const _this = this
      _this.userData.empUser = window.sessionStorage.getItem('empUser')
      _this.userData.empPass = window.sessionStorage.getItem('empPass')
      _this.userData.role = window.sessionStorage.getItem('role')
      _this.userData.wenli = window.sessionStorage.getItem('wenli')
      _this.userData.fenshu = window.sessionStorage.getItem('fenshu')
      _this.userData.empId = window.sessionStorage.getItem('empId')
    },
    submitForm (formName) {
      const _this = this
      this.$axios({
        method: 'post',
        url: '/update_huiyuan',
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
            alert(response.data.Text)
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
  },
  components: { Header, Footer, AsideMenu }
}
</script>

<style>
/* main */
.xg_from{
  widows: 800px;
  min-height: 300px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #fff;
  padding-top: 40px;
}
/* all */
.index_container {
  width: 1400px;
  margin: 0 auto;
}
/* header yonghu */
.yonghuxinxi_container {
  width: 150px;
  height: 150px;
}
.denglu,
.tuichu {
  width: 50%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  float: left;
}
.touxiang {
  width: 90px;
  height: 90px;
  margin-left: 30px;
  float: left;
  border-radius: 50%;
}
.yonghuming {
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
/* 基本总体element框架 */
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 150px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
/* header row style */
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
/* .bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
} */
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
