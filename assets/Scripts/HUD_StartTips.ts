import { _decorator, Component, Node } from 'cc';
import { PlayerMovement } from './PlayerMovement';
const { ccclass, property } = _decorator;

@ccclass('HUD_StartTips')
export class HUD_StartTips extends Component {

    @property({type: PlayerMovement})
    playerMovment: PlayerMovement = null;

    start() {

    }

    update(deltaTime: number) {
        
    }

    onBtnStart() {
       this.playerMovment.enabled = true;
       this.node.active = false;
    }
}

