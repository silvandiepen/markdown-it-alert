"use strict";

import { Container } from "./container";
import MarkdownIt from "markdown-it";
import { IMDAlertsOptions } from "./types";

export default function (md: MarkdownIt, options: IMDAlertsOptions) {
	var containerOpenCount = 0;
	var links = options ? options.links : true;
	init();
	return;

	function setupContainer(name: string) {
		md.use(Container, name, {
			render: function (tokens, idx) {
				if (tokens[idx].nesting === 1) {
					containerOpenCount += 1;
					return '<div class="alert alert-' + name + '" role="alert">\n';
				} else {
					containerOpenCount -= 1;
					return "</div>\n";
				}
			},
		});
	}

	function isContainerOpen() {
		return containerOpenCount > 0;
	}

	function selfRender(tokens, idx, options, env, self) {
		return self.renderToken(tokens, idx, options);
	}

	function setupLinks() {
		var defaultRender = md.renderer.rules.link_open || selfRender;

		md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
			if (isContainerOpen()) {
				tokens[idx].attrPush(["class", "alert-link"]);
			}

			return defaultRender(tokens, idx, options, env, self);
		};
	}

	function init() {
		setupContainer("success");
		setupContainer("info");
		setupContainer("warning");
		setupContainer("error");
		setupContainer("danger");
		setupContainer("tip");

		if (links) {
			setupLinks();
		}
	}
}
