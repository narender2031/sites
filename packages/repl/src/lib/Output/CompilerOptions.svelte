<!-- svelte-ignore a11y-label-has-associated-control -->
<script>
	import { getContext } from 'svelte';
	import Checkbox from '../Checkbox.svelte'

	const { compile_options } = getContext('REPL');
</script>

<style>
	.options {
		padding-inline: 10px;
		font-family: var(--font-mono);
		font-size: 13px;
		color: #999;
		line-height: 1.8;
	}

	.option {
		display: block;
		padding-inline-start: 1.25em;
		white-space: nowrap;
		color: #333;
		user-select: none;
	}

	.key {
		display: inline-block;
		inline-size: 9em;
	}

	.string {
		color: hsl(41, 37%, 45%);
	}

	.boolean {
		color: hsl(45, 7%, 45%);
	}

	label {
		display: inline-block;
	}

	label[for] {
		color: var(--string);
	}

	label :global(input[type=checkbox]) {
		inset-block-start: -1px;
	}

	input[type=radio] {
		position: absolute;
		inset-block-start: auto;
		overflow: hidden;
		clip: rect(1px, 1px, 1px, 1px);
		inline-size: 1px;
		block-size: 1px;
		white-space: nowrap;
	}

	input[type=radio] + label {
		padding-inline-start: 1.6em;
		margin-inline-end: 0.6em;
		opacity: 0.7;
	}

	input[type=radio]:checked + label {
		opacity: 1;
	}

	/* input[type=radio]:focus + label {
		color: #00f;
		outline: 1px dotted #00f;
	} */

	input[type=radio] + label:before {
		content: '';
		background: #eee;
		display: block;
		box-sizing: border-box;
		float: left;
		inline-size: 15px;
		block-size: 15px;
		margin-inline-start: -21px;
		margin-block-start: 4px;
		vertical-align: top;
		cursor: pointer;
		text-align: center;
		transition: box-shadow 0.1s ease-out;
	}

	input[type=radio] + label:before {
		background-color: var(--second);
		border-radius: 100%;
		box-shadow: inset 0 0 0 0.5em rgba(255, 255, 255, .95);
		border: 1px solid var(--second);
	}

	input[type=radio]:checked + label:before {
		background-color: var(--prime);
		box-shadow: inset 0 0 0 .15em rgba(255, 255, 255, .95);
		border: 1px solid var(--second);
		transition: box-shadow 0.2s ease-out;
	}
</style>

<div class="options">
	result = svelte.compile(source, &#123;
	<div class="option">
		<span class="key">generate:</span>

		<input id="dom-input" type="radio" bind:group={$compile_options.generate} value="dom">
		<label for="dom-input"><span class="string">"dom"</span></label>

		<input id="ssr-input" type="radio" bind:group={$compile_options.generate} value="ssr">
		<label for="ssr-input"><span class="string">"ssr"</span>,</label>
	</div>

	<label class="option">
		<span class="key">dev:</span>
		<Checkbox bind:checked={$compile_options.dev}/> <span class="boolean">{$compile_options.dev}</span>,
	</label>

	<label class="option">
		<span class="key">css:</span>
		<Checkbox bind:checked={$compile_options.css}/> <span class="boolean">{$compile_options.css}</span>,
	</label>

	<label class="option">
		<span class="key">hydratable:</span>
		<Checkbox bind:checked={$compile_options.hydratable}/> <span class="boolean">{$compile_options.hydratable}</span>,
	</label>

	<label class="option">
		<span class="key">customElement:</span>
		<Checkbox bind:checked={$compile_options.customElement}/> <span class="boolean">{$compile_options.customElement}</span>,
	</label>

	<label class="option">
		<span class="key">immutable:</span>
		<Checkbox bind:checked={$compile_options.immutable}/> <span class="boolean">{$compile_options.immutable}</span>,
	</label>

	<label class="option">
		<span class="key">legacy:</span>
		<Checkbox bind:checked={$compile_options.legacy}/> <span class="boolean">{$compile_options.legacy}</span>
	</label>
	});
</div>