
import { _decorator, Component, Node, Vec3, tween } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = cameraController
 * DateTime = Mon Jun 13 2022 19:39:18 GMT+0800 (台北標準時間)
 * Author = Binssin
 * FileBasename = cameraController.ts
 * FileBasenameNoExtension = cameraController
 * URL = db://assets/tutorial/cameraController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('cameraController')
export class cameraController extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property({type: Node})
    public unblurCamera: Node | null = null;

    @property({type: Node})
    public renderCamera: Node | null = null;
    start () {
        // [3]
        // tween(this.unblurCamera)
        // .to(3, { position: new Vec3(10, 10, 10) }, { easing: 'bounceInOut' })
        // .to(3, { position: new Vec3(0, 0, 0) }, { easing: 'elasticOut' })
        // .union()
        // .repeat(1) // 执行 2 次
        // .start();
        // tween(this.renderCamera)
        // .to(3, { position: new Vec3(10, 10, 10) }, { easing: 'bounceInOut' })
        // .to(3, { position: new Vec3(0, 0, 0) }, { easing: 'elasticOut' })
        // .union()
        // .repeat(1) // 执行 2 次
        // .start();
        
        // this.renderCamera.translate(new Vec3(0, 1, 0));
        // this.unblurCamera.translate(new Vec3(0, 1, 0));
    }

    // private initPos: Vec3 = new Vec3(-2.6, 3.5, 7);
    private initPos: Vec3 = new Vec3(0, 0, 0);

    update (deltaTime: number) {
        // [4]
        // this.renderCamera.translate(new Vec3(2, 4, 2));
        // this.unblurCamera.translate(new Vec3(2, 4, 2));
        

        // this.renderCamera.setPosition(new Vec3(this.initPos[0] + Math.sin(deltaTime), this.initPos[0], this.initPos[0] + Math.sin(deltaTime)));
        // this.unblurCamera.setPosition(new Vec3(this.initPos[0] + Math.sin(deltaTime), this.initPos[0], this.initPos[0] + Math.sin(deltaTime)));
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
