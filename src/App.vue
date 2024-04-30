<script>

import ToolbarContent from "@/public/toolbar-content.component.vue";
import SidebarContent from "@/public/sidebar-content-component.vue";
import HomeContent from "@/pages/home/components/home-content.component.vue";
import CalendarContent from "@/pages/calendar/calendar-content.component.vue";
import card from "@/pages/projects/components/card/card.component.vue";
import ProjectCards from "@/pages/projects/components/project-cards/project-cards.component.vue";
import Todo from "@/pages/project-to-do/components/project-to-do/todo.component.vue"
import Column from "@/pages/project-to-do/components/columns/column.component.vue";
import Task from "@/pages/project-to-do/components/columns/task/task.component.vue";
import 'primeicons/primeicons.css'

export default {
  name: 'App',
  components: {ProjectCards, card, CalendarContent, HomeContent, ToolbarContent, SidebarContent, Todo, Column, Task},
  data() {
    return {
      sidebarVisible: true,
    }
  },
  methods: {

    toggleNav() {
      console.log(this.sidebarVisible);
      this.sidebarVisible = !this.sidebarVisible;
    },

    updateSidebarVisible() {
      this.sidebarVisible = window.innerWidth > 1023;
    }
  },
  mounted() {
    this.updateSidebarVisible();
    window.addEventListener('resize', this.updateSidebarVisible);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSidebarVisible);
  }
}
</script>

<template>
  <div class="app-container">
    <toolbar-content :toggleNav="toggleNav" class="toolbar"></toolbar-content>
    <sidebar-content :sidebarVisible="sidebarVisible" class="sidebar-content"></sidebar-content>
    <main class="main-content">
      <!--aca hacen su jiji solo reemplaceen por el componente (vista) que van a trabajar-->
      <project-cards></project-cards>
    </main>
  </div>
</template>

<style>


.app-container {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 350px 1fr;
  grid-template-areas:
    "toolbar toolbar"
    "sidebar main-content";
  min-height: 100vh;
  height: 100%;
}

.toolbar {
  grid-area: toolbar;
}

.sidebar-content {
  grid-area: sidebar;
  background-color: #FFFFFF;
}

.main-content {
  grid-area: main-content;
  min-height: 100%;
}

/*para el style del scroll owo*/

::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar
{
  width: 12px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #BABABA;
}

@media (max-width: 1024px) {
  .app-container {
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
    "toolbar"
    "main-content";
    min-height: 100vh;
  }

}

</style>
