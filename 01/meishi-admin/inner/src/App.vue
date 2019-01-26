<template>
  <div id="app">
    <!-- <h1 @click="m">{{name}}</h1>
    <el-button @click="show = !show">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>-->
    <el-container>
      <el-header>
        <h1 class="h1 fl">
          <i class="iconfont icon-star"></i>后台管理
        </h1>
        <el-dropdown class="fr mt10" trigger="click" @command="handleCommond">
          <span class="el-dropdown-link">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">黄金糕</el-dropdown-item>
            <el-dropdown-item command="b">狮子头</el-dropdown-item>
            <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
            <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-container>
        <el-aside>
          <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu> -->
          <AppAside />  
        </el-aside>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          </el-breadcrumb>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import AppAside from '@/components/app-aside.vue'
@Component(
  {
    components: {
      AppAside
    }
  }
)
export default class App extends Vue {
  // data() {
  //   return {
  //     name: '美食'
  //   }
  // }

  name: string = "sss";

  show: boolean = true;

  isCollapse: boolean = true;

  m() {
    console.log("mm");
  }
  handleCommond(commond: string) {
    this.$message("click on item " + commond);
  }
  // handleOpen(key:string, keyPath:string) {
  //   console.log(key, keyPath);
  // }
  // handleClose(key:string, keyPath:string) {
  //   console.log(key, keyPath);
  // }
}
</script>

<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
} */
</style>

