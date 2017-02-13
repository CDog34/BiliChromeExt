export class BilibiliService{
    static async loadBgm(bgmId){
        const url=`//bangumi.bilibili.com/jsonp/seasoninfo/${bgmId}.ver?_=${Date.now()}`;
        const res= await fetch(url);
        const txt= await res.text();
        if (txt.search('seasonListCallback') !== -1) return await new Promise(resolve => (new Function('seasonListCallback',txt))(res => resolve(res)));
        return JSON.parse(txt);
    }
}