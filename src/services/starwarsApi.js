// export const getAllPeople = async () => {
//         try {
//             const response = await fetch("https://swapi.tech/api/people")
//             if (response.ok) {
//                 const data = await response.json()
//                 let arrAux = []
//                 for(let item of data.results){
//                     const responsePeople = await fetch(item.url)
//                     const dataPeople = await responsePeople.json()
//                     arrAux.push(dataPeople.result)
//                 }

//                 return arrAux
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }
export const getAllPeople = async () => {
        try {
            const response = await fetch("https://swapi.tech/api/people")
            const data = await response.json()

            const arrAux = await Promise.all(
                data.results.map(async (item)=>{
                    const res = await fetch(item.url)
                    const detail = await res.json()
                    return detail.result
                })
            )
            return arrAux

           
        } catch (error) {
            console.log(error)
        }
    }