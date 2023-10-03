import * as RadixTabs from '@radix-ui/react-tabs';
import React, { PropsWithChildren } from 'react';

type TriggerProps = React.FC<PropsWithChildren<{value: string, className?: string, asChild?: boolean}>>
type ContentProps = React.FC<PropsWithChildren<{value: string}>>

interface TabsComposition {
    List: React.FC<PropsWithChildren<{className?: string}>>
    Trigger: TriggerProps
    Content: ContentProps
}

const Tabs:React.FC<PropsWithChildren<{className?: string, defaultValue?: string, onValueChange?: (value: string) => void, value?: string}>> & TabsComposition = ({children, className, defaultValue, onValueChange, value}) => {
    return(
        <RadixTabs.Root className={className} defaultValue={defaultValue} onValueChange={onValueChange} value={value}>
            {children}
        </RadixTabs.Root>
    )
};

export default Tabs


const List:React.FC<PropsWithChildren<{className?: string}>> = ({ children, className}) => {
    return(
        <RadixTabs.List className={className}>
            {children}
        </RadixTabs.List>
    )
}

Tabs.List = List

const Trigger:TriggerProps = ({ children, value, className, asChild }) => {
    return(
        <RadixTabs.Trigger value={value} className={className} asChild={asChild}>
            { children }
        </RadixTabs.Trigger>
    )
}

Tabs.Trigger = Trigger

const Content:ContentProps = ({ children, value }) => {
    return(
        <RadixTabs.Content value={value}>
            { children }
        </RadixTabs.Content>
    )
}

Tabs.Content = Content