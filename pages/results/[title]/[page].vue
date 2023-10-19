<script setup>
import { useMoviesStore } from '~/store/movies'
import { ref, onMounted } from 'vue'
const route = useRoute()
const router = useRouter()

const store = useMoviesStore()

const isLoading = ref(true)

const movies = ref([])

const errorData = ref({})

const currentPage = ref(route.params.page)

const currentSlideIndex = ref(0)

let prevSlideIndex = 0

const currentIndx = computed(() => {
  return currentPage.value * 10 + 1 + currentSlideIndex.value - 10
})

const isLoop = computed(() => {
  return (
    (currentPage.value > 1 || currentSlideIndex.value > 0) &&
    currentIndx.value !== +store.getTotalResults
  )
})

const movieDetailHandler = (title) => {
  router.push({
    name: 'detail-title',
    params: { title: title.value },
  })
}

const onSlideChangeTransitionStart = (swiper) => {
  currentSlideIndex.value = swiper.realIndex
  const currentRealIndex = swiper.realIndex

  // Check if transitioning from the first to the last slide
  if (currentRealIndex === swiper.slides.length - 1 && prevSlideIndex === 0) {
    console.log('Transition from first to last slide')
    if (+currentPage.value === 1) {
      return
    }
    currentPage.value--
    updateMovies()
  }

  // Check if transitioning from the last to the first slide
  if (currentRealIndex === 0 && prevSlideIndex === swiper.slides.length - 1) {
    console.log('Transition from last to first slide')
    if (currentPage.value < Math.ceil(store.getTotalResults / 10)) {
      currentPage.value++
      updateMovies()
    }
  }

  prevSlideIndex = currentRealIndex
}

const updateMovies = () => {
  isLoading.value = true

  store.fetchMovies(route.params.title, currentPage.value).then(() => {
    const getterMovies = store.getMoviesList
    movies.value = getterMovies
    nextTick(() => {
      router.push({
        path: `/results/${route.params.title}/${currentPage.value}`,
      })
      isLoading.value = false
    })
  })
}

onMounted(() => {
  store.fetchMovies(route.params.title, route.params.page).then((res) => {
    if(res) {
      errorData.value = res
      isLoading.value = false
    } else {
      nextTick(() => {
        const getterMovies = store.getMoviesList
        movies.value = getterMovies
        isLoading.value = false
      })
    }
  })
})
</script>

<template>
  <div v-if="isLoading" class="h-80 items-center flex justify-center">
    <div class="spinner"></div>
  </div>
  <div v-if="movies.length">
    <h1 class="text-center m-2">Found {{ store.getTotalResults }} movies!</h1>
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination]"
      :slides-per-view="1"
      :speed="500"
      :loop="isLoop"
      :navigation="true"
      :allowTouchMove="false"
      @SlideChangeTransitionStart="onSlideChangeTransitionStart"
      :effect="'creative'"
      :pagination="{ clickable: false }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-100%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="movie in movies" :key="movie">
        <div 
          v-if="!isLoading" 
          class="h-80 tooltip items-center flex flex-col justify-center mx-16 cursor-pointer"
          @click="movieDetailHandler(movie.Title)"
        >
          <span class="tooltiptext">Click for more details!</span>
          <div class="p-2">
            {{ movie.Title }}
          </div>
          <div v-if="movie.Poster !== 'N/A'">
            <img 
              class="img"
              :src="movie.Poster" 
              :alt="movie.Title"
            />
          </div>
          <div>
            {{ movie.Year }} year
          </div>
          <div>
            {{ `Page: ${route.params.page} / ${Math.ceil(store.getTotalResults/10)}` }}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  <div class="text-center p-2" v-else="movies.length">
    {{ `${errorData.Error} Try again with another title` }}
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

.tooltip {
  position: relative;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #0d0b0b44;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  
  position: absolute;
  z-index: 1;
  top: 50px;
  right: 15%;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>




