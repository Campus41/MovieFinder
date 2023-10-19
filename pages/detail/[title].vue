<script setup>
import { useMoviesStore } from '~/store/movies'
import { ElButton } from 'element-plus'
import { ArrowLeft } from '@element-plus/icons-vue'
import { ref } from 'vue'
const route = useRoute()
const router = useRouter()
const store = useMoviesStore()

const movie = ref({})
const isLoading = ref(true)

store.fetchMovieByTitle(route.params.title).then(() => {
  nextTick(() => {
    movie.value = store.getMovieDetail

    isLoading.value = false
  })
})

const previousPageHandler = () => {
  router.back()
}

</script>

<template>
  <div class="p-4" >
    <el-button 
      type="primary" 
      :icon="ArrowLeft"
      @click="previousPageHandler"
    >
      Previous Page
    </el-button>
    <div v-if="isLoading">
      <div class="spinner"></div>
    </div>
    <div v-else class="items-center flex flex-col justify-center">
      <div class="p-2">
        {{ movie.Title }}
      </div>
      <div>
        <img
          class="img"
          :src="movie.Poster"
          :alt="movie.Title" />    
      </div>
      <div class="p-2">
        {{ movie.Director }}
      </div>
      <div class="p-2">
        {{ movie.Year }} year
      </div>
    </div>
  </div>
</template>

<style>
.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  margin: 20px auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.img {
    width: 160px;
    height: 160px;
    object-fit: cover;
  }
</style>