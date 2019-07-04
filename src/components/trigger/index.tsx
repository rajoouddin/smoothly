import { Component, Prop, Event, EventEmitter, Listen, h } from "@stencil/core"
import { Color, Expand, Fill, Trigger } from "smoothly-model"

@Component({
	tag: "smoothly-trigger",
	styleUrl: "style.css",
	scoped: true,
})
export class SmoothlyTrigger {
	@Prop({ reflectToAttr: true }) color: Color | undefined
	@Prop({ reflectToAttr: true }) expand: Expand
	@Prop({ reflectToAttr: true }) fill: Fill
	@Prop() name: string
	@Prop() value?: any
	@Event() trigger: EventEmitter<Trigger>

	@Listen("click")
	onClick(e: UIEvent) {
		this.trigger.emit({ name: this.name, value: this.value })
		e.stopPropagation()
		e.preventDefault()
	}
	render() {
		return <button name={ this.name }><slot></slot></button>
	}
}