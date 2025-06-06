import { TSESTree, TSESLint } from "@typescript-eslint/utils";

export default {
	name: "hardcoded-config-path",
	meta: {
		docs: {
			description: "test",
			url: "https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines#Commands",
		},
		type: "problem" as const,
		messages: {
			configPath:
				"Obsidian's configuration folder is not necessarily `.obsidian`, it can be configured by the user.",
		},
		schema: [],
	},
	defaultOptions: [],
	create: (context: TSESLint.RuleContext<"configPath", []>) => {
		return {
			Literal(node: TSESTree.Literal) {
				if (
					typeof node.value === "string" &&
					node.value.includes(".obsidian")
				) {
					context.report({
						node,
						messageId: "configPath",
					});
				}
			},
		};
	},
};
