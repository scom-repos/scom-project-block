/// <amd-module name="@scom/scom-project-block/global/interfaces.ts" />
declare module "@scom/scom-project-block/global/interfaces.ts" {
    export interface IProjectBlockConfig {
        guid?: string;
        name?: string;
        componentId?: number;
        apiEndpoint?: string;
        options?: {
            [key: string]: any;
        };
        showHeader?: boolean;
        showFooter?: boolean;
    }
    export interface IProjectBlockWidget {
        guid: string;
        projectBlockGuid: string;
        widgetName: string;
        title: string;
        description: string;
        img: string;
        dataUri: string;
        status: 'active' | 'inactive';
    }
    export interface IFetchProjectBlockWidgetsResult {
        data: IProjectBlockWidget[];
    }
}
/// <amd-module name="@scom/scom-project-block/global/utils.ts" />
declare module "@scom/scom-project-block/global/utils.ts" {
    import { IFetchProjectBlockWidgetsResult } from "@scom/scom-project-block/global/interfaces.ts";
    export function fetchProjectBlockWidgets(blockGuid: string): Promise<IFetchProjectBlockWidgetsResult>;
}
/// <amd-module name="@scom/scom-project-block/global/index.ts" />
declare module "@scom/scom-project-block/global/index.ts" {
    export * from "@scom/scom-project-block/global/interfaces.ts";
    export * from "@scom/scom-project-block/global/utils.ts";
}
/// <amd-module name="@scom/scom-project-block/index.css.ts" />
declare module "@scom/scom-project-block/index.css.ts" {
    export const containerStyle: string;
    export const projectBlockStyle: string;
}
/// <amd-module name="@scom/scom-project-block" />
declare module "@scom/scom-project-block" {
    import { Module, ControlElement, Container, VStack } from '@ijstech/components';
    import { IProjectBlockConfig } from "@scom/scom-project-block/global/index.ts";
    interface ScomProjectBlockElement extends ControlElement, IProjectBlockConfig {
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-project-block']: ScomProjectBlockElement;
            }
        }
    }
    export default class ScomProjectBlock extends Module {
        private vStackProjectBlock;
        private mdConfig;
        private pnlConfig;
        private _data;
        tag: any;
        static create(options?: ScomProjectBlockElement, parent?: Container): Promise<ScomProjectBlock>;
        constructor(parent?: Container, options?: ScomProjectBlockElement);
        get showFooter(): boolean;
        set showFooter(value: boolean);
        get showHeader(): boolean;
        set showHeader(value: boolean);
        private getData;
        private setData;
        private getTag;
        private setTag;
        private _getActions;
        saveConfigData(data: any, tag: any): void;
        getConfigurators(): {
            name: string;
            target: string;
            getActions: () => {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                isReplacement: boolean;
                customUI: {
                    render: (data?: any, onReplace?: (data: any) => void) => Promise<VStack>;
                };
            }[];
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        }[];
        private renderPlaceholder;
        private showConfig;
        init(): Promise<void>;
        render(): any;
    }
}
