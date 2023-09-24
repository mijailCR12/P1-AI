<!-- pages/publishers_index.vue -->
<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Arquitectos Information</h3>
     <p>This section presents information about Arquitectos</p>
   <ul>
     <ContentList path="/arquitectos" v-slot="{ list }">
        <li v-for="arquitecto in list" :key="arquitecto._path">
         <NuxtLink :to="arquitecto._path">{{ arquitecto.nombre }}</NuxtLink>
        </li>
      </ContentList>
   </ul>
   <FooterView />
 </div>
</template>
