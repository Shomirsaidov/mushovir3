import { createStore } from 'vuex'

export default createStore({
  state: {
    modalOn: 0,
    offer: 0,
    cancel: 0,
    chooseMode: 'start',
    startPoint: {title: 'Москва',lat: 90.7509544,lon: 90.61757549999999},
    endPoint: {title: 'выберите адрес',lat: 90.6509544,lon: 90.61757549999999},
    routeInfo: null,
    langLoaded: null,
    successMessage: 'Ваш заказ принят',
    successModal: false,
    offeredPrice: null,
    zoom: 12,
    error: false,
    errorMessage: ''
  },
  getters: {
    midPoint(state) {
      if(state.chooseMode == 'start') {
        return [state.startPoint.lat, state.startPoint.lon];
      } 

      return [
        (state.startPoint.lat + state.endPoint.lat) / 2,
        (state.startPoint.lon + state.endPoint.lon) / 2
      ];


    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
