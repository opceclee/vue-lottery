<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
	@import 'assets/css/main.less';
	html,body{
	    width: 100%;
	    height: 100%;
	    margin: 0;
	}
	body{
			background: #f7f7f9;
			/*默认字体大小*/
	    .fs(16);
	}
	p,ul{margin: 0;padding: 0;}
</style>
