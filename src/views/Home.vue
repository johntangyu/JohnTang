<template>
  <div class="section-wrap">
    <header class="hero-container">
      
      <div class="bio-grid">
        <div class="profile-image-wrapper">
          <img :src="Photo" alt="Tang Yu John Profile" class="profile-photo"/>
        </div>
        
        <div class="intro-content">
          <span class="hero-greeting">Hi there!</span>
          <h1 class="hero-name">Tang Yu John</h1>
          <h2 class="hero-subtitle">
            <div class="institution">National University of Singapore</div>
            <strong>Business Analytics, Second Major in Economics</strong> 
            
          </h2>
          
          
          <div class="hero-description"> 
            <p>
                I'm John, a Year 3 undergrad at NUS with a strong interest in data-driven product and 
                business decision-making. I enjoy solving real-world problems by combining analytics, 
                experimentation, and product thinking to build something that create measureable impact. 
                Part of my past projects include a live grocery comparison platform and a recommendation 
                model trained on 1.2 M+ retail transaction records. As a teaching assistant, I have also 
                developed the ability to communicate analytical concepts clearly across varying technical 
                backgrounds. I am currently seeking opportunities in analytics where data supports strategic 
                and operational decisions. 
            </p>
          </div>
        </div>
      </div>

      <div class="skills-block">
        <h3 class="skills-heading">Skills</h3>
        <div class="home-chips">
          <span class="chip accent">Data Analytics</span>
          <span class="chip accent">Machine Learning</span>
          <span class="chip accent">Business Analysis</span>
          <span class="chip accent">Statistical Modelling</span>
          <span class="chip accent">Data Visualisation</span>
          <span class="chip">Python</span>
          <span class="chip">SQL</span>
          <span class="chip">R</span>
          <span class="chip">Tableau</span>
          <span class="chip">Java</span>
          <span class="chip">Excel</span>
        </div>
      </div>

      <div class="hero-actions-row">
        <a href="mailto:johntangyu@gmail.com" class="btn-primary">
          Get in Touch 
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
        
        <div class="social-dock">
          <a href="https://linkedin.com/in/tang-yu-john" target="_blank" rel="noopener" class="social-icon-btn" aria-label="LinkedIn profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          
          <a href="https://github.com/johntangyu" target="_blank" rel="noopener" class="social-icon-btn" aria-label="GitHub profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          
        </div>
      </div>

    </header>
  </div>
</template>

<script setup>
    import Photo from '@/assets/john.jpeg';
</script>

<style scoped>
    .section-wrap {
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
    }

    .hero-container {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        width: 100%;
    }

    .bio-grid {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: flex-start;
    }

    @media (min-width: 850px) {
    .bio-grid {
        flex-direction: row-reverse; 
        justify-content: space-between;
        align-items: center;
        gap: 4rem;
    }
    }

    .profile-image-wrapper {
    flex-shrink: 0;
    margin: 0 auto;
    }

    @media (min-width: 850px) {
    .profile-image-wrapper {
        margin: 0;
    }
    }

    .profile-photo {
        width: 18rem;
        height: 18rem;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid #ffffff;
        box-shadow: 0 10px 25px rgba(21, 56, 161, 0.12);
        transition: transform 0.3s ease;
    }

    .intro-content {
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .hero-greeting {
        font-family: 'garet', sans-serif;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: #4070ff;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    .hero-name {
        font-size: 3.25rem;
        font-weight: 800;
        letter-spacing: -0.03em;
        color: #111827;
        margin: 0 0 0.5rem 0;
        line-height: 1.1;
    }

    .hero-subtitle {
        font-family: 'garet', sans-serif;
        font-size: 1.1rem;
        font-weight: 400;
        color: #4b5563;
        margin: 0 0 1.5rem 0;
        line-height: 1.4;
    }

    .hero-subtitle strong {
        color: #1538a1;
        font-weight: 600;
    }

    .hero-subtitle .institution {
        color: #6b7280;
        margin-bottom: 2px;
    }

    .hero-description p {
        font-size: 1.05rem;
        line-height: 1.65;
        color: #374151;
        margin: 0;
        max-width: 70ch; 
    }

    .skills-block {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .skills-heading {
        font-family: 'garet', sans-serif;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #6b7280;
        margin: 0;
        font-weight: 700;
    }

    .home-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .chip {
        font-family: 'garet', monospace;
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        padding: 0.4rem 0.85rem;
        border: 1px solid #e5e7eb;
        border-radius: 80px;
        color: #4b5563;
        background: #ffffff;
        text-transform: uppercase;
        transition: all 0.2s ease;
        }

    .chip.accent {
        background: #eff6ff;
        border-color: #bfdbfe;
        color: #1538a1;
    }

    .chip:hover {
        border-color: #9ca3af;
        color: #111827;
    }

    .hero-actions-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 2rem;
        margin-top: 0.3rem;
        padding-top: 1.5rem;
        border-top: 1px solid #f3f4f6;
    }

    .btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.85rem 1.75rem;
        background: #1538a1;
        color: #ffffff;
        font-family: 'garet', sans-serif;
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        border: none;
        border-radius: 8px;
        box-shadow: 0 4px 14px rgba(21, 56, 161, 0.2);
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .btn-primary:hover {
        background: #0d297a;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(21, 56, 161, 0.3);
    }

    .social-dock {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .social-icon-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        color: #4b5563;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        text-decoration: none;
        transition: all 0.2s ease;
    }

    .social-icon-btn:hover {
        color: #1538a1;
        background: #eff6ff;
        border-color: #bfdbfe;
        transform: translateY(-2px);
    }
</style>