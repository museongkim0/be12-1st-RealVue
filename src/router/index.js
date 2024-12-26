import { createRouter, createWebHistory } from 'vue-router'



import LoginForm from '../pages/LoginForm.vue';

import Aside from '../pages/Aside.vue';
import FormsView from '../pages/FormsView.vue';
import SignupForm from '../pages/SignupForm.vue';
import { h } from 'vue';
import Studentdashboard from '../pages/Studentdashboard.vue';
import ManagerDashboard from '../pages/manager/ManagerDashboard.vue';
import List from '../pages/manager/List.vue';
import StudentList from '../pages/manager/StudentList.vue';
import InstructorList from '../pages/manager/InstructorList.vue';
import ManagerList from '../pages/manager/ManagerList.vue';
import AttendanceManage from '../pages/manager/AttendanceManage.vue';
const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/a', component: FormsView },
        { path: '/b', component: LoginForm , meta: {hideAside: true , hideNav : true} },
        { path: '/c', component: SignupForm , meta: {hideAside: true , hideNav : true} },
        { path: '/d', component: Studentdashboard },
        { path: '/manager/dashboard', component: ManagerDashboard },
        { path: '/manager/studentList', component: StudentList },
        { path: '/manager/instructorList', component: InstructorList },
        { path: '/manager/managerList', component: ManagerList },
        { path: '/manager/attendanceManage', component: AttendanceManage},
        // { path: '/c', component: Create },
        // { path: '/d', component: Signup },
        // { path: '/e', component: Login },
        // { path: '/f', component: Create },
        // { path: '/g', component: Signup }
        
    ]
})

export default router;