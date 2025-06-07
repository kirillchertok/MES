function catchEmptyArray(array){
    try{
        if (!Array.isArray(array)) throw new Error("This is not array")

        if (array.length === 0) throw new Error("This array is empty")

        console.log(array)
    }
    catch (ex){
        console.log(ex.message)
    }
}

catchEmptyArray([]) // This array is empty