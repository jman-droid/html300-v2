<template>
<div class="accordion" id="accordionPanelsStayOpenExample">

    <div class="accordion-item"  v-for="film in films" v-bind:key="film.id">

        <h2 class="accordion-header"> {{ film.header }}

            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            </button>
        </h2>

        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">
                <h3>{{ film.name}}</h3>
                <p> {{film.info}}</p>
            </div>
        </div>
    </div>
</div>
    
</template>
  
  
  <script>
  export default {
      name: 'AccordionContent',
      data() {
          return {
              films: [
              {
                  id: 1,
                  header: "Movie 1",
                  name: "Eyes Wide Shut (1999)",
                  info: "Eyes Wide Shut is a 1999 erotic mystery psychological drama film directed, produced, and co-written by Stanley Kubrick. It is based on the 1926 novella Traumnovelle by Arthur Schnitzler, transferring the story's setting from early twentieth-century Vienna to 1990s New York City. The plot centers on a doctor who is shocked when his wife reveals that she had contemplated having an affair a year earlier. He then embarks on a night-long adventure, during which he infiltrates a masked orgy of an unnamed secret society."
              },
              {
                  id: 2,
                  header: "Movie 2",
                  name: "Possession (1981)",
                  info: "A young woman left her family for an unspecified reason. The husband determines to find out the truth and starts following his wife. At first, he suspects that a man is involved. But gradually, he finds out more and more strange behaviors and bizarre incidents that indicate something more than a possessed love affair."
              },
              {
                  id: 3,
                  header: "Movie 3",
                  name: "Bacurau (2019)",
                  info: "Bacurau, a small town in the Brazilian sertão, mourns the loss of its matriarch, Carmelita, who lived to be 94. Days later, its inhabitants notice that their community has vanished from most maps."
              }
                  
              ]
             
              
          }
      }
  }
  </script>
  
  
  
  <style scoped>
    
  </style>