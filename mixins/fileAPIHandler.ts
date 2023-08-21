import Component from 'vue-class-component'
import Vue from 'vue'

@Component
export default class FileAPIHandler extends Vue {
  toFormData (data: Object): FormData {
    const formData = new FormData()
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
    })
    return formData
  }

  readFile (file: Blob): Promise<FileReader['result']> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  inputFileOnChange (event: InputEvent): Promise<FileReader['result'] | null> {
    const newFile = (event.target as HTMLInputElement).files[0]
    return new Promise((resolve, reject) => {
      if (newFile) {
        this.readFile(newFile).then(resolve).catch(reject)
      } else {
        resolve(null)
      }
    })
  }
}
