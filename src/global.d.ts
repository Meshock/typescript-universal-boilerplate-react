interface IAppStateStored {
	form: Object;
	routing: Object;
}

type IAppState = IAppStateStored | {};

interface IStyleChunk {
	application: string;
}

interface IJavascriptChunk {
	application: string;
	common: string;
}

interface IChunks {
	styles: IStyleChunk;
	javascript: IJavascriptChunk;
}

interface IParams {
	chunks: () => IChunks;
}

interface IRenderProps {
	components: any[];
	params: any;
}

interface NodeRequire { // tslint:disable-line 
	ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, name?: string ) => void;
}

interface INodeModule {
	default: any;
}
