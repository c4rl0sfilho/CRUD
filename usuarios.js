'use srict'

async function ListarUsuarios(){
    const url = 'http://10.107.140.2:8080/usuarios/'
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data

}

async function CadastrarUsuarios(usuario){
    const url = 'http://10.107.140.2:8080/usuarios/'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok

}
async function atualizarUsuario(usuario){
    const url = `http://10.107.140.2:8080/usuarios/${usuario.id}`
    const options =  {
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(usuario)
    }

    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok

}
async function  deletarUsuario(id){
    const url = `http://10.107.140.2:8080/usuarios/${id}`
    const options = {
        method:'DELETE'
    }

    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}

//Area de teste

//Função 1 :
// ListarUsuarios()

//Função 2:
// const usuarioNovo = {
//     nome: 'Carlos',
//     email: 'carlos@gmail.com'
// }

// CadastrarUsuarios(usuarioNovo)

//Função 3:
// const usuarioAtualizado = {
//     id : '115',
//     nome: 'Carlos',
//     email: 'carlos@gmail.com'
// }

// atualizarUsuario(usuarioAtualizado)

//Função 4:
// deletarUsuario(42)