<template>
  <!-- Renders an image element -->
  <img class="img-fluid" :src="url" :alt="alt" :name="name" @click="toggleBorder" :class="{ active: isBordered }" />
</template>

<script>
import { imageMixin } from '@/mixins/imageBorderMixin.js'

export default {
  name: 'ImageComp',
  mixins: [imageMixin], //Bring in Mixin border functionality to the component
  props: {
    img: {
      type: String // Expects a string value for the image URL
    },
    alt: {
      type: String,
      required: true, // Makes the alt prop required
      default: 'An incredible film' // Default value if the prop is not provided
    },
    name: {
      type: String,
      required: true, // Makes the name prop required
      default: 'Untitled.' // Default value if the prop is not provided
    }
  },
  data() {
    return {
      url: this.img // Binds the value of the img prop to the 'url' data property
    }
  }
}
</script>
