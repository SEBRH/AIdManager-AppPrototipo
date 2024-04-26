<script >
import columnC from "@/pages/project-to-do/components/columns/column.component.vue";

export default {
  name: "Todo",
  components: {
    columnC
  },
};

</script>

<template>
  <section class="flex h-full flex-column p-3 lg:p-5 lg:pb-0">
    <h1 class="title">Projects</h1>
    <br>
    <h3 class="subtitle">Tasks</h3>

    <div class="column-container">
      <columnC task-column="To-Do"></columnC>
      <columnC task-column="Doing"></columnC>
      <columnC task-column="Done"></columnC>
    </div>

  </section>
</template>

<style scoped>

.title{
  font-family: 'Lora',serif;
  font-size: 6vh;
  color: #000000;
  font-weight: unset;
}

.subtitle{
  font-family: 'Lora',serif;
  font-size: 2vh;
  color: #02513D;
  font-weight: bold;
}

.column-container{
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-direction:row;
}

</style>