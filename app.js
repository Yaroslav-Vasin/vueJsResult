const App = {
  data() {
    return {
      title: 'List of notes',
      placeholderString: 'Enter the note title',
      inputValue: '',
      notes: ['Note 1', 'Note 2'],
      modalTitle: 'Change note',
      valueToChange: "",
      currentNoteIndex: null,
      modalOpen: false,
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
      this.notes.splice(idx, 1)
    },
    changeNote(idx) {
      this.currentNoteIndex = idx
      this.modalOpen = true
    },
    changeNoteInput(event) {
      this.valueToChange = event.target.value
    },
    submitChangeNote() {
      this.notes[this.currentNoteIndex] = this.valueToChange
      this.valueToChange = ''
      this.currentNoteIndex = null
      this.modalOpen = false
    },
    closeModal() {
      this.modalOpen = false
    },
  },
  computed: {
    doubleCountComputed() {      
      return this.notes.length * 2
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = ''
      }

      console.log('inputValue', value);
    },
    valueToChange(value) {
      console.log('valueToChange', value);
    },
  }
}

const app = Vue.createApp(App)

app.mount('#app')

// Vue.createApp(App).mount('#app')