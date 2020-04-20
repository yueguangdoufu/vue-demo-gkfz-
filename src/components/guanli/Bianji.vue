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
              <el-breadcrumb-item>管理</el-breadcrumb-item>
              <el-breadcrumb-item>管理学校</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="xx_table">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="学校" prop="xname">
                  <el-input v-model="ruleForm.xname"></el-input>
                </el-form-item>
                <el-form-item label="地区" prop="xdiqu">
                  <el-input v-model="ruleForm.xdiqu"></el-input>
                </el-form-item>
                <el-form-item label="文分" prop="xwenfen">
                  <el-input v-model="ruleForm.xwenke"></el-input>
                </el-form-item>
                <el-form-item label="理分" prop="xlifen">
                  <el-input v-model="ruleForm.xlike"></el-input>
                </el-form-item>
                <el-form-item label="文低" prop="xwendi">
                  <el-input v-model="ruleForm.xwlow"></el-input>
                </el-form-item>
                <el-form-item label="文高" prop="xwengao">
                  <el-input v-model="ruleForm.xwhigh"></el-input>
                </el-form-item>
                <el-form-item label="理低" prop="xlidi">
                  <el-input v-model="ruleForm.xllow"></el-input>
                </el-form-item>
                <el-form-item label="理高" prop="xligao">
                  <el-input v-model="ruleForm.xlhigh"></el-input>
                </el-form-item>
                <el-form-item label="类型" prop="xleixing">
                  <el-select v-model="ruleForm.leixing" placeholder="请选择学校类型">
                    <el-option label="985" value="985"></el-option>
                    <el-option label="211" value="211"></el-option>
                    <el-option label="普一" value="puyi"></el-option>
                    <el-option label="普二" value="puer"></el-option>
                    <el-option label="其他" value="qita"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
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
    return {
      input: '',
      select: '',
      currentPage: 1,
      pageSize: 10,
      opf: { op: ['3'], opa: '/xuexiao_gl' },
      ruleForm: {
        xid: '',
        xname: '',
        xdiqu: '',
        xwenke: '',
        xlike: '',
        xwlow: '',
        xwhigh: '',
        xllow: '',
        xlhigh: '',
        xleixing: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入学校名称', trigger: 'blur' }
        ],
        diqu: [
          { required: true, message: '请输入地区名称', trigger: 'blur' }
        ],
        wenfen: [
          { required: true, message: '请输入分数', trigger: 'blur' }
        ],
        lifen: [
          { required: true, message: '请输入分数', trigger: 'blur' }
        ],
        wendi: [
          { required: true, message: '请输入分数', trigger: 'blur' }
        ],
        wengao: [
          { required: true, message: '请输入分数', trigger: 'blur' }
        ],
        lidi: [
          { required: true, message: '请输入分数', trigger: 'blur' }
        ],
        ligao: [
          { required: true, message: '请输入分数', trigger: 'blur' }
        ],
        leixing: [
          { required: true, message: '请选择学校类型', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      const _this = this
      _this.ruleForm.xid = window.sessionStorage.getItem('xid')
      this.$axios({
        method: 'post',
        url: '/update_xuexiao',
        contentType: 'application/json;charset=UTF-8',
        data: _this.ruleForm
      })
        .then(response => {
          if (response.data.Status === 'ok') {
            alert(response.data.Text)
            this.$router.push('/xuexiao_gl')
          } else {
            alert('出错')
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
.xx_table {
   width: 1100;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 10px;
  min-height: 300px;
  padding:30px;
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
