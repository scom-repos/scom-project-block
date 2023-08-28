var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom/scom-project-block/global/interfaces.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-project-block/global/utils.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fetchProjectBlockWidgets = void 0;
    const API_URL = "/api/embed/v0";
    async function fetchProjectBlockWidgets(blockGuid) {
        let result;
        try {
            let response = await fetch(`${API_URL}/projectBlockWidgets?projectBlockGuid=${blockGuid}`);
            result = await response.json();
        }
        catch (err) {
            console.error("[fetchProjectBlockWidgets] error: ", err);
        }
        return result;
    }
    exports.fetchProjectBlockWidgets = fetchProjectBlockWidgets;
});
define("@scom/scom-project-block/global/index.ts", ["require", "exports", "@scom/scom-project-block/global/interfaces.ts", "@scom/scom-project-block/global/utils.ts"], function (require, exports, interfaces_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-project-block/global/index.ts'/> 
    __exportStar(interfaces_1, exports);
    __exportStar(utils_1, exports);
});
define("@scom/scom-project-block/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.projectBlockStyle = exports.containerStyle = void 0;
    exports.containerStyle = components_1.Styles.style({
        width: 'var(--layout-container-width)',
        maxWidth: 'var(--layout-container-max_width)',
        textAlign: 'var(--layout-container-text_align)',
        margin: '0 auto',
        padding: 10
    });
    exports.projectBlockStyle = components_1.Styles.style({
        display: 'block',
        $nest: {
            '&.projectBlock-dark--theme': {
                background: '#100c2a',
                $nest: {
                    'i-label': {
                        color: '#fff !important'
                    },
                    'i-label.text-black': {
                        color: '#000 !important'
                    },
                    'i-pagination': {
                        $nest: {
                            '.pagination a': {
                                color: '#fff !important'
                            }
                        }
                    },
                    'thead div': {
                        color: '#fff'
                    },
                    'i-table': {
                        $nest: {
                            'tr:hover td': {
                                background: '#251e60a1'
                            },
                            'thead': {
                                background: '#ff9800',
                                color: '#fff !important'
                            }
                        }
                    },
                    'i-progress .i-progress_overlay': {
                        background: '#ff9800 !important'
                    },
                    'i-progress .i-progress_wrapbar .i-progress_bar.has-bg': {
                        background: '#d0c1c15e'
                    },
                    '::-webkit-scrollbar-track': {
                        background: '#d9bba859'
                    },
                    '::-webkit-scrollbar-thumb': {
                        background: '#ff9800',
                    }
                }
            },
            'i-progress .i-progress_wrapbar': {
                borderRadius: 4
            },
            'i-input input': {
                border: 'none',
                background: 'transparent'
            },
            'i-table': {
                fontSize: '12px',
                $nest: {
                    '.i-table-container': {
                        overflowY: 'auto',
                        height: 'inherit'
                    },
                    'thead': {
                        background: 'var(--background-modal)',
                        position: 'sticky',
                        top: 0,
                        zIndex: 1
                    },
                    'tr:hover td': {
                        background: 'var(--colors-secondary-main)',
                        color: 'var(--colors-secondary-contrast_text)',
                        $nest: {
                            'i-label': {
                                color: 'var(--colors-secondary-contrast_text)'
                            }
                        }
                    }
                }
            },
            'i-pagination': {
                lineHeight: '24px',
                $nest: {
                    '.pagination a': {
                        minWidth: 30,
                        height: 25,
                        fontSize: 12,
                        padding: '0 2px'
                    },
                    '.pagination a.active': {
                        background: '#ff9800',
                        borderColor: '#ff9800'
                    }
                }
            },
            '::-webkit-scrollbar': {
                width: '5px',
                height: '5px'
            },
            '::-webkit-scrollbar-track': {
                borderRadius: '10px',
                border: '1px solid transparent',
                background: 'rgba(0, 0, 0, 0.12)'
            },
            '::-webkit-scrollbar-thumb': {
                background: 'rgba(0, 0, 0, 0.35)',
                borderRadius: '10px'
            },
            '#pnlModule': {
                height: '100%'
            }
        }
    });
});
define("@scom/scom-project-block", ["require", "exports", "@ijstech/components", "@scom/scom-project-block/global/index.ts", "@scom/scom-project-block/index.css.ts", "@scom/scom-configurator-settings"], function (require, exports, components_2, index_1, index_css_1, scom_configurator_settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_2.Styles.Theme.ThemeVars;
    let ScomProjectBlock = class ScomProjectBlock extends components_2.Module {
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        constructor(parent, options) {
            super(parent, options);
            this._data = { componentId: 0 };
            this.tag = {};
            this.showConfig = () => {
                var _a, _b;
                const ideToolbar = this.closest('ide-toolbar');
                if (ideToolbar) {
                    const btnSettings = (_b = (_a = ideToolbar.querySelector('#toolsStack')) === null || _a === void 0 ? void 0 : _a.querySelector('#toolbar')) === null || _b === void 0 ? void 0 : _b.querySelector('[tool-name="Settings"]');
                    if (btnSettings) {
                        btnSettings.click();
                        return;
                    }
                }
            };
        }
        get showFooter() {
            var _a;
            return (_a = this._data.showFooter) !== null && _a !== void 0 ? _a : true;
        }
        set showFooter(value) {
            this._data.showFooter = value;
        }
        get showHeader() {
            var _a;
            return (_a = this._data.showHeader) !== null && _a !== void 0 ? _a : true;
        }
        set showHeader(value) {
            this._data.showHeader = value;
        }
        getData() {
            return this._data;
        }
        async setData(data) {
            this._data = data;
            await this.renderPlaceholder();
        }
        getTag() {
            return this.tag;
        }
        async setTag(value, newTag) {
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
        _getActions() {
            const actions = [
                {
                    name: 'Settings',
                    icon: 'cog',
                    command: (builder, userInputData) => {
                        let _oldData = { componentId: -1 };
                        return {
                            execute: async () => {
                                _oldData = Object.assign({}, this._data);
                                if ((userInputData === null || userInputData === void 0 ? void 0 : userInputData.componentId) !== undefined)
                                    this._data.componentId = userInputData.componentId;
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(userInputData);
                                this.setData(this._data);
                            },
                            undo: () => {
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(_oldData);
                                this.setData(_oldData);
                            },
                            redo: () => { }
                        };
                    },
                    isReplacement: true,
                    customUI: {
                        render: async (data, onReplace) => {
                            const vstack = new components_2.VStack();
                            const config = new scom_configurator_settings_1.default();
                            const result = await (0, index_1.fetchProjectBlockWidgets)(this._data.guid);
                            config.data = result.data.map((item, v) => {
                                return {
                                    id: v,
                                    title: item.title,
                                    description: item.description,
                                    path: item.widgetName,
                                    dataUri: item.dataUri
                                };
                            });
                            if (this._data.options) {
                                config.showDetail({ properties: Object.assign({}, this._data), id: this._data.componentId, tag: Object.assign({}, this.tag) });
                            }
                            else if (this.tag) {
                                config.parentTags = Object.assign({}, this.tag);
                            }
                            config.onSaveConfigData = (configData) => {
                                if (configData && onReplace) {
                                    const { path } = configData;
                                    onReplace(Object.assign(Object.assign({}, configData), { module: {
                                            name: 'ProjectBlock Block',
                                            path,
                                            category: 'charts'
                                        } }));
                                }
                            };
                            vstack.append(config);
                            config.showSaveBtn = false;
                            return vstack;
                        }
                    }
                }
            ];
            return actions;
        }
        saveConfigData(data, tag) {
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
            ];
        }
        async renderPlaceholder() {
            this.vStackProjectBlock.clearInnerHTML();
            this.vStackProjectBlock.appendChild(this.$render("i-vstack", { gap: 20, horizontalAlignment: "center", verticalAlignment: "center", height: 100, maxHeight: "100%", onClick: this.showConfig, class: "pointer" },
                this.$render("i-label", { caption: this._data.name, font: { size: '20px' } }),
                this.$render("i-icon", { name: "plus", fill: Theme.colors.primary.contrastText, width: 36, height: 36 })));
        }
        async init() {
            this.isReadyCallbackQueued = true;
            super.init();
            this.classList.add(index_css_1.projectBlockStyle);
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
            return (this.$render("i-panel", { display: "flex", height: "100%", width: "100%" },
                this.$render("i-vstack", { id: "vStackProjectBlock", gap: 20, height: "100%", background: { color: Theme.background.main }, padding: { top: 10, bottom: 10, left: 10, right: 10 }, class: index_css_1.containerStyle }),
                this.$render("i-modal", { id: "mdConfig", width: 1000 },
                    this.$render("i-panel", { id: "pnlConfig" }))));
        }
    };
    ScomProjectBlock = __decorate([
        components_2.customModule,
        (0, components_2.customElements)('i-scom-project-block')
    ], ScomProjectBlock);
    exports.default = ScomProjectBlock;
});
