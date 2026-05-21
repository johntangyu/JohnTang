<template>
    <div class="main-section">
        <div class="title-label">
            <a>02 · Experiences</a>
        </div>
        <div class="exp-layout">
            <div class="exp-column">
                <div class="exp-col-label">Where I've Been, What I've Learnt.</div>
                
                <div 
                    v-for="(exp, i) in workExp" 
                    :key="exp.id" 
                    class="exp-card reveal" 
                    :class="'reveal-d' + (i + 1)"
                >
                    <div class="exp-period">{{ exp.period }}</div>
                    <div class="exp-title">{{ exp.title }}</div>
                    <div class="exp-company">{{ exp.company }}</div>
                    <div class="exp-desc">{{ exp.desc }}</div>
                    <div class="exp-tags">
                        <span 
                            v-for="(t, tagIndex) in exp.tags" 
                            :key="exp.id + '-tag-' + tagIndex" 
                            class="exp-tag"
                        >
                            {{ t }}
                        </span>
                    </div>
                </div>
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
                workExp: [
                    {
                        id:1,
                        title: 'BT1101 Teaching Assistant' ,
                        company: 'NUS Information Systems and Analytics · Introduction to Business Analytics',
                        period: 'Aug 2025 - May 2026',
                        desc: 'Supported undergraduates through statistical modelling, data visualisation, and analytical reasoning in R for an entire academic year. Teaching analytics is the purest test of comprehension — you can only explain what you genuinely understand — and it sharpened my ability to translate complex quantitative outputs into clear, accessible insights.',
                        tags: ['R Programming', 'Statistical Modelling', 'Data Visualisation', 'Descriptive Analytics', 'Prescriptive Analytics', 'Predictive Analytics', 'Communication'],
                    },

                    {
                        id:2,
                        title: 'Community & Partnerships Intern',
                        company: 'Block71 · Startup Ecosystem',
                        period: 'JULY - DEC 2025',
                        desc: '',
                        tags: ['Product Thinking', 'Stakeholder Management', 'Startup Ecosystem', 'Community Building'],
                    },

                    {
                        id:3,
                        title: 'Geography & History Teaching Intern',
                        company: 'Hwa Chong Institution (High School) · Humanities Education',
                        period: 'JAN - MAY 2024',
                        desc: 'Independently taught 6 Geography classes and 2 special programme History classes for 1 Semester. Designed lesson plans and materialsfor diverse learners — an experience that crystallised the power of data storytelling: turning abstract information into narratives that people understand and act on.',
                        tags: ['Curriculum Design', 'Presentation', 'Leadership', 'Structured Communication', 'Microsoft Office '],
                    },

                ],
                }
        }
}
</script>

<style>
    .exp-layout { 
        display:flex; 
        flex-direction: column;
        width: 100%;
    }

    .exp-col-label {
        font-size: 2.25rem; 
        letter-spacing: .08em; 
        color: var(--text-muted); 
        margin-bottom: 1.75rem;
        padding-bottom: .75rem; 
    }

    .title-label {
        font-family: 'garet', sans-serif; 
        font-size: 0.85rem;
        letter-spacing: .18em; 
        margin-bottom: 1.25rem;
        text-transform: uppercase;
        color: #4070ff; 
        border-bottom: 1px solid var(--border);
        width: 100%;
    }

    .exp-card {
        padding: 1.6rem 1.75rem;
        border: 1px solid var(--border); 
        border-radius: var(--radius);
        background: var(--bg-card); 
        margin-bottom: 1.5rem;
        transition: all .3s ease; 
        position: relative; 
        overflow: hidden;
        width: 100%;
        box-sizing: border-box;
    }

    .exp-card::before {
        content: ''; 
        position: absolute; 
        top: 0; left: 0;
        width: 3px; 
        height: 100%; 
        background: var(--accent);
        transform: scaleY(0); 
        transition: transform .3s ease;
        transform-origin: bottom;
    }

    .exp-period {
        font-family:'garet',sans-serif; 
        font-size:.62rem;
        letter-spacing:.1em; 
        color:var(--accent); margin-bottom:.5rem; 
        text-transform:uppercase;
    }

    .exp-title {
        font-family:'garet',sans-serif; 
        font-size:1.5rem; 
        font-weight:600; 
        margin-bottom:.2rem; 
    }
    .exp-company { 
        font-size:.85rem; 
        color:var(--text-dim); 
        margin-bottom:.9rem; 
    }

    .exp-desc { 
        font-size:.9rem; 
        line-height:1.75; 
        color:var(--text-dim); 
        margin-bottom:1rem; 
    }

    .exp-tags { 
        display:flex; 
        flex-wrap:wrap; 
        gap:.4rem; 
    }

    .exp-tag {
        background: #f0f2f5;
        color: #4a70ff;
        font-family: 'garet', monospace;
        padding: 6px 14px;
        border-radius: 10px;
        font-size: 0.7rem;
        font-weight: 600;
    }
</style>