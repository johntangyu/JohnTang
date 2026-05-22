<template>
  <div class="section-wrap">
    <main class="main-section">
      <div class="title-label">
        <a href="#achievements">04 · Achievements</a>
      </div>
      
      <div class="header-inline">
        <h2 class="section-title">Beyond the Classroom.</h2>
      </div>
      
      <div class="achievements-grid-2col">
    
        <div class="grid-card full-width reveal reveal-d3">
          <h3 class="category-title">Competitions</h3>
          <div class="competitions-subgrid">
            <div class="item-compact font-sm" v-for="ach in competitions" :key="ach.title">
              <div class="item-header">
                <span class="ach-title-dense">{{ ach.title }}</span>
                <span v-if="ach.subtitle" class="item-badge text-nowrap" :class="ach.badgeClass">
                  {{ ach.subtitle }}
                </span>
              </div>
              <p v-if="ach.desc" class="ach-desc-mini">{{ ach.desc }}</p>
            </div>
          </div>
        </div>

        <div class="grid-card reveal reveal-d1">
          <h3 class="category-title">Academic & Certifications</h3>
          <div class="item-compact" v-for="ach in academic" :key="ach.title">
            <div class="item-header">
              <span class="ach-title">{{ ach.title }}</span>
              <span class="item-badge primary">{{ ach.period }}</span>
            </div>
            <p v-if="ach.desc" class="ach-desc-mini">{{ ach.desc }}</p>
          </div>
          
          <div class="item-compact margin-top" v-for="ach in certification" :key="ach.title">
            <span class="ach-title">{{ ach.title }}</span>
            <p class="ach-desc-mini">{{ ach.desc }}</p>
          </div>
        </div>

        <div class="grid-card reveal reveal-d2">
          <h3 class="category-title">Leadership & Volunteering</h3>
          <div class="item-compact" v-for="ach in leadership" :key="ach.title">
            <span class="ach-title">{{ ach.title }}</span>
            <p v-if="ach.desc" class="ach-desc-mini">{{ ach.desc }}</p>
          </div>
          
          <div class="item-compact margin-top" v-for="ach in volunteer" :key="ach.title">
            <span class="ach-title">{{ ach.title }}</span>
            <p v-if="ach.desc" class="ach-desc-mini">{{ ach.desc }}</p>
          </div>
        </div>

        

      </div>
    </main>

    <section class="contact-banner">
      <div class="contact-text">
        <h2>Let's connect.</h2>
        <p>Open to internship, full-time roles, and interesting conversations.</p>
      </div>
      <div class="contact-btns">
        <a href="mailto:johntangyu@gmail.com" class="btn-primary">Email</a>
        <a href="https://linkedin.com/in/tang-yu-john" target="_blank" rel="noopener" class="btn-secondary">LinkedIn</a>
        <a href="https://github.com/johntangyu" target="_blank" rel="noopener" class="btn-secondary">GitHub</a>
      </div>
    </section> 
  </div>
</template>

<script>
    export default {
    name: 'AchievementsSection',
    data() {
        return {
        academic: [
            {
            title: 'NUS Merit Scholarship',
            period: '2024 - Pres.',
            desc: 'Full undergraduate scholarship with allowance.'
            },
        ],
        competitions: [
            { 
            title: 'NUS ISE Micron Business Analytics Case Competition', 
            subtitle: '3rd Place', 
            badgeClass: 'podium',
            desc: 'Applied predictive analytics to improve supply chain efficiency and production efficiency, reducing wastage and improving profit margins.' 
            },
            { 
            title: 'NUS SEE Indonesia Metland Business Case Competition', 
            subtitle: '2nd Place', 
            badgeClass: 'podium',
            desc: 'Formulated sustainable expansion strategies, targetting the local Indonesian market and current developments by Metland.'
            },
            { 
            title: 'NUS IDP Makeathon', 
            subtitle: 'Finalist', 
            badgeClass: 'podium',
            desc: 'Designed and prototyped a smart, sustainable laundry solution, proposing a scalable and cost-effective system to improve convenience through a hands-free user experience.'
            },
            { 
            title: 'NUS Datathon', 
            subtitle: 'Participant', 
            badgeClass: 'participant',
            desc: 'Conducted financial and valuation analysis on Nextracker to assess investment viability, developing growth projections and evaluating potential exit strategies.'
            },
            { 
            title: 'APECS Private Equity Case Competition', 
            subtitle: 'Participant', 
            badgeClass: 'participant',
            desc: 'Conducted financial analysis on Nextracker and projections to reach an investment decision alongside exit strategies available for the firm.' 
            }
        ],
        leadership: [
            { 
                title: 'RVRC Achievement Awards: Leadership, Community Engagement',
                desc: 'Awarded in recognition of leadership contributions, community engagement, and sustained impact through student-led initiatives.' 
            },
            { 
                title: 'RVRC Sports Director', 
                desc: 'Planned and executed residential and university-wide sports initiatives, coordinating across stakeholders to strengthen student engagement and foster an active sporting culture among 500+ residents.' 
            },
            { 
                title: 'Hwa Chong Green Council President', 
                desc: 'Led school-wide sustainability initiatives, driving environmental awareness and promoting sustainable practices among students and staff through advocacy and community engagement.' 
            }
        ],
        certification: [
            {
            title: 'NUS Orbital Programme – Apollo',
            desc: 'Developed “Dietabetes”, a mobile application for blood sugar tracking and predictive monitoring, translating health data into accessible user-facing insights.',
            },
        ],
        volunteer: [
            {
            title: 'Project Vision (SAVH)',
            desc: 'Spearheaded a student-led community project supporting the Singapore Association of the Visually Handicapped (SAVH), driving fundraising and awareness efforts to promote social inclusion and community empathy for the visually handicapped community.'
            },
        ],
        };
    }
    }
