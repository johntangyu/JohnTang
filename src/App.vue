<template>
  <nav ref="navRef">
    <router-link to="/">Home</router-link>
    <router-link to="/experiences">Experiences</router-link>
    <router-link to="/achievements">Achievements</router-link>
    <div class="nav-indicator" :style="indicatorStyle"></div>
  </nav>

  <main>
    <router-view /> 
  </main>
</template>

<script setup>
  import { ref, onMounted, watch, computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const navRef = ref(null);
  const indicatorStyle = ref({ width: '0px', left: '0px' });

  const updateIndicator = () => {
    setTimeout(() => {
      if (!navRef.value) return;

      const activeLink = navRef.value.querySelector('.router-link-active');
      
      if (activeLink) {
        indicatorStyle.value = {
          width: `${activeLink.offsetWidth}px`,
          left: `${activeLink.offsetLeft}px`,
        };
      }
    }, 50);
  };

  onMounted(updateIndicator);
  watch(() => route.path, updateIndicator);
</script>

<style scoped>
  nav {
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #f8f9fa;
    border-bottom: 1px solid #ddd;
    min-height: 3vh;
    text-align: center;
    padding: 10px 20px;

    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;

    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(170, 170, 170, 0.2);
    border-radius: 8px;
  }

  nav a {
    text-decoration: none;
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;
    text-align: center;
    z-index: 2;
    width: 100px;
    border: none;
    outline: none;
  }

  nav a.router-link-active {
    color: #4070ff; 
    border-bottom: 2px solid #4070ff;
    border-bottom: none;
    
  }

  nav a:hover {
    color: #4070ff;
    text-decoration: none;
  }

  .nav-indicator {
    position: absolute;
    bottom: 8px;
    height: 3px;
    background-color: #4070ff;
    border-radius: 2px;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); 
    z-index: 1;
  }
  main {
    padding-top: 100px;
  }

</style>
