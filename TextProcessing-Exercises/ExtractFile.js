function extractFile(string){

    string = string.split('\\')
    let fileName = string.pop()
        
    fileName = fileName.split('.')
    let extension = fileName.pop()
    fileName = fileName.join('.')
    
    console.log(`File name: ${fileName}\nFile extension: ${extension}`)
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')