
const h = Vue.h;

const app = Vue.createApp({
  data() {
    return {
      count: 0,
      title: 'Hello Vue 3',
      steps: [
        { id: 1, title: 'Core', data: 'Data 1', active: true },
        { id: 2, title: 'Components', data: 'Data 2', active: true },
        { id: 3, title: 'Router', data: 'Data 3', active: true },
        { id: 4, title: 'Vuex', data: 'Data 4', active: true },
        { id: 5, title: 'Composition', data: 'Data 5', active: false }
      ]
    }
  },
  methods: {
    changeTitle() {
      this.title = 'Changed title!'
    },
    isActive(step) {
      if (step.active) {
        return 'active'
      }
    }
  },
  template: `
    <div class="card center">
        <h1>План по изучению Vue.js</h1>
        <p>Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API...</p>
        
        <nav>
            <a v-for="(step, index) in steps" href="#step-1" class="isActive(step)" onclick="navigateTo(1)" id="nav-step-1">
                <div class="step-number">1</div>
                <div class="step-label">Основы</div>
            </a>
        </nav>
        
        <div class="buttons">
            <button id="back-btn" class="button" onclick="prevStep()" disabled>НАЗАД</button>
            <button id="next-btn" class="button" onclick="nextStep()">ДАЛЕЕ</button>
        </div>
    </div>
  `,
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