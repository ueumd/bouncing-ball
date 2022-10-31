import { _decorator, Component, Node, RigidBody, Vec3, input, Input, EventKeyboard, KeyCode, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerMovement')
export class PlayerMovement extends Component {

    @property({type: RigidBody})
    rigiBody:RigidBody = null;

    @property
    speed: number = 0;

    @property
    forwardForce: number = 0;

    @property
    sideForce: number =1000;

    isLeftDown: boolean = false;
    isRightDown: boolean = false;

    start() {
        // const force = new Vec3(0, 0, 500);
        // this.rigiBody.applyForce(force);

        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this)
    }

    update(deltaTime: number) {
        const force = new Vec3(0, 0, this.forwardForce * deltaTime);
        this.rigiBody.applyForce(force);

        if (this.isLeftDown) {
            const leftForce = new Vec3(this.sideForce * deltaTime, 0, 0);
            this.rigiBody.applyForce(leftForce);
        }
        

       if (this.isRightDown) {
        const rightForce = new Vec3(-this.sideForce * deltaTime, 0, 0);
        this.rigiBody.applyForce(rightForce);
       }

       // 是否从侧边缘掉下去
       if (this.node.position.y < -10) {
        console.log("You Lose");
        
        this.enabled = false;

        director.getScene().emit("level_failed");

        // director.loadScene(director.getScene().name);
       }
    }

    onDestory() {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this)
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this)
    }

    onKeyDown(event: EventKeyboard) {
        if(event.keyCode === KeyCode.KEY_A) {
            this.isLeftDown = true;
            console.log('key down A');
        }

        if(event.keyCode === KeyCode.KEY_D) {
            this.isRightDown = true;
            console.log('key down D');
        }
    }

    onKeyUp(event: EventKeyboard) {
        if(event.keyCode === KeyCode.KEY_A) {
            this.isLeftDown = false;
            console.log('key up A');
        }
        if(event.keyCode === KeyCode.KEY_D) {
            this.isRightDown = false;
            console.log('key up D');
        }
    }
}

