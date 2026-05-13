import { createRouter, createWebHistory } from 'vue-router'
import { auth, db } from '@/firebase.js'
import { onAuthStateChanged, reload } from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'

import Home from '@/components/Home.vue'


