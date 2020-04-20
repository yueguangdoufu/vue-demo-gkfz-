<template>
  <el-menu router="$route.path" :default-openeds="this.op.opf" :id="this.op" :default-active="this.op.opa">
            <el-menu-item index="/index">
              <i class="iconfont icon-index"></i>首页
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="iconfont icon-icon_xuexiao"></i>学校
              </template>
              <el-menu-item-group>
                <template slot="title">学校分组</template>
                <el-menu-item index="/xuexiao">学校信息</el-menu-item>
                <el-menu-item index="/diqu">地区排序</el-menu-item>
                <el-menu-item index="/zoushi">分数走势</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="iconfont icon-feneli"></i>分类
              </template>
              <el-menu-item-group>
                <template slot="title">分类分组</template>
                <el-menu-item index="/zhongdian">重点高等院校</el-menu-item>
                <el-menu-item index="/putong">普通高等院校</el-menu-item>
                <el-menu-item index="/qita">其他高等院校</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="iconfont icon-yonghu"></i>用户
              </template>
              <el-menu-item-group>
                <template slot="title">用户分组</template>
                <el-menu-item  @click="yhClick1">用户推荐</el-menu-item>
                <el-menu-item  @click="yhClick2">修改信息</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="iconfont icon-guanliyuan"></i>管理
              </template>
              <el-menu-item-group>
                <template slot="title">管理分组</template>
                <el-menu-item @click="glClick">管理学校</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/help">
              <i class="iconfont icon-bangzhu"></i>帮助
            </el-menu-item>
          </el-menu>
</template>

<script>
/* eslint-disable */
export default {
  name: 'am',
  props: { op: {opf: [ ],opa: '1' } },
  data () {
    return{
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
  methods:{
    addData () {
      const _this = this
      _this.userData.empUser = window.sessionStorage.getItem('empUser')
      _this.userData.empPass = window.sessionStorage.getItem('empPass')
      _this.userData.role = window.sessionStorage.getItem('role')
      _this.userData.wenli = window.sessionStorage.getItem('wenli')
      _this.userData.fenshu = window.sessionStorage.getItem('fenshu')
    },
    yhClick1(){
      const _this = this
      if(_this.userData.role === '会员'){
        _this.$router.push('/tuijian_yh')

      }else {
        alert('请先以用户身份登录')
      }
    },
    yhClick2(){
      const _this = this
     if(_this.userData.role === '会员'){
        _this.$router.push('/xiugai_yh')

      }else {
        alert('请先以用户身份登录')
      }
    },
    glClick(){
      const _this = this
      if(_this.userData.role === '管理员'){
        _this.$router.push('/xuexiao_gl')
      }else{
        alert('请先以管理员身份登录')
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
