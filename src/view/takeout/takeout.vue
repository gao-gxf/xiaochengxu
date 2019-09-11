<template>
    <div class="swiper">
       <mt-swipe :auto="2000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style>
.swiper{
    width: 100%;
    height: 100px;
}
</style>