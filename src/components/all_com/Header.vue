<template>
    <el-row>
      <el-col :span="20">
        <div class="grid-content bg-purple">
          <img src="@/assets/pic/h_logo.png" alt />
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <div class="yonghuxinxi_container">
            <div class="denglu" @click="dlClick">登录</div>
            <div class="tuichu" @click="tcClick">退出</div>
            <div class="touxiang">
              <el-image style="width: 90px; height: 90px; border-radius: 50%" :src="url" :fit="fit"></el-image>
            </div>
            <div class="yonghuming">{{userData.empUser}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      fit: 'cover',
      url:
        ' https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585819886544&di=558b481277071ef206e2cd81c7792815&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F76%2F07%2F5a360b0cc64f8_610.jpg ',
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
    // const userData = window.sessionStorage.getItem('userData')
    this.addData()
    console.log(this.userData)
  },
  methods: {
    dlClick () {
      const _this = this
      if (window.sessionStorage.getItem('empUser') != null) {
        _this.userData.empUser = window.sessionStorage.getItem('empUser')
        _this.userData.empPass = window.sessionStorage.getItem('empPass')
        _this.userData.role = window.sessionStorage.getItem('role')
        _this.userData.wenli = window.sessionStorage.getItem('wenli')
        _this.userData.fenshu = window.sessionStorage.getItem('fenshu')
      }
      if (_this.userData.empUser == null || _this.userData.empUser === '') {
        _this.$router.push('/login')
      } else {
        alert('您已登录，如需更换用户，请先退出!')
      }
    },
    addData () {
      const _this = this
      _this.userData.empUser = window.sessionStorage.getItem('empUser')
      _this.userData.empPass = window.sessionStorage.getItem('empPass')
      _this.userData.role = window.sessionStorage.getItem('role')
      _this.userData.wenli = window.sessionStorage.getItem('wenli')
      _this.userData.fenshu = window.sessionStorage.getItem('fenshu')
    },
    tcClick () {
      const _this = this
      if (window.sessionStorage.getItem('empUser') != null) {
        sessionStorage.clear()
        _this.userData = {
          empUser: '',
          empPass: '',
          role: '',
          wenli: '',
          fenshu: ''
        }
        alert('退出成功!')
      } else {
        alert('请先登录!')
      }
    }
  }
}
</script>

<style lang="less" scoped>
/* header yonghu */
.yonghuxinxi_container {
  width: 150px;
  height: 150px;
}
.denglu,
.tuichu {
  width: 50%;
  height: 30px;
  color: white;
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
  float: left;
  width: 100%;
  height: 30px;
  color: white;
  min-width: 90px;
  text-align: center;
  line-height: 30px;
}
/* 跳转卡 */
.tiaozhuanka {
  margin-top: 20px;
  width: 900px;
}
.tiaozhuan_kuai {
  width: 300px;
  height: 300px;
  margin: 5px;
  float: left;
  background-color: cornflowerblue;
}
.tishi_kuai {
  width: 200px;
  height: 610px;
  float: left;
  margin: 5px;
}
.tiaozhuan {
  width: 620px;
  float: left;
}
.tishi {
  width: 200px;
  float: left;
}
</style>
