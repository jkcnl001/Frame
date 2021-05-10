
import { _decorator, Component, Node, director, assetManager } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HotUpdate')
export class HotUpdate extends Component {

    start() {
        // console.log("--------------------------------------------------------------------------------------1-------------------------------------")
        assetManager.loadBundle("Start", (err, bundle) => {
            console.log("2", err)
            if (err) {
                return;
            }
            bundle.loadScene("Start", (err, scene) => {
                console.log("3", err)
                if (err) {
                    return
                }
                director.runScene(scene);
            });
        })
    }
}
