// import React, {useState, initialState} from "react"

const host = 'http://localhost:4000/api/'

export async function getall(slug) {
    const res = await fetch(`${host}${slug}`)
    console.log("res:",res)
    //console.log("${host}${slug}:",`${host}${slug}`)
    const json = await res.json ()
    return json
}

// export async function getByCategory(slug){
//     const res = await fetch(`${host}${slug}`)
//     const data = await res.json()
//     console.log("data from get by category",data)

// }

// export async function addGrop(){
//     const [state, setstate] = useState(initialState)
//     const requestOptions = {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React PUT Request Example' })
//     };
//     fetch(`${host}//createGroup`, requestOptions)
//         .then(response => response.json())
//         .then(data => this.setState({ postId: data.id }));
// }
