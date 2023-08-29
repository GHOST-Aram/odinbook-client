export const formatName = (string) =>{
    if(string.includes('_')){
        const splitArr = string.split('_')
        const capitalized = splitArr.map(
            str => str.charAt(0).toUpperCase()+str.slice(1)
        )

        return capitalized.join(' ')
    }
    return string.charAt(0).toUpperCase()+string.slice(1)
}