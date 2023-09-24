<!-- 
<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <ContentDoc v-slot="{doc}">
     <div class="six columns">
       <img class="u-max-full-width" :src="'/images/'+doc.image">
     </div>
     <div class="six columns">
       <h4>{{doc.nombre}}</h4>
       <hr>
       <ul>
            <li>Nacionalidad:
              {{doc.nacionalidad}}
            </li>
            <li>Educacion:
              {{doc.educacion}}
            </li>
            <li>Fecha de nacimiento:
              {{doc.fecha_nacimiento}}
            </li>
          </ul>
       <ContentRenderer :value="doc" />
			 <h5>Edificios</h5>
			  <ul>
		   <ContentQuery path="/edificios" :where="{ arquitectoId: doc.id }" v-slot="{ data }">
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
</template> -->
<!-- pages/authors/[...slug].vue -->
<template>
  <div class="container">
    <HeaderView />
    <div class="row">
      <ContentDoc v-slot="{ doc }">
        <div class="six columns">
          <img class="u-max-full-width" :src="'/images/' + doc.image">
        </div>
        <div class="six columns">
          <h4>{{ doc.nombre }}</h4>
          <hr>
          <ul>
            <li>
              <span v-if="doc.nacionalidad !== null">Nacionalidad: {{ doc.nacionalidad }}</span>
              <span v-else>Pais: {{ doc.empresa.pais }}</span>
            </li>
            <li>
              <span v-if="doc.nacionalidad !== null">Educacion: {{ doc.educacion }}</span>
              <span v-else>Fundador: {{ doc.empresa.fundador }}</span>
            </li>
            <li>
              <span v-if="doc.fecha_nacimiento !== null">Fecha de nacimiento: {{ doc.fecha_nacimiento }}</span>
              <span v-else>Año: {{ doc.empresa.ano }}</span>
            </li>
          </ul>
          <ContentRenderer :value="doc" />
          <h5>Edificios</h5>
          <ul>
            <ContentQuery path="/edificios" :where="{ arquitectoId: doc.id }" v-slot="{ data }">
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