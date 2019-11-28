class RTE {
	constructor(domelement) {
		this.editor = document.getElementById(domelement);

		this.commands = {
			bold: {
				icon: 'B',
				class: 'bold',
				id: 'cmd-bold'
			},
			underline: {
				icon: 'U',
				class: 'underline',
				id: 'cmd-underline'
			}
		};

		this.create_toolbar();
		this.create_editor();
	}
	
	/**
	 * Create the editor.
	 */
	create_editor() {
		this.append_element(
			this.editor,
			this.create_element('div', {
				contentEditable: true,
				id: 'content_editor'
			})
		);
	}

	/**
	 * Create the toolbar.
	 */
	create_toolbar() {
		this.append_element(
			this.editor,
			this.create_element('nav', {
				id: 'rte_toolbar'
			})
		);
		for(const cmd of Object.keys(this.commands)) {
			var $trigger = this.create_element('li');
			$trigger.innerHTML = this.commands[cmd].icon;
			$trigger.class = this.commands[cmd].class;
			$trigger.id = this.commands[cmd].id;
			this.append_element(document.getElementById('rte_toolbar'), $trigger);
		}
	}
	/**
	 * Create an HTML element in the DOM.
	 *
	 * @param {string} Element The element to create.
	 * @param {Object} Properties The element properties. (Optional)
	 * @return {Object} The HTML element.
	 */
	create_element(Element, Properties = null) {
		var $html_element = document.createElement(Element);
		if(Properties != null) {
			for(const Key of Object.keys(Properties)) {
				$html_element.setAttribute(Key, Properties[Key]);
			}
		}
		return $html_element;
	}

	/**
	 * Append child element to parent.
	 *
	 * @param {Object} Parent The parent.
	 * @param {Object} Child The child.
	 * @return {Object} The element.
	 */
	append_element(Parent, Child) {
		return Parent.appendChild(Child);
	}
}