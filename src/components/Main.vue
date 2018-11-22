<template>
    <div>
    <Navbar/>
    <br>
    <br>
    <v-content>
        <router-view></router-view>
    </v-content>
    </div>
</template>

<script>

import Navbar from './Navbar.vue'

export default {
    name: 'main',
    components: {
        Navbar
    }
}
</script>