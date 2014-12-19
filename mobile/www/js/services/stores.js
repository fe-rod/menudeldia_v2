angular.module('todayMenu')

    .factory('Stores', function(Helpers) {
        var service = {
            all: all,
            getById: getById,
            getTopByDistance: getTop,
            getNextStores: getNextStores
        }

        function all(){
            return stores;
        }

        function getById(id){
            return stores[id];
        }

        function getTop(top){
            return stores;
        }

        function getNextStores(){
            return stores;
        }

        // Some fake testing data
        var stores = [
            { id: 0,
                name: 'Tocá y picá',
                email: 'mail@mail.com',
                icon:'placeholder',
                phone: '2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac posuere libero, ac ultrices lorem. Suspendisse nec urna scelerisque lorem semper mattis. Etiam mollis erat sed efficitur.',
                address: 'Tomás Diago 1524',
                menu: 'Tortillas, sandwiches, picadas, budines, tartas',
                location: {lat: '-34.915069', long: '-56.151598'}
            },
            { id: 1,
                name: 'Fans',
                email: 'mail@mail.com',
                icon:'fans',
                phone: '2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac posuere libero, ac ultrices lorem. Suspendisse nec urna scelerisque lorem semper mattis. Etiam mollis erat sed efficitur.',
                address: 'Benito Blanco 1524',
                location: {lat: '-34.915680', long: '-56.149710'}
            },
            { id: 2,
                name: 'Café Berro',
                email: 'mail@mail.com',
                icon:'cafeberro',
                phone: '2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac posuere libero, ac ultrices lorem. Suspendisse nec urna scelerisque lorem semper mattis. Etiam mollis erat sed efficitur.',
                address: 'Berro 1524',
                location: {lat: '-34.913969', long: '-56.152253'}
            },
            { id: 3,
                name: 'Martínez Gourmet',
                email: 'mail@mail.com',
                icon:'placeholder',
                phone: '2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac posuere libero, ac ultrices lorem. Suspendisse nec urna scelerisque lorem semper mattis. Etiam mollis erat sed efficitur.',
                address: 'Roque Graseras 1524',
                location: {lat: '-34.917044', long: '-56.151373'}
            },
            { id: 4,
                name: 'Cassis',
                email: 'mail@mail.com',
                icon:'placeholder',
                phone: '2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac posuere libero, ac ultrices lorem. Suspendisse nec urna scelerisque lorem semper mattis. Etiam mollis erat sed efficitur.',
                address: 'Scoseria 1524',
                location: {lat: '-34.915186', long: '-56.157172'}
            },
            { id: 5,
                name: 'Chivitos Lo de Pepe',
                email: 'mail@mail.com',
                icon:'chivitoslodepepe',
                phone: '2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac posuere libero, ac ultrices lorem. Suspendisse nec urna scelerisque lorem semper mattis. Etiam mollis erat sed efficitur.',
                address: 'Roque Graseras 825',
                location: {lat: '-34.915036', long: '-56.150788'}
            },
            { id: 6,
                name: 'Rotisería Disco',
                email: 'mail@mail.com',
                icon:'disco',
                phone: '2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac posuere libero, ac ultrices lorem. Suspendisse nec urna scelerisque lorem semper mattis. Etiam mollis erat sed efficitur.',
                address: 'Scoseria 825',
                location: {lat: '-34.915252', long: '-56.155670'}
            }];

        return service;
    });
