<template>
<h1>Datos del Usuario</h1>
<div class="Usuario">
    <div class="box">

        <div class=" box10 texto">ID:</div>
        <div class=" box10 dato">{{ User.id }}</div>

        <div class=" box20 texto">Nombre:</div>
        <div class=" box20 dato">{{ User.name }}</div>

        <div class=" box20 texto">Username:</div>
        <div class=" box20 dato">{{ User.username }}</div>
    </div>
    <div class="box">
        <div class=" texto box20">email:</div>
        <div class=" dato box80">{{ User.email }}</div>
    </div>
    <div class="box">
        <div class=" boxTitulo">Address :</div>
        <div class=" texto box10">street:</div>
        <div class=" dato box15">{{ User.address.street }}</div>
        <div class=" texto box10">suite:</div>
        <div class=" dato box15">{{ User.address.suite }}</div>
        <div class=" texto box10">city:</div>
        <div class=" dato box15">{{ User.address.city }}</div>
        <div class=" texto box10">zipcode:</div>
        <div class=" dato box15">{{ User.address.zipcode }}</div>
    </div>
    <div class="box">
        <div class=" texto box20">phone:</div>
        <div class=" dato box80">{{ User.phone }}</div>
    </div>
    <div class="box">
        <div class=" texto box20">website:</div>
        <div class=" dato box80">{{ User.website }}</div>
    </div>
    <div class="box">
        <div class=" boxTitulo">company :</div>
        <div class=" texto box10">name:</div>
        <div class=" dato box20">{{ User.company.name }}</div>
        <div class=" texto box15">catchPhrase:</div>
        <div class=" dato box20">{{ User.company.catchPhrase }}</div>
        <div class=" texto box5">bs:</div>
        <div class=" dato box20">{{ User.company.bs }}</div>
    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapState
} from "vuex";

export default {
    data() {
        return {
            id: this.$route.params.idUser,
        };
    },
    methods: {
        ...mapActions(["getUserAction"]),
    },
    computed: {
        ...mapState(["User"]),
    },
    created() {
        this.getUserAction(this.id);
    },
};
</script>

<style lang="scss" scoped>
.Usuario {
    width: 750px;
    margin: auto;
}

h1 {
    margin-bottom: 50px;
}

.box {
    display: flex;
    flex-direction: row;
    height: 50px;
    border-bottom: #b7b7b7 2px solid;
    align-items: center;
    margin: 0 0 20px 0;
    position: relative;

    &5 {
        width: 5%;
    }

    &10 {
        width: 10%;
    }

    &15 {
        width: 15%;
    }

    &20 {
        width: 20%;
    }

    &30 {
        width: 30%;
    }

    &40 {
        width: 40%;
    }

    &50 {
        width: 50%;
    }

    &60 {
        width: 60%;
    }

    &70 {
        width: 70%;
    }

    &80 {
        width: 80%;
    }

    &90 {
        width: 90%;
    }

    &100 {
        width: 100%;
    }
}

.boxTitulo {
    position: absolute;
    top: -7.5px;
    color: slategrey;
    font-weight: 400;

}

.dato {
    font-size: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: left;
    margin-left: 10px;
}

.texto {
    border-right: #b7b7b7 1px solid;
    font-size: 10px;
    font-weight: 400;
    display: flex;
    justify-content: left;
    align-items: left;
}
</style>
