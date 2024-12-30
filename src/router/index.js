import { createRouter, createWebHistory } from 'vue-router'



import LoginForm from '../pages/LoginForm.vue';

import Aside from '../pages/Aside.vue';
import FormsView from '../pages/FormsView.vue';
import SignupForm from '../pages/SignupForm.vue';
import { h } from 'vue';
import Studentdashboard from '../pages/Student/Studentdashboard.vue';
import BootcampInfo from '../pages/Student/BootcampInfo.vue';
import ManagerDashboard from '../pages/manager/ManagerDashboard.vue';
import List from '../pages/manager/List.vue';
import StudentList from '../pages/manager/StudentList.vue';
import InstructorList from '../pages/manager/InstructorList.vue';
import ManagerList from '../pages/manager/ManagerList.vue';
import AttendanceManage from '../pages/manager/AttendanceManage.vue';
import InstructorDash from '../pages/Instructor/InstructorDash.vue';
import InstStudInform from '../pages/Instructor/InstStudInform.vue';
import StudentAside from '../pages/Student/StudentAside.vue';
import bootcampList from '../pages/bootcampList.vue';
import common from '../pages/commondashboard.vue';
const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/a', component: FormsView },
        { path: '/', component: LoginForm , meta: {hideAside: true , hideNav : true} },
        { path: '/Signup', component: SignupForm , meta: {hideAside: true , hideNav : true} },
        {
            path: '/studentdashboard',
            component: Studentdashboard,
            meta: { asideComponent: StudentAside  ,hideAside: false }, // StudentAside를 항상 사용
        },     
        { path: '/inst/dashboard', component: InstructorDash },
        { path: '/inst/studinform', component: InstStudInform },
        { path: '/manager/dashboard', component: ManagerDashboard },
        { path: '/manager/studentList', component: StudentList },
        { path: '/manager/instructorList', component: InstructorList },
        { path: '/manager/managerList', component: ManagerList },
        { path: '/manager/attendanceManage', component: AttendanceManage},
        { path: '/bootcamp', component : bootcampList },
        {path : '/common', component : common},
        { path:'/bootcampInfo', component: BootcampInfo},
        // { path: '/c', component: Create },
        // { path: '/d', component: Signup },
        // { path: '/e', component: Login },
        // { path: '/f', component: Create },
        // { path: '/g', component: Signup }
        
    ]
})

export default router;