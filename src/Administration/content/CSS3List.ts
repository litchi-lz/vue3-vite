const CSS3List = [
  {
    id: 1,
    blogTitle: "手风琴",
    blogDescribe: "奇思妙想手风琴",
    mdId: "CSS-accordion",
    createDate: "2022-7-26 20:11",
    addtrss: 'https://goatchen.coding.net/public/html-css/HTML-CSS/git/files',
    watchCount: 51
  },
  {
    id: 1,
    blogTitle: "旋转相册",
    blogDescribe: "奇思妙想旋转相册",
    mdId: "CSS-album",
    createDate: "2022-7-14 19:40:13",
    addtrss: 'https://juejin.cn/post/7123492343201660959',
    watchCount: 51
  },

];
import { userPaging } from "@/store/paging";
const pagingStore = userPaging();
pagingStore.changeTotal({ type: 'CSS3List', attribute: 'totaltPage', value: CSS3List.length })
export {
  CSS3List
}