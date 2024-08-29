
const h = Vue.h;

const app = Vue.createApp({
  data() {
    return {
      count: 0,
      title: 'Hello Vue 3'
    }
  },
  methods: {
    changeTitle() {
      this.title = 'Changed title!'
    }
  },
  // template: `
  //   <div class="card center">
  //     <h1>{{ title }}</h1>
  //     <button @click="title = 'Chenged title!'">Click me</button>
  //   </div>
  // `
  render() {
    return h('div', { class: 'card center' }, [
      h('h1', this.title),
      h('button', {
        class: 'btn',
        onClick: this.changeTitle
      }, 'Click me')
    ])
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  }

})

app.mount('#app')

// setTimeout(() => {
//   app.unmount()
// }, 2000)