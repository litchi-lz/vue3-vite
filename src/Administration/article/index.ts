// 一个 *：匹配当前目录下的文件
// 两个 *：匹配当前目录及其嵌套的全部子目录下的文件
// const requireComponent = import.meta.globEager('./library/*.vue')
// const requireComponent = import.meta.glob('./**/*.md')
const requireComponent = import.meta.glob('@/components/*.vue')
// export default {
//   install (Vue) {
//     Object.keys(requireComponent).forEach(item => {
//       const defaultObj = requireComponent[item].default
//       Vue.component(defaultObj.name, defaultObj)
//     })
//   }
// }
console.log(requireComponent)

//获取public目录下所有的文件信息
const modulesFiles = import.meta.glob('@/components/*.vue')
const pathList: any[] = [];
// const pathList = []
//遍历拿到所有的文件名称
for (const path in modulesFiles) {
    pathList.push(path)
}
export const mdArticle = function (Vue: any, opts = {}) {
    pathList.forEach((path) => {
        console.log(modulesFiles[path])
        const component = modulesFiles[path].default;
        
        
        Vue.component('hello', component)
    })
}

