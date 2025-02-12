import { window, workspace } from 'vscode';
import { telemetry } from 'extension';
import { fluxTools } from 'cli/flux/fluxTools';
import { TelemetryError, TelemetryEvent } from 'types/telemetryEventNames';
import { ParamsDictionary } from 'utils/typeUtils';

export async function exportConfigurationGeneric(data: ParamsDictionary) {
	telemetry.send(TelemetryEvent.ExportSource, {
		kind: data.source?.kind,
	});

	let yaml = '';

	if(data.source) {
		yaml += await fluxTools.exportSource(data.source);
	}

	if(data.kustomization) {
		yaml += await fluxTools.exportKustomization(data.kustomization);
	}

	showYaml(yaml);
}


async function showYaml(text: string) {
	return await workspace.openTextDocument({content: text} ).then(document => {
		if (document) {
			// document['languageId'] =
			window.showTextDocument(document);
		}
	},
	error =>  {
		window.showErrorMessage(`Error loading document: ${error}`);
		telemetry.sendError(TelemetryError.FAILED_TO_OPEN_RESOURCE);
	});
}


