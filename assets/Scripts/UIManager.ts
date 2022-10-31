import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

const GAME_LEVLES = {
    "LEVELE_001": "level-001",
    "LEVELE_002": "level-002",
    "LEVELE_003": "level-003",
}

@ccclass('UIManager')
export class UIManager extends Component {

    @property(Node)
    uiLevelFailure: Node;

    @property(Node)
    uiLevelSuccess: Node;

    @property(Node)
    uiLevelComplete: Node;

    start() {
        director.getScene().on('level_failed', this.onEvent_LevelFailed, this);
        director.getScene().on('level_successful', this.onEvent_LevelSuccessful, this);
    }

    update(deltaTime: number) {
        
    }

    onBtnReplay() {
        director.loadScene(director.getScene().name)
    }

    onBtnMainMenu() {
        director.loadScene("Main")
    }

    onBtnNext() {
        // director.loadScene(director.getScene().name);

        let cureentScene = director.getScene().name;

    
        if (cureentScene === GAME_LEVLES.LEVELE_001) {
            director.loadScene(GAME_LEVLES.LEVELE_002)
        }

        if (cureentScene === GAME_LEVLES.LEVELE_002) {
            director.loadScene(GAME_LEVLES.LEVELE_003)
        }
    }


    onEvent_LevelFailed() {
        this.uiLevelFailure.active = true;
    }

    onEvent_LevelSuccessful() {
        if (director.getScene().name === GAME_LEVLES.LEVELE_003) {
            this.uiLevelComplete.active = true;
        } else {
            this.uiLevelSuccess.active = true;
        }
    }
}

