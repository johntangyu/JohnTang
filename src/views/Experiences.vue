<template>
  <div class="section-wrap">
    <main class="main-section">
      <div class="title-label">
        <a href="#experiences">02 · Experiences</a>
      </div>
      
      <div class="header-inline">
        <h2 class="section-title">Experience Highlights.</h2>
      </div>
      
     <div class="experiences-timeline-list">
        <div 
          v-for="(exp, i) in workExp" 
          :key="exp.id || i" 
          class="exp-row-item reveal" 
          :class="'reveal-d' + (i + 1)"
        >

          <div class="exp-right-column">
            <span class="exp-period">{{ exp.period }}</span>
            <h3 class="exp-title">{{ exp.title }}</h3>
            <span class="exp-company">{{ exp.company }}</span>
            <p class="exp-desc">{{ exp.desc }}</p>
            <div class="exp-tags">
              <span 
                v-for="(tag, tagIndex) in exp.tags" 
                :key="exp.id + '-tag-' + tagIndex" 
                class="exp-tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
    export default {
    name: 'ExperiencesSection',
    data() {
        return {
        workExp: [
            {
            id: 1,
            title: 'BT1101 Teaching Assistant',
            company: 'NUS Information Systems and Analytics · Introduction to Business Analytics',
            period: 'Aug 2025 - May 2026',
            desc: 'Supported undergraduates in statistical modelling, machine learning, data visualisation, and analytical reasoning in R, including techniques such as logistic regression and k-means clustering. Strengthened the ability to translate complex quantitative outputs into clear, accessible, and decision-oriented insights for diverse audiences.',
            tags: ['R Programming', 'Statistical Modelling', 'Data Visualisation', 'Descriptive Analytics', 'Predictive Analytics', 'Communication'],
            },
            {
            id: 2,
            title: 'Community & Partnerships Intern',
            company: 'BLOCK71 · Startup Ecosystem',
            period: 'Jul - Dec 2025',
            desc: 'Supported cross-border partnerships and ecosystem programmes involving both local and foreign stakeholders. Designed and executed engagement initiatives to improve awareness and participation in entrepreneurship and innovation activities.',
            tags: ['Product Thinking', 'Stakeholder Management', 'Startup Ecosystem', 'Community Building'],
            },
            {
            id: 3,
            title: 'Geography & History Teaching Intern',
            company: 'Hwa Chong Institution (High School) · Humanities Education',
            period: 'Jan - May 2024',
            desc: 'Independently managed curriculum delivery for 6 Geography and 2 Special Programme History classes, designing structured lessons tailored to diverse learning styles. Applied narrative-driven storytelling to communicate complex concepts clearly and improve student engagement.',
            tags: ['Curriculum Design', 'Presentation', 'Leadership', 'Structured Communication', 'Microsoft Office'],
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

    .title-label {
        width: 100%;
        margin-bottom: 0.5rem;
    }

    .title-label a {
        font-family: 'garet', sans-serif;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: #4070ff;
        text-decoration: none;
        font-weight: 600;
        display: inline-block;
    }

    .header-block {
        margin-bottom: 2.5rem;
    }

    .section-title {
        font-size: 2.2rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #111827;
        margin: 0;
    }

    .experiences-timeline-list {
        display: flex;
        flex-direction: column;
        gap: 0; 
        margin-top: 3rem;
    }

    .exp-row-item {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem 0;
        border-bottom: 1px solid #e5e7eb; 
    }

    .exp-row-item:first-child {
        padding-top: 0.5rem;
    }

    .exp-row-item:last-child {
        border-bottom: none;
    }

    @media (min-width: 850px) {
        .exp-row-item {
            flex-direction: row;
            gap: 3rem;
        }
        
        .exp-left-column {
            flex: 0 0 280px; 
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
        }
        
        .exp-right-column {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
    }

    .exp-period {
        font-family: 'garet', sans-serif;
        font-size: 0.75rem;
        letter-spacing: 0.05em;
        color: #4070ff;
        text-transform: uppercase;
        font-weight: 600;
    }

    .exp-company {
        font-size: 0.88rem;
        font-weight: 500;
        color: #6b7280;
        line-height: 1.4;
    }

    .exp-title {
        font-family: 'garet', sans-serif;
        font-size: 1.3rem;
        font-weight: 600;
        color: #111827;
        margin: 0;
        line-height: 1.2;
    }

    .exp-desc {
        font-size: 0.92rem;
        line-height: 1.6;
        color: #4b5563;
        margin: 0;
        max-width: 97.7ch; 
    }

    .exp-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-top: 0.25rem;
    }

    .exp-tag {
        background: #f3f4f6;
        color: #4070ff;
        font-size: 0.7rem;
        font-weight: 600;
        padding: 0.25rem 0.6rem;
        border-radius: 6px;
        border: 1px solid #e5e7eb;
    }
</style>