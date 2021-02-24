<template>
  <div class="home">
    <!-- 使用组件 -->
    <SearchBar 
      disabled
      @onClick="onSearchBarClick"
    />
    <HomeCard />
    <HomeBanner
      img="http://www.youbaobao.xyz/book/res/bg.jpg"
      title="mpvue2.0实战多端小程序"
      subTitle="立即体验"
      @onClick="onBannerClick"
    />
    <div>
      <HomeBook
      title='分类查询'
      :row="2"
      :col="2"
      :data="data"
      mode="category"
      btn-text="更多"
      @onMoreClick="onBookMoreClick"
      @onBookClick="onHomeBookClick"
    />
    </div>
  </div>
</template>

<script>
  // import组件
  import SearchBar from '../../components/home/SearchBar'
  import HomeCard from '../../components/home/HomeCard'
  import HomeBanner from '../../components/home/HomeBanner'
  import HomeBook from '../../components/home/HomeBook'
  import { getHomeData } from '../../api/index'

  export default {
    // 注册组件
    components: {
      SearchBar,
      HomeCard,
      HomeBanner,
      HomeBook
    },
    data() {
      return {
        hotSearch: '',
        shelf: [],
        banner: {},
        recommend: [],
        freeRead: [],
        hotBook: [],
        category: []
      }
    },
    mounted(){
      console.log(this.getHomeData())
    },
    methods: {
      getHomeData() {
        getHomeData({ openId: '1234' }).then(response => {
          const {
            data: {
              hotSearch: {
                keyword
              },
              shelf,
              banner,
              recommend,
              freeRead,
              hotBook,
              category
            }
          } = response.data
          console.log(keyword, shelf, banner,recommend, freeRead, hotBook, category)
          this.hotSearch = keyword
          this.shelf = shelf
          this.banner = banner
          this.recommend = recommend
          this.freeRead = freeRead
          this.hotBook = hotBook
          this.category = category
        })
      },
      onBookMoreClick() {
        console.log('more click')
      },
      onHomeBookClick() {
        console.log('book click')
      },
      onSearchBarClick() {
        // 跳转到搜索页面
      },
      onBannerClick() {
        console.log('banner click')
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>