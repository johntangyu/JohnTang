<template>
  <div class="section-wrap" id="projects">
    <div class="section-label">03 · Projects</div>
    <h2 class="section-title">Things I've built.</h2>

    <div class="projects-grid">
        <div
            v-for="(p, i) in projects" :key="p.id"
            class="project-card reveal" :class="'reveal-d' + (i % 2 + 1)"
            @click="openProject(p)"
        >
        <div class="project-visual">
            <img :src="p.visual" :alt="p.title" class="visual-image" />
            <div class="project-visual-overlay">View Project →</div>
        </div>
        <div class="project-body">
            <div class="project-num">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="project-title">{{ p.title }}</div>
            <div class="project-subtitle">{{ p.subtitle }}</div>
            <div class="project-summary">{{ p.summary }}</div>
            <div class="project-stack">
            <span v-for="t in p.tech" :key="t" class="stack-tag">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selected" class="project-modal-backdrop" @click.self="closeProject">
      <div class="project-modal-content animate-in">
        <button class="close-btn" @click="closeProject">✕</button>
        <div class="modal-header-hero">
            <img :src="selected.visual" :alt="selected.title" class="enlarge-visual" />
            <p class="modal-subtitle">{{ selected.subtitle }}</p>
            <h2>{{ selected.title }}</h2>
            
        </div>

        <div class="modal-body-content">
            <div class="modal-tech-stack">
                <span v-for="t in selected.tech" :key="t" class="modal-tag">{{ t }}</span>
            </div>
            <h3>Overview</h3>
            <p class="overview-txt">{{ selected.detail.overview }}</p>
          
            <h3>Key Features</h3>
            <ul class="features-list">
                <li v-for="(feature, idx) in selected.detail.features" :key="idx">
                  {{ feature }}
                </li>
            </ul>

            <h3>Impact & Outtakes</h3>
            <p class="impact-txt">{{ selected.detail.impact }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
    import Dietabetes from '@/assets/Dietabetes.png';
    import Spendwise from '@/assets/SpendWise.png';
    import Olist from '@/assets/Olist.png';
    import Recommender from '@/assets/Dunnhumby.png';

    export default {
        data() {
            return {
                activeSection: null,
                selected: null,
                projects: [
                    {
                        id:1,
                        title: 'Olist E-Commerce Analytics',
                        subtitle: 'Descriptive & Prescriptive Analytics Data Dashboard',
                        summary: 'End-to-end analytics solution on the Olist Brazilian e-commerce dataset — surfacing delivery bottlenecks, seller quality gaps, and revenue stagnation with actionable prescriptive recommendations via interactive Tableau dashboards.',
                        tech: ['Tableau', 'Python', 'SQL', 'Pandas', 'NLP'],
                        visual: Olist,
                        detail: {
                            overview: 'A comprehensive analytics dashboard built on the Olist public e-commerce dataset from Brazil, covering 100,000+ orders across multiple product categories and seller regions. The project spans descriptive analytics to understand current operational performance, and prescriptive analytics to surface targeted improvement actions.',
                            features: [
                            'Feature 1',
                            'Feature 2',
                            'Feature 3',
                            'Feature 4',
                            'Feature 5',
                            ],
                            impact: 'Description and insights',
                        },
                        },
                        {
                        id:2,
                        title: 'Retail Recommendation Model',
                        subtitle: 'Neural Collaborative Filtering & Multi-Architecture Benchmarking',
                        summary: 'Enigneered and benchmarked five recommendation architectures — NCF, Matrix Factorisation, MLP, Two-Tower, and Multi-Branch Two-Tower — on the Dunnhumby retail dataset to determine the optimal approach for personalised product suggestions.',
                        tech: ['Python', 'PyTorch', 'MLP', 'NCF', 'Matrix Factorisation', 'Two-Tower', 'Multi-Branch Two-Tower', 'Scikit-learn'],
                        visual: Recommender,
                        detail: {
                            overview: 'A machine learning research project benchmarking five recommendation architectures on the Dunnhumby retail dataset. The objective was to identify which architecture best personalises product suggestions for recurring and new retail shoppers, balancing predictive accuracy with computational efficiency. It paid closer attention to \'cold start\' performance for new users, incorporating additional user and item metadata into the Multi-Branch Two-Tower model.',
                            features: [
                            'Feature 1',
                            'Feature 2',
                            'Feature 3',
                            'Feature 4',
                            'Feature 5',
                            ],
                            impact: 'Description and insights',
                        },
                        },
                        {
                        id:3,
                        title: 'SpendWise',
                        subtitle: 'Grocery Price Intelligence & Community Deals Platform',
                        summary: 'A web application that identifies the cheapest grocery option for any shopping list across multiple supermarkets, tracks monthly household expenditure, and powers a community-driven deals sharing network.',
                        tech: ['Vue.js', 'Python', 'Firebase', 'Web Scraping', 'Data Visualisation'],
                        visual: Spendwise,
                        detail: {
                            overview: 'SpendWise is a full-stack web application designed to help households make smarter grocery decisions. Users input their shopping list and the app aggregates real-time prices across major supermarket chains to surface the cheapest purchase combination. A social layer allows users to share flash deals and community-discovered discounts.',
                            features: [
                            'Feature 1',
                            'Feature 2',
                            'Feature 3',
                            'Feature 4',
                            'Feature 5',
                            ],
                            impact: 'Description and insights',
                        },
                        },
                        {
                        id:4,
                        title: 'Dietabetes',
                        subtitle: 'Intelligent Blood Sugar Management & Prediction App',
                        summary: 'A patient-facing health app that tracks blood glucose levels, insulin dosages, and dietary intake, with predictive spike alerts generated from meal patterns and personal glucose history.',
                        tech: ['React Native', 'Python', 'LSTM', 'MongoDB', 'Data Visualisation'],
                        visual: Dietabetes,
                        detail: {
                            overview: 'Dietabetes is a mobile application for Type 1 and Type 2 diabetes patients. The core value proposition is proactive glucose control: giving patients predictive visibility over their blood sugar before spikes occur, rather than logging reactively after the fact. The app combines structured daily logging, trend visualisation, and ML-driven forecasting into a single application.',
                            features: [
                            'Feature 1',
                            'Feature 2',
                            'Feature 3',
                            'Feature 4',
                            'Feature 5',
                            ],
                            impact: 'Dietabetes reframes diabetes management from reactive recording to proactive control. The predictive alert system is designed to give patients meaningful lead time before spikes occur, enabling corrective action through activity, hydration, or dietary adjustment before the event occurs. This project reflects a core belief: the best technology meaningfully improves people\'s daily quality of life.',
                        },
                    },
                ],
            };
        },
        mounted() {
            this.setupSectionObserver();
            this.setupRevealObserver();
        },
        methods: {
            openProject(p) {
                this.selected = p;
                document.body.style.overflow = 'hidden';
            },

            closeProject() {
                this.selected = null;
                document.body.style.overflow = '';
            },
            setupSectionObserver() {
                const observer = new IntersectionObserver(entries => {
                    entries.forEach(e => {
                    if (e.isIntersecting) {
                        this.activeSection = e.target.id;
                    } else {
                        if (this.activeSection === 'projects') {
                        this.activeSection = null;
                        }
                    }
                    });
                }, { threshold: 0.35, rootMargin: '-80px 0px 0px 0px' });

                const el = document.getElementById('projects');
                if (el) observer.observe(el);
                },
                setupRevealObserver() {
                const observer = new IntersectionObserver(entries => {
                    entries.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.classList.add('visible');
                    }
                    });
                }, { threshold: 0.1 });

                setTimeout(() => {
                    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
                }, 150);
            }
        },
    };
