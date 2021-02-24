<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <div class="avatar-wrapper">
          <ImageView
          src="https://www.youbaobao.xyz/mpvue-res/logo.jpg"
          round
        />
        </div>
        <div class="nickname">{{'米老鼠'}}</div>
        <div class="shelf-text">书架共有{{3}}本好书</div>
        <div class="round-item"></div>
        <div class="shelf-text">特别精选</div>
      </div>
      <div class="book-info">
        <div class="book-wrapper">
          <div class="book-img-wrapper">
            <ImageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            />
          </div>
          <div class="book-img-wrapper">
            <ImageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            />
          </div>
          <div class="book-img-wrapper">
            <ImageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            />
          </div>
        </div>
        <div class="shelf-wrapper">
          <div class="shelf">书架</div>
          <van-icon 
            class="arrow" 
            name="arrow" 
            size="11px"
            color="#828489"
            style="margin-left: 4.5px"
          ></van-icon>
        </div>
      </div>
      <div class="feedback-wrapper" @click="onFeedBackClick">
        <span>反馈</span>
      </div>
    </div>
    <van-dialog id="van-dialog"/>
  </div>
</template>

<script>
  import ImageView from '../base/ImageView'
  import Dialog from 'vant-weapp/dist/dialog/dialog'

  export default {
    components: {
      ImageView
    },
    props: {
      data: Object,
      hasSign: {
        type: Boolean,
        default: false
      },
      signDay: {
        type: Number,
        default: 0
      }
    },
    methods: {
      gotoShelf() {},
      onBookClick() {},
      sign() {},
      onFeedBackClick() {
        Dialog.confirm({
          title: '反馈',
          message: 'Are you OK?',
          confirmButtonText: '是',
          cancelButtonText: '否'
        }).then(() => {
          console.log('点击是之后的事件');
        }).catch(() => {
          console.log('点击否之后的事件');
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-card {
    position: relative;
    background-image: linear-gradient(-90deg, #54575F 0%, #595B60 100%);
    border-radius: 15px;
    margin: 22px 20px 0;
    .home-card-inner {
      padding: 21.5px 17px 20px 20px;
      box-sizing: border-box;
      .user-info {
        display: flex;
        align-items: center;
        .avatar-wrapper {
          width: 20px;
          height: 20px;
        }
        .nickname, .shelf-text {
          font-size: 12px;
          color: #fff;
        }
        .nickname {
          margin: 0 8.5px;
        }
        .shelf-text {
          opacity: 0.7;
        }
        .round-item {
          width: 4px;
          height: 4px;
          background-color: #a2a2a2;
          border-radius: 50%;
          margin: 0 8px
        }
      }
      .book-info {
        display: flex;
        margin-top: 16.5px;
        .book-wrapper {
          flex: 1;
          display: flex;
          justify-content: space-around; // 均匀分布
          .book-img-wrapper {
            width: 72px;
            height: 101px;
          }
        }
        .shelf-wrapper {
          display: flex;
          align-items: center;
          margin-left: 10px;
          .shelf {
            width: 11px;
            font-size: 11px;
            word-break: break-word;// 设置换行
            color: #fff;
            opacity: 0.8;
          }
        }
      }
      .feedback-wrapper {
        position: absolute;
        top: 19.5px;
        right: 0;
        z-index: 1;
        width: 44.5px;
        height: 23.5px;
        line-height: 23.5px;
        text-align: center;
        background-color: #707070;
        // opacity: .3;
        border-radius: 100px 0 0 100px;
        span {
          color: #fff;
          font-size: 11px;
        }
      }
    }
  }
</style>