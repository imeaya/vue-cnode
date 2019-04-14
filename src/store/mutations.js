const mutations = {
    mutaitonIsShowMoreMenus:function(state,payload){
        //state表示当前状态数据，payload表示使用方传递的附加数据
        state.isShowMoreMenus=payload;
    }
};

export default mutations;