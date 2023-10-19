<script lang="ts" setup>
import { reactive } from 'vue'
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'

// do not use same name with ref
const form = reactive({
  title: '',
  poster: '',
  director: '',
  year: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <el-form :model="form" label-width="120px" class="p-2">
    <el-form-item label="Title">
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item label="Poster">
      <el-input v-model="form.poster" type="textarea" />
    </el-form-item>
    <el-form-item label="Director">
      <el-input v-model="form.director" type="textarea" />
    </el-form-item>
    <el-form-item label="Year">
      <el-input v-model="form.year" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>