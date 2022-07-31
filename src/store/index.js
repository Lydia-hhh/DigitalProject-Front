import Vue from 'vue'
import Vuex from 'vuex'
import {
    deepFind
} from '../utils/index'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        comments: [{
            id: '1',
            name: '天理要尝蛆',
            time: '1641645103',
            content: '刚刚唉',
            sup: null,
            subComment: [{
                id: '4',
                name: '鸦青云厘',
                time: '1641652303',
                content: '一个赞，好拉',
                subComment: [{
                    id: '7',
                    name: 'Alanleica',
                    time: '1641652303',
                    content: '吃了几斤澳洲淡水小龙虾',
                    subComment: [],
                    sup: '4'
                }, ],
                sup: '1'
            },

                {
                    id: '7',
                    name: 'Alanleica',
                    time: '1641652303',
                    content: '吃了几斤澳洲淡水小龙虾',
                    subComment: [{
                        id: '4',
                        name: '鸦青云厘',
                        time: '1641652303',
                        content: '一个赞，好拉',
                        subComment: [],
                        sup: '7'
                    }, ],
                    sup: '1'
                },
                {
                    id: '6',
                    name: '氵无名灬氏',
                    time: '1641652303',
                    content: '很快惹',
                    subComment: [],
                    sup: '1'
                }
            ]
        }],
        multi:false,
        basicParam:{
            mirror:2,
            zone:'rgb',
            histogram:'grey',
            sx:0,
            sy:0,
            fx:1,
            fy:1,
            angle:0,
            factor:1,
            op:'+',
            op1:'no'
        },
        morphoParam:{
            len:3
        },
        noiseParam:{
            filter:'selectivity'
        },
        lineParam:{
            threshold:118,
            minLineLength:80,
            maxLineGap:15
        },
        edgeParam:{
            operator:'Roberts'
        },
        styleParam:{
            style:'la_muse'
        }
    },
    mutations: {
        addComment(state, data) {
            console.log(data)
            if (data.sup) {
                let commentSup = deepFind(state.comments, data.sup)
                console.log('commentSup', commentSup)
                commentSup.subComment.unshift(data)
            } else {
                state.comments.unshift(data)
            }

        },
        changeMulti(state,newMulti){
            state.multi=newMulti

        },
        changeBasicParam(state,newBasicParam){
            state.basicParam=newBasicParam
        },
        changeMorphoParam(state,newMorphoParam){
            state.morphoParam=newMorphoParam
        },
        changeNoiseParam(state,newNoiseParam){
            state.noiseParam=newNoiseParam
        },
        changeLineParam(state,newLineParam){
            state.lineParam=newLineParam
        },
        changeEdgeParam(state,newEdgeParam){
            state.edgeParam=newEdgeParam
        },
        changeStyleParam(state,newStyleParam){
            state.styleParam=newStyleParam
        }


    },
    actions: {},
    modules: {}
})