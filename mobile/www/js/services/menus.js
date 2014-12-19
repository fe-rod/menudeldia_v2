angular.module('todayMenu')

.factory('Menus', function() {

  var menuList = [
        {id:'0', favorite: false, name:'Pollo asado con pure', price:'160', description: 'Pata de pollo con pure de papa y calabaza', likes:'5', comments:'2', store: { id: 1, icon: 'placeholder' , name:'Toca y pica', phone: '12345', distance: 0.3}},
        {id:'1', favorite: false,name:'Carne con papas y boniatos', price:'150', description: 'Carne al horno con papa y boniatos. Imperdibles', likes:'1', comments:'1', store: { id: 1, icon: 'placeholder', name:'Toca y pica', phone: '12345', distance: 0.5}},
        {id:'2', favorite: false,name:'Strogonoff de pollo', price:'210', description: 'Strogonoff de pollo con arroz. Plato muy generoso, para compartir', likes:'5', comments:'4', store: { id: 2, icon: 'fans', name:'Fans', phone: '54321', distance: 0.6}},
        {id:'3', favorite: false,name:'Wrap canadiense', price:'180', description: 'Wrap canadiense con papas fritas o ensalada', likes:'10', comments:'3', store: { id: 2, icon: 'fans', name:'Fans', phone: '54321', distance: 1.4}},
        {id:'3', favorite: false,name:'Wrap canadiense', price:'180', description: 'Wrap canadiense con papas fritas o ensalada', likes:'10', comments:'3', store: { id: 2, icon: 'fans', name:'Fans', phone: '54321', distance: 1.4}},
        {id:'3', favorite: false,name:'Wrap canadiense', price:'180', description: 'Wrap canadiense con papas fritas o ensalada', likes:'10', comments:'3', store: { id: 2, icon: 'fans', name:'Fans', phone: '54321', distance: 1.4}},
        {id:'3', favorite: false,name:'Wrap canadiense', price:'180', description: 'Wrap canadiense con papas fritas o ensalada', likes:'10', comments:'3', store: { id: 2, icon: 'fans', name:'Fans', phone: '54321', distance: 1.4}}
    ];

  return {
    all: function() {
      return menuList;
    },
    get: function(menuId) {
      // Simple index lookup
      return menuList[menuId];
    }
  }
});
