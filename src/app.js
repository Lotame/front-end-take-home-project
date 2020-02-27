import MainView from './Main.view';

export default class App {

    constructor() {        
        this.view = new MainView({
            el: '#app'
        });
        this.view.render();
    }
}

new App();