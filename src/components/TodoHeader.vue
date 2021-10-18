<template>
  <header>
      <h1>{{this.$store.state.headerText}}</h1>
  </header>
</template>

<script>
export default {
  name: "TodoHeader"
}
</script>

<style scoped>/* scoped 이 옵션은 css가 밑으로 상속되는걸 방지하고 이 컴포넌트에서만 적용된다*/
  h1{
    color: #2F3852;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }
</style>