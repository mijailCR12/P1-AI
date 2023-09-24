<!-- pages/publishers_index.vue -->
<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Edificios Information</h3>
     <p>This section presents information about Edificios</p>
   <ul>
     <ContentList path="/edificios" v-slot="{ list }">
        <li v-for="edificio in list" :key="edificio._path">
         <NuxtLink :to="edificio._path">{{ edificio.nombre }}</NuxtLink>
        </li>
      </ContentList>
   </ul>
   <FooterView />
 </div>
</template>
