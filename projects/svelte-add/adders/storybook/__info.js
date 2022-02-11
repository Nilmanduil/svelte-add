export const name = "(WIP) Storybook";

export const emoji = "🎨";

export const usageMarkdown = [""];

/** @type {import("../..").Gatekeep} */
export const gatekeep = async () => {
	return { able: true };
};

/** @typedef {{}} Options */

/** @type {import("../..").AdderOptions<Options>} */
export const options = {};

/** @type {import("../..").Heuristic[]} */
export const heuristics = [
	{
		description: "`Storybook` is installed",
		async detector({ folderInfo }) {
			return "@storybook/svelte" in folderInfo.allDependencies;
		},
	},
];
