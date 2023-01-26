
const baseUrl = 'https://fluxcd.io/flux/components/';
export function ToolkitHelpLink(props: { href: string; })  {
	return HelpLink({href: baseUrl + props.href});
}


export function HelpLink(props: { href: string; })  {
	return (
		<a href={props.href} style="margin-left:0.5rem;">
			<span class="codicon codicon-question">
			</span>
		</a>

	);
}
