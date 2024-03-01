import { Component, mergeProps } from "solid-js";

const types = {
    "small": "h-2",
    "medium": "h-5",
    "large": "h-10"
} as const;

interface BlankSpaceProps {
    type: keyof typeof types;
}

export const Spacer: Component<BlankSpaceProps> = props => {
    const actualProps = mergeProps({ type: "medium" }, props);
    const className = () => types[actualProps.type];

    return <div class={className()} />;
};
