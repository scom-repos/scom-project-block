import { Module, customModule, Container } from '@ijstech/components';
import ScomProjectBlock from '@scom/scom-project-block';

@customModule
export default class Module1 extends Module {
    constructor(parent?: Container, options?: any) {
        super(parent, options);
    }

    async init() {
        super.init();
    }

    render() {
        return <i-vstack gap={10} padding={{ top: 20, bottom: 20 }} verticalAlignment="center" horizontalAlignment="center">
            <i-label caption="ProjectBlock 1" font={{ size: '16px', bold: true }} />
            <i-scom-project-block
                id="scomProjectBlockElm"
                margin={{ left: 'auto', right: 'auto', bottom: 20 }}
            />
            <i-modal id="mdConfig" width={1000}>
                <i-panel id="pnlConfig" />
            </i-modal>
        </i-vstack>
    }
}