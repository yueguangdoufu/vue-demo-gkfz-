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
      <el-form-item label="ID" prop="yonghuming">
          <el-input v-model="xuexiaoData.xid" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学校名" prop="yonghuming">
          <el-input v-model="xuexiaoData.xname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学校类型" prop="yonghuming">
          <el-input v-model="xuexiaoData.xleixing" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地区" prop="yonghuming">
          <el-input v-model="xuexiaoData.xdiqu" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文科" prop="yonghuming">
          <el-input v-model="xuexiaoData.xwenke" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="理科" prop="yonghuming">
          <el-input v-model="xuexiaoData.xlike" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="理科最低" prop="yonghuming">
          <el-input v-model="xuexiaoData.xllow" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="理科最高" prop="yonghuming">
          <el-input v-model="xuexiaoData.xlhigh" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文科最低" prop="yonghuming">
          <el-input v-model="xuexiaoData.xwlow" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文科最高" prop="yonghuming">
          <el-input v-model="xuexiaoData.xwhigh" autocomplete="off"></el-input>
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
    return {
      xuexiaoData: {
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
      }
    }
  },
  methods: {
    submitForm (formName) {
      const _this = this
      console.log(_this.xuexiaoData)
      this.$axios({
        method: 'post',
        url: '/insert_xuexiao',
        contentType: 'application/json;charset=UTF-8',
        data: _this.xuexiaoData
      })
        .then(response => {
          if (response.data.Status === 'ok') {
            // alert(response.data.Text)
            alert(response.data.Text)
            _this.$router.push('/xuexiao_gl')
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
  height: 680px;
  background-color: #fff;
  border-radius: 10px;
  padding-top: 40px;
  padding-right: 40px;
  margin-left: 400px;
}
</style>
