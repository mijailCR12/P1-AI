<!-- pages/publishers_index.vue -->
<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Ciudades Information</h3>
     <p>This section presents information about Ciudades</p>
   <ul>
     <ContentList path="/ciudades" v-slot="{ list }">
        <li v-for="ciudades in list" :key="ciudades._path">
         <NuxtLink :to="ciudades._path">{{ ciudades.nombre }}</NuxtLink>
        </li>
      </ContentList>
   </ul>
   <FooterView />
 </div>
</template>
