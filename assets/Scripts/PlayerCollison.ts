import { _decorator, Component, Node, BoxCollider, ICollisionEvent, ITriggerEvent, director } from 'cc';
import { PlayerMovement } from './PlayerMovement';
const { ccclass, property } = _decorator;

const GAME_LEVLES = {
    "LEVELE_001": "level-001",
    "LEVELE_002": "level-002",
    "LEVELE_003": "level-003",
}

@ccclass('PlayerCollison')
export class PlayerCollison extends Component {
    start() {
        let collider = this.node.getComponent(BoxCollider);
        collider.on('onCollisionEnter', this.onCollisionEnter, this);
        collider.on('onTriggerEnter', this.onTriggerEnter, this);
    }

    update(deltaTime: number) {
        
    }

    onDestory() {
        let collider = this.node.getComponent(BoxCollider);
        collider.off('onCollisionEnter', this.onCollisionEnter, this);
        collider.off('onTriggerEnter', this.onTriggerEnter, this);
    }

    onCollisionEnter(event: ICollisionEvent){
        console.log("hit");
        if (event.otherCollider.node.name === "Obstacle") {
            let movement = this.node.getComponent(PlayerMovement);
            movement.enabled = false;

            // 抛出事件
            director.getScene().emit("level_failed");

            // director.loadScene(director.getScene().name);
        }
        
    }

    onTriggerEnter(event: ITriggerEvent){
        console.log("You Win");
        // if (event.otherCollider.node.name === "Obstacle") {
        //     let movement = this.node.getComponent(PlayerMovement);
        //     movement.enabled = false;
        // }
    

        let movement = this.node.getComponent(PlayerMovement);
        movement.enabled = false;

        director.getScene().emit("level_successful");

        // let movement = this.node.getComponent(PlayerMovement);
        // movement.enabled = false;

        // // director.loadScene(director.getScene().name);

        // let cureentScene = director.getScene().name;

    
        // if (cureentScene === GAME_LEVLES.LEVELE_001) {
        //     director.loadScene(GAME_LEVLES.LEVELE_002)
        // }

        // if (cureentScene === GAME_LEVLES.LEVELE_002) {
        //     director.loadScene(GAME_LEVLES.LEVELE_003)
        // }
        
    }
}

