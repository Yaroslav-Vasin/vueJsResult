const App = {
  data() {
    return {
      title: 'List of notes',
      placeholderString: 'Enter the note title',
      inputValue: '',
      notes: ['Note 1', 'Note 2']
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    },
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    toUpperCase(item) {
      return item.toUpperCase()
    },
    removeNote(idx, event) {
      console.log(event, 'deleted');
      
      this.notes.splice(idx, 1)
    }
  },
  computed: {
    doubleCountComputed() {
      console.log('doubleCountComputed');
      
      return this.notes.length * 2
    }
  },
}

const app = Vue.createApp(App)

app.mount('#app')

// Vue.createApp(App).mount('#app')