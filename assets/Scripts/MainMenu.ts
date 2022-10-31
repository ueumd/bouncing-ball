import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainMenu')
export class MainMenu extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    onBtnPlay() {
        director.loadScene('level-001');
    }
}

