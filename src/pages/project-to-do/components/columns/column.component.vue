<script>
import Card from "primevue/card";
import Button from "primevue/button";
import Task from "@/pages/project-to-do/components/columns/task/task.component.vue";
import {ref} from "vue";
import FakeApiCardTask from "./fake-api-task.js";

export default {



  props: {
    taskColumn: {
      type: String,
      required: true,
    },
  },
  components: {
    Task,
    Card,
    Button,
  },
  setup() {
    function taskColumn() {

      console.log(this.taskColumn);
      return this.taskColumn;
    }

    const dynamicColor = ref(taskColumn);

    function cambiarColor(dynamicColor) {
      if (dynamicColor === "To-Do") {
        return "#FFDBDB";
      } else if (dynamicColor === "Doing") {
        return "#FFF3DB";
      } else if (dynamicColor === "Done") {
        return "#DBE9FF";
      }
    }

    return {
      dynamicColor,
      cambiarColor,
    };
  },
  data() {
    return {
      tasks: [], // Arreglo para almacenar los datos de los proyectos
      newTask: { id:'', title: '', assigned: '', due: '' }, // Objeto para almacenar los datos del nuevo proyecto
    };
  },
  methods:{
    fetchTasks() {
      FakeApiCardTask.getTasks()
          .then(data => {
            this.tasks = data; // Actualiza el arreglo de proyectos con los datos obtenidos de la API
            console.log(data);
          })
          .catch(error => {
            console.error('Error al obtener datos de la API:', error);
          });
    },
  },
  mounted() {
    this.fetchTasks();
  },

}




</script>

<template>



  <div class="project-card" >
    <Card class="p-card" :style="{ backgroundColor: cambiarColor(taskColumn) }">
      <template #title><h3 style="text-align: center; font-weight:lighter;">{{taskColumn}}</h3></template>
      <template #content>
        <Task v-for="(task, index) in tasks" :key="index" :title="task.title" :assigned="task.assigned" :due="task.due" />
      </template>
    </Card>
  </div>


</template>

<style scoped>
.p-card {
  width: 25rem;
  margin: 1rem;
  padding: 1rem;
  height: 69vh;
}

</style>
