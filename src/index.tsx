import {
  Module,
  customModule,
  ControlElement,
  customElements,
  Container,
  IDataSchema,
  VStack,
  Styles,
  Panel,
  Modal,
  Button
} from '@ijstech/components';
import { fetchProjectBlockWidgets, IProjectBlockConfig } from './global/index';
import { containerStyle, projectBlockStyle } from './index.css';
import ConfiguratorSettings from '@scom/scom-configurator-settings';

const Theme = Styles.Theme.ThemeVars;

interface ScomProjectBlockElement extends ControlElement, IProjectBlockConfig {

}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['i-scom-project-block']: ScomProjectBlockElement;
    }
  }
}

@customModule
@customElements('i-scom-project-block')
export default class ScomProjectBlock extends Module {
  private vStackProjectBlock: VStack;
  private mdConfig: Modal;
  private pnlConfig: Panel;
  private _data: IProjectBlockConfig = { componentId: 0 };
  tag: any = {};

  static async create(options?: ScomProjectBlockElement, parent?: Container) {
    let self = new this(parent, options);
    await self.ready();
    return self;
  }

  constructor(parent?: Container, options?: ScomProjectBlockElement) {
    super(parent, options);
  }

  get showFooter() {
    return this._data.showFooter ?? true
  }
  set showFooter(value: boolean) {
    this._data.showFooter = value
  }

  get showHeader() {
    return this._data.showHeader ?? true
  }
  set showHeader(value: boolean) {
    this._data.showHeader = value
  }

  private getData() {
    return this._data;
  }

  private async setData(data: IProjectBlockConfig) {
    this._data = data;
    await this.renderPlaceholder();
  }

  private getTag() {
    return this.tag;
  }

  private async setTag(value: any, newTag?: boolean) {
    if (newTag) {
      this.tag = {};
    }
    const newValue = value || {};
    for (let prop in newValue) {
      if (newValue.hasOwnProperty(prop)) {
        this.tag[prop] = newValue[prop];
      }
    }
    this.width = this.tag.width || 700;
  }

  private _getActions() {
    const actions = [
      {
        name: 'Settings',
        icon: 'cog',
        command: (builder: any, userInputData: any) => {
          let _oldData: any = { componentId: -1 };
          return {
            execute: async () => {
              _oldData = { ...this._data };
              if (userInputData?.componentId !== undefined) this._data.componentId = userInputData.componentId;
              if (builder?.setData) builder.setData(userInputData);
              this.setData(this._data);
            },
            undo: () => {
              if (builder?.setData) builder.setData(_oldData);
              this.setData(_oldData);
            },
            redo: () => { }
          }
        },
        isReplacement: true,
        customUI: {
          render: async (data?: any, onReplace?: (data: any) => void) => {
            const vstack = new VStack();
            const config = new ConfiguratorSettings();
            const result = await fetchProjectBlockWidgets(this._data.guid);
            config.data = result.data.map((item, v) => {
              return {
                id: v,
                title: item.title,
                description: item.description,
                path: item.widgetName,
                dataUri: item.dataUri
              }
            });
            if (this._data.options) {
              config.showDetail({ properties: { ...this._data }, id: this._data.componentId, tag: { ...this.tag } });
            } else if (this.tag) {
              config.parentTags = { ...this.tag };
            }
            config.onSaveConfigData = (configData) => {
              if (configData && onReplace) {
                const { path } = configData;
                onReplace({
                  ...configData,
                  module: {
                    name: 'ProjectBlock Block',
                    path,
                    category: 'charts'
                  }
                });
              }
            }
            vstack.append(config);
            config.showSaveBtn = false;
            return vstack;
          }
        }
      }
    ]
    return actions
  }

  saveConfigData(data: any, tag: any) {
    if (data) {
      this.setData(data);
    }
    if (tag) {
      this.setTag(tag, true);
    }
  }

  getConfigurators() {
    const self = this;
    return [
      {
        name: 'Builder Configurator',
        target: 'Builders',
        getActions: () => {
          return this._getActions();
        },
        getData: this.getData.bind(this),
        setData: this.setData.bind(this),
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      }
    ]
  }

  private async renderPlaceholder() {
    this.vStackProjectBlock.clearInnerHTML();
    this.vStackProjectBlock.appendChild(
      <i-vstack
        gap={20}
        horizontalAlignment="center"
        verticalAlignment="center"
        height={100}
        maxHeight="100%"
        onClick={this.showConfig}
        class="pointer"
      >
        <i-label caption={this._data.name} font={{ size: '20px' }} />
        <i-icon
          name="plus"
          fill={Theme.colors.primary.contrastText}
          width={36}
          height={36}
        />
      </i-vstack>
    );
  }

  private showConfig = () => {
    const ideToolbar = this.closest('ide-toolbar');
    if (ideToolbar) {
      const btnSettings = ideToolbar.querySelector('#toolsStack')?.querySelector('#toolbar')?.querySelector('[tool-name="Settings"]') as Button;
      if (btnSettings) {
        btnSettings.click();
        return;
      }
    }
  }

  async init() {
    this.isReadyCallbackQueued = true;
    super.init();
    this.classList.add(projectBlockStyle);
    this.width = this.tag.width || 700;
    this.maxWidth = '100%';
    const tag = this.getAttribute('tag', true);
    if (tag) {
      this.setTag(tag);
    }
    const componentId = this.getAttribute('componentId', true, -1);
    const apiEndpoint = this.getAttribute('apiEndpoint', true);
    const options = this.getAttribute('options', true);
    this.setData({ componentId, apiEndpoint, options });
    this.showHeader = this.getAttribute('showHeader', true, true);
    this.showFooter = this.getAttribute('showFooter', true, true);
    this.isReadyCallbackQueued = false;
    this.executeReadyCallback();
  }

  render() {
    return (
      <i-panel display="flex" height="100%" width="100%">
        <i-vstack
          id="vStackProjectBlock"
          gap={20}
          height="100%"
          background={{ color: Theme.background.main }}
          padding={{ top: 10, bottom: 10, left: 10, right: 10 }}
          class={containerStyle}
        />
        <i-modal id="mdConfig" width={1000}>
          <i-panel id="pnlConfig" />
        </i-modal>
      </i-panel>
    )
  }
}