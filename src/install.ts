import { commands, Uri, window } from 'vscode';
import { CommandId } from './commands';
import { extensionState } from './extensionState';
import { shell } from './shell';
import { parseJson } from './utils/jsonUtils';

interface FluxVersion {
	flux: string;
}

/**
 * Return flux version string.
 * @see https://fluxcd.io/docs/cmd/flux_version/
 */
export async function getFluxVersion(): Promise<string | undefined> {
	const shellResult = await shell.exec('flux version --client -o json');
	if (!shellResult) {
		return;
	}

	if (shellResult.code === 0) {
		const fluxVersionObject: FluxVersion = parseJson(shellResult.stderr);
		const fluxVersion = fluxVersionObject.flux;
		extensionState.set('fluxVersion', fluxVersion);
		return fluxVersion;
	}
}

/**
 * Show notification with button to install flux
 * (only when flux was not found).
 */
export async function promptToInstallFlux(): Promise<void> {
	const fluxVersion = await getFluxVersion();

	if (!fluxVersion) {
		const installButton = 'Install Flux';
		const confirm = await window.showErrorMessage('Please install flux CLI to use GitOps Tools.', installButton);
		if (confirm === installButton) {
			commands.executeCommand('vscode.open', Uri.parse('https://fluxcd.io/docs/installation/'));
		}
	}
}

/**
 * Show warning notification only in case the
 * flux prerequisite check has failed.
 * @see https://fluxcd.io/docs/cmd/flux_check/
 */
export async function checkPrerequisites() {
	const prerequisiteShellResult = await shell.execWithOutput('flux check --pre', { revealOutputView: false });

	if (prerequisiteShellResult?.code !== 0) {
		const showOutput = 'Show Output';
		const showOutputConfirm = await window.showWarningMessage('Flux prerequisites check failed.', showOutput);
		if (showOutput === showOutputConfirm) {
			commands.executeCommand(CommandId.ShowOutputChannel);
		}
	}
}

/**
 * Return git version or undefined depending
 * on whether or not git was found on the user machine.
 */
export async function getGitVersion(): Promise<string | undefined> {
	const gitVersionShellResult = await shell.execWithOutput('git --version', { revealOutputView: false });

	if (gitVersionShellResult?.code === 0) {
		return gitVersionShellResult.stdout.slice('git version '.length);
	}
}

/**
 * Check if git is found and prompt to install it (if needed).
 */
export async function checkGitVersion(): Promise<string | undefined> {
	const gitVersion: string | undefined = await getGitVersion();

	if (gitVersion === undefined) {
		const installButton = 'Install';
		const confirm = await window.showErrorMessage('Please install Git to be able to pull a git repository source.', installButton);
		if (confirm === installButton) {
			commands.executeCommand('vscode.open', Uri.parse('https://git-scm.com/downloads'));
		}
	} else {
		return gitVersion;
	}
}
