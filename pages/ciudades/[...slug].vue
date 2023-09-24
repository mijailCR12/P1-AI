<!-- pages/authors/[...slug].vue -->
<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <ContentDoc v-slot="{doc}">
     <div class="five columns">
       <img class="u-max-full-width" :src="'/images/'+doc.image">
     </div>
     <div class="six columns">
       <h4>{{doc.nombre}}</h4>
       <hr>
       <ul>
            <li>Pais:
              {{doc.pais}}
            </li>
            <li>Superficie:
              {{doc.superficie}}
            </li>
            <li>Poblacion:
              {{doc.poblacion}}
            </li>
          </ul>
       <ContentRenderer :value="doc" />
			 <h5>Edificios</h5>
			  <ul>
		   <ContentQuery path="/edificios" :where="{ ciudadId: doc.id }" v-slot="{ data }">
		         <li v-for="edificio in data" :key="edificio._path">
		           <NuxtLink :to="edificio._path">{{ edificio.nombre }}</NuxtLink>
		         </li>
		   </ContentQuery>
			 </ul>
			</div>
     </ContentDoc>
   </div>
   <FooterView />
 </div>
</template>