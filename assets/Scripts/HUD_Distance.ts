import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HUD_Distance')
export class HUD_Distance extends Component {

    @property({type: Node})
    palyer: Node = null;

    content:Label = null;

    start() {
        this.content = this.node.getComponent(Label);
    }

    update(deltaTime: number) {
        this.content.string = this.palyer.position.z.toFixed(1).toString();
    }
}

