const base = {
    get() {
        return {
            url : "http://localhost:8080/tingchechangguanlixitong/",
            name: "tingchechangguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/tingchechangguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "停车场管理系统"
        } 
    }
}
export default base
