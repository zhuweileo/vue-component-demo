<template>
  <button class="my-button" :class="type" @click="onClick"><slot></slot></button>
</template>

<script>
  export default {
    name: "MButton",
    props:{
      type: {
        type: String,
        default: '',
      },
    },
    methods:{
      onClick(e){
        this.$emit('click',e)
      }
    }
  }
</script>

<style scoped>
  .my-button{
    color: #333;
    background: #ccc;
    border: 1px solid #aeaeae;
    padding: .3em 1em;
    cursor: pointer;
    outline: none;
    border-radius: 4px;
  }
  .my-button:hover{
    background: #dcdcdc;
  }
  .my-button:active{
    background: #ccc;
  }
  .warn{
    background: #ff4348;
  }
  .warn:hover{
    background: #ff9e9e;
  }
  .warn:active{
    background: #ff4348;
  }
</style>
