<template>
  <div class="box2">
    <note-nav :ac="pho.act"></note-nav>
    <note-section :ph="pho"></note-section>
  </div>
</template>

<script>
  import NoteNav from "./noteNav";
  import NoteSection from "./noteSection";
  export default {
    name: "noteFlex",
    data(){
      return{
        pho:{}
      }
    },
    components: {NoteSection, NoteNav, },
    created(){
      fetch("http://localhost:3000/ind").then(res=>{
        res.json().then(data=>{
          this.pho=data[4]
          console.log(this.pho)
        })
      })
    }
  }
</script>

<style scoped>

</style>
