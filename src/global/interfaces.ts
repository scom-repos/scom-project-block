export interface IProjectBlockConfig {
  guid?: string;
  name?: string;
  componentId?: number;
  apiEndpoint?: string;
  options?: { [key: string]: any };
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