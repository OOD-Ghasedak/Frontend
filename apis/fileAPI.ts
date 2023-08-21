
export default interface FileAPI {
  toFormData(data: Object): FormData;
  getInputFile(event: InputEvent): File;
}

class ConcreteFileAPI implements FileAPI {
  toFormData (data: Object): FormData {
    const formData = new FormData()
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
    })
    return formData
  }

  getInputFile (event: InputEvent): File {
    return (event.target as HTMLInputElement).files[0]
  }
}

export const concreteFileAPI = new ConcreteFileAPI()
