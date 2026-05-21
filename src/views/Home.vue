<template>
    <div class="header">
        <div id="intro">
            <img :src="Photo" alt="John Tang" id="profile-photo"/>
            <div id="name">
                <h1>Tang Yu John</h1>
                <h3>Business Analytics, Second Major in Economics · NUS</h3>
                <div id="description"> 
                <p>
                    Hi there! I'm John, a passionate business analytics 
                    student at NUS with a strong foundation in economics. 
                    I thrive on solving complex problems and uncovering 
                    insights through data analysis. With experience in Python, 
                    R, SQL, and Tableau, I enjoy transforming raw data 
                    into actionable strategies that drive business success. 
                    I'm eager to connect with like-minded professionals 
                    and explore opportunities in the world of data analytics.
                </p>
            </div>
            </div>
        </div>

        <div id="skills">
            <h2>Skills</h2>
            <div class="home-chips">
                <span class="chip accent">Data Analytics</span>
                <span class="chip accent">Machine Learning</span>
                <span class="chip accent">Business Analysis</span>
                <span class="chip accent">Product Management</span>
                <span class="chip">Python · SQL · R</span>
                <span class="chip">Tableau · Power BI</span>
                <span class="chip">TensorFlow · PyTorch</span> 
            </div>
        </div>

        <div id="socials">
            <a href="mailto:johntangyu@gmail.com" class="btn-primary">Get in Touch →</a>
            <p>Socials</p>
        </div>
       
        
    </div>
</template>


<script setup>
    import { ref, onMounted, computed } from 'vue'; 
    import Photo from '@/assets/john.jpeg';
</script>

<style>
.header {
    display: flex; 
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 5px 50px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 1000px;
    min-width: 100px;
    margin: 10px auto;
}

#intro {
    font-size: 1.5em;
    color: #1538a1;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    flex-direction: row;
}

#profile-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-left: 20px;
    object-fit: cover;
    padding: 20px 10px;
    margin-right: 60px;
}

#name {
    display: flex;
    justify-content: left;
    align-items: left;
    flex-direction: column;
    padding-left: 20px;
}

h3 {
    font-weight: normal;
    color: #555;
    font-family: 'Gareto', sans-serif;
    font-size: 0.65em;
    margin-top: -25px;
}

#description {
    margin-top: 20px;
    font-size: 0.9em;
    color: #333;
    line-height: 1.5;
    max-width: 600px;
    margin-top: -20px;
}

#socials{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#getintouch {
    padding: 10px 20px;
    margin: 20px auto;
    font-size: 1em;
    font-family: 'garet', sans-serif;
    color: #fff;
    background-color: #1538a1;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    transform: translateY(0);
    transition: transform 0.3s ease-out, background-color 0.3s ease-out, box-shadow 0.3s ease-out ;
}

#getintouch:hover {
    background-color: #0d297a;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.home-chips { 
    display:flex; 
    flex-wrap:wrap; 
    gap:.55rem; 
    margin-bottom:2.5rem; 
}

.chip {
    font-family:'JetBrains Mono',monospace; 
    font-size:.65rem;
    letter-spacing:.08em; 
    padding:.38rem .8rem;
    border:1px solid var(--border-strong); 
    border-radius:100px;
    color:var(--text-dim); 
    text-transform:uppercase;
}

.chip.accent { 
    border-color:var(--accent-border); 
    color:var(--accent); 
    background:var(--accent-soft); 
}

.hero-cta { 
    display:flex;
    gap:1rem; 
    flex-wrap:wrap; 
}

.btn-primary {
    display:inline-flex; 
    align-items:center; 
    gap:.5rem;
    padding:.82rem 1.5rem; 
    background:#1538a1; 
    color:#ffffff;
    font-family:'garet',monospace; 
    font-size:.72rem;
    letter-spacing:.1em; 
    text-transform:uppercase;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    cursor:pointer;
    text-decoration:none; 
    transition:all .2s; 
    font-weight:500;
}

.btn-primary:hover { 
    background:#0d297a; 
    transform:translateY(-1px); 
}


</style>