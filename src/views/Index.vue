<!--  -->
<template>
  <div>
      <m-header></m-header>
       <!-- 子路由出口 -->
        <router-view></router-view>
  </div>
</template>

<script>
  import MHeader from "@/common/MHeader";
  export default {
    components: {
      MHeader
    },
    data () {
      return {
        
      };
    },
}

</script>
<style lang='scss' scoped>
       
</style>