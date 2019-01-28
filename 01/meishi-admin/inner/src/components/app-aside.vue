<template>
  <div>
    <el-row>
      <el-col :span='24'>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color="antiquewhite"
          text-color="orange"
          active-text-color="red"
          router
          :default-active="routerName"
        >
          
          <el-menu-item
           :index="menu.name"
           v-for='(menu) of menus'
           :key='menu.name'
           >
            <i :class="menu.icon"></i>
            <span >{{menu.text}}</span>
          </el-menu-item>
          
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class AppAside extends Vue {
  isCollapse: boolean = true;

  menus: any[] = []

  created() {
    this.menus= this.$store.state.menus
  }

  m() {
    console.log("mm");
  }
  handleCommond(commond: string) {
    this.$message("click on item " + commond);
  }
  handleOpen(key: string, keyPath: string) {
    console.log(key, keyPath);
  }
  handleClose(key: string, keyPath: string) {
    console.log(key, keyPath);
  }
  get routerName() {
    return this.$store.state.router.name
  }
}
</script>
    
<style>
/* .el-menu-vertical-demo.el-menu{
  background-color: antiquewhite;
} */
.el-menu-vertical-demo .iconfont{
  margin-right: 30px;
}
</style>
