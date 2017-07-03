import Login from '@/view/login/index'
import PersonalCenter from '@/view/personalCenter/index'
import Edit from '@/view/personalCenter/edit'
import Warning from '@/view/warning/index'
import Succ from '@/view/success/index'

const routes = [
    { path: '/', name: 'Login', component: Login, meta: { title: '绑定' } },
    { path: '/PersonalCenter', name: 'PersonalCenter', component: PersonalCenter, meta: { title: '我的' } },
    { path: '/Edit', name: 'Edit', component: Edit, meta: { title: '编辑个人资料' } },
    { path: '/Warning', name: 'Warning', component: Warning, meta: { title: '报障' } },
    { path: '/Succ', name: 'Succ', component: Succ, meta: { title: '报障成功' } }
]
export default routes
