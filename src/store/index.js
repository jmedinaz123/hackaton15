import { createStore } from 'vuex'

export default createStore({
  state: {
    Usuarios:[],
    User:{
      id: "",
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: ""
        }
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: ""
      }
    },
  },
  mutations: {
    getUsuariosMutation(state,payload){
      state.Usuarios=payload
    },
    getUserMutation(state,payload){
      state.User=payload
    }
  },
  actions: {
    async getUsuariosAction({commit}){
      
        const info = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await info.json();
        console.log(data)
        
        commit('getUsuariosMutation',data)
    },
    async getUserAction({commit},id){
      
      const info = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await info.json();
      data.forEach(element => {
        if (element.id==id) {
          console.log(element)
          commit('getUserMutation',element)
        }  
      });
      
      
      
  }
  },
  modules: {
  }
})
