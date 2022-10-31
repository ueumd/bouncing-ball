import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FloawTarget')
export class FloawTarget extends Component {
    @property(Node)
    target: Node = null;

    @property(Vec3)
    osffset: Vec3 = new Vec3();

    tmpPos = new Vec3();
    start() {

    }

    update(deltaTime: number) {

        
        this.node.position = this.target.position;
        this.target.getPosition(this.tmpPos);

        this.tmpPos.add(this.osffset)

        this.node.position = this.tmpPos;
        
    }
}