</script>

<style scoped>
    .section-wrap {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 60px 20px;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin-top: 40px;
    }

    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .reveal.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .reveal-d1 { transition-delay: 0.1s; }
    .reveal-d2 { transition-delay: 0.25s; }

    .project-card {
        cursor: pointer;
        background: #ffffff;
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease;
    }

    .project-card:hover {
        transform: translateY(-6px);
    }

    .project-modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(10, 10, 15, 0.6);
        backdrop-filter: blur(8px);
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    .project-modal-content {
        background: #ffffff;
        width: 100%;
        max-width: 750px;
        max-height: 85vh;
        border-radius: 16px;
        overflow-y: auto;
        position: relative;
        box-shadow: 0 20px 50px rgba(0,0,0,0.3);
    }

    .project-visual{
        position: relative;
        width: 100%;
        height: 200px; 
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .project-visual-overlay {
        position:absolute; 
        inset:0; 
        background:rgba(0,0,0,.55);
        display:flex; 
        align-items:center; 
        justify-content:center;
        opacity:0; 
        transition:opacity .3s ease;
        font-family:'garet',sans-serif; font-size:0.75rem;
        letter-spacing:.15em; 
        text-transform:uppercase; 
        color:rgba(255, 255, 255, 0.9);
    }

    .project-card:hover .project-visual-overlay {
        opacity: 1;
    }

    .project-body {
        padding: 15px 20px 25px 20px ;
    }

    .visual-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0;
    }
    .animate-in {
        animation: modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes modalSlideUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        font-size: 18px;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 10;
        transition: background 0.2s;
    }

    .close-btn:hover {
        background: rgba(255, 255, 255, 0.4);
    }

    .modal-header-hero {
        padding: 50px 40px 40px 40px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: flex-start;
    }

    .modal-header-hero h2 {
        margin: 2px 0 -45px 0;
        font-size: 2.2rem;
        color: #16213e;

    }

    .modal-subtitle {
        color: #16213e;  
        margin-top: 50px;
        opacity: 0.85;
        font-size: 0.75rem;
        color: teal;
        letter-spacing:.15em; 
        font-family: 'garet', sans-serif;
        text-transform:uppercase; 
    }

    .enlarge-visual{
        width: fit-content;
        height: fit-content;
        max-height: 200px;
        object-fit: cover;
    }

    .modal-body-content {
        padding: 40px;
        color: #333;
    }

    .modal-body-content h3 {
        color: #16213e;
        margin-top: 25px;
        margin-bottom: 10px;
        font-size: 1.25rem;
        border-bottom: 2px solid #f0f2f5;
        padding-bottom: 5px;
        font-family: 'garet', sans-serif;
    }

    .overview-txt, .impact-txt {
        font-size: 0.95rem;
        line-height: 1.6;
        color: #4a5568;
    }

    .features-list {
        padding-left: 20px;
        line-height: 1.6;
        color: #4a5568;
    }

    .features-list li {
        margin-bottom: 8px;
    }

    .modal-tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .modal-tag {
        background: #f0f2f5;
        color: #4a70ff;
        padding: 6px 14px;
        border-radius: 10px;
        font-size: 0.85rem;
        font-weight: 600;
    }
</style>