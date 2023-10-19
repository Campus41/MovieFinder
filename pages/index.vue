<script setup>
  import { useRouter } from 'vue-router'
  import { ElButton, ElInput } from 'element-plus'
  import { Search } from '@element-plus/icons-vue'
  const router = useRouter()

  const findMoviesHandler = () => {
    router.push({
      name: 'results-title-page',
      params: { title: title.value, page: 1 },
    })
  }

  const title = ref('')
</script>

<template>
  <div class="flex p-2">
    <el-input v-model="title" placeholder="Please input" />
    <el-button 
      type="primary"
      :icon="Search"
      :disabled="!(!!title)"
      @click="findMoviesHandler" 
    >
      Search
    </el-button>
  </div>
</template>