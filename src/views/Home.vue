<template>
<div class="home">
    <p class="tituloUsuarios">Lista de usuarios</p>
    <ul class="contenedor-usuarios">
        <li class="usuario usuario-encabezado">
            <div class="usuario-id box">ID</div>
            <div class="usuario-user box">Usuario</div>
            <div class="usuario-nombre box">Nombre</div>
            <div class="usuario-boxBoton box">VER</div>
        </li>
        <li class="usuario" v-for="user in Usuarios" :key="user.id">
            <div class="usuario-id box">{{ user.id }}</div>
            <div class="usuario-user box">{{ user.username }}</div>
            <div class="usuario-nombre box">{{ user.name }}</div>
            <div class="usuario-boxBoton box">
                <router-link :to="{
                  name:'Contacto',
                  params:{
                    idUser:user.id,
                  },
                }">
                    <button class="usuario-boton">
                        <img class="usuario-botonImg" src="../assets/ojo.svg" alt="" />
                    </button>
                </router-link>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import {
    mapActions,
    mapState
} from "vuex";

export default {
    name: "Home",
    data() {
        return {
            usuarios: [],
        };
    },
    components: {
        HelloWorld,
    },
    methods: {
        ...mapActions(["getUsuariosAction"]),
    },
    computed: {
        ...mapState(["Usuarios"]),
    },
    created() {
        this.getUsuariosAction();
    },
};
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.contenedor-usuarios {
    max-width: 500px;
    min-width: 300px;
    margin: auto;
}

.tituloUsuarios {
    font-size: 20px;
    color: #a7a7a7;
    text-decoration: underline;
}

.usuario {
    height: 50px;

    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: #b7b7b7 2px solid;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    &-encabezado {
        background-color: #222222;
        color: #d2b694;
        font-size: 22px;
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    }

    &-id {
        width: 10%;
        height: 100%;
    }

    &-nombre,
    &-user {
        width: 30%;
        height: 100%;
    }

    &-boxBoton {
        width: 10%;
        height: 100%;
    }

    &-boton {
        height: 30px;
        width: 30px;
        border-radius: 50%;
    }

    &-botonImg {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
}

.box {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
