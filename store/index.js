export const state = () => ({
    isNavbarS: false,
    isNavbarSlider: false
})

export const mutations = {
    setIsNavbarS: function(state) {
    state.isNavbarS = !state.isNavbarS;
    },
    setIsNavbarSlider: function(state, payload){
        state.isNavbarSlider = payload;
    }
}