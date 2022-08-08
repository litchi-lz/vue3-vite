const Universal = [
  {
    id: 1,
    blogTitle: "代码管理工具",
    blogDescribe: "git使用及命令",
    mdId: "widely-tool",
    createDate: "2021-11-12 20:11:13",
    addtrss: 'https://mp.weixin.qq.com/s/Bf7uVhGiu47uOELjmC5uXQ',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "ts中定义一个数组对象在ref中使用",
    blogDescribe: "git使用及命令",
    mdId: "widely-tool",
    createDate: "2021-11-12 20:11:13",
    addtrss: 'https://mp.weixin.qq.com/s/Bf7uVhGiu47uOELjmC5uXQ',
    watchCount: 51
  },

];

import { userPaging } from "@/store/paging";
const pagingStore = userPaging();
pagingStore.changeTotal({ type: 'Universal', attribute: 'totaltPage', value: Universal.length })

export {
  Universal
}