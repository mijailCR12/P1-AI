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
          <h3>{{ doc.nombre }} - {{ doc.puesto }}</h3>
 
          <hr>
          <ul>
            <h4>Altura</h4>
            <li>Oficial:
              {{ doc.altura.oficial }}
            </li>
            <li>Antena:
              {{ doc.altura.oficial }}
            </li>
            <li>Ultimo piso:
              {{ doc.altura.ultimo_piso }}
            </li>
          </ul>
          <hr>
          <ul>
            <h4>Caracteristicas</h4>
            <li>Pisos:
              {{ doc.pisos }}
            </li>
            <li>Coste:
              {{ doc.coste }}
            </li>
            <li>Ciudad: 
              <NuxtLink :to="'/ciudades/'+doc.ciudadId">{{ doc.ciudad }}</NuxtLink>
            </li>
            <li>Arquitecto: 
              <NuxtLink :to="'/arquitectos/'+doc.arquitectoId">{{ doc.arquitecto }}</NuxtLink>
            </li>
          </ul>
          <hr>
          <ContentRenderer :value="doc" />
          <ul>
            <ContentQuery path="/edificios" :where="{ authorId: doc.id }" v-slot="{ data }">
              <li v-for="book in data" :key="book._path">
                <NuxtLink :to="book._path">{{ book.title }}</NuxtLink>
              </li>
            </ContentQuery>
          </ul>
        </div>
      </ContentDoc>
    </div>
    <FooterView />
  </div>
</template>