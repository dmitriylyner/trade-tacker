import * as RadixTabs from '@radix-ui/react-tabs';
import React, { PropsWithChildren } from 'react';

type TriggerProps = React.FC<PropsWithChildren<{value: string}>>
type ContentProps = React.FC<PropsWithChildren<{value: string}>>

interface TabsComposition {
    List: React.FC<PropsWithChildren>
    Trigger: TriggerProps
    Content: ContentProps
}

const Tabs:React.FC<PropsWithChildren<{className?: string}>> & TabsComposition = ({children, className}) => {
    return(
        <RadixTabs.Root className={className}>
            {children}
        </RadixTabs.Root>
    )
};

export default Tabs


const List:React.FC<PropsWithChildren> = ({ children }) => {
    return(
        <RadixTabs.List>
            {children}
        </RadixTabs.List>
    )
}

Tabs.List = List

const Trigger:TriggerProps = ({ children, value }) => {
    return(
        <RadixTabs.Trigger value={value}>
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