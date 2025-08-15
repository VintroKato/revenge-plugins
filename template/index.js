import { before } from "@vendetta/patcher";
import { findByDisplayName } from "@vendetta/metro";
import { LayoutAnimation, UIManager, Platform } from "react-native";

let patch;

export default {
    onLoad: () => {
        if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        const MessageList = findByDisplayName("MessageList");
        if (!MessageList) return;

        patch = before("componentDidUpdate", MessageList.prototype, function (prevProps) {
            if (prevProps?.messages?.length !== this.props?.messages?.length) {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            }
        });
    },

    onUnload: () => {
        if (patch) patch();
    },
};
