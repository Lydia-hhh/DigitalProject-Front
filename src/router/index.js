import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRegister from "@/views/LoginRegister";
import UserLayout from "@/UserLayout";
import StudentInfo from "@/views/student/StudentInfo";
import Timetable from "@/views/student/Timetable";
import CourseSelect from "@/views/student/CourseSelect";
import ScoreQuery from "@/views/student/ScoreQuery";
import TeacherInfo from "@/views/teacher/TeacherInfo";
import CourseTable from "@/views/teacher/CourseTable";
import CourseDetail from "@/views/teacher/CourseDetail";
import GiveScore from "@/views/teacher/GiveScore";
import TeacherLayout from "@/TeacherLayout";
import StuSheet from "@/views/teacher/StuSheet";
import AddScore from "@/views/teacher/AddScore";
import OfficeLayout from "@/OfficeLayout";
import StuDept from "@/views/office/StuDept";
import StuList from "@/views/office/StuList";
import StuRoster from "@/views/office/StuRoster";
import TeacherAside from "@/components/TeacherAside";
import TeachDept from "@/views/office/TeachDept";
import TeachList from "@/views/office/TeachList";
import TeachInfo from "@/views/office/TeachInfo";
import CourseList from "@/views/office/CourseList";
import CourseType from "@/views/office/CourseType";
import CourseStu from "@/views/office/CourseStu";
Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'LoginRegister',
      component: LoginRegister
    },
    {
        path: '/student',
        name: 'UserLayout',
        component: UserLayout,
        redirect:'/student/info',
        children:[
            {
                path: 'info',
                name: 'StudentInfo',
                component: StudentInfo,
            },
            {
                path:'timetable',
                name:'Timetable',
                component:Timetable
            },
            {
                path: 'courseselect',
                name:'CourseSelect',
                component: CourseSelect
            },
            {
                path:'scorequery',
                name: 'ScoreQuery',
                component: ScoreQuery
            },
        ]
    },
    {
        path: '/teacher',
        name: 'TeacherLayout',
        component: TeacherLayout,
        redirect:'/teacher/info',
        children:[
            {
                path: 'info',
                name: 'TeacherInfo',
                component: TeacherInfo,
            },
            {
                path:'coursetable',
                name:'CourseTable',
                component:CourseTable
            },
            {
                path: 'coursedetail',
                name:'CourseDetail',
                component: CourseDetail,
            },
            {
                path:'givescore',
                name: 'GiveScore',
                component: GiveScore
            },
            {
                path:'stusheet/:id',
                name: 'StuSheet',
                component: StuSheet
            },
            {
                path:'addscore/:id',
                name:'AddScore',
                component: AddScore
            }
        ]
    },
    {
        path: '/office',
        name: 'OfficeLayout',
        component: OfficeLayout,
        redirect: '/office/studept',
        children: [
            {
                path: 'studept',
                name: 'StuDept',
                component: StuDept,
            },
            {
                path: 'stulist/:param',
                name: 'StuList',
                component: StuList,
            },
            {
                path: 'teachdept',
                name: 'TeachDept',
                component: TeachDept,
            },
            {
                path: 'teacherlist',
                name: 'TeachList',
                component: TeachList
            },
            {
                path: 'teachInfo/:id',
                name: 'TeachInfo',
                component: TeachInfo
            },
            {
                path: 'coursetype',
                name: 'CourseType',
                component: CourseType
            },
            {
                path: 'courselist/:id',
                name: 'CourseList',
                component: CourseList
            },
            {
                path: 'coursestu',
                name: 'CourseStu',
                component: CourseStu
            }
        ]
    }


]

const router = new VueRouter({
    mode:'history',
    routes
})
// const VueRouterPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (to) {
//     return VueRouterPush.call(this, to).catch(err => err)
// }

export default router