import ListSelect from 'components/Common/ListSelect';
import Checkbox from 'components/Common/Checkbox';

function Azure() {
	return (
		<div style="margin-top: 1rem">
			<div>
				<Checkbox store="gitRepository" field="createFluxConfig">
					Create with FluxConfig
				</Checkbox>
				<div><i>A new <code>FluxConfig</code> resource will be created to manage this <code>Kustomization</code></i></div>
			</div>
			<div style="margin-top: 1.5rem">
				<label>Scope</label>
				<div>
					<ListSelect
						store="gitRepository" field="azureScope"
						items={() => ['cluster', 'namespace']}/>
				</div>
			</div>
		</div>
	);
}

export default Azure;