</script>

<style>
    .section-wrap {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        box-sizing: border-box;
        max-width:1200px;
    }

    .title-label a {
        font-family: 'garet', sans-serif;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: #4070ff;
        text-decoration: none;
        font-weight: 600;
    }

    .header-inline {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 1.5rem;
    }

    .section-title {
        font-size: 2.2rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #111827;
        margin: 0.5rem 0 0 0;
    }

    .achievements-grid-2col {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.25rem;
        margin-bottom: 3rem;
    }

    @media (min-width: 850px) {
    .achievements-grid-2col {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 3rem;
    }

    .full-width {
        grid-column: span 2;
    }
    }

    .grid-card {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
    }

    .category-title {
        font-family: 'garet', monospace;
        text-transform: uppercase;
        color: #0037dd;
        letter-spacing: 0.08rem;
        font-size: 0.8rem;
        font-weight: 700;
        margin: 0 0 1rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #f3f4f6;
    }

    @media (min-width: 650px) {
    .competitions-subgrid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0 1.5rem;
    }
    }

    .item-compact {
        padding: 0.6rem 0;
        border-bottom: 1px dashed #f3f4f6;
        display: flex;
        flex-direction: column;
    }

    .item-compact:last-child {
        border-bottom: none;
    }

    .margin-top {
        margin-top: 0.75rem;
        padding-top: 0.75rem;
        border-top: 1px solid #e5e7eb;
    }

    .item-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
        width: 100%;
    }

    .ach-title {
        font-size: 0.95rem;
        font-weight: 600;
        font-family: 'garet', sans-serif;
        color: #1f2937;
        line-height: 1.3;
    }

    .ach-title-dense {
        font-size: 0.9rem;
        font-weight: 600;
        font-family: 'garet', sans-serif;
        color: #1f2937;
        line-height: 1.3;
    }

    .ach-desc-mini {
        font-size: 0.82rem;
        line-height: 1.45;
        color: #4b5563;
        margin: 0.25rem 0 0 0;
        max-width: 83%; 
        align-self: flex-start;
    }

    .item-badge {
        display: inline-flex;
        font-size: 0.7rem;
        font-weight: 600;
        padding: 0.15rem 0.5rem;
        border-radius: 4px;
    }
    .item-badge.primary { 
        background: #eff6ff; 
        color: #2563eb; 
    }

    .item-badge.podium { 
        background: #eff6ff; 
        color: #2563eb; 
    }

    .item-badge.participant { 
        background: #eff6ff; 
        color: #4b5563; 
    }

    .text-nowrap { 
        white-space: nowrap; 
    }

    .contact-banner {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 1.5rem;
        background: #f9fafb;
        border-radius: 12px;
        border: 1px solid #e5e7eb;
        align-items: center;
        text-align: center;
    }

    @media (min-width: 768px) {
    .contact-banner {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }
    }

    .contact-text h2 { 
        font-size: 1.5rem; 
        font-weight: 700; 
        margin: 0; 
    }

    .contact-text p { 
        color: #4b5563; 
        font-size: 0.9rem; 
        margin: 0.25rem 0 0 0; 
    }

    .contact-btns { 
        display: flex; 
        gap: 0.75rem; 
    }

    .btn-primary, .btn-secondary {
        padding: 0.5rem 1rem;
        font-size: 0.88rem;
        font-weight: 500;
        border-radius: 6px;
        text-decoration: none;
        transition: all 0.2s;
    }

    .btn-primary { 
        background: #0037dd; 
        color: white; 
    }

    .btn-primary:hover { 
        background: #002cb3;
    }

    .btn-secondary { 
        background: white; 
        color: #374151;
        border: 1px solid #d1d5db; 
    }

    .btn-secondary:hover { 
        background: #f9fafb; 
    }
</style>