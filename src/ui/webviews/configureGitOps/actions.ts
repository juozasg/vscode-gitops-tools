import { ParamsDictionary } from 'utils/typeUtils';
import { createConfigurationAzure } from './lib/createAzure';
import { createConfigurationGeneric } from './lib/createGeneric';
import { exportConfigurationGeneric } from './lib/exportGeneric';


const isAzure = (data: ParamsDictionary) => data.clusterInfo.isAzure && data.source?.createFluxConfig;

function removeAzureData(data: any) {
	if(data.source) {
		delete data.source.createFluxConfig;
		delete data.source.azureScope;
	}
}

export async function actionCreate(data: ParamsDictionary) {
	if(isAzure(data)) {
		createConfigurationAzure(data);
	} else {
		removeAzureData(data);
		createConfigurationGeneric(data);
	}
}


export async function actionYAML(data: ParamsDictionary) {
	if(!isAzure(data)) {
		removeAzureData(data);
		exportConfigurationGeneric(data);
	}
}
