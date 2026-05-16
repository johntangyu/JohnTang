<template>
  <nav ref="navRef">
    <a href="#home" @click.prevent="scrollTo('#home')">About</a>
    <a href="#experiences" @click.prevent="scrollTo('#experiences')">Experiences</a>
    <a href="#projects" @click.prevent="scrollTo('#projects')">Projects</a>
    <a href="#achievements" @click.prevent="scrollTo('#achievements')">Achievements</a>

    <div class="nav-indicator" :style="indicatorStyle"></div>
  </nav>

  <main>
    <section id="home" class="page-section">
      <Home />
    </section>
    <section id="experiences" class="page-section">
      <Experiences />
    </section>
    <section id="projects" class="page-section">
      <Projects />
    </section>
    <section id="achievements" class="page-section">
      <Achievements />
    </section>
    <section id="contact" class="page-section">
      <Contact />
    </section>
  </main>
</template>

<script setup>
  import { ref, onMounted, watch, computed, onUnmounted, nextTick} from 'vue';
  import Home from './views/Home.vue';
  import Experiences from './views/Experiences.vue';
  import Projects from './views/Projects.vue';
  import Achievements from './views/Achievements.vue';
  import Contact from './views/Contact.vue';

  const navRef = ref(null);
  const indicatorStyle = ref({ width: '0px', left: '0px' });
  const activeSection = ref('#home');

  let observer = null;

  const scrollTo = (selector) => {
    activeSection.value = selector;
    updateIndicator(); 

    const element = document.querySelector(selector);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, 
        behavior: 'smooth'
      });
    }
  };

  const updateIndicator = () => {
    if (!navRef.value) return;

    const links = navRef.value.querySelectorAll('a');
    let activeLink = null;
    
    links.forEach(link => {
      if (link.getAttribute('href') === activeSection.value) {
        activeLink = link;
      }
    });

    if (activeLink) {
      indicatorStyle.value = {
        width: `${activeLink.offsetWidth}px`,
        left: `${activeLink.offsetLeft}px`,
      };
    } else {
      indicatorStyle.value = { width: '0px', left: '0px' };
    }
  };

  const handleScroll = () => {
    if (isManualScrolling) return;

    const sections = document.querySelectorAll('.page-section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        const id = `#${section.getAttribute('id')}`;
        if (activeSection.value !== id) {
          activeSection.value = id;
          updateIndicator();
        }
      }
    });
  };

  onMounted(async () => {
    await nextTick();

    if (document.fonts) {
      await document.fonts.ready;
    }
    
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0
    };

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.getAttribute('id')}`;
          activeSection.value = id;
          updateIndicator();
        }
      });
    }, observerOptions);

    document.querySelectorAll('.page-section').forEach(section => {
      observer.observe(section);
    });
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
    window.removeEventListener('resize', updateIndicator);
  });
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
    font-family:'Cormorant Garamond',serif;
    font-weight: bold;
    text-align: center;
    z-index: 2;
    width: 100px;
    border: none;
    outline: none;
    transition: color 0.3s ease;
  }

  nav a.router-link-active {
    color: #4070ff; 
    border-bottom: 2px solid #4070ff;
    border-bottom: none;
    
  }

  nav a.active {
    color: #4070ff; 
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

  .page-section {
    min-height: calc(100vh - 80px);
    width: 100%;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #eee;  
  }

  .page-section > * {
    width: 100%;
    max-width: 1000px;
  }
  html {
    scroll-behavior: smooth;
  }
</style>
