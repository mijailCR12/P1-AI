<!-- pages/index.vue -->
<template>
 <div class="container">
   <HeaderView />
   <h2 style="margin-top: 15px">Catálogo de edificios más altos:</h2>
    <p>This website offers information about the tallest buildings in the world.</p>
    <ul>
      <li> <NuxtLink to="/edificios_index">Edificio information</NuxtLink></li>
      <li> <NuxtLink to="/ciudades_index">Ciudad information</NuxtLink></li>
      <li> <NuxtLink to="/arquitectos_index">Arquitecto information</NuxtLink></li>
    </ul>
   <FooterView />
 </div>
</template>