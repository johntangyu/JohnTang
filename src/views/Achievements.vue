<template>
    <div class="section-wrap">
        <div class="section-label">04 · Achievements</div>
        <div class="section-title">Competitions and Awards.</div>
        <div class="ach-grid">
            <div v-for="(a,i) in achievements" :key="a.id" class="ach-card reveal" :class="'reveal-d'+(i%3+1)">
            <div class="ach-icon">{{ a.icon }}</div>
            <div class="ach-category">{{ a.category }}</div>
            <div class="ach-title">{{ a.title }}</div>
            <div class="ach-desc">{{ a.desc }}</div>
            </div>
        </div>
        <div class="contact-row">
            <div>
            <h2>Let's connect.</h2>
            <p>Open to internship, full-time opportunities and interesting conversations.</p>
            </div>
            <div class="contact-btns">
            <a href="mailto:johntangyu@gmail.com" class="btn-primary">Email Me →</a>
            <a href="https://linkedin.com/in/tang-yu-john" target="_blank" class="btn-secondary">LinkedIn</a>
            <a href="https://github.com/johntangyu" target="_blank" class="btn-secondary">GitHub</a>
            </div>
        </div> 
    </div>
</template>


<script>
    export default {
        data() {
            return {
                activeSection: null,
                selected: null,
                achievements: [
                    {
                        id:1, icon:'🎓', category:'Academic',
                        title: 'Scholarship',
                        desc: 'NUS Merit Scholarship',
                    },
                    
                    {
                        id:2, icon:'🏆', category:'Competition',
                        title: 'Hackathon / Datathon',
                        desc: 'NUS ISE Micron Business Analytics Case Competition 3rd Place, NUS IDP Makeathon Finalist, NUS SEE Indonesia Business Case Competition 2nd Place, SGX NUS Sustainability Case Competition Participant, APECS Private Equity Case Competition Participant',
                    },
                        
                    {
                        id:3, icon:'🌐', category:'Leadership',
                        title: 'Student Organisation Role',
                        desc: 'RVRC Sports Director, Hwa Chong Green Council President, RVRC Achievement Awards: Leadership and Community Engagement',
                    },
                        
                    {
                        id:4, icon:'📜', category:'Certification', 
                        title: 'Professional Certifications',
                        desc: 'AWS Cloud Practitioner, Google Analytics, Tableau Desktop Specialist, or other relevant certs.',
                    },
                        
                    {
                        id:5, icon:'🤝', category:'Community',
                        title: 'Volunteer Work',
                        desc: 'Project Vision: Community Project in partnership with Singapore Association for the Visually Handicapped (SAVH)',
                    },
                ],
                }

            }
    }
</script>

<style scoped>
    .ach-grid { 
        display:grid; 
        grid-template-columns:repeat(3,1fr); 
        gap:1.2rem; 
    }

     .section-title {
        font-size: 2.25rem; 
        letter-spacing: .08em; 
        color: var(--text-muted); 
        margin-bottom: 1.75rem;
        padding-bottom: .75rem; 
    }

    .section-label {
        font-family: 'garet', sans-serif; 
        font-size: .85rem;
        letter-spacing: .18em; 
        text-transform: uppercase;
        color: #4070ff;
        margin-bottom: 1.25rem;
        border-bottom: 1px solid var(--border);
        width: 100%;
    }

    .ach-card {
        padding:1.5rem; 
        border:1px solid var(--border); 
        border-radius:var(--radius);
        background:var(--bg-card); 
        transition:all .3s ease;
    }

    .ach-card:hover { 
        border-color:var(--border-strong); 
        background:var(--bg-card-hover); 
    }

    .ach-icon { 
        font-size:1.6rem; 
        margin-bottom:.7rem; 
    }

    .ach-category {
        font-family:'garet',monospace; 
        font-size:.6rem;
        letter-spacing:.15em; 
        text-transform:uppercase; 
        color:var(--teal); 
        margin-bottom:.45rem;
    }

    .ach-title { 
        font-family:'garet',serif; 
        font-size:1.05rem; 
        font-weight:600; 
        margin-bottom:.4rem; 
    }

    .ach-desc { 
        font-size:.825rem; 
        color:var(--text-dim); 
        line-height:1.65; 
    }

</style>