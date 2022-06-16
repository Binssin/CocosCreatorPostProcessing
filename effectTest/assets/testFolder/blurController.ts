
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = blurController
 * DateTime = Tue Jun 14 2022 14:40:16 GMT+0800 (台北標準時間)
 * Author = Binssin
 * FileBasename = blurController.ts
 * FileBasenameNoExtension = blurController
 * URL = db://assets/testFolder/blurController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('blurController')
export class blurController extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;


    @property({type: Node})
    public unblurCamera: Node | null = null;

    @property({type: Node})
    public renderCamera: Node | null = null;

    @property({type: Node})
    public renderedSprite: Node | null = null;

    @property({type: Node})
    public magic: Node | null = null;

    start () {
        // [3]
    }

    /**
     * blur
     */
    public blur() {
        this.unblurCamera.active = false;
        this.renderCamera.active = true;
        this.renderedSprite.active = true;
        this.magic.active = true;
    }

    /**
     * unblur
     */
    public unblur() {
        this.unblurCamera.active = true;
        this.renderCamera.active = false;
        this.renderedSprite.active = false;
        this.magic.active = false;
    }

    private isBlur: boolean = true;
    /**
     * switch
     */
    public switch() {
        this.isBlur = !this.isBlur;
    }

    update (deltaTime: number) {
        if (this.isBlur) {
            this.blur();
        }
        else {
            this.unblur();
        }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
