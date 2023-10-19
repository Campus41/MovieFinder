<script setup>
import { ref } from 'vue';
import { ElMenu, ElMenuItem } from 'element-plus';

const activeIndex = ref('1'); // Set the default active menu item
</script>

<template>
  <el-menu
    mode="horizontal"
    :default-active="activeIndex"
  >
    <el-menu-item index="1"><NuxtLink to="/">Home</NuxtLink></el-menu-item>
    <el-menu-item index="2"><NuxtLink to="/form">Form</NuxtLink></el-menu-item>
  </el-menu>
  <NuxtPage />
</template>