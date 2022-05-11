<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <!-- <RouterLink to="/">Home</RouterLink> -->
                <!-- <RouterLink to="/about">About</RouterLink>           -->
                <li class="nav-item">
                    <RouterLink to="/" class="nav-link">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/about" class="nav-link">About</RouterLink>
                </li>
            </ul>
            <span>cart</span>
            </div>
        </div>
    </nav>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    name:'Footer'
})
</script>

<style>

</style>