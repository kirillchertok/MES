function generateId(length){
    return Array.from({ length }, () => 
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'[
          Math.floor(Math.random() * 62)
        ]
      ).join('')
}

console.log(generateId(8)) // epSFONB9