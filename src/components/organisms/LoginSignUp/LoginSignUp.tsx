import Tabs from "~/components/molecules/Tabs"

export default function LoginSignUp(){
    return(
        <div>
            <Tabs className="w-[400px]">
                <Tabs.List>
                    <Tabs.Trigger value="tab1">
                        Login
                    </Tabs.Trigger>
                    <Tabs.Trigger value="tab2">
                        SignUp
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="tab1">
                    <p>login here</p>
                </Tabs.Content>

                <Tabs.Content value="tab2">
                    <p>SignUp here</p>
                </Tabs.Content>
            </Tabs>
        </div>
    )
}